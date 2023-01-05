import React, { useState } from 'react';
import blogs from '../blogs.json';
import { Blogs, Carousel, Footer, MetaTags, Pagination } from '../components';
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
      <Link to='/tagged/comics/'>
        <div className='postcard small-sized'></div>
      </Link>
      {/* <div className='carousel-top' />
      <Carousel /> */}
      <div className='blog-container'>
        <div className='flex' style={{ justifyContent: 'space-between' }}>
          <Link to='/all-tags'>
            <h2>SEE ALL</h2>
          </Link>
          <div className='flex' style={{ alignItems: 'baseline' }}>
            <h2>SHOP</h2>
            <Link to='/tagged/ceramics'>
              <h3 style={{ marginLeft: 12, textDecoration: 'underline' }}>
                ceramics
              </h3>
            </Link>

            <Link to='/tagged/print'>
              <h3 style={{ marginLeft: 12, textDecoration: 'underline' }}>
                prints
              </h3>
            </Link>
            {/* <Link to='/tagged/flower'>
              <h3 style={{ marginLeft: 12, textDecoration: 'underline' }}>
                paper flowers
              </h3>
            </Link> */}
          </div>
        </div>
        <div
          className='flex'
          style={{ alignItems: 'center', justifyContent: 'space-between' }}
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
