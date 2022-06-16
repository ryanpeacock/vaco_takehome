import React, { useContext, useState } from "react";
import * as FaIcons from "react-icons/fa";

import AppContext from "../context/app/appContext";

const PostModal = ({ type, data }) => {
  const isCreatePost = type === "CREATE" ? true : false;
  const [formData, setFormData] = useState({
    title: isCreatePost ? "" : data.title,
    text: isCreatePost ? "" : data.text,
  });

  const appContext = useContext(AppContext);
  const { setShowModal, createBlogPost } = appContext;

  const onChangeText = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isCreatePost) {
      createBlogPost(formData);
    }
    setShowModal("post", false);
  };
  return (
    <div id="postModal" className="modal">
      <div className="post-modal-content modal-content">
        <div className="top-bar">
          <FaIcons.FaTimes
            className="close-icon"
            onClick={() => setShowModal("post", false)}
          />
          <h2>{`${isCreatePost ? "Create" : "Edit"} Blog Post`}</h2>
        </div>
        <div className="modal-body">
          <form onSubmit={handleSubmit} className="form">
            <div className="item">
              <label htmlFor="">Title</label>
              <input
                type="text"
                name="title"
                id=""
                value={formData.title}
                onChange={(e) => onChangeText(e)}
              />
            </div>
            <div className="item">
              <label htmlFor="">Body</label>
              <textarea
                name="text"
                id=""
                cols="30"
                rows="6"
                onChange={(e) => onChangeText(e)}
              >
                {formData.text}
              </textarea>
            </div>
            <input
              type="submit"
              className="btn btn-blue"
              style={{ margin: "1rem auto", width: "100%" }}
            />
          </form>
        </div>
        <div className="bottom-bar">
          <div className="btns">
            <div
              className="btn btn-green"
              onClick={() => setShowModal("post", false)}
            >
              Close
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostModal;
