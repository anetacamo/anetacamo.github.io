import React from 'react';
import blogs from '../blogs.json';
import { slugify } from '../utils/slugify';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';
import { MetaTags, Tags } from '../components';
import ShopItemsLeft from './shopItemsLeft';
import FlowerItemsLeft from './flowerItemsLeft';
import PrintsItemsLeft from './PrintsItemsLeft';
import SingleBlogGallery from '../components/SingleBlogGallery/SingleBlogGallery';

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
      {/* <Link to='/cv'>
        <div className='portrait'></div>
      </Link> */}

      <div className='single-blog-container'>
        {blog.gallery ? (
          <SingleBlogGallery blog={blog} />
        ) : (
          <img
            alt={`${blog.title} by Aneta Camo`}
            src={blog.image}
            className={`single-blog-image ${'wide' in blog ? 'wide' : null}`}
          />
        )}

        <div className='blog-text'>
          <Tags blog={blog} />
          <p>
            <Moment date={blog.date} format='dddd MMMM D, YYYY'></Moment>
          </p>
          <h1>{blog.title}</h1>
          <p>{blog.description}</p>
          {blog.tags?.includes('print') && (
            <PrintsItemsLeft blog={blog} onItemAdd={onItemAdd} />
          )}
          {blog.tags?.includes('flower') && (
            <FlowerItemsLeft blog={blog} onItemAdd={onItemAdd} />
          )}
          {blog.tags?.includes('shop') && !blog.sold && (
            <ShopItemsLeft blog={blog} onItemAdd={onItemAdd} />
          )}
        </div>
      </div>
    </>
  );
};
export default Blog;
