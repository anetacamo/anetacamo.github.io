import React from 'react';
import blogs from '../blogs.json';

const YourBag = ({ itemsInCart, onCartItemRemove }) => {
  const renderImage = (title) => {
    const cartItem = blogs.filter((blog) => title === blog.title);
    return cartItem[0].image;
  };
  const countPrice = (size) => {
    if (size === 'a3') {
      return 450;
    } else if (size === 'a4') {
      return 350;
    }
    return 250;
  };
  return (
    <>
      <h2>your bag</h2>
      {itemsInCart.length === 0 && <div className='blogs'>No items here.</div>}
      <div className='flex'>
        {itemsInCart?.map((item, index) => (
          <div className='cart-item' key={index}>
            <div className='image-holder'>
              <img src={renderImage(item.title)} alt={item.title} />
            </div>
            <div style={{ position: 'relative' }}>
              <p>
                {item.title}
                <span className='uppercase pink'> | {item.size}</span>
              </p>
              <p>
                Edition of <b>5</b>
              </p>
              <p className='blue bolded'>
                {countPrice(item.size) * item.amount} dkk
              </p>
              <button
                className='x-button'
                onClick={() => onCartItemRemove(item.title, item.size)}
              >
                x
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
export default YourBag;
