import React, { useContext, useEffect } from "react";

import AppContext from "../context/app/appContext";

const Home = () => {
  const appContext = useContext(AppContext);
  const { blogPosts, getAllPosts } = appContext;

  console.log(blogPosts);

  useEffect(() => {
    getAllPosts();
  }, []);
  return (
    <div>
      <h1>Hello World</h1>
      {blogPosts.length > 0
        ? blogPosts.map((post) => {
            return <p>{post.title}</p>;
          })
        : null}
    </div>
  );
};

export default Home;
