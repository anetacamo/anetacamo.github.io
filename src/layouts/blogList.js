import React, { useState } from 'react';
import blogs from '../blogs.json';
import { Blogs, Footer, MetaTags, Pagination } from '../components';
import { Link } from 'react-router-dom';

function BlogList({ onItemAdd, itemsInCart }) {
  const [pageSize, setPageSize] = useState(15);
  const [currentPage, setCurrentPage] = useState(1);

  const posts = blogs.filter((blog) => !blog.tags?.includes('ceramics'));
  const pages = Math.ceil(posts?.length / pageSize);

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
      <Link to='/tagged/illustration/'>
        <div className='postcard small-sized'></div>
      </Link>
      {/* <div className='carousel-top' />
      <Carousel /> */}
      <div className='blog-container'>
        <div
          className='flex'
          style={{
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingTop: 12,
          }}
        >
          <p style={{ fontSize: 10, margin: 0 }}>
            showing {pageSize * (currentPage - 1)} to {pageSize * currentPage}{' '}
            results from all {posts.length}
          </p>
          <div></div>
        </div>
        <Pagination
          currentPage={currentPage}
          pages={pages}
          pageSize={pageSize}
          onChangePage={setCurrentPage}
          onPageSizeChange={setPageSize}
        />

        <Blogs
          onItemAdd={onItemAdd}
          blogs={posts.slice(
            pageSize * (currentPage - 1),
            pageSize * currentPage
          )}
        />
        <Pagination
          currentPage={currentPage}
          pages={pages}
          pageSize={pageSize}
          onChangePage={setCurrentPage}
          onPageSizeChange={setPageSize}
        />
      </div>
      <Footer itemsInCart={itemsInCart} />
    </>
  );
}
export default BlogList;
