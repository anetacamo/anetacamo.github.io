import React, { useState, useEffect } from "react";
import tagged from "../tagged.json";
import blogs from "../blogs.json";
import {
  Blog,
  BlogList,
  Cart,
  Cv,
  KeywordSearch,
  Logo,
  ShoppingCart,
  Tagged,
} from "./";
import { Route, Switch } from "react-router-dom";
import { initGA, trackingPageGA } from "./reactGA";

function App() {
  useEffect(() => {
    initGA(); // Initialize google analytics
    trackingPageGA("/"); // = ReactGA.pageview (window.location.pathname);
  }, []);
  //items in the cart - first check the local storage
  const cartContent = JSON.parse(localStorage.getItem("cartContent")) || [];
  const [itemsInCart, setItemsInCart] = useState(cartContent);

  //sorting the blogs here
  blogs.sort(function (a, b) {
    if (a.date < b.date) return 1;
    if (a.date > b.date) return -1;
  });

  const addThisItem = (title, size, price) => {
    //is item already in the bag?

    // all existing cart items WITHOUT the new item
    const filtered = itemsInCart.filter(
      (item) => item.title !== title || item.size !== size
    );
    const filteredTwo = itemsInCart.filter((item) => item.title !== title);
    const itemInCart = { title: title, size: size, amount: 1, price: price };
    console.log("allItems: ", itemsInCart);
    console.log("items without chosen item: ", filtered);
    console.log(itemInCart);

    // if not here, simply add it.
    if (filtered.length === itemsInCart.length) {
      console.log("created new item");
      localStorage.setItem(
        "cartContent",
        JSON.stringify([...itemsInCart, itemInCart])
      );
      setItemsInCart([...itemsInCart, itemInCart]); //simple value
      console.log(filtered);
      console.log(itemsInCart);
      console.log("added one");
    } else {
      // otherwise increase amount plus 1
      console.log("increased number at existing item");
      localStorage.setItem(
        "cartContent",
        JSON.stringify([
          ...filteredTwo,
          {
            title: title,
            size: size,
            amount: 7,
            price: price,
          },
        ])
      );

      setItemsInCart([...itemsInCart, itemInCart]); //simple value
    }
  };

  const removeThisItem = (title, size) => {
    const filtered = itemsInCart.filter(
      (item) => item.title !== title || item.size !== size
    );
    localStorage.setItem("cartContent", JSON.stringify(filtered));
    setItemsInCart(filtered);
  };

  const minusThisItem = (title, size) => {
    const filtered = itemsInCart.filter(
      (item) => item.title !== title || item.size !== size
    );
    localStorage.setItem("cartContent", JSON.stringify(filtered));
    setItemsInCart(filtered);
  };

  return (
    <>
      <Logo />
      <KeywordSearch />
      <ShoppingCart itemsInCart={itemsInCart} />
      <Switch>
        <Route
          path="/"
          render={() => (
            <BlogList onItemAdd={addThisItem} itemsInCart={itemsInCart} />
          )}
          exact
        />
        <Route path="/cv" component={Cv} exact />
        <Route
          path="/cart"
          render={() => (
            <Cart
              itemsInCart={itemsInCart}
              onItemAdd={addThisItem}
              onCartItemRemove={removeThisItem}
            />
          )}
          exact
        />
        {blogs.map((blog, index) => (
          <Route
            path={`/:name`}
            exact
            key={index}
            render={(props) => <Blog {...props} onItemAdd={addThisItem} />}
          />
        ))}
        {tagged.map((tag, index) => (
          <Route
            key={index}
            path={`/tagged/:name`}
            render={(props) => (
              <Tagged {...props} key={index} onItemAdd={addThisItem} />
            )}
            exact
          />
        ))}
      </Switch>
    </>
  );
}

export default App;
