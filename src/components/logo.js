import React from 'react';
import { Image } from '.';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <div className='logo-container'>
      <Link to='/'>
        <Image path='/anetacamo_small.png' nameclass='logo' />
      </Link>
      {/* <div className='mob-menu'>
        <Link to='/all-tags'>
          <p>All tags & shop</p>
        </Link>
        <Link to='/tagged/print'>
          {' '}
          <p>shop prints</p>
        </Link>
        <Link to='/tagged/ceramics'>
          {' '}
          <p>shop ceramics</p>
        </Link>
      </div> */}
    </div>
  );
};
export default Logo;
