import React from 'react';
import cv from '../cv.json';
import { Footer, Href, MetaTags } from '../components';
import { Link } from 'react-router-dom';

const WebApps = () => {
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
            &nbsp;&nbsp; | &nbsp;&nbsp;
            <Href href='https://www.instagram.com/anetacamo'>
              illustrations
            </Href>
            <br />
            <p style={{ marginTop: 4 }}>
              born in Prague &nbsp; | &nbsp; based in Aarhus &nbsp;
            </p>
            <div className='divider'></div>
            <p>
              {' '}
              Are you looking for a website to be built for your project? I can
              set it up with no further reocurring costs, design it, illustrate
              the icons and program & code anything you come up with.
            </p>
            <button>See my work</button>
            <button>see packages</button>
            <p>
              <a>
                or Read more about what you could consider in terms of
                additional costs.
              </a>
            </p>
            <div className='divider'></div>
            <h2>What can you get?</h2>
            <ul>
              <li>
                Completely customized blogs with really quick filtering, search
                feature and tagging.
                <br />
                <i>
                  Possibility of implementing any sort of user friendly editor
                  on top of the page.
                </i>
              </li>

              <li>custom interactive maps, newsletter, forms etc.</li>
              <li>Logging in, comments and likes. </li>
              <li>Any kind of on-demand UI component of your choice</li>
              <li>Illustrations and a brand identity, custom animations</li>
              <li>custom made illustrated fonts</li>
              <li>SEO settings included</li>
              <li>
                Coded in react. Really quick and interactive framework for
                building webapss. Small webs can be coded in wordpress.
              </li>
            </ul>{' '}
            <div className='divider'></div>
            <button>let me know</button>
            <div className='divider'></div>
            <div className='boxes'>
              <div className='box'>
                <h2 style={{ margin: 0 }}>
                  <span className='large-font'>SM</span>
                  one full week
                  <br />
                  10K
                </h2>
                <p>
                  Mostly one page or simple few landing pages website. Can have
                  blog and few illustrations.
                </p>
              </div>
              <div className='box'>
                <div
                  className='flex'
                  style={{ textAlign: 'left', alignItems: 'center' }}
                >
                  <h2 style={{ fontSize: '6.5em', margin: 0, lineHeight: 0.5 }}>
                    M
                  </h2>
                  <div>
                    <h2 style={{ margin: '0' }}>two full weeks</h2>

                    <h2 style={{ margin: 0 }}>18K</h2>
                  </div>
                </div>
                <p>
                  {' '}
                  Mostly one page or simple few landing pages website. Can have
                  blog and few illustrations.
                </p>
              </div>
              <div className='box'>
                <h2 style={{ margin: 0 }}>
                  <span className='large-font'>L</span>
                  one month
                  <br />
                  35.000DKK
                </h2>
              </div>
              <div className='box'>
                <h2 style={{ margin: 0 }}>
                  <span className='large-font'>??</span>
                  does not fit?
                </h2>
              </div>
            </div>
            <h2>About additional costs of website</h2>
            <p>
              I usually code websites in react with its source (and optional
              free hosting) on GitHub. There is a possibility of taking
              advantage of gitHub free domain if you do not mind naming your
              domain like yourname.github.io with auto generated ssl
              certificate.
            </p>
            <p>
              if you want a domain you will probably be looking into costs
              around 200dkk/year. Although some names considered more valuable
              can cost more
            </p>
            <p>
              Most of the 3rd party features (like forms, newsletters, maps)
              have a free version for a small scale business and low traffic
              websites. But if you consider building a large platform you might
              as well have to pay for some of their plans.
            </p>
            {/* <h2>REFERENCES</h2> */}
            {/* <div className='boxes'>
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
                  <p>{ref.text}</p>
                  <div className='tags'>
                    {ref.tags.map((tag) => (
                      <li>{tag}</li>
                    ))}
                  </div>
                </div>
              ))}
            </div> */}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default WebApps;
