import React from "react";
import { prints } from "../types/shopItems";

function Radio({ onRadioChange, radio }) {
  return (
    <form className="flex-center">
      {prints.map((size, index) => (
        <label className="label flex-center">
          {size.size}
          <input
            type="radio"
            name="radio"
            checked={radio == index}
            value={index}
            onChange={(e) => onRadioChange(e.target.value)}
          />
          <span class="checkmark"></span>
        </label>
      ))}
    </form>
  );
}
export default Radio;
