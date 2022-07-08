import React from "react";

export function Href({ children, href, nameclass }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      nameclass={nameclass}
    >
      {children}
    </a>
  );
}
export default Href;
