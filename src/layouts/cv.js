import React from 'react';
import cv from '../cv.json';
import { Footer } from '../components';
import { Link } from 'react-router-dom';

const Cv = () => {
  return (
    <>
      <Link to='/cv'>
        <div className='portrait'></div>
      </Link>
      <div class='blog-container cv-container'>
        <div class='blogs'>
          <div class='main-img'>
            <img
              src='/images/intro.png'
              alt='aneta camo portrait'
              style={{ objectFit: 'cover', filter: 'none' }}
            />
          </div>
          <div style={{ paddingTop: 20 }}>
            <h2>
              <span className='large-font'>Hi</span> my name is Aneta Camo
            </h2>
            <a href='mailto:anetacamova@gmail.com'>anetacamo@gmail.com</a>{' '}
            &nbsp;| &nbsp;{' '}
            <a href='https://www.instagram.com/anetacamo' target='_blank'>
              {' '}
              illustrations
            </a>{' '}
            <br />
            born in Prague &nbsp; | &nbsp; based in Aarhus &nbsp;
            <div class='divider'></div>
            <h2>TOOLSTACK</h2>
            {cv.cv.toolstack.map((tool) => (
              <li>{tool}</li>
            ))}
            <div class='divider'></div>
            <h2>Working EXPERIENCE</h2>
            {cv.cv.experience.map((exp) => (
              <>
                <h4>
                  <a href={exp.link}>{exp.company}</a>
                </h4>
                <p>
                  <i>{exp.time}</i>
                </p>
                <p>
                  {exp.text}
                  <a href={exp.link}>{exp.company}</a>
                </p>
              </>
            ))}
            <div class='divider'></div>
            <h2>REFERENCES</h2>
            <div className='boxes'>
              {cv.cv.references.map((ref) => (
                <div className='box'>
                  <div className='circle'>
                    <a href={ref.link} target='_blank'>
                      <img src={ref.image} alt='a wallet illustration' />
                    </a>
                  </div>
                  <h2>
                    <a href={ref.link}>{ref.title}</a>
                  </h2>
                  <p style={{ marginTop: 8, marginBottom: 12 }}>{ref.text}</p>
                  <div className='tags'>
                    {ref.tags.map((tag) => (
                      <li>{tag}</li>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Cv;
