import React from 'react';
import blogs from '../blogs.json';
import { Link } from 'react-router-dom';
import { slugify } from '../utils/slugify';
import { Carousel, MetaTags } from '../components/';
import ShopItems from './shopItems';
import FlowerItems from './FlowerItems';
import GalleryTagged from '../components/GalleryTagged/GalleryTagged';

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
      <div className='tagged'>
        <p>
          all blogs tagged <span className='pink underlined'>{title}</span>
        </p>
        {title === 'print' && (
          <div className='center'>
            <h1>SHOP</h1>
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

        <div
          className={`squares ${title === 'print' && 'prints'} ${
            title === 'flower' && 'prints'
          }`}
        >
          {sametag.map((blog, i) => (
            <div className='square' key={i}>
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
