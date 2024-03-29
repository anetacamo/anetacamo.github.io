import React from 'react';
import cv from '../cv.json';
import { Footer, Href, MetaTags, Portrait } from '../components';

const Cv = () => {
  return (
    <div>
      <MetaTags
        name='CV'
        description='Hi! My name is Aneta and I am React and Vue web developer'
        image='/images/intro.png'
      />
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
              blogs, filtering, maps, interactive forms, loggins, graphs and any
              other custom features and connectiong those to various back-ends
              as well as I enjoy coding games or any sort of functionalities in
              javascript that make live easier. Beside frontend, I enjoy
              illustration and have designed smaller projects where I have also
              secured simpler backend set-ups for logging in, liking or
              manipulating simple data structures.
            </p>
            {/* <p>
              I love working on cultural, creative and meaningful projects and
              in my free - /or freelance/ time I love to design and illustrate
              the projects too. I really enjoy being an employee for 20-30 hours
              a week and working on my own projects in the rest of time but I am
              open to any kind of interesting .
            </p> */}

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
                <p style={{ marginBottom: -10 }}>
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
                  <div
                    className='tags'
                    style={{ marginLeft: 'auto', marginRight: 'auto' }}
                  >
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
