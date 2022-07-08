import React from "react";

const Image = ({ nameclass, path }) => {
  const staticPath = "";
  return (
    <img
      src={`/..${staticPath}/images${path}`}
      className={nameclass ? nameclass : null}
      alt={path}
    />
  );
};
export default Image;
