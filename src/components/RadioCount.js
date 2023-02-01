import React, { useState } from 'react';
import { prints } from '../types/shopItems';
import Radio from './Radio';
import { FaArrowRight } from 'react-icons/fa';

function RadioCount({ onItemAdd, blog }) {
  const [radio, setRadio] = useState(0);

  const countPrice = (size) => {
    const printItem = prints.find((print) => print.size === size);
    return printItem.price;
  };

  return (
    <div className='flex-center'>
      <Radio onRadioChange={setRadio} radio={radio} />
      <p
        className='pink bolded price'
        style={{ marginLeft: 16, marginRight: 4 }}
      >
        {prints[radio].price}dkk <FaArrowRight style={{ marginBottom: -2 }} />
      </p>

      <p
        className='underlined bolded'
        onClick={() =>
          onItemAdd(
            blog.title,
            prints[radio].size,
            countPrice(prints[radio].size)
          )
        }
      >
        add to cart
      </p>
    </div>
  );
}
export default RadioCount;
