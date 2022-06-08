import React, { useState } from "react";
import { prints } from "../types/shopItems";
import { Link } from "react-router-dom";

function ShopItemsLeft({ blog, onItemAdd }) {
  const [radio, setRadio] = useState(0);

  return (
    <div className="selling-button">
      <br />
      <br />
      <p>
        <em>This drawing is available as a print in:</em>
      </p>
      <form className="flex-center" style={{ justifyContent: "flex-start" }}>
        {prints.map((size, index) => (
          <label className="label flex-center" style={{ margin: "4px 0" }}>
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

        <span className="pink bolded"> | {prints[radio].price}dkk</span>
      </form>

      <button
        onClick={() => onItemAdd(blog.title, prints[radio].size)}
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
