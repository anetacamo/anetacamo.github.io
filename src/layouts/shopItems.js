import React from "react";
import RadioCount from "../components/RadioCount";

function ShopItems({ blog, onItemAdd }) {
  return (
    <div className="selling-button default">
      <p className="bolded">{blog.title}</p>
      <p>available in:</p>

      <RadioCount onItemAdd={onItemAdd} blog={blog} />
    </div>
  );
}
export default ShopItems;
