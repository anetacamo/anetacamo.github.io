import React, { useState } from 'react';
import blogs from '../blogs.json';
import { Pagination, Blogs, Footer, Carousel } from '../components';
import { Link } from 'react-router-dom';

function BlogList() {
  const pageSize = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const pages = Math.ceil(blogs?.length / pageSize);
  return (
    <>
      <Link to='/cv'>
        <div className='portrait movedup'></div>
      </Link>
      <Link to='/tagged/comics/'>
        <div className='postcard small-sized'></div>
      </Link>
      <Carousel />
      <div className='blog-container'>
        <Pagination
          page={currentPage}
          pages={pages}
          onChangePage={setCurrentPage}
        />
        <Blogs
          skip={pageSize * (currentPage - 1)}
          take={pageSize * currentPage}
          blogs={blogs}
        />
        <Pagination
          page={currentPage}
          pages={pages}
          onChangePage={setCurrentPage}
        />
      </div>
      <Footer />
    </>
  );
}
export default BlogList;
