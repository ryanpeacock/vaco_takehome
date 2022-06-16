import React, { useContext, useState } from "react";
import * as FaIcons from "react-icons/fa";
import ContentEditable from "react-contenteditable";

import AppContext from "../context/app/appContext";

const PostModal = ({ type, data }) => {
  const isCreatePost = type === "CREATE" ? true : false;
  const [formData, setFormData] = useState({
    title: isCreatePost ? "" : data.title,
    text: isCreatePost ? "" : data.text,
  });

  const appContext = useContext(AppContext);
  const { setShowModal, createBlogPost, editBlogPost } = appContext;

  const onChangeText = (e) => {
    if (e.type === "input") {
      setFormData({ ...formData, text: e.target.value });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isCreatePost) {
      createBlogPost(formData);
    } else {
      editBlogPost(data.id, {
        title: formData.title,
        text: formData.text,
        id: data.id,
        timestamp: data.timestamp,
      });
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
              <label htmlFor="blog-title">Title</label>
              <input
                type="text"
                name="title"
                id="blog-title"
                value={formData.title}
                onChange={(e) => onChangeText(e)}
              />
            </div>
            <div className="item">
              <label htmlFor="blog-body">Body</label>
              <ContentEditable
                // innerRef={this.contentEditable}
                html={formData.text} // innerHTML of the editable div
                disabled={false} // use true to disable editing
                onChange={(e) => onChangeText(e)} // handle innerHTML change
                tagName="article" // Use a custom HTML tag (uses a div by default)
                name="text"
                style={{
                  background: "white",
                  color: "black",
                  borderRadius: "5px",
                  padding: ".25rem",
                }}
              />
            </div>
            <input
              type="submit"
              className="btn btn-blue"
              value={isCreatePost ? "Submit" : "Update"}
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
