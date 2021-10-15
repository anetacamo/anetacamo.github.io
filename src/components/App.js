import React, { useState } from 'react';
import tagged from '../tagged.json';
import blogs from '../blogs.json';
import { Blog, BlogList, Cart, Cv, KeywordSearch, Logo, Tagged } from './';
import { Route, Switch } from 'react-router-dom';

function App() {
  const [chosenItems, setChosenItems] = useState([]);

  const reversed = blogs.reverse();
  const addThisItem = (title, size) => {
    //check for item with same name and size in the array
    const itemIndex = chosenItems.findIndex(
      (item) => item.title === title && item.size === size
    );

    // if not here, simply add it.
    if (itemIndex === -1) {
      const itemInCart = { title: title, size: size, amount: 1 };
      setChosenItems([...chosenItems, itemInCart]); //simple value
    } else {
      {
        /* 
      const itemInCart = {
        title: title,
        size: size,
        amount: chosenItems[itemIndex].amount + 1,
      };
      const updatedArray = chosenItems;
      chosenItems[itemIndex] = itemInCart;
      setChosenItems(chosenItems);
      */
      }
    }
  };

  const removeThisItem = (title, size) => {
    const filtered = chosenItems.filter(
      (item) => item.title !== title && item.size !== size
    );
    setChosenItems(filtered);
  };

  const removeOne = (title, size) => {
    const itemIndex = chosenItems.findIndex(
      (item) => item.title === title && item.size === size
    );
    const amount = chosenItems[itemIndex].amount;
    if (amount === 1) {
      removeThisItem(title, size);
    } else {
      const itemInCart = {
        title: title,
        size: size,
        amount: amount - 1,
      };
      const updatedArray = chosenItems;
      updatedArray[itemIndex] = itemInCart;
      setChosenItems(updatedArray);
    }
  };
  return (
    <>
      <Logo />
      <KeywordSearch />
      <Switch>
        <Route
          path='/'
          render={() => (
            <BlogList onItemAdd={addThisItem} itemsInCart={chosenItems} />
          )}
          exact
        />
        <Route path='/cv' component={Cv} exact />
        <Route
          path='/cart'
          render={() => (
            <Cart itemsInCart={chosenItems} onItemAdd={addThisItem} />
          )}
          exact
        />
        {reversed.map((blog, index) => (
          <Route path={`/:name`} component={Blog} key={index} exact />
        ))}
        {tagged.map((tag, index) => (
          <Route path={`/tagged/:name`} component={Tagged} key={index} />
        ))}
      </Switch>
    </>
  );
}

export default App;
