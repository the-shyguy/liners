import React, { useState } from "react";
import {
  PencilIcon,
  ChevronUpIcon,
  ChevronDownIcon,
  AnnotationIcon,
  ShareIcon,
  TrashIcon,
} from "@heroicons/react/solid";
import { useDispatch } from "react-redux";
import { deletePost, likePost, dislikePost } from "../../actions/posts";
import { toast, Slide, ToastContainer } from "react-toastify";

const Post = ({
  _id,
  creator,
  title,
  liner,
  time,
  likeCount,
  setCurrentId,
}) => {
  const dispatch = useDispatch();
  const [like, setLike] = useState(false);
  const [dislike, setDislike] = useState(false);

  const postedAtDate = time
    .split("T")[0]
    .replace(/-/g, "/")
    .split("/")
    .reverse()
    .join("/");
  const postedAtTime = time.split("T")[1].split(".")[0];

  const likeHandler = () => {
    dispatch(likePost(_id));
    setLike(!like);
    if (dislike) {
      setDislike(!dislike);
    }

    if (like) {
      dispatch(dislikePost(_id));
    }
  };

  const dislikeHandler = () => {
    dispatch(dislikePost(_id));
    setDislike(!dislike);
    if (like) {
      setLike(!like);
    }

    if (dislike) {
      dispatch(likePost(_id));
    }
  };
  console.log(like);
  console.log(dislike);
  const deleteLiner = () => {
    dispatch(deletePost(_id));
    toast.error("Liner Deleted", {
      position: "top-center",
      autoClose: 800,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Slide,
    });
  };

  return (
    <a className="flex mb-2 max-w-lg rounded bg-gray-800 border border-gray-600 hover:border-gray-400">
      <ToastContainer />
      <div className="flex flex-col justify-center items-center px-1.5 py-2 bg-gray-900 rounded">
        <ChevronUpIcon
          className={`${
            like && "text-green-500"
          } h-6 text-gray-400 hover:text-green-500 hover:bg-gray-600 hover:bg-opacity-50 rounded-sm cursor-pointer mb-1`}
          onClick={() => likeHandler()}
        />
        <small
          className={` ${
            (like && "text-green-500") || (dislike && "text-red-500")
          } text-gray-400 font-semibold`}
        >
          {likeCount}
        </small>
        <ChevronDownIcon
          className={`${
            dislike && "text-red-500"
          } h-6 text-gray-400 hover:text-red-500 hover:bg-gray-600 hover:bg-opacity-50 rounded-sm cursor-pointer mt-1`}
          onClick={() => dislikeHandler()}
        />
      </div>
      <div className="w-full px-3 py-2">
        <div className="text-gray-500 mb-2 flex justify-between">
          <small>
            Posted by{" "}
            <span className=" font-semibold text-gray-400">{creator}</span> on{" "}
            {postedAtDate} at {postedAtTime}
          </small>
          <div
            className=" px-1 rounded flex items-center text-gray-400 hover:bg-gray-400 hover:bg-opacity-30 hover:text-white cursor-pointer"
            onClick={() => setCurrentId(_id)}
          >
            <PencilIcon className="h-3.5 " />
            <small className="ml-1">Edit</small>
          </div>
        </div>
        <h5 className="mb-1 text-xl font-medium tracking-wider text-white">
          {title}
        </h5>
        <p className="font-lg text-gray-300 mb-3">{liner}</p>
        <div className="flex w-full justify-between">
          <div className="flex">
            <div className="flex items-center text-gray-400 hover:bg-gray-400 hover:bg-opacity-30 hover:text-white px-1 rounded mr-2 cursor-pointer">
              <AnnotationIcon className="h-4 mr-1" />
              <small>Comments</small>
            </div>
            <div className="flex items-center text-gray-400 hover:bg-gray-400 hover:bg-opacity-30 hover:text-white px-1 rounded cursor-pointer">
              <ShareIcon className="h-3 mr-1" />
              <small>Share</small>
            </div>
          </div>
          <button
            className="flex items-center text-red-400 hover:bg-red-400 hover:bg-opacity-20 hover:text-red-500 px-1 rounded cursor-pointer"
            onClick={() => deleteLiner()}
          >
            <TrashIcon className="h-4 mr-1" />
            <small>Delete</small>
          </button>
        </div>
      </div>
    </a>
  );
};

export default Post;
