import React from 'react';

export function Href({ children, href, nameClass }) {
  return (
    <a
      href={href}
      target='_blank'
      rel='noopener noreferrer'
      nameClass={nameClass}
    >
      {children}
    </a>
  );
}
export default Href;
