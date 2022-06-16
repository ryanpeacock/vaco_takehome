import React, { useEffect, useContext, useState } from "react";
import AppContext from "../context/app/appContext";
import * as FaIcons from "react-icons/fa";

import BlogPostTile from "../components/BlogPostTile";
import PostModal from "../components/PostModal";

const Dashboard = () => {
  const [postType, setPostType] = useState("CREATE");
  const [postData, setPostData] = useState({});
  const appContext = useContext(AppContext);
  const {
    blogPosts,
    getAllPosts,
    viewModals: { post },
    setShowModal,
    deleteAllPosts,
    deleteBlogPost,
  } = appContext;

  useEffect(() => {
    getAllPosts();
  }, []);

  return (
    <div>
      {post && <PostModal type={postType} data={postData} />}
      <h1>Dashboard</h1>
      <div
        className="btn btn-blue"
        onClick={() => {
          setPostType("CREATE");
          setShowModal("post", true);
        }}
      >
        Create Blog Post
      </div>
      <div className="btn btn-red" onClick={() => deleteAllPosts()}>
        Delete All Posts
      </div>
      <h2>All Blog Posts</h2>
      <div className="posts-container">
        {blogPosts.length > 0
          ? blogPosts.map((post) => {
              return (
                <div className="post-container" key={post.id}>
                  <BlogPostTile data={post} />
                  <div className="actions">
                    <div
                      className="edit"
                      onClick={() => {
                        setPostType("EDIT");
                        setPostData(post);
                        setShowModal("post", true);
                      }}
                    >
                      <FaIcons.FaPencilAlt />
                    </div>
                    <div
                      className="delete"
                      onClick={() => deleteBlogPost(post.id)}
                    >
                      <FaIcons.FaTrashAlt />
                    </div>
                  </div>
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
};

export default Dashboard;
