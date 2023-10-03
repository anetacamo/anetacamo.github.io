import React from 'react';
import blogs from '../blogs.json';
import { Link } from 'react-router-dom';
import { slugify } from '../utils/slugify';
import shop from '../shop.json';

const AllTags = ({}) => {
  const singleTags = [];
  // eslint-disable-next-line
  blogs.map((blog) => {
    var blogtags = blog.tags?.split(', ');
    // eslint-disable-next-line
    blogtags?.map((btag) => {
      singleTags.indexOf(btag) === -1 && singleTags.push(btag);
    });
  });
  singleTags.sort((a, b) => a.localeCompare(b));

  const ceramics = blogs.filter((blog) => blog.tags?.includes('ceramics'));
  const drawings = blogs.filter((blog) => blog.tags?.includes('illustration'));
  const store = blogs.filter((blog) => blog.tags?.includes('shop'));

  return (
    <div className='carousel tagged'>
      <h2 style={{ paddingTop: 100, fontSize: 32 }} className='center'>
        shop
      </h2>

      <div className='cards'>
        {shop.map((shop, i) => (
          <div
            className='card'
            key={i}
            style={{ position: 'relative', height: 320 }}
          >
            <h2 className='absolute-center'>#{shop.title}</h2>
            <Link to={`/tagged/${slugify(shop.title)}`}>
              <img
                alt={`tagged ${shop.title}`}
                src={shop.image}
                style={{ objectFit: 'cover', filter: 'brightness(50%)' }}
              />
            </Link>
          </div>
        ))}
      </div>
      <div className='cards' style={{ marginTop: 6 }}>
        {ceramics.map(
          (blog, i) =>
            i < 6 && (
              <div className='card' key={i} style={{ position: 'relative' }}>
                <Link to={`/${slugify(blog.title)}`}>
                  <img
                    alt={`tagged ${blog.title}`}
                    src={blog.gallery ? `${blog.image}/0.jpg` : blog.image}
                    style={{ objectFit: 'cover' }}
                  />{' '}
                </Link>
              </div>
            )
        )}
      </div>

      {/* <h2 style={{ paddingTop: 100, fontSize: 32 }} className='center'>
        illustration
      </h2>
      <div className='cards'>
        {illustration.map((illustration, i) => (
          <div className='card' key={i} style={{ position: 'relative' }}>
            <Link to={`/tagged/${slugify(illustration.title)}`}>
              <img
                alt={`tagged ${illustration.title}`}
                src={illustration.image}
                style={{ objectFit: 'cover', height: 'calc(100% - 24px)' }}
              />{' '}
            </Link>
            <p
              className='underlined'
              style={{ margin: 0, padding: 0, fontSize: 10 }}
            >
              #{illustration.title}
            </p>
          </div>
        ))}
      </div> */}

      {/* <div className='cards' style={{ marginTop: 6 }}>
        {drawings.map(
          (blog, i) =>
            i < 6 && (
              <div className='card' key={i} style={{ position: 'relative' }}>
                <Link to={`/${slugify(blog.title)}`}>
                  <img
                    alt={`tagged ${blog.title}`}
                    src={blog.gallery ? `${blog.image}/0.jpg` : blog.image}
                    style={{ objectFit: 'cover' }}
                  />{' '}
                </Link>
              </div>
            )
        )}
      </div> */}

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

      <h2>recent in shop</h2>
      <div className='cards'>
        {store.map(
          (blog, i) =>
            i < 8 && (
              <div className='card' key={i} style={{ position: 'relative' }}>
                <Link to={`/${slugify(blog.title)}`}>
                  <img
                    alt={`tagged ${blog.title}`}
                    src={blog.gallery ? `${blog.image}/0.jpg` : blog.image}
                    style={{ objectFit: 'cover' }}
                  />{' '}
                </Link>
              </div>
            )
        )}
      </div>
    </div>
  );
};
export default AllTags;
