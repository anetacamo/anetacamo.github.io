import React, { useState, useEffect } from "react";
import { Image } from "..";
import { Link } from "react-router-dom";
import styles from "./ShoppingCart.module.scss";

const ShoppingCart = ({ itemsInCart }) => {
  const [open, setOpen] = useState(false);

  const addAndRemove = () => {
    setOpen(true);
    setTimeout(() => {
      setOpen(false);
    }, 2000);
  };

  useEffect(() => {
    addAndRemove();
  }, [itemsInCart]);

  return (
    <div className="shopping-cart">
      <Link to="/cart">
        <Image path="/shopping_bag.png" />
        {itemsInCart.length !== 0 && (
          <p className="items-count" onClick={() => addAndRemove()}>
            {itemsInCart.length}
          </p>
        )}
        <p className={`success-message ${open && "visible"}`}>
          {open && "cart content updated"}
        </p>
      </Link>

      <Link to="/tagged/print" className={styles.shopLink}>
        shop
      </Link>
    </div>
  );
};
export default ShoppingCart;
