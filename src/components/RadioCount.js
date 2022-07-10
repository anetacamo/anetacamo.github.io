import React, { useState } from "react";
import { prints } from "../types/shopItems";
import Radio from "./Radio";

function RadioCount({ onItemAdd, blog }) {
  const [radio, setRadio] = useState(0);

  const countPrice = (size) => {
    const printItem = prints.find((print) => print.size === size);
    return printItem.price;
  };

  return (
    <>
      <Radio onRadioChange={setRadio} radio={radio} />
      <p className="pink bolded price">{prints[radio].price}dkk</p>

      <button
        onClick={() =>
          onItemAdd(
            blog.title,
            prints[radio].size,
            countPrice(prints[radio].size)
          )
        }
      >
        add to cart
      </button>
    </>
  );
}
export default RadioCount;
