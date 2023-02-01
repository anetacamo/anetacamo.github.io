import React from 'react';
import { Href, Image, JumpingText } from './';

const Footer = () => {
  return (
    <div className='menu-links'>
      <Image path='/work.png' nameclass='desktop' />
      <JumpingText text='PRINTS' link='/tagged/print/' />
      <JumpingText text='LINOCUT' link='/tagged/linoleum/' />
      <JumpingText text='CERAMICS' link='/tagged/ceramics/' />
      {/* <h4>
        <Href href='mailto:anetacamova@gmail.com?subject=greeting'>
          _email_me_
        </Href>
      </h4> */}
      <h4>
        insta <Href href='https://www.instagram.com/anetacamo'>anetacamo</Href>
      </h4>
      <h4 style={{ marginBottom: 0 }}>2022, coded in react by _me</h4>
    </div>
  );
};
export default Footer;
