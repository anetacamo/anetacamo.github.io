import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

function ShopItemsLeft({ blog, onItemAdd }) {
  return (
    <div className='selling-button left'>
      <p className='pink' style={{ marginTop: 12 }}>
        This item is available
      </p>
      {/* <RadioCount onItemAdd={onItemAdd} blog={blog} />
      {blog.variants}
      {blog.price} */}
      <div className='flex-center'>
        <p className='pink bolded price' style={{ marginRight: 4 }}>
          {blog.price ?? 450}dkk <FaArrowRight style={{ marginBottom: -2 }} />
        </p>

        <p
          className='underlined bolded'
          onClick={() => onItemAdd(blog.title, '', blog.price ?? 450)}
        >
          add to cart
        </p>
      </div>
    </div>
  );
}
export default ShopItemsLeft;
