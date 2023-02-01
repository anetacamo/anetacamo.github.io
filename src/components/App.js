import React, { useState, useEffect } from 'react';
import tagged from '../tagged.json';
import blogs from '../blogs.json';
import {
  AllTags,
  Blog,
  BlogList,
  Cart,
  Cv,
  KeywordSearch,
  Logo,
  ShoppingCart,
  Shop,
  Tagged,
  WebApps,
} from './';
import { Route, Switch } from 'react-router-dom';
import { initGA, trackingPageGA } from './reactGA';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

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

  const addThisItem = (title, size, price) => {
    //is item already in the bag?

    // all existing cart items WITHOUT the new item
    const filtered = itemsInCart.filter(
      (item) => item.title !== title || item.size !== size
    );
    const filteredTwo = itemsInCart.filter((item) => item.title !== title);
    const itemInCart = { title: title, size: size, amount: 1, price: price };

    // if not here, simply add it.
    if (filtered.length === itemsInCart.length) {
      localStorage.setItem(
        'cartContent',
        JSON.stringify([...itemsInCart, itemInCart])
      );
      setItemsInCart([...itemsInCart, itemInCart]); //simple value
    } else {
      // otherwise increase amount plus 1
      console.log('increased number at existing item');
      localStorage.setItem(
        'cartContent',
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
    localStorage.setItem('cartContent', JSON.stringify(filtered));
    setItemsInCart(filtered);
  };

  const minusThisItem = (title, size) => {
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
      {/* <div
        className='flex'
        style={{
          justifyContent: 'space-between',
          position: 'fixed',
          width: '100%',
          justifyContent: 'center',
          zIndex: 3,
          paddingTop: 0,
          marginTop: -6,
          paddingBottom: 48,
          backgroundImage:
            'linear-gradient(180deg, rgb(114 255 210) 40%, transparent)',
        }}
      > */}
      {/* <div className='flex' style={{}}>
          <Link to='/all-tags'>
            <h3 style={{ textDecoration: 'underline' }}>shop</h3>
          </Link>
          <FaArrowRight style={{ marginLeft: 12, paddingTop: 20 }} />
          <Link to='/tagged/ceramics'>
            <h3 style={{ marginLeft: 12, textDecoration: 'underline' }}>
              ceramics
            </h3>
          </Link>

          <Link to='/tagged/print'>
            <h3 style={{ marginLeft: 12, textDecoration: 'underline' }}>
              prints
            </h3>
          </Link>
          <Link to='/tagged/linoleum'>
            <h3 style={{ marginLeft: 12, textDecoration: 'underline' }}>
              linocut
            </h3>
          </Link>
          {/* <Link to='/tagged/linoleum'>
            <h3 style={{ marginLeft: 12, textDecoration: 'underline' }}>
              all tags
            </h3>
          </Link>
          <Link to='/tagged/linoleum'>
            <h3 style={{ marginLeft: 12, textDecoration: 'underline' }}>
              about
            </h3>
          </Link> */}
      {/* <Link to='/tagged/flower'>
              <h3 style={{ marginLeft: 12, textDecoration: 'underline' }}>
                paper flowers
              </h3>
            </Link> 
        </div> */}
      {/* </div> */}
      <ShoppingCart itemsInCart={itemsInCart} />
      <Switch>
        <Route
          path='/'
          render={() => (
            <BlogList onItemAdd={addThisItem} itemsInCart={itemsInCart} />
          )}
          exact
        />
        <Route path='/cv' component={Cv} exact />
        <Route path='/web' component={WebApps} exact />
        <Route path='/all-tags' component={AllTags} exact />
        <Route path='/shop' component={Shop} exact />
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
