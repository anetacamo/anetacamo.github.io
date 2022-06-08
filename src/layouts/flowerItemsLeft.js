import React, { useState } from "react";
import { Link } from "react-router-dom";

function FlowerItemsLeft({ blog, onItemAdd }) {
  const [radio, setRadio] = useState(0);

  return (
    <div className="selling-button">
      <br />
      <br />
      <p style={{ paddingBottom: 4 }}>
        <em>Choose a color:</em> {blog.colors.split(", ")[radio]}
      </p>
      <form className="flex-center" style={{ justifyContent: "flex-start" }}>
        {blog.colors.split(", ").map((color, index) => (
          <label className="label flex-center" style={{ margin: "4px 0" }}>
            <input
              type="radio"
              name="radio"
              checked={radio == index}
              value={index}
              onChange={(e) => setRadio(e.target.value)}
            />
            <span class="checkmark" style={{ backgroundColor: color }}></span>
          </label>
        ))}
        <p>
          <span className="pink bolded" style={{ margin: 8 }}>
            |
          </span>
          {blog.price}dkk
        </p>
      </form>

      <button
        onClick={() => onItemAdd(blog.title, blog.colors.split(", ")[radio])}
        style={{ marginTop: 16, marginLeft: 0 }}
      >
        add to cart
      </button>
      <Link to="/tagged/flower">
        <button>flowers shop</button>
      </Link>
    </div>
  );
}
export default FlowerItemsLeft;
