import React from 'react';

export function Button({ children, activity, divname }) {
  return (
    <div
      className={divname}
      onClick={activity}
      onKeyDown={activity}
      role='button'
      key={divname}
      tabIndex={0}
      aria-label={`switch ${divname}`}
    >
      {children}
    </div>
  );
}
export default Button;
