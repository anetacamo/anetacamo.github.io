import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { slugify } from "../utils/slugify";
import Moment from "react-moment";
import { Like, Tags } from "./";
import db from "../firebase";
import ShopItemsLeft from "../layouts/shopItemsLeft";
import FlowerItemsLeft from "../layouts/flowerItemsLeft";
import Gallery from "../components/Gallery/Gallery";
import {
  onSnapshot,
  collection,
  setDoc,
  doc,
  addDoc,
} from "firebase/firestore";

const Blogs = ({ blogs, skip, take, onItemAdd }) => {
  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "blogs"), (snapshot) => {
      setLikedItems(
        snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
    });
    return unsubscribe;
  }, []);

  const addBlog = async (title) => {
    // get index of item in liked items from online db
    const itemIndex = likedItems.findIndex((item) => item.name === title);
    // index of items liked by user
    const userLikedIndex = userLikedItems.findIndex(
      (item) => item.title === title
    );

    // if item is not liked yet - like
    if (userLikedIndex === -1) {
      const userLikedItem = { title: title };
      const updatedArray = [...userLikedItems, userLikedItem];
      localStorage.setItem("itemsLikedByUser", JSON.stringify(updatedArray));
      setUserLikedItems(updatedArray); //simple value
      // plus add item into the online database: either create new entry or update existing
      if (itemIndex !== -1) {
        //update item
        const docRef = doc(db, "blogs", likedItems[itemIndex].id);
        const payload = { name: title, likes: likedItems[itemIndex].likes + 1 };
        await setDoc(docRef, payload);
      } else {
        //add item
        const collectionRef = collection(db, "blogs");
        const payload = { name: title, likes: 1 };
        await addDoc(collectionRef, payload);
      }
    } else {
      // UNLIKE
      const updatedArray = userLikedItems.filter(
        (item) => item.title !== title
      );
      localStorage.setItem("itemsLikedByUser", JSON.stringify(updatedArray));
      setUserLikedItems(updatedArray);
      // remove a like from the online db
      const docRef = doc(db, "blogs", likedItems[itemIndex].id);
      const payload = { name: title, likes: likedItems[itemIndex].likes - 1 };
      await setDoc(docRef, payload);
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

  const likedByUser =
    JSON.parse(localStorage.getItem("itemsLikedByUser")) || [];
  const [userLikedItems, setUserLikedItems] = useState(likedByUser);
  const [likedItems, setLikedItems] = useState([]);

  return (
    <div className="blogs">
      {blogs.slice(skip, take).map((blog) => (
        <div className="blogs" style={{ position: "relative" }}>
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
      ))}
    </div>
  );
};
export default Blogs;
