import React from 'react';

export function Input({
  large,
  type,
  placeholder,
  value,
  onInputChange,
  required,
}) {
  return (
    <input
      className={large && `large`}
      placeholder={placeholder}
      type={type ? type : 'text'}
      value={value}
      onChange={(e) => onInputChange(e.target.value)}
      required={required}
    />
  );
}
export default Input;
