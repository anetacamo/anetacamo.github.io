import React, { useState } from "react";

function FlowerItems({ blog, onItemAdd }) {
  const [radio, setRadio] = useState(0);

  return (
    <div className="selling-button">
      <p className="bolded">{blog.title}</p>
      <p style={{ paddingBottom: 4 }}>
        <em>Choose a color:</em> {blog.colors.split(", ")[radio]}
      </p>
      <form className="flex-center">
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
      </form>

      <p className="pink bolded" style={{ marginTop: 12 }}>
        {blog.price}dkk
      </p>
      <button
        onClick={() =>
          onItemAdd(
            blog.title,
            blog.colors.split(", ")[radio],
            parseInt(blog.price, 10)
          )
        }
        style={{ marginTop: 0, border: "none", textDecoration: "underline" }}
      >
        add to cart
      </button>
    </div>
  );
}
export default FlowerItems;
