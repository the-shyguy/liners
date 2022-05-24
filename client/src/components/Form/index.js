import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createPost, updatePost } from "../../store/actions/posts";
import { ToastContainer, toast, Slide } from "react-toastify";
import TAGS from "../tags";
import { WithContext as ReactTags } from "react-tag-input";
import "react-toastify/dist/ReactToastify.css";

const Form = ({ currentId, setCurrentId }) => {
  const dispatch = useDispatch();
  const KeyCodes = {
    comma: 188,
    enter: 13,
    tab: 9,
  };

  const suggestions = TAGS.map((tag) => {
    return {
      id: tag.id,
      text: tag.id,
      color: tag.color,
    };
  });

  const delimiters = [KeyCodes.comma, KeyCodes.enter, KeyCodes.tab];

  const user = JSON.parse(localStorage.getItem("profile"));

  const [postData, setPostData] = useState({
    title: "",
    tags: [],
    liner: "",
  });

  const [linerTags, setLinerTags] = useState([]);

  const handleDelete = (i) => {
    setLinerTags(postData.tags.filter((_, index) => index !== i));
  };

  const handleAddition = (tag) => {
    setLinerTags([...postData.tags, tag]);
  };

  const handleDrag = (tag, currPos, newPos) => {
    const newTags = linerTags.slice();

    newTags.splice(currPos, 1);
    newTags.splice(newPos, 0, tag);

    setLinerTags(newTags);
  };

  const handleTagClick = (index) => {
    console.log("The tag at index " + index + " was clicked");
  };

  const updatedPost = useSelector((state) =>
    currentId ? state.posts.find((p) => p._id === currentId) : null
  );

  useEffect(() => {
    if (updatedPost) setPostData(updatedPost);
  }, [updatedPost]);

  useEffect(() => {
    setPostData((prevData) => ({ ...prevData, tags: linerTags }));
  }, [linerTags]);

  // console.log(postData);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentId) {
      dispatch(
        updatePost(currentId, { ...postData, name: user?.result?.name })
      );
      toast.success("Liner Updated!", {
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
    } else {
      dispatch(createPost({ ...postData, name: user?.result?.name }));
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

  if (!user?.result?.name) {
    return (
      <div>
        <div>Please sign to create your liner</div>
      </div>
    );
  }

  const clear = () => {
    setCurrentId(null);
    setPostData({
      title: "",
      liner: "",
      tags: [],
    });
    setLinerTags([]);
  };

  return (
    <div className="bg-gray-800 p-4 rounded">
      <ToastContainer />
      <form autoComplete="off" onSubmit={handleSubmit}>
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
        <div className="mb-2">
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
        <div>
          <ReactTags
            classNames={{
              selected: "text-white w-full flex mt-4",
              tagInputField:
                "border text-sm rounded block w-1/2 p-2 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:outline-none mt-2 mb-3",
              tag: `mr-2 text-sm border px-1 py-0.5 rounded`,
              suggestions: "text-gray-400 bg-gray-700 mb-2 p-1 rounded text-sm",
              activeSuggestion:
                "bg-gray-400 cursor-pointer px-1 rounded text-black text-sm",
              remove: "ml-1 hover:text-gray-400 text-md",
            }}
            tags={postData.tags}
            suggestions={suggestions}
            delimiters={delimiters}
            handleDelete={handleDelete}
            handleAddition={handleAddition}
            handleDrag={handleDrag}
            handleTagClick={handleTagClick}
            inputFieldPosition="bottom"
            autocomplete
            placeholder="Add tags"
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
