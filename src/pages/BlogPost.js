import React, { useContext, useEffect } from "react";
import AppContext from "../context/app/appContext";
import * as FaIcons from "react-icons/fa";

const SinglePost = ({ data }) => {
  const { id, title, timestamp, text } = data;
  return (
    <div>
      <h1>{title}</h1>
      <span>{timestamp}</span>
      <div className="content" dangerouslySetInnerHTML={{ __html: text }} />
    </div>
  );
};

const BlogPost = ({
  match: {
    params: { id },
  },
  history,
}) => {
  const appContext = useContext(AppContext);
  const { singleBlogPost, getSinglePost } = appContext;

  console.log(singleBlogPost);

  useEffect(() => {
    getSinglePost(id);
  }, []);

  return Object.keys(singleBlogPost).length === 0 ? (
    <h2>Loading...</h2>
  ) : (
    <div className="single-post-page">
      <FaIcons.FaArrowLeft onClick={() => history.push("/")} />
      <SinglePost data={singleBlogPost} />
    </div>
  );
};

export default BlogPost;
