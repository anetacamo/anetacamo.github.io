import React from 'react';
import { Href, JumpingText } from './';

const Footer = () => {
  return (
    <div className='menu-links'>
      <JumpingText text='PRINTS' />
      <h4>
        <Href href='mailto:anetacamova@gmail.com?subject=greeting'>
          _email_me_something
        </Href>
      </h4>
      <h4>
        instagram //{' '}
        <Href href='https://www.instagram.com/anetacamo'>anetacamo</Href>
      </h4>
      <h4 style={{ marginBottom: 0 }}>2020, All rights reserved, anetacamo</h4>
    </div>
  );
};
export default Footer;
