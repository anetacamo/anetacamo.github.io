import React from "react";
import { Link } from "react-router-dom";
import { slugify } from "../utils/slugify";

const Tags = ({ blog }) => {
  return (
    <p>
      <span className="bolded">tagged</span>{" "}
      {blog.tags?.split(", ").map((tag, index) => (
        <Link to={`/tagged/${slugify(tag)}`} className="tags" key={index}>
          #{tag}{" "}
        </Link>
      ))}
    </p>
  );
};
export default Tags;
