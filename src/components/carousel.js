import React, { useEffect, useState } from "react";
import tagged from "../tagged.json";
import { slugify } from "../utils/slugify";
import { Link } from "react-router-dom";
import { Button } from "./";

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [fade, setFade] = React.useState("");
  // eslint-disable-next-line
  const [itemsPerSlide, setItemsPerSlide] = React.useState(6);

  useEffect(() => {
    setFade("");
    const interval = setInterval(() => {
      setFade("fade");
      console.log("fade");
      handleRightArrowClick(itemsPerSlide);
    }, 4000);
    return () => clearInterval(interval);
    // eslint-disable-next-line
  }, [currentSlide]);

  const handleRightArrowClick = (n) => {
    setCurrentSlide(currentSlide !== tagged.length - n ? currentSlide + n : 0);
    console.log("changed");
  };

  return (
    <div className="carousel">
      <div className="flex-center">
        {tagged.map(
          (item, index) =>
            index % itemsPerSlide === 0 && (
              <Button
                key={index}
                divname={`dot ${index === currentSlide ? "active" : null}`}
                activity={() => setCurrentSlide(index)}
              ></Button>
            )
        )}
      </div>
      <div className="flex">
        {[...Array(itemsPerSlide)].map((e, i) => (
          <div className="flex-child" key={i}>
            <Link
              to={`/tagged/${slugify(
                tagged[currentSlide + i < tagged.length ? currentSlide + i : 0]
                  .title
              )}`}
            >
              <div className="carousel-item">
                <img
                  alt={`tagged ${
                    tagged[
                      currentSlide + i < tagged.length ? currentSlide + i : 0
                    ].title
                  }`}
                  src={
                    tagged[
                      currentSlide + i < tagged.length ? currentSlide + i : 0
                    ].image
                  }
                  className={`carousel-item ${fade}`}
                />
              </div>
              <p className={fade}>
                #
                {
                  tagged[
                    currentSlide + i < tagged.length ? currentSlide + i : 0
                  ].title
                }
              </p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
