import React from "react";

import { Link } from "react-router-dom";
import RadioCount from "../components/RadioCount";

function ShopItemsLeft({ blog, onItemAdd }) {
  return (
    <div className="selling-button left">
      <p className="pink">This drawing is available as a print in:</p>

      <RadioCount onItemAdd={onItemAdd} blog={blog} />
      <Link to="/tagged/print">
        <button>print shop</button>
      </Link>
    </div>
  );
}
export default ShopItemsLeft;
