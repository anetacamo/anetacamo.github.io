import React, { useState } from "react";
import { prints } from "../types/shopItems";
import { Link } from "react-router-dom";

function ShopItemsLeft({ blog, onItemAdd }) {
  const [radio, setRadio] = useState(0);

  const countPrice = (size) => {
    if (size === "a3") {
      return 450;
    } else if (size === "a4") {
      return 350;
    }
  };

  return (
    <div className="selling-button">
      <p style={{ fontSize: 12 }} className="pink">
        This drawing is available as a print in:
      </p>
      <form className="flex-center" style={{ justifyContent: "flex-start" }}>
        {prints.map((size, index) => (
          <label
            className="label flex-center"
            style={{ padding: "12px 0", fontSize: 12 }}
          >
            {size.size}
            <input
              type="radio"
              name="radio"
              checked={radio == index}
              value={index}
              onChange={(e) => setRadio(e.target.value)}
            />
            <span class="checkmark"></span>
          </label>
        ))}
      </form>

      <p style={{ fontSize: 12 }}>{prints[radio].price}dkk</p>

      <button
        onClick={
          (() => onItemAdd(blog.title, prints[radio].size),
          countPrice(prints[radio].size))
        }
        style={{ marginTop: 16, marginLeft: 0 }}
      >
        add to cart
      </button>
      <Link to="/tagged/print">
        <button>print shop</button>
      </Link>
    </div>
  );
}
export default ShopItemsLeft;
