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
import { deletePost, likePost, dislikePost } from "../../store/actions/posts";
import { toast, Slide, ToastContainer } from "react-toastify";
import { Link } from "react-router-dom";
import { RWebShare } from "react-web-share";

const Post = ({
  _id,
  creator,
  title,
  liner,
  time,
  likeCount,
  setCurrentId,
  tags,
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
  // ID to be added here
  const url = `${window.location.href}${title}`;
  console.log(url);

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
    <Link
      className="flex mb-2 w-full rounded bg-gray-800 border border-gray-600 hover:border-gray-400 cursor-default"
      to=""
    >
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
        {tags.length > 0 && (
          <div className="flex w-full gap-1">
            {tags.map((tag) => (
              <small
                className={`border px-1 mr-2 rounded text-xs mb-1 ${tag.color}`}
                key={tag.id}
              >
                {tag.text}
              </small>
            ))}
          </div>
        )}
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
            <RWebShare
              data={{
                text: `"${liner}" Liner at`,
                url: url,
                title: "Share Liner",
              }}
              onClick={() => console.log("shared successfully!")}
            >
              <div className="flex items-center text-gray-400 hover:bg-gray-400 hover:bg-opacity-30 hover:text-white px-1 rounded cursor-pointer">
                <ShareIcon className="h-3 mr-1" />
                <small>Share</small>
              </div>
            </RWebShare>
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
    </Link>
  );
};

export default Post;
