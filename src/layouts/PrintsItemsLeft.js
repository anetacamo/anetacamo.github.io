import React from 'react';

import RadioCount from '../components/RadioCount';

function PrintsItemsLeft({ blog, onItemAdd }) {
  return (
    <div className='selling-button left'>
      <p className='pink' style={{ marginTop: 12 }}>
        This drawing is available as a print in:
      </p>
      <RadioCount onItemAdd={onItemAdd} blog={blog} />
    </div>
  );
}
export default PrintsItemsLeft;
