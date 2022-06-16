import React, { useContext, useEffect } from "react";
import moment from "moment";
import AppContext from "../context/app/appContext";
import * as FaIcons from "react-icons/fa";
import Header from "../components/layout/Header";

const SinglePost = ({ data }) => {
  const { id, title, timestamp, text } = data;
  return (
    <div className="post-page">
      <span>{moment(timestamp).format("DD MMM YYYY")}</span>
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
  const { singleBlogPost, getSinglePost, clearSinglePost } = appContext;

  console.log(singleBlogPost);

  useEffect(() => {
    getSinglePost(id);
    return () => {
      clearSinglePost();
    };
  }, []);

  return (
    <div className="single-post-page">
      <Header />
      {Object.keys(singleBlogPost).length === 0 ? (
        <h2>Loading...</h2>
      ) : (
        <>
          <div className="title-block">
            <div className="overlay">
              <h1> {singleBlogPost.title}</h1>
            </div>
          </div>
          <div className="container">
            <FaIcons.FaArrowLeft
              onClick={() => history.push("/")}
              className="back-arrow"
            />
            <SinglePost data={singleBlogPost} />
          </div>
        </>
      )}
    </div>
  );
};

export default BlogPost;
