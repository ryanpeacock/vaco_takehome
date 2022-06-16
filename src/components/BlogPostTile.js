import React from "react";
import moment from "moment";

const BlogPostTile = ({ data }) => {
  const { text, timestamp, title, id } = data;
  return (
    <div className="blog-post-tile">
      <div className="top">
        <h2>{title}</h2>
        <span>{moment(timestamp).format("DD MMM YYYY")}</span>
      </div>
      <div className="content" dangerouslySetInnerHTML={{ __html: text }} />
    </div>
  );
};

export default BlogPostTile;
