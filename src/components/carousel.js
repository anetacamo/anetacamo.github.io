import React, { useEffect, useState } from 'react';
import tagged from '../tagged.json';
import { slugify } from '../utils/slugify';
import { Link } from 'react-router-dom';
import { Button } from './';

const Carousel = ({ items }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [fade, setFade] = React.useState('');
  const [itemsPerSlide, setItemsPerSlide] = React.useState(6);

  useEffect(() => {
    setFade('');
    const interval = setInterval(() => {
      setTimeout(function () {
        setFade('fade');
      }, 2750);
      handleRightArrowClick(itemsPerSlide);
    }, 3000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  const handleRightArrowClick = (n) => {
    setCurrentSlide(currentSlide !== tagged.length - n ? currentSlide + n : 0);
  };

  return (
    <div className='carousel'>
      <div className='flex'>
        {[...Array(itemsPerSlide)].map((e, i) => (
          <div className='flex-child'>
            <Link
              to={`/tagged/${slugify(
                tagged[currentSlide + i < tagged.length ? currentSlide + i : 0]
                  .title
              )}`}
              key={i}
            >
              <div className='carousel-item'>
                <img
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
      <div className='flex-center'>
        {tagged.map(
          (item, index) =>
            index % itemsPerSlide == 0 && (
              <Button
                divname={`dot ${index === currentSlide ? 'active' : null}`}
                activity={() => setCurrentSlide(index)}
              ></Button>
            )
        )}
      </div>
    </div>
  );
};

export default Carousel;
