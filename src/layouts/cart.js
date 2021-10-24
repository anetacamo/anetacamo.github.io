import React from 'react';
import { Link } from 'react-router-dom';
import { CheckoutForm, Footer, YourBag } from '../components';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(process.env.REACT_APP_PUBLISHABLE_KEY);

const Cart = ({ itemsInCart, onCartItemRemove }) => {
  const countPrice = (size) => {
    if (size === 'a3') {
      return 450;
    } else if (size === 'a4') {
      return 350;
    }
    return 250;
  };

  const itemsTotalPrice = () => {
    if (itemsInCart !== undefined) {
      const totalPrice = Object.keys(itemsInCart).reduce((previous, key) => {
        return (
          previous + itemsInCart[key].amount * countPrice(itemsInCart[key].size)
        );
      }, 0);
      return totalPrice;
    }
  };

  return (
    <div className='cart'>
      <Link to='/cv'>
        <div className='portrait'></div>
      </Link>
      <div className='center'>
        <div className='divider'></div>
        <YourBag
          itemsInCart={itemsInCart}
          onCartItemRemove={onCartItemRemove}
        />
        <div className='divider'></div>
        <h2>Total</h2>
        <p style={{ marginTop: 0 }}>{itemsTotalPrice()} dkk</p>
        <button>Checkout</button>
        <Link to='/tagged/print'>
          <button>All Prints</button>
        </Link>
        <Elements stripe={stripePromise}>
          <CheckoutForm
            totalPrice={itemsTotalPrice()}
            itemsInCart={itemsInCart}
          />
        </Elements>
      </div>
      <Footer itemsInCart={itemsInCart} />
    </div>
  );
};
export default Cart;
