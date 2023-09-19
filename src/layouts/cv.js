import React from 'react';
import cv from '../cv.json';
import { Footer, Href, MetaTags, Portrait } from '../components';

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
          <Portrait />
          <div>
            <div className='header'>
              <h2 className='large-font'>Hi</h2>
              <div>
                <Href href='mailto:anetacamova@gmail.com?subject=greeting'>
                  anetacamo@gmail.com
                </Href>
                <br />
                <p style={{ marginTop: 4, marginBottom: -34 }}>
                  born in Prague &nbsp; | &nbsp; based in Aarhus &nbsp;
                </p>
              </div>
            </div>
            <div className='divider'></div>
            <p>
              I have been working as a freelance or employed front-end developer
              since 2018. Before getting introduced to my favourite combo of
              React, Next and typescript. I did code a lot in jekyll and liquid
              and was tweaking my own wordpress templates with PHP.
            </p>
            <p>
              I have extensive expertise in developing compact web applications,
              building blogs, filtering, maps, interactive forms, tables,
              loggins, graphs and any other custom features. I love challenges
              and enjoy coding more complex solutions in javascript. I am also
              used to communicate with APIs, mostly using swagger, openapi and
              redux toolkit. I have also set up backend for logging in, liking
              features and more complex data setups.
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
                <div className='box' key={ref.title}>
                  <div className='cv-circle circle'>
                    <Href href={ref.link}>
                      <img
                        src={ref.image}
                        className={ref.title === 'PipeGame' && 'no-filter'}
                        alt={ref.title}
                      />
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
                  {ref.repo && (
                    <Href href={ref.repo}>
                      <p>github repo</p>
                    </Href>
                  )}
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
