import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createPost } from "../../actions/posts";

const Form = () => {
  const [postData, setPostData] = useState({
    creator: "",
    title: "",
    liner: "",
  });
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createPost(postData));
  };

  return (
    <div className="bg-teal-500">
      <form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <h6>Create a Liner</h6>
        <textarea
          name="creator"
          aria-label="Creator"
          className="w-full"
          value={postData.creator}
          onChange={(e) =>
            setPostData({ ...postData, creator: e.target.value })
          }
          placeholder="Creator"
        />
        <textarea
          name="title"
          aria-label="Title"
          className="w-full"
          value={postData.title}
          onChange={(e) => setPostData({ ...postData, title: e.target.value })}
          placeholder="Title"
        />
        <textarea
          name="liner"
          aria-label="Liner"
          className="w-full"
          value={postData.liner}
          onChange={(e) => setPostData({ ...postData, liner: e.target.value })}
          placeholder="Liner"
        />
        <button type="submit" className="bg-yellow-500">
          Post
        </button>
      </form>
    </div>
  );
};

export default Form;
