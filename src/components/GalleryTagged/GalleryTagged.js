import React, { useState } from "react";
import { slugify } from "../../utils/slugify";
import { Link } from "react-router-dom";
import styles from "./GalleryTagged.module.scss";

const Gallery = ({ blog }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = new Array(parseInt(blog.gallery)).fill(0);

  return (
    <>
      <Link to={`/${slugify(blog.title)}`}>
        <img
          src={`${blog.image}/${currentSlide}.jpg`}
          alt={blog.title}
          className="fully-covering-image"
        />
      </Link>
      <div className={`flex-center ${styles["dot-holder"]}`}>
        {images.map((value, index) => (
          <button
            key={index}
            className={`${currentSlide === index && "active"} ${
              styles.taggeddot
            }`}
            onClick={() => setCurrentSlide(index)}
          ></button>
        ))}
      </div>
    </>
  );
};

export default Gallery;
