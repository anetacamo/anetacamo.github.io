import React from 'react';
import blogs from '../blogs.json';
import { Link } from 'react-router-dom';
import { slugify } from '../utils/slugify';
import illustration from '../illustration.json';
import shop from '../shop.json';

const AllTags = ({}) => {
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
    var blogtags = blog.tags.split(', ');
    // eslint-disable-next-line
    blogtags.map((btag) => {
      singleTags.indexOf(btag) === -1 && singleTags.push(btag);
    });
  });
  singleTags.sort((a, b) => a.localeCompare(b));

  return (
    <div className='carousel tagged'>
      <h2 style={{ paddingTop: 100 }}>shop</h2>

      <div className='cards'>
        {shop.map((shop, i) => (
          <div
            className='card'
            key={i}
            style={{ position: 'relative', height: 320 }}
          >
            <h2 className='absolute-center'>{shop.title}</h2>
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

      <h2>illustration</h2>
      <div className='cards'>
        {illustration.map((illustration, i) => (
          <div className='card' key={i} style={{ position: 'relative' }}>
            <Link to={`/tagged/${slugify(illustration.title)}`}>
              <img
                alt={`tagged ${illustration.title}`}
                src={illustration.image}
                style={{ objectFit: 'cover' }}
              />{' '}
            </Link>
          </div>
        ))}
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

      <h2>most recent</h2>
      <div className='cards'>
        {blogs.map(
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
    </div>
  );
};
export default AllTags;
