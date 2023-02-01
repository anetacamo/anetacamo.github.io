import React, { useState } from 'react';
import styles from './SingleBlogGallery.module.scss';

const Gallery = ({ blog }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = new Array(parseInt(blog.gallery)).fill(0);

  return (
    <div>
      <img
        src={`${blog.image}/${currentSlide}.jpg`}
        alt={`${blog.title} by Aneta Camo`}
        className={`single-blog-image gallery-image`}
        // style={{ height: "calc(100vh - 158px)" }}
      />

      <div className='flex-center'>
        {images.map((value, index) => (
          <img
            src={`${blog.image}/${index}.jpg`}
            alt={`${blog.title} by Aneta Camo`}
            className={styles.thumbnail}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
