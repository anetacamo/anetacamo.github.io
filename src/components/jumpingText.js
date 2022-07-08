import React from "react";
import { Link } from "react-router-dom";

export function JumpingText({ text, link }) {
  const letters = text.split("");
  return (
    <Link to={link} className="jumping-text">
      {letters.map((letter, index) => (
        <i style={{ "--i": index }} key={index}>
          {letter}
        </i>
      ))}
    </Link>
  );
}
export default JumpingText;
