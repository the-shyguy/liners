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
import { likePost, dislikePost } from "../../store/actions/posts";
import { ToastContainer } from "react-toastify";
import { Link } from "react-router-dom";
import { RWebShare } from "react-web-share";
import Modal from "../Modal";
import { useEffect } from "react";

const Post = ({
  _id,
  name,
  title,
  liner,
  time,
  likes,
  dislikes,
  setCurrentId,
  tags,
  creator,
  user,
}) => {
  const dispatch = useDispatch();
  const [like, setLike] = useState(false);
  const [dislike, setDislike] = useState(false);
  const [modalState, setModalState] = useState(false);
  const postedAtDate = time
    .split("T")[0]
    .replace(/-/g, "/")
    .split("/")
    .reverse()
    .join("/");
  const postedAtTime = time.split("T")[1].split(".")[0];
  // ID to be added here
  const url = `${window.location.href}`;

  const likeHandler = () => {
    dispatch(likePost(_id));
  };

  const dislikeHandler = () => {
    dispatch(dislikePost(_id));
  };

  // const openPost = () => {};

  useEffect(() => {
    setLike(likes.includes(creator));
    setDislike(dislikes.includes(creator));
  }, [creator, likes, dislikes]);

  // console.log(like);
  // console.log(creator);
  // console.log(likes.length);
  return (
    <div className="flex mb-4 w-full rounded-lg bg-[#1A2730] border border-[#1A2730] hover:border-gray-400 cursor-default">
      {modalState ? <Modal setModalState={setModalState} _id={_id} /> : null}
      <ToastContainer />
      <div className="flex flex-col justify-center items-center px-1.5 py-2 bg-gray-900 rounded-lg">
        <ChevronUpIcon
          className={`${
            like && user && "text-green-500"
          } h-6 text-gray-400 hover:text-green-500 hover:bg-gray-600 hover:bg-opacity-50 rounded-sm cursor-pointer mb-1`}
          onClick={() => likeHandler()}
        />
        <small
          className={` ${
            user && ((like && "text-green-500") || (dislike && "text-red-500"))
          } text-gray-400 font-semibold`}
        >
          {likes.length - dislikes.length}
        </small>
        <ChevronDownIcon
          className={`${
            dislike && user && "text-red-500"
          } h-6 text-gray-400 hover:text-red-500 hover:bg-gray-600 hover:bg-opacity-50 rounded-sm cursor-pointer mt-1`}
          onClick={() => dislikeHandler()}
        />
      </div>
      <div className="w-full px-3 py-2">
        <div className="text-gray-500 mb-2 flex justify-between">
          <small>
            Posted by{" "}
            <span className=" font-semibold text-gray-400">{name}</span> on{" "}
            {postedAtDate} at {postedAtTime}
          </small>
          <button
            className=" px-1 rounded flex items-center text-gray-400 hover:bg-gray-400 hover:bg-opacity-30 hover:text-white cursor-pointer"
            onClick={() => setCurrentId(_id)}
          >
            <PencilIcon className="h-3.5 " />
            <small className="ml-1">Edit</small>
          </button>
        </div>
        <Link to={`/posts/${_id}`}>
          {tags.length > 0 && (
            <div className="flex w-full gap-1">
              {tags.map((tag) => (
                <small
                  className={`border px-1 mr-2 rounded text-xs mb-1 ${
                    tag.color ? tag.color : "text-white"
                  }`}
                  key={tag.id}
                >
                  {tag.text}
                </small>
              ))}
            </div>
          )}
          <div className="mb-1 text-xl font-medium tracking-wider text-white">
            {title}
          </div>
          <div className={`font-lg text-gray-300 mb-3`}>{liner}</div>
        </Link>
        <div className="flex w-full justify-between">
          <div className="flex">
            <button className="flex items-center text-gray-400 hover:bg-gray-400 hover:bg-opacity-30 hover:text-white px-1 rounded mr-2 cursor-pointer">
              <AnnotationIcon className="h-4 mr-1" />
              <small>Comments</small>
            </button>
            <RWebShare
              data={{
                text: `"${liner}" Liner at`,
                url: `${url}/${_id}`,
                title: "Share Liner",
              }}
              onClick={() => console.log("shared successfully!")}
            >
              <button className="flex items-center text-gray-400 hover:bg-gray-400 hover:bg-opacity-30 hover:text-white px-1 rounded cursor-pointer">
                <ShareIcon className="h-3 mr-1" />
                <small>Share</small>
              </button>
            </RWebShare>
          </div>
          <button
            className="flex items-center text-red-400 hover:bg-red-400 hover:bg-opacity-20 hover:text-red-500 px-1 rounded cursor-pointer"
            onClick={() => setModalState(true)}
            data-modal-toggle="popup-modal"
            type="button"
          >
            <TrashIcon className="h-4 mr-1" />
            <small>Delete</small>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Post;
