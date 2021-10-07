import React from 'react';
import blogs from '../blogs.json';
import { slugify } from '../utils/slugify';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';
import { Tags } from '../components';

const Blog = ({ match }) => {
  let title = match.params.name;
  let blog = blogs.find((blog) => slugify(blog.title) === title);
  return (
    <>
      <Link to='/cv'>
        <div className='portrait'></div>
      </Link>
      <div class='single-blog-container'>
        {/*<div class='arrows'>
          <a class='vertical-text' style={{ left: 10 }} href=''>
            see previous ↓
          </a>
          <a class='vertical-text' style={{ right: 6 }} href=''>
            see next ↑
          </a>
        </div> */}
        <img
          src={blog.image}
          alt={`${blog.title} by Aneta Camo`}
          className={`single-blog-image ${'wide' in blog ? 'wide' : null}`}
        />
        <div class='blog-text'>
          <Tags blog={blog} />
          <p>
            <Moment date={blog.date} format='dddd MMMM D, YYYY'></Moment>
          </p>
          <h1>{blog.title}</h1>
          <p>{blog.description}</p>
        </div>
      </div>
    </>
  );
};
export default Blog;
