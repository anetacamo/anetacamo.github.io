import React from 'react';
import { Image } from './';
import { Link } from 'react-router-dom';

const ShoppingCart = ({ itemsInCart }) => {
  console.log(itemsInCart);
  console.log(itemsInCart.length);
  return (
    <div className='shopping-cart'>
      {itemsInCart.length !== 0 && (
        <Link to='/cart'>
          <Image path='/shopping_bag.png' />
          <p
            style={{
              position: 'absolute',
              backgroundColor: 'white',
              padding: '7px 4px 8px 4px',
              fontWeight: 900,
              margin: 0,
              lineHeight: 0,
              borderRadius: '50%',
              top: -7,
              right: 32,
            }}
          >
            {itemsInCart.length}
          </p>
        </Link>
      )}
    </div>
  );
};
export default ShoppingCart;
