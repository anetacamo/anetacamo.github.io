import React from 'react';
import blogs from '../blogs.json';
import { Link } from 'react-router-dom';
import { slugify } from '../utils/slugify';
import { Carousel } from '../components/index.js';

const Tagged = ({ match }) => {
  let title = match.params.name;
  // let slug = match.params.name;
  // const thistag = tagged.filter((tag) => slugify(tag.title) === title);
  // const sametag = blogs.filter((blog) => blog.tags?.includes(thistag[0].title));
  const sametag = blogs.filter(
    (blog) => blog.tags && slugify(blog.tags).includes(title)
  );

  const tags = [];
  const singleTags = [];
  // eslint-disable-next-line
  blogs.map((blog) => {
    var blogtags = blog.tags.split(', ');
    // eslint-disable-next-line
    blogtags.map((btag) => {
      tags.push(btag);
      singleTags.indexOf(btag) === -1 && singleTags.push(btag);
    });
  });
  singleTags.sort((a, b) => a.localeCompare(b));

  return (
    <>
      <div className='tagged'>
        <p>
          all blogs tagged <span class='pink underlined'>{title}</span>
        </p>

        <div class='squares'>
          {sametag.map((blog) => (
            <div class='square'>
              <Link to={`/${slugify(blog.title)}`}>
                <img
                  class='fully-covering-image'
                  src={`${blog.image}`}
                  alt='by Aneta Camo'
                />
              </Link>
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
