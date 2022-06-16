import React, { useEffect, useContext, useState } from "react";
import AppContext from "../context/app/appContext";
import * as FaIcons from "react-icons/fa";

import Layout from "../components/layout/Layout";

import BlogPostTile from "../components/BlogPostTile";
import PostModal from "../components/PostModal";

const PostContainer = ({ data, setPostType, setPostData }) => {
  const appContext = useContext(AppContext);
  const { setShowModal, deleteBlogPost } = appContext;
  return (
    <div className="post-tile-container" key={data.id}>
      <BlogPostTile data={data} />
      <div className="actions">
        <div
          className="edit"
          onClick={() => {
            setPostType("EDIT");
            setPostData(data);
            setShowModal("post", true);
          }}
        >
          <FaIcons.FaPencilAlt />
        </div>
        <div className="delete" onClick={() => deleteBlogPost(data.id)}>
          <FaIcons.FaTrashAlt />
        </div>
      </div>
    </div>
  );
};

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
  } = appContext;

  useEffect(() => {
    getAllPosts();
  }, []);

  return (
    <Layout>
      <div className="dashboard-page">
        {post && <PostModal type={postType} data={postData} />}
        <div className="btns-container">
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
        </div>
        <div className="posts-container">
          {blogPosts.length > 0
            ? blogPosts.map((post) => {
                return (
                  <PostContainer
                    data={post}
                    setPostType={setPostType}
                    setPostData={setPostData}
                    key={post.id}
                  />
                );
              })
            : null}
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
