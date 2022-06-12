import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  CheckoutForm,
  Footer,
  Formspree,
  MetaTags,
  ShopSection,
  YourBag,
} from "../components";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(process.env.REACT_APP_PUBLISHABLE_KEY);

const Cart = ({ itemsInCart, onCartItemRemove }) => {
  const [checkout, setCheckout] = useState("cart");
  console.log(itemsInCart);

  const itemsTotalPrice = () => {
    if (itemsInCart !== undefined) {
      const totalPrice = Object.keys(itemsInCart).reduce((previous, key) => {
        return previous + itemsInCart[key].amount * itemsInCart[key].price;
      }, 0);
      return totalPrice;
    }
  };

  return (
    <div className="cart">
      <MetaTags
        name="Your Bag"
        description="Review your items and proceed to checkout"
      />
      <Link to="/cv">
        <div className="portrait"></div>
      </Link>
      <div className="center">
        {checkout === "cart" && (
          <>
            <div className="divider"></div>
            <YourBag
              itemsInCart={itemsInCart}
              onCartItemRemove={onCartItemRemove}
            />
          </>
        )}
        {itemsInCart.length === 0 ? (
          <Link to="/tagged/print">
            <button style={{ marginTop: 20 }}>Prints</button>
          </Link>
        ) : (
          <>
            <div className="divider"></div>
            <h2>Total</h2>
            <p style={{ marginTop: 0 }}>
              {itemsInCart.length} items - {itemsTotalPrice()} dkk
            </p>
            <p>
              Hi there! Currently the online payment is being implemented.{" "}
              <br /> If you still wish to buy a print, please write me a message
              on <a href="mailto:anetacamo@gmail.com">a mail</a> or fill a short
              form via pick up in Aarhus.
              <br /> (even id you want the prints to be sent via mail)
            </p>
            <button
              className={checkout === "pickup" && "active"}
              onClick={() => setCheckout("pickup")}
            >
              Pick up in Aarhus
            </button>
            {/* <button
              className={checkout === 'post' && 'active'}
              onClick={() => setCheckout('post')}
            >
              Pay online and get by post
            </button> */}
          </>
        )}
        {checkout !== "cart" && (
          <p onClick={() => setCheckout("cart")} className="underlined">
            see cart items
          </p>
        )}
        {checkout === "pickup" && (
          <ShopSection title="Pick up in Aarhus">
            <p>
              Pick up can be done every working day from 11 - 17 in Aaarhus,
              Frontløberne. I accept mobile pay or cash.
            </p>

            <br />
            <Formspree itemsInCart={itemsInCart} />
          </ShopSection>
        )}
        {checkout === "post" && (
          <Elements stripe={stripePromise}>
            <CheckoutForm
              totalPrice={itemsTotalPrice()}
              itemsInCart={itemsInCart}
            />
          </Elements>
        )}
        <div className="divider"></div>{" "}
      </div>
      <Footer itemsInCart={itemsInCart} />
    </div>
  );
};
export default Cart;
