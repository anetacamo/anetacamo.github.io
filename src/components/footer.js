import React from 'react';
import { Href, JumpingText } from './';
import { Link } from 'react-router-dom';

const Footer = ({ itemsInCart }) => {
  console.log(itemsInCart);
  console.log(itemsInCart.length);
  return (
    <div className='menu-links'>
      {itemsInCart.length != 0 && (
        <h4 className='purple'>
          <Link to='/cart'>in your bag </Link>
          {itemsInCart.length}
        </h4>
      )}

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
