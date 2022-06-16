import React, { useContext, useEffect } from "react";
import moment from "moment";
import { Link } from "react-router-dom";

import Layout from "../components/layout/Layout";

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
    <Layout>
      <div className="home-container">
        <div className="left-column">
          {blogPosts.length > 0 ? (
            <div className="blog-list">
              <ul>
                {blogPosts.map((post, index) => {
                  return (
                    <li>{`${moment(post.timestamp).format(
                      "DD MMM YYYY"
                    )} - Post ${index + 1}`}</li>
                  );
                })}
              </ul>
            </div>
          ) : null}
        </div>
        <div className="right-column">
          <div className="home-posts-container">
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
      </div>
    </Layout>
  );
};

export default Home;
