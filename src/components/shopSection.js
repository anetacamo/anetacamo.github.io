import React from 'react';

const ShopSection = ({ title, children }) => (
  <div className='shop-section'>
    <div className='divider'></div>
    <div className='flex'>
      <div className='dot'></div>
      <div className='dot'></div>
      <div className='dot'></div>
    </div>
    <h2>{title}</h2>
    {children}
  </div>
);
export default ShopSection;
