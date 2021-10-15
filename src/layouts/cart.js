import React from 'react';
import { Footer, Href } from '../components';
import { Link } from 'react-router-dom';

const Cart = ({ itemsInCart, onItemAdd }) => {
  const countPrice = (size) => {
    if (size == 'a3') {
      return 450;
    } else if (size == 'a4') {
      return 350;
    }
    return 250;
  };

  const itemsTotalPrice = () => {
    if (itemsInCart != undefined) {
      const totalPrice = Object.keys(itemsInCart).reduce((previous, key) => {
        return (
          previous + itemsInCart[key].amount * countPrice(itemsInCart[key].size)
        );
      }, 0);
      console.log(totalPrice);
      return totalPrice;
    }
  };
  return (
    <>
      <Link to='/cv'>
        <div className='portrait'></div>
      </Link>
      <div class='blog-container center'>
        <h2>your bag</h2>

        {itemsInCart.length === 0 && <div class='blogs'>No items here.</div>}
        <div className='flex'>
          {itemsInCart?.map((item, index) => (
            <div style={{ textAlign: 'left', margin: 4 }}>
              <img
                src={`/images/blogs/00${index + 7}.jpg`}
                style={{
                  maxWidth: 200,
                  maxHeight: 200,
                  objectFit: 'cover',
                  border: '6px solid black',
                  marginTop: 32,
                  marginBottom: -12,
                }}
              />
              <h3>
                {item.title}
                <span className='uppercase pink' style={{ margin: 4 }}>
                  {item.size}
                </span>
              </h3>
              <p>
                limited edition of <b>12</b>
              </p>
              {/* 
              <p>
                {item.amount} | {countPrice(item.size)}dkk
              </p>*/}
              <p className='blue bolded' style={{ marginTop: -18 }}>
                {countPrice(item.size) * item.amount} dkk
              </p>
              x
            </div>
          ))}
        </div>
        <h2>Total</h2>
        <p>{itemsTotalPrice()} dkk</p>

        <p className='blue'>{}</p>
        <button>Checkout</button>
      </div>
      <Footer itemsInCart={itemsInCart} />
    </>
  );
};
export default Cart;
