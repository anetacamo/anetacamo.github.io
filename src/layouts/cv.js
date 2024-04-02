import React, { useState } from 'react';
import cv from '../cv.json';
import { Footer, Href, MetaTags, Portrait } from '../components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAsterisk } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const Cv = () => {
  const [filter, setFilter] = useState(null);

  return (
    <div>
      <MetaTags
        name='CV'
        description='Hi! My name is Aneta and I am React and Vue web developer'
        image='/images/intro.png'
      />
      {filter && (
        <div
          style={{
            position: 'fixed',
            bottom: 12,
            left: 12,
            cursor: 'pointer',
          }}
        >
          <p style={{ marginBottom: 0 }}>filter is on</p>
          <p
            className='tag'
            onClick={() => setFilter(null)}
            style={{
              cursor: 'pointer',
              marginLeft: 0,
            }}
          >
            {filter}{' '}
            <FontAwesomeIcon
              icon={faTimes}
              className='purple'
              style={{
                marginLeft: 7,
                fontSize: 11,
                marginRight: 0,
                marginBottom: -1,
              }}
            />
          </p>
        </div>
      )}
      <div className='blog-container cv-container'>
        <div className='blogs'>
          <Portrait />
          <div>
            <div className='header'>
              <h2 className='large-font'>Hi</h2>
              <div style={{ marginBottom: 18 }}>
                <p style={{ marginTop: 0, marginBottom: 0 }}>
                  my name is Aneta
                </p>
                <p style={{ marginTop: 0, marginBottom: 0 }}>
                  +45 52 82 55 36 &nbsp;
                </p>
                <Href href='mailto:anetacamova@gmail.com?subject=greeting'>
                  anetacamo@gmail.com
                </Href>
                <br />
                <p style={{ marginTop: 4, marginBottom: -12 }}>
                  born in Prague &nbsp; | &nbsp; based in Aarhus &nbsp;
                </p>
              </div>
            </div>
            <div className='divider'></div>
            <p>
              I'm primarily a react developer with 4+ years of experience.
              <br /> Last year, I have also started working with Nuxt, Vue 2 &
              3. Before I discovered my favourite combination of Typescript,
              Next.Js and React, I have worked with different frontend setups
              like jekyll & liquid or wordpress & bit of php.
            </p>
            <p>
              I have expertise in developing compact web applications, building
              blogs, filtering, maps, interactive forms, log-ins, graphs and any
              other custom features and connectiong those to various back-ends
              as well as I enjoy coding games or any sort of functionalities in
              javascript that make live easier. Beside frontend, I enjoy
              illustration and have designed smaller projects where I have also
              secured simpler backend set-ups for logging in, liking or
              manipulating simple data structures.
            </p>
            <i>
              Clicking on any of the tags will trigger filtering
              <br />
              This cv is coded from scratch in react.
            </i>

            {/* <p>
              I love working on cultural, creative and meaningful projects and
              in my free - /or freelance/ time I love to design and illustrate
              the projects too. I really enjoy being an employee for 20-30 hours
              a week and working on my own projects in the rest of time but I am
              open to any kind of interesting .
            </p> */}

            <h2>TOOLSTACK</h2>
            {cv.cv.toolstack.map((tool) => (
              <li
                onClick={() =>
                  setFilter(
                    tool.toLowerCase() === filter ? null : tool.toLowerCase()
                  )
                }
              >
                <span
                  className={
                    tool.toLowerCase() === filter && 'active span-active'
                  }
                >
                  {tool}
                  {tool.toLowerCase() === filter && 'active' && (
                    <FontAwesomeIcon
                      icon={faTimes}
                      className='purple'
                      style={{ marginLeft: 7, marginRight: 2 }}
                    />
                  )}
                </span>
              </li>
            ))}
            <div className='divider'></div>
            <h2>Working EXPERIENCE</h2>
            {filter?.toLowerCase().includes('postman') && 'active work-active'}
            {cv.cv.experience.map((exp) => (
              <div
                className={
                  exp.tags.find(
                    (tag) =>
                      filter && filter.toLowerCase().includes(tag.toLowerCase())
                  )
                    ? 'active work-active'
                    : ''
                }
              >
                <h4>
                  <a href={exp.link}>{exp.company}</a>
                </h4>
                <p style={{ marginBottom: -10 }}>
                  <i>{exp.time}</i>
                  <FontAwesomeIcon
                    icon={faAsterisk}
                    className='purple'
                    style={{ marginLeft: 7, marginRight: 4 }}
                  />
                  {exp.location && <i>{exp.location}</i>}
                </p>
                <p>
                  {exp.text}
                  <li>
                    <a href={exp.link}>{exp.company}</a>
                  </li>
                </p>
                <div className='tags'>
                  {exp.tags.map((tag) => (
                    <li
                      className={
                        filter &&
                        filter.toLowerCase().includes(tag.toLowerCase()) &&
                        'active tag-active'
                      }
                      onClick={() =>
                        setFilter(
                          tag.toLowerCase() === filter
                            ? null
                            : tag.toLowerCase()
                        )
                      }
                    >
                      {tag}
                      {tag.toLowerCase() === filter && 'active' && (
                        <FontAwesomeIcon
                          icon={faTimes}
                          className='grren'
                          style={{
                            marginLeft: 7,
                            fontSize: 11,
                            marginBottom: -1,
                          }}
                        />
                      )}
                    </li>
                  ))}
                </div>
              </div>
            ))}
            <div className='divider'></div>
            <h2>REFERENCES</h2>
            <div className='boxes'>
              {cv.cv.references.map((ref) => (
                <div
                  key={ref.title}
                  className={
                    ref.tags.find(
                      (tag) =>
                        filter &&
                        filter.toLowerCase().includes(tag.toLowerCase())
                    )
                      ? 'active work-active box'
                      : 'box'
                  }
                >
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
                  <p style={{ margin: 0 }} className='purple'>
                    {ref.client}
                  </p>
                  <p style={{ marginTop: 0 }}>{ref.time}</p>
                  <p>{ref.text}</p>
                  <div
                    className='tags'
                    style={{ marginLeft: 'auto', marginRight: 'auto' }}
                  >
                    {ref.tags.map((tag) => (
                      <li
                        onClick={() =>
                          setFilter(
                            tag.toLowerCase() === filter
                              ? null
                              : tag.toLowerCase()
                          )
                        }
                        className={
                          filter &&
                          filter.toLowerCase().includes(tag.toLowerCase()) &&
                          'active tag-active'
                        }
                      >
                        {tag}
                        {tag.toLowerCase() === filter && 'active' && (
                          <FontAwesomeIcon
                            icon={faTimes}
                            className='grren'
                            style={{
                              marginLeft: 7,
                              fontSize: 11,
                              marginBottom: -1,
                            }}
                          />
                        )}
                      </li>
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
    </div>
  );
};
export default Cv;

// {
//   "image": "/images/migrace.png",
//   "time": "2020",
//   "title": "Fair Migration Politics",
//   "text": "Building a webpage in wordpress on the custom built and designed template; illustrations also done by me",
//   "link": "http://www.ferovamigracnipolitika.cz/english/",
//   "tags": ["Wordpress", "PHP", "Illustration"]
// },
// {
//         "image": "/images/mdm.png",
//         "time": "2019-2020",
//         "title": "MDM / Minimum Decent Wage",
//         "text": "Built and designed website via wordpress from scratch, Advanced Custom Fields to make it easier to fill in everything. Illustrations.",
//         "link": "https://www.dustojnamzda.cz/minimum-decent-wage/",
//         "tags": [
//           "Wordpress",
//           "Php",
//           "Advanced Custom Fields",
//           "Javascript",
//           "Design",
//           "Illustration"
//         ]
//       },
