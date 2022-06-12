import React, { useState } from "react";
import { prints } from "../types/shopItems";

function ShopItems({ blog, onItemAdd }) {
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
        onClick={() =>
          onItemAdd(
            blog.title,
            prints[radio].size,
            countPrice(prints[radio].size)
          )
        }
        style={{ marginTop: 0, border: "none", textDecoration: "underline" }}
      >
        add to cart
      </button>
    </div>
  );
}
export default ShopItems;
