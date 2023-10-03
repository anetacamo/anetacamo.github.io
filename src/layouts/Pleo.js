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
              I come from Prague and have lived in Aarhus for the past 6 years
              and can speak danish. I came here to study my masters in Aarhus
              that were combination of IT and sociology - and landed the first
              job at Praqma as student developer. Mostly with liquid, jekyll and
              wordpress at the time. <br /> Three years later I decided to go
              freelance as I discovered react. I was still in touch with the
              previous owners of the company and a graphic studio, and I
              received quite a few job opportunities through them. I built
              multiple web-apps and started using typescript and Next.
            </p>
            <p>
              Afterwards I got a job at an agency now based in Aarhus Ø called
              Monstalab. I have learned a lot about writing code for larger
              scale applications and have worked extensively with Redux and
              backend implementations. I really enjoyed it, but this winter, the
              entire office was closed down, and since then, I have been working
              as a freelancer again.
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
