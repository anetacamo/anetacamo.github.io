import React from 'react';
import { Link } from 'react-router-dom';
import { slugify } from '../utils/slugify';
import Moment from 'react-moment';
import { Tags } from './';

const Blogs = ({ blogs, skip, take }) => {
  return (
    <div className='blogs'>
      {blogs?.slice(skip, take).map((blog) => (
        <div className='blogs'>
          <Link to={slugify(blog.title)}>
            <img src={blog.image} />
          </Link>
          <div className='text-container'>
            <p style={{ paddingBottom: 12 }}>{blog.title}</p>
            {'gallery' in blog && (
              <div className='arrow left'>{blog.gallery}</div>
            )}
            <p>{blog.description}</p>
            <Tags blog={blog} />
            <p>
              <span className='bolded'>published</span>{' '}
              <Moment date={blog.date} format='dddd MMMM D, YYYY'></Moment>
            </p>
            <div className='blog-text'>{blog.content}</div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Blogs;
