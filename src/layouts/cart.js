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

const Cart = ({ itemsInCart, onCartItemRemove, onItemAdd }) => {
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
              onItemAdd={onItemAdd}
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
              Hi there! To buy a print please choose how youd like to receive
              it.
              <br /> Or send me <a href="mailto:anetacamo@gmail.com">a mail</a>
              <br />
            </p>
            <p>
              <i>Mailing by post costs 50dkk. Pick up is free</i>
            </p>
            <button
              className={checkout === "pickup" && "active"}
              onClick={() => setCheckout("pickup")}
            >
              Pick up in Aarhus
            </button>
            <button
              className={checkout === "post" && "active"}
              onClick={() => setCheckout("post")}
            >
              Receive by post
            </button>
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
              Frontløberne. <br />I accept mobile pay or cash.
            </p>

            <br />
            <Formspree
              itemsInCart={itemsInCart}
              messageText="Let me know when would it suit you - but please give me at least two working day to get the order ready:)"
            />
          </ShopSection>
        )}
        {checkout === "post" && (
          // <Elements stripe={stripePromise}>
          //   <CheckoutForm
          //     totalPrice={itemsTotalPrice()}
          //     itemsInCart={itemsInCart}
          //   />
          // </Elements>
          <ShopSection title="Receive by post">
            <p>
              Orders can be shipped anywhere in Europe. It costs 50dkk.
              <br /> When I receive you message I will send you confitmation
              message with payment deatils, prepare your order & when the order
              is payed, it will be shipped.
            </p>

            <br />
            <Formspree
              itemsInCart={itemsInCart}
              messageText="Please share with me your address here :)"
            />
          </ShopSection>
        )}
        <div className="divider"></div>{" "}
      </div>
      <Footer itemsInCart={itemsInCart} />
    </div>
  );
};
export default Cart;
