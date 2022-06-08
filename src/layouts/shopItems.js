import React, { useState } from "react";
import { prints } from "../types/shopItems";

function ShopItems({ blog, onItemAdd }) {
  const [radio, setRadio] = useState(0);

  return (
    <div className="selling-button">
      <p className="bolded">{blog.title}</p>
      <p>available in:</p>
      <form className="flex-center">
        {prints.map((size, index) => (
          <label className="label flex-center">
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
      <p className="pink bolded" style={{ marginTop: 12 }}>
        {prints[radio].price}dkk
      </p>
      <button
        onClick={() => onItemAdd(blog.title, prints[radio].size)}
        style={{ marginTop: 16 }}
      >
        add to cart
      </button>
    </div>
  );
}
export default ShopItems;
