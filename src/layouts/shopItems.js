import React, { useState } from "react";
import { prints } from "../types/shopItems";

function ShopItems({ blog, onItemAdd }) {
  const [radio, setRadio] = useState(0);

  return (
    <div className="selling-button">
      <p className="bolded">{blog.title}</p>
      <p>choose a size of a print</p>
      <form className="flex-center">
        {prints.map((size, index) => (
          <label className="flex-center">
            {size.size}
            <input
              type="radio"
              name="radio"
              checked={radio == index}
              value={index}
              onChange={(e) => setRadio(e.target.value)}
            />
          </label>
        ))}
      </form>
      <p className="pink bolded">{prints[radio].price}dkk</p>
      <button
        onClick={() => onItemAdd(blog.title, prints[radio].size)}
        style={{ marginTop: 16 }}
      >
        add this to the cart
      </button>
    </div>
  );
}
export default ShopItems;
