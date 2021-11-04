import React, { useState } from 'react';
import blogs from '../blogs.json';
import { Blogs, Carousel, Footer, MetaTags, Pagination } from '../components';
import { Link } from 'react-router-dom';
import ReactGA from 'react-ga';

function BlogList({ onItemAdd, itemsInCart, sizes }) {
  const [pageSize, setPageSize] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const pages = Math.ceil(blogs?.length / pageSize);
  ReactGA.pageview('/');

  return (
    <>
      <MetaTags
        name='Home'
        description='Hi! My name is Aneta and I have been working as a freelance front end developer and illustrator'
        image='/images/intro.png'
      />
      <Link to='/cv'>
        <div className='portrait movedup'></div>
      </Link>
      <Link to='/tagged/comics/'>
        <div className='postcard small-sized'></div>
      </Link>
      <div className='carousel-top' />
      <Carousel />
      <div className='blog-container'>
        <Pagination
          page={currentPage}
          pages={pages}
          onChangePage={setCurrentPage}
          onPageSizeChange={setPageSize}
          thisPages={pageSize}
        />
        <Blogs
          onItemAdd={onItemAdd}
          skip={pageSize * (currentPage - 1)}
          take={pageSize * currentPage}
          blogs={blogs}
          sizes={sizes}
        />
        <Pagination
          page={currentPage}
          pages={pages}
          onChangePage={setCurrentPage}
        />
      </div>
      <Footer itemsInCart={itemsInCart} />
    </>
  );
}
export default BlogList;
