import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createPost, updatePost } from "../../Redux/actions/posts";
import { ToastContainer, toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Form = ({ currentId, setCurrentId }) => {
  const [postData, setPostData] = useState({
    creator: "",
    title: "",
    liner: "",
  });
  const [visible, setVisible] = useState(false);
  const updatedPost = useSelector((state) =>
    currentId ? state.posts.find((p) => p._id === currentId) : null
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (updatedPost) setPostData(updatedPost);
  }, [updatedPost]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentId) {
      dispatch(updatePost(currentId, postData));
      toast.success("Liner Updated!", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Slide,
      });
    } else {
      dispatch(createPost(postData));
      toast.success("Liner Posted!", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Slide,
      });
    }
    clear();
  };

  const clear = () => {
    setCurrentId(null);
    setPostData({
      creator: "",
      title: "",
      liner: "",
    });
  };

  return (
    <div className="bg-gray-800 p-4 rounded">
      <ToastContainer />
      <h4 className="mb-2 text-white font-semibold">
        {currentId ? "Edit" : "Create"} a Liner
      </h4>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <div className="mb-2">
          <label
            htmlFor="creator"
            className="block mb-1 text-sm font-medium text-gray-300"
          >
            Creator
          </label>
          <input
            type="text"
            id="creator"
            className="border text-sm rounded block w-full p-2 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:outline-none"
            placeholder="Your name"
            value={postData.creator}
            onChange={(e) =>
              setPostData({ ...postData, creator: e.target.value })
            }
            required
          />
        </div>
        <div className="mb-2">
          <label
            htmlFor="title"
            className="block mb-1 text-sm font-medium text-gray-300"
          >
            Title
          </label>
          <input
            type="text"
            id="title"
            className="border text-sm rounded block w-full p-2 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:outline-none"
            placeholder="Short and cool"
            value={postData.title}
            onChange={(e) =>
              setPostData({ ...postData, title: e.target.value })
            }
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="liner"
            className="block mb-1 text-sm font-medium text-gray-300"
          >
            Liner
          </label>
          <input
            type="text"
            id="liner"
            className="border text-sm rounded block w-full p-2 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:outline-none"
            placeholder="Liner"
            value={postData.liner}
            onChange={(e) =>
              setPostData({ ...postData, liner: e.target.value })
            }
            required
          />
        </div>
        <button
          type="submit"
          className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:outline-none"
        >
          <span className="relative px-5 py-2 transition-all ease-in duration-75 bg-gray-800 rounded-md group-hover:bg-opacity-0">
            Post
          </span>
        </button>
      </form>
    </div>
  );
};

export default Form;
