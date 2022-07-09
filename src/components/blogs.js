import React, { useState, useEffect } from "react";
import Moment from "react-moment";
import { Link } from "react-router-dom";
import { slugify } from "../utils/slugify";
import { Like, Tags } from "./";
import { db } from "../firebase";
import { collection, doc, getDocs, setDoc, addDoc } from "firebase/firestore";
import ShopItemsLeft from "../layouts/shopItemsLeft";
import FlowerItemsLeft from "../layouts/flowerItemsLeft";
import Gallery from "../components/Gallery/Gallery";

const Blogs = ({ blogs, skip, take, onItemAdd }) => {
  const likedBlogsRef = collection(db, "blogs");
  const likedByUser =
    JSON.parse(localStorage.getItem("itemsLikedByUser")) || [];
  const [userLikedItems, setUserLikedItems] = useState(likedByUser);
  const [likedItems, setLikedItems] = useState([]);

  const getLikedBlogs = async () => {
    const data = await getDocs(likedBlogsRef);
    setLikedItems(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  useEffect(() => {
    getLikedBlogs();
  }, []);

  const addBlog = async (title) => {
    // index of item from firebase collection
    const itemIndex = likedItems.findIndex((item) => item.name === title);
    // index of item from localstorage
    const userLikedIndex = userLikedItems.findIndex(
      (item) => item.title === title
    );

    // item is not liked by user => like and update liked array
    if (userLikedIndex === -1) {
      const userLikedItem = { title: title };
      const updatedArray = [...userLikedItems, userLikedItem];
      localStorage.setItem("itemsLikedByUser", JSON.stringify(updatedArray));
      setUserLikedItems(updatedArray);

      // plus add item into the online database => either create new entry or update existing
      if (itemIndex !== -1) {
        //update item

        // find the item
        const docRef = doc(db, "blogs", likedItems[itemIndex].id);
        const payload = { name: title, likes: likedItems[itemIndex].likes + 1 };
        await setDoc(docRef, payload);
      } else {
        //add item
        const payload = { name: title, likes: 1 };
        await addDoc(likedBlogsRef, payload);
        getLikedBlogs();
      }
    } else {
      // UNLIKE
      const updatedArray = userLikedItems.filter(
        (item) => item.title !== title
      );
      localStorage.setItem("itemsLikedByUser", JSON.stringify(updatedArray));
      setUserLikedItems(updatedArray);
      // check if is present on online db if not=> do nothing
      if (itemIndex !== -1) {
        // remove a like from the online db
        const docRef = doc(db, "blogs", likedItems[itemIndex].id);
        const payload = { name: title, likes: likedItems[itemIndex].likes - 1 };
        await setDoc(docRef, payload);
        getLikedBlogs();
      }
    }
  };

  // get the  number of likes from the online database
  const getLikes = (title) => {
    if (likedItems.some((item) => item.name === title)) {
      const item = likedItems.find((item) => item.name === title);
      return item.likes;
    } else {
      return 0;
    }
  };

  // get likes from the local storage.
  const getLike = (title) => {
    if (userLikedItems === undefined) {
      return false;
    } else {
      return userLikedItems.some((item) => item.title === title);
    }
  };

  return (
    <div className="blogs">
      {blogs.slice(skip, take).map(
        (blog) =>
          blog.tags.includes("flower") || (
            <div
              className="blogs"
              style={{ position: "relative" }}
              key={blog.title}
            >
              {blog.gallery ? (
                <Gallery blog={blog} />
              ) : (
                <Link to={slugify(blog.title)}>
                  <img src={blog.image} alt={blog.title} />
                </Link>
              )}

              {blog.tags.includes("print") && (
                <div className="circle prints-icon">
                  <h2>get this</h2>
                </div>
              )}
              <div className="text-container">
                <p className="title">{blog.title}</p>

                <Like
                  onIconClick={() => addBlog(blog.title)}
                  likes={getLikes(blog.title)}
                  liked={getLike(blog.title)}
                />
                <p>{blog.description}</p>
                <Tags blog={blog} />
                <p>
                  <span className="bolded">published</span>{" "}
                  <Moment date={blog.date} format="dddd MMMM D, YYYY"></Moment>
                </p>
                <div className="blog-text">{blog.content}</div>

                {blog.tags.includes("print") && (
                  <ShopItemsLeft blog={blog} onItemAdd={onItemAdd} />
                )}
                {blog.tags.includes("flower") && (
                  <FlowerItemsLeft blog={blog} onItemAdd={onItemAdd} />
                )}
              </div>
            </div>
          )
      )}
    </div>
  );
};
export default Blogs;
