import React from "react";
import blogs from "../blogs.json";
import { slugify } from "../utils/slugify";
import Moment from "react-moment";
import { Link } from "react-router-dom";
import { MetaTags, Tags } from "../components";
import ShopItemsLeft from "./shopItemsLeft";

const Blog = ({ match, onItemAdd }) => {
  let title = match.params.name;
  let blog = blogs.find((blog) => slugify(blog.title) === title);
  return (
    <>
      <MetaTags
        name={blog.title}
        description={blog.description}
        image={blog.image}
      />
      <Link to="/cv">
        <div className="portrait"></div>
      </Link>

      <div className="single-blog-container">
        {/*<div className='arrows'>
          <a className='vertical-text' style={{ left: 10 }} href=''>
            see previous ↓
          </a>
          <a className='vertical-text' style={{ right: 6 }} href=''>
            see next ↑
          </a>
        </div> */}
        <img
          src={blog.image}
          alt={`${blog.title} by Aneta Camo`}
          className={`single-blog-image ${"wide" in blog ? "wide" : null}`}
        />

        {blog.gallery ? (
          <div className="flex-center">
            {Array(parseInt(blog.gallery))
              .fill(0)
              .map((value, index) => (
                <button>{index}</button>
              ))}
          </div>
        ) : null}

        <div className="blog-text">
          <Tags blog={blog} />
          <p>
            <Moment date={blog.date} format="dddd MMMM D, YYYY"></Moment>
          </p>
          <h1>{blog.title}</h1>
          <p>{blog.description}</p>
          {blog.tags.includes("print" || "flower") && (
            <ShopItemsLeft blog={blog} onItemAdd={onItemAdd} />
          )}
        </div>
      </div>
    </>
  );
};
export default Blog;
