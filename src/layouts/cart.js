import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  CheckoutForm,
  Footer,
  Formspree,
  ShopSection,
  YourBag,
} from '../components';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(process.env.REACT_APP_PUBLISHABLE_KEY);

const Cart = ({ itemsInCart, onCartItemRemove }) => {
  const [checkout, setCheckout] = useState('cart');
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
        {checkout === 'cart' && (
          <>
            <div className='divider'></div>
            <YourBag
              itemsInCart={itemsInCart}
              onCartItemRemove={onCartItemRemove}
            />
          </>
        )}
        <div className='divider'></div>
        <h2>Total</h2>
        <p style={{ marginTop: 0 }}>{itemsTotalPrice()} dkk</p>
        {checkout === 'cart' ? (
          <>
            <button onClick={() => setCheckout('choose')}>Checkout</button>
            <Link to='/tagged/print'>
              <button>All Prints</button>
            </Link>{' '}
          </>
        ) : (
          <p onClick={() => setCheckout('cart')} className='underlined'>
            see cart items
          </p>
        )}
        {checkout === 'choose' ? (
          <ShopSection title='How do you wanna get your piece?'>
            <p>Can be either handed in Aarhus or delivered via post in EU.</p>
            <button onClick={() => setCheckout('pickup')}>
              Pick up in Aarhus
            </button>

            <button onClick={() => setCheckout('post')}>
              Pay online and get by post
            </button>
          </ShopSection>
        ) : (
          <>
            <div className='divider'></div>
            <button onClick={() => setCheckout('pickup')}>
              Pick up in Aarhus
            </button>
            <button onClick={() => setCheckout('post')}>
              Pay online and get by post
            </button>
          </>
        )}
        {checkout === 'pickup' && (
          <ShopSection title='Pick up in Aarhus'>
            <p>
              Pick up can be done every working day from 11 - 17 in Aaarhus,
              Frontløberne. I accept mobile pay or cash.
            </p>

            <br />
            <Formspree itemsInCart={itemsInCart} />
          </ShopSection>
        )}
        {checkout === 'post' && (
          <Elements stripe={stripePromise}>
            <CheckoutForm
              totalPrice={itemsTotalPrice()}
              itemsInCart={itemsInCart}
            />
          </Elements>
        )}
        <div className='divider'></div>{' '}
      </div>
      <Footer itemsInCart={itemsInCart} />
    </div>
  );
};
export default Cart;
