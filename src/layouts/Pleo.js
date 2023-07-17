import React from 'react';
import { Footer, MetaTags, Portrait } from '../components';
import { Link } from 'react-router-dom';

const Pleo = () => {
  return (
    <>
      <MetaTags name='Pleo' image='/images/intro.png' />
      <div className='blog-container cv-container'>
        <div className='blogs'>
          <Portrait />
          <div className='header' style={{ marginTop: 80, marginBottom: 80 }}>
            <h1>Dear Pleo</h1>

            <p>
              I found your really nicely written application through LinkedIn
              where you are looking for a front end developer. I would love to
              work at Pleo because aside that it sounds like there is a bunch of
              nice and competent collegues and genuinely nice vibe - it also
              feels like a place where one could learn a lot and get to work on
              some exciting and challenging projects. I really like the pleo
              website, both its playful design and nice tone. Therefore I would
              love to write you a bit about me in hopes there could be a
              potential match. :)
            </p>
            <p>
              I come from Prague and have lived in Denmark for the past 6 years
              and can speak danish [slowly]. I came here to study my macpsters
              in Aarhus that were combination of IT and sociology - and since I
              landed the first internship (in Praqma at the time, now Eficode) ,
              I have been working as a front end developer. I afterwards stayed
              in Praqma and worked there for almost three years. Mostly with
              liquid, jekyll and wordpress.
            </p>
            <p>
              Four years ago, I started working with react and have been coding
              in react and typescript ever since, usually also using Next. I
              decided to go freelance as I had a lot of requests from my
              surroundings and used that opportunity to get comfortable with
              react in my own pace.
            </p>
            <p>
              My next working experience was in Monstarlab in Aarhus, where I
              got my hands on for me at the time a lot of challenging work.
              Apart from very large web applications (coded in react and
              typescript) that had to be linked to complex backend setups (via
              openapi, redux toolkit and with a help of swagger), I also had a
              chance to look very closely into accessibility that you mentioned
              in the application (one of the client was a british educational
              programme funded by royal family). We also used material UI, antd
              fields, storybook and contentful.
            </p>
            <p>
              {' '}
              Currently I am working as a freelancer on an interactive map of
              Aarhus that is sourced from google sheets, using openmap. Built on
              react, typescript and next.
              <li>
                <a href='https://github.com/anetacamo/nabo'>Link to repo.</a>
              </li>
              <li>
                <a href='https://github.com/anetacamo/nabo'>
                  Link to the site, still in progress
                </a>
              </li>
            </p>
            <p>
              I really enjoy frontend, love setting up new projects and seeing
              nice designs becoming interactive, I also enjoy trying out new
              frameworks or languages and would love to have an opportunity to
              work on some bigger projects again and solve problems that it
              brings.{' '}
            </p>
            <p>
              For the most of my time in Denmark I have been based in Aarhus but
              I am quite open to a change and can imagine myself moving to CPH.
              Working on some exciting projects in creative collective is the
              most important for me and I would not mind changing environment
              for it :)
            </p>
            <li>
              <a href='/#/cv'>Link to my CV</a>
            </li>
            <p>Kind regards, Aneta</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Pleo;
