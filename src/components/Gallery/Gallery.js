import React, { useState } from "react";
import { slugify } from "../../utils/slugify";
import { Link } from "react-router-dom";
import styles from "./Gallery.module.scss";

const Gallery = ({ blog }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = new Array(parseInt(blog.gallery)).fill(0);

  const handleRight = () => {
    setCurrentSlide(currentSlide === blog.gallery - 1 ? 0 : currentSlide + 1);
  };

  const handleLeft = () => {
    setCurrentSlide(currentSlide === 0 ? blog.gallery - 1 : currentSlide - 1);
  };

  return (
    <>
      <div className="flex-center">
        <span className={styles.left} onClick={handleLeft}>
          L
        </span>
        <Link to={`/${slugify(blog.title)}`}>
          <img
            src={`${blog.image}/${currentSlide}.jpg`}
            alt={blog.title}
            className="fully-covering-image"
          />
        </Link>
        <span onClick={handleRight} className={styles.right}>
          R
        </span>
      </div>
      <div className="flex-center">
        {images.map((value, index) => (
          <button
            key={index}
            className={currentSlide === index && "active"}
            onClick={() => setCurrentSlide(index)}
          >
            {index}
          </button>
        ))}
      </div>
    </>
  );
};

export default Gallery;
