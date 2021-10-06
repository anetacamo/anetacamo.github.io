import React, { useState } from 'react';
import tagged from '../tagged.json';
import { slugify } from '../utils/slugify';
import { Link } from 'react-router-dom';

function KeywordSearch() {
  const [hash, displayHash] = useState(false);
  console.log(hash);
  return (
    <div className='top-right'>
      <div className='hash' onClick={() => displayHash(!hash)}></div>
      <div
        className={`right-side-menu ${hash || 'hidden'}`}
        onClick={() => displayHash(!hash)}
      >
        <div className='keyword-search'>
          <input
            type='text'
            placeholder='Find the hash...'
            autocomplete='off'
          />
          <div className='keyword-container'>
            <ul>
              {tagged.map((tag) => (
                <li>
                  <Link to={`/tagged/${slugify(tag.title)}`}>{tag.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
export default KeywordSearch;
