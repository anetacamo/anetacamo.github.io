import React from 'react';
import cv from '../cv.json';
import { Footer, Href, MetaTags } from '../components';
import { Link } from 'react-router-dom';

const Cv = () => {
  return (
    <>
      <MetaTags
        name='CV'
        description='Hi! My name is Aneta and I have been working as a freelance front end developer and illustrator'
        image='/images/intro.png'
      />
      {/* <Link to='/cv'>
        <div className='portrait'></div>
      </Link> */}
      <div className='blog-container cv-container'>
        <div className='blogs'>
          <div className='portrait-img'>
            <img
              src='/images/intro.png'
              alt='aneta camo portrait'
              style={{ objectFit: 'cover', filter: 'none' }}
            />
          </div>
          <div className='header'>
            <h2>
              <span className='large-font'>Hi</span> my name is Aneta Camo
            </h2>
            <Href href='mailto:anetacamova@gmail.com?subject=greeting'>
              anetacamo@gmail.com
            </Href>
            <br />
            <p style={{ marginTop: 4 }}>
              born in Prague &nbsp; | &nbsp; based in Aarhus &nbsp;
            </p>
            <div className='divider'></div>
            <p>
              I have been working as a freelance or employed front-end developer
              since 2018. Before getting introduced to my favourite combo of
              _React, Next and typescript_ I did a lot of in jekyll and liquid
              and was tweaking my own wordpress templates.
            </p>
            <p>
              I have the most experience with creating smaller web-aps, with
              blogs, filtering, maps, interactive forms, tables, loggings in,
              graphs and any other custom features by tweeking my own react
              component libraries. I am also used to communicate with APIs,
              mostly using swagger, openapi and redux toolkit. I have also seted
              up simple logging in, liking features and other databases using
              firebase or simply google sheets.
            </p>
            <p>
              Although I am still definitely placed more on visual side of FE
              development I am really curious about all the exciting and
              powerful features that working more with servers and databases can
              bring.
            </p>

            <h2>TOOLSTACK</h2>
            {cv.cv.toolstack.map((tool) => (
              <li>{tool}</li>
            ))}
            <div className='divider'></div>
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
                  <li>
                    <a href={exp.link}>{exp.company}</a>
                  </li>
                </p>
                <div className='tags'>
                  {exp.tags.map((tag) => (
                    <li>{tag}</li>
                  ))}
                </div>
              </>
            ))}
            <div className='divider'></div>
            <h2>REFERENCES</h2>
            <div className='boxes'>
              {cv.cv.references.map((ref) => (
                <div className='box'>
                  <div className='cv-circle circle'>
                    <Href href={ref.link}>
                      <img src={ref.image} alt='a wallet illustration' />
                    </Href>
                  </div>
                  <h2>
                    <Href href={ref.link}>{ref.title}</Href>
                  </h2>
                  <p style={{ marginTop: '-4px' }}>{ref.time}</p>
                  <p>{ref.text}</p>
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
