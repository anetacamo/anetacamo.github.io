import React from 'react';
import { Image } from '.';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link to='/'>
      <Image path='/anetacamo_small.png' nameClass='logo' />
    </Link>
  );
};
export default Logo;