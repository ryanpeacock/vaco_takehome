import React from "react";

const BlogPostTile = ({ data }) => {
  const { text, timestamp, title, id } = data;
  return (
    <div className="blog-post-tile">
      <h2>{title}</h2>
      <span>{timestamp}</span>
      <div className="content" dangerouslySetInnerHTML={{ __html: text }} />
    </div>
  );
};

export default BlogPostTile;
