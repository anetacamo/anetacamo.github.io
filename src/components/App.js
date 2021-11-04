import React, { useState, useEffect } from 'react';
import tagged from '../tagged.json';
import blogs from '../blogs.json';
import {
  Blog,
  BlogList,
  Cart,
  Cv,
  KeywordSearch,
  Logo,
  ShoppingCart,
  Tagged,
} from './';
import { Route, Switch } from 'react-router-dom';
import { initGA, trackingPageGA } from './reactGA';

const sizes = ['a3', 'a4'];

function App() {
  useEffect(() => {
    initGA(); // Initialize google analytics
    trackingPageGA('/'); // = ReactGA.pageview (window.location.pathname);
  }, []);
  //items in the cart - first check the local storage
  const cartContent = JSON.parse(localStorage.getItem('cartContent')) || [];
  const [itemsInCart, setItemsInCart] = useState(cartContent);

  //sorting the blogs here
  blogs.sort(function (a, b) {
    if (a.date < b.date) return 1;
    if (a.date > b.date) return -1;
  });

  const addThisItem = (title, size) => {
    //check for item with same name and size in the array
    const itemIndex = itemsInCart.findIndex(
      (item) => item.title === title && item.size === size
    );

    // if not here, simply add it.
    if (itemIndex === -1) {
      const itemInCart = { title: title, size: size, amount: 1 };
      localStorage.setItem(
        'cartContent',
        JSON.stringify([...itemsInCart, itemInCart])
      );
      setItemsInCart([...itemsInCart, itemInCart]); //simple value
    }
  };

  const removeThisItem = (title, size) => {
    const filtered = itemsInCart.filter(
      (item) => item.title !== title || item.size !== size
    );
    localStorage.setItem('cartContent', JSON.stringify(filtered));
    setItemsInCart(filtered);
  };

  return (
    <>
      <Logo />
      <KeywordSearch />
      <ShoppingCart itemsInCart={itemsInCart} />
      <Switch>
        <Route
          path='/'
          render={() => (
            <BlogList
              onItemAdd={addThisItem}
              itemsInCart={itemsInCart}
              sizes={sizes}
            />
          )}
          exact
        />
        <Route path='/cv' component={Cv} exact />
        <Route
          path='/cart'
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
            component={Blog}
            sizes={sizes}
            key={index}
            exact
          />
        ))}
        {tagged.map((tag, index) => (
          <Route
            key={index}
            path={`/tagged/:name`}
            render={(props) => (
              <Tagged
                {...props}
                key={index}
                sizes={sizes}
                onItemAdd={addThisItem}
              />
            )}
            exact
          />
        ))}
      </Switch>
    </>
  );
}

export default App;
