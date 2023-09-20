import React from 'react';
import blogs from '../blogs.json';
import { Link } from 'react-router-dom';
import { slugify } from '../utils/slugify';
import { Carousel, MetaTags } from '../components/';
import ShopItems from './shopItems';
import FlowerItems from './FlowerItems';
import GalleryTagged from '../components/GalleryTagged/GalleryTagged';
import { FaArrowRight } from 'react-icons/fa';

const Tagged = ({ match, onItemAdd }) => {
  let title = match.params.name;

  const sametag = blogs.filter(
    (blog) => blog.tags && slugify(blog.tags).includes(title)
  );

  const tags = [];
  const singleTags = [];
  // eslint-disable-next-line
  blogs.map((blog) => {
    var blogtags = blog.tags?.split(', ');
    // eslint-disable-next-line
    blogtags?.map((btag) => {
      tags.push(btag);
      singleTags.indexOf(btag) === -1 && singleTags.push(btag);
    });
  });
  singleTags.sort((a, b) => a.localeCompare(b));

  return (
    <>
      <MetaTags
        name={`tagged ${title}`}
        description={`all blogs tagged ${title}`}
      />
      <div className='tagged' style={{ paddingTop: 124 }}>
        <p
          style={{
            position: 'fixed',
            top: -48,
            zIndex: 5,
          }}
        >
          <Link to='/'>blogs</Link> <FaArrowRight /> tagged{' '}
          <span className='pink underlined'>{title}</span>
        </p>

        {title === 'print' && (
          <div className='center'>
            <h1>Prints</h1>
            <p style={{ marginTop: 0 }}>
              Following prints can be sent by post in EU or picked up in Aarhus.
              <br />
              When picking them up it is possible to get them in wooden oak
              frame included in price. <br />
              Shipping costs 50dkk. Pick up is free.
            </p>
            <div className='divider' style={{ margin: '44px auto' }}></div>
          </div>
        )}

        {title === 'ceramics' && (
          <div className='center'>
            <h1>Handbuilt ceramics</h1>
            <p style={{ marginTop: 0 }}>
              Every single piece is one of a kind formed by a hand
              <br />
              When one is sold, its gone for good. But if you have some specific
              requests, please let me know!
              <br />
              <br />
              <i>
                Following items can be sent by post in EU or picked up in Aarhus
                Jægegaardsgade. <br />
                Shipping costs 75dkk extra. Pick up is free.
              </i>
              <br />
            </p>
            <div className='divider' style={{ margin: '44px auto' }}></div>
          </div>
        )}

        {title === 'linoleum' && (
          <div className='center' style={{ maxWidth: 800, margin: 'auto' }}>
            <h1>Linocut</h1>
            <p style={{ marginTop: 0 }}>
              Following items are hand printed in small batches (usually 3 to
              5), so there are certain color and texture variation with each
              print. Shipped signed and marked with serial numbers. It is very
              rare that I would create more than 5 prints of each variation or
              stencil I make so that way you can be sure your item will be
              original.
              <br />
              All made in a3
              <br />
              <br />
              <p style={{ paddingTop: 0, marginTop: 0 }}>
                Following items can be sent by post in EU or picked up in Aarhus
                Jægegaardsgade. <br />
                Shipping costs 50dkk extra. Pick up is free.
              </p>
              <br />
            </p>
            <div className='divider' style={{ margin: '44px auto' }}></div>
          </div>
        )}

        <div
          className={`squares ${title === 'print' && 'prints'} ${
            title === 'flower' && 'prints'
          }`}
        >
          {sametag.map((blog, i) => (
            <div className='square' key={i}>
              {blog.tags.includes('shop') && !blog.sold && (
                <div
                  className='flex shopping-info'
                  onClick={() => onItemAdd(blog.title, '', blog.price)}
                >
                  <div>
                    <p style={{ margin: 'none' }}>available</p>
                    <p className='pink' style={{ margin: 'none' }}>
                      {blog.price}dkk
                    </p>
                  </div>
                  <div className='shop-icon'>
                    <img src='/images/shopping_bag.png' />
                    <span className='plus-icon'>+</span>
                  </div>
                </div>
              )}
              {blog.tags.includes('shop') && blog.sold && (
                <div
                  className='flex shopping-info'
                  style={{ backgroundColor: '#e5e5e5' }}
                >
                  <div>
                    <p style={{ margin: 'none' }}>sold out</p>
                  </div>
                  <div className='shop-icon'>
                    <img src='/images/mdm.png' />
                  </div>
                </div>
              )}

              {blog.gallery ? (
                <GalleryTagged blog={blog} />
              ) : (
                <Link to={`/${slugify(blog.title)}`}>
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className='fully-covering-image'
                  />
                </Link>
              )}
              {blog.tags.includes('print') && (
                <ShopItems blog={blog} onItemAdd={onItemAdd} />
              )}
              {blog.tags.includes('flower') && (
                <FlowerItems blog={blog} onItemAdd={onItemAdd} />
              )}
            </div>
          ))}
        </div>
      </div>
      <p className='center' style={{ paddingTop: 32 }}>
        all & featured tags
      </p>
      <p
        className='center'
        style={{ maxWidth: 800, margin: 'auto', paddingBottom: 32 }}
      >
        {singleTags.map((tag) => (
          <Link to={`/tagged/${slugify(tag)}`}>#{tag} </Link>
        ))}
      </p>
      <Carousel />
    </>
  );
};
export default Tagged;
