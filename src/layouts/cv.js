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
      <Link to='/cv'>
        <div className='portrait'></div>
      </Link>
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
              I have been working as a freelance or employed front-ender mostly
              for the last four years. Before getting introduced to my favourite
              combo of React, Next and typescript I did a lot of in jekyll and
              liquid and was tweaking my own wordpress templates. On top of
              that, I dont usually turn down offer to design and implement my
              own illustrations to the project.
            </p>
            <p>
              {' '}
              I am trying to have an eye for small details, smooth transitions
              and enjoy making sure everything flows on all devices. I have also
              learnt a lot about accessibility in my previous poject. I like to
              automate things and make code as modular and reusable as possible
              and am not afraid to set up my own server or hook the web to any
              kind of api.
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
