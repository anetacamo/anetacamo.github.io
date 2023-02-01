import React from 'react';
import blogs from '../blogs.json';
import { Link } from 'react-router-dom';
import { slugify } from '../utils/slugify';
import shop from '../shop.json';

const Shop = ({}) => {
  // const tags = [];
  // // eslint-disable-next-line
  // blogs.map((blog) => {
  //   var blogtags = blog.tags.split(', ');
  //   // var image = blog.image;
  //   // eslint-disable-next-line
  //   blogtags.map((btag) => {
  //     //check if tags array contains an object with btag
  //     if (tags.filter((tag) => tag.title === btag).length > 0) {
  //     } else {
  //       let obj = {};
  //       obj['name'] = btag;
  //       obj['image'] = blog.image;
  //       tags.push(obj);
  //     }
  //   });
  // });

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

  const sewing = blogs.filter((blog) => blog.tags?.includes('sewing'));
  const drawings = blogs.filter((blog) => blog.tags?.includes('illustration'));
  const store = blogs.filter((blog) => blog.tags?.includes('shop'));
  const website = blogs.filter((blog) => blog.tags?.includes('website'));
  const font = blogs.filter((blog) => blog.tags?.includes('font'));
  const suburbs = blogs.filter((blog) => blog.tags?.includes('suburbs'));
  const comics = blogs.filter((blog) => blog.tags?.includes('comics'));
  const drowning = blogs.filter((blog) => blog.tags?.includes('drowning'));

  //drowning

  return (
    <div className='carousel tagged'>
      <h2 style={{ paddingTop: 100, fontSize: 32 }} className='center'>
        illustration
      </h2>
      <h3>newest in illustration</h3>
      <div className='cards' style={{ marginTop: 6 }}>
        {drawings.map(
          (blog, i) =>
            i < 12 && (
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
      <h3>suburbs</h3>
      <div className='cards' style={{ marginTop: 6 }}>
        {suburbs.map(
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
      <h3>comics</h3>
      <div className='cards' style={{ marginTop: 6 }}>
        {comics.map(
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
      <h3>drowning</h3>
      <div className='cards' style={{ marginTop: 6 }}>
        {drowning.map(
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

      <h2 style={{ paddingTop: 100, fontSize: 32 }} className='center'>
        sewing
      </h2>

      <div className='cards' style={{ marginTop: 6 }}>
        {sewing.map(
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
export default Shop;
