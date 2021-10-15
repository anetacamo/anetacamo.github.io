import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons';

export function Like({ onIconClick, likes, liked }) {
  return (
    <div
      onClick={() => onIconClick()}
      style={{ position: 'absolute', right: 4, fontSize: 14, display: 'flex' }}
      className='pink'
    >
      <span
        style={{
          fontSize: 10,
          padding: '1px 6px',
          style: 'inlineBlock',
          color: 'gray',
        }}
      >
        {likes > 0 && likes}
      </span>
      <FontAwesomeIcon icon={liked ? faHeart : farHeart} />
    </div>
  );
}
export default Like;
