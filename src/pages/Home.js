import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";

import AppContext from "../context/app/appContext";

import BlogPostTile from "../components/BlogPostTile";

const Home = () => {
  const appContext = useContext(AppContext);
  const { blogPosts, getAllPosts } = appContext;

  console.log(blogPosts);

  useEffect(() => {
    getAllPosts();
  }, []);
  return (
    <div>
      <h1>My Blog</h1>
      <div className="posts-container">
        {blogPosts.length > 0
          ? blogPosts.map((post) => {
              return (
                <Link to={`/post/${post.id}`} key={post.id}>
                  <BlogPostTile data={post} />
                </Link>
              );
            })
          : null}
      </div>
    </div>
  );
};

export default Home;
