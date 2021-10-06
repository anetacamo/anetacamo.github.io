import React from 'react';

export function JumpingText({ text }) {
  const letters = text.split('');
  return (
    <a href='/tagged/print/' className='jumping-text'>
      {letters.map((letter, index) => (
        <i style={{ '--i': index }}>{letter}</i>
      ))}
    </a>
  );
}
export default JumpingText;
