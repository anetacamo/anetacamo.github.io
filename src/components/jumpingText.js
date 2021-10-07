import React from 'react';
import { Link } from 'react-router-dom';

export function JumpingText({ text }) {
  const letters = text.split('');
  return (
    <Link to='/tagged/print/' className='jumping-text'>
      {letters.map((letter, index) => (
        <i style={{ '--i': index }}>{letter}</i>
      ))}
    </Link>
  );
}
export default JumpingText;
