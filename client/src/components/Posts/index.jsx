import React, { useState } from "react";
import {
  PencilIcon,
  ChevronUpIcon,
  ChevronDownIcon,
  AnnotationIcon,
  ShareIcon,
  TrashIcon,
  HeartIcon,
} from "@heroicons/react/solid";
import { useDispatch } from "react-redux";
import { likePost, dislikePost } from "../../store/actions/posts";
import { ToastContainer } from "react-toastify";
import { Link } from "react-router-dom";
import { RWebShare } from "react-web-share";
import Modal from "../Modal";
import { useEffect } from "react";
import { dateFormatter } from "../helper";
import PostHandler from "./PostHandler";

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
  const postedAtDate = dateFormatter(time);
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

  return (
    <div className="flex mb-4 w-full rounded-lg dark:bg-[#1A2730] border dark:border-[#1A2730] dark:hover:border-gray-500 cursor-default p-4 bg-white hover:border-gray-400">
      {modalState ? <Modal setModalState={setModalState} _id={_id} /> : null}
      <ToastContainer />
      <div className="flex lg:h-10">
        <img
          src={user?.result?.imageUrl}
          alt={``}
          className="w-full rounded-full"
        />
      </div>
      <div className="w-full px-3">
        <div className=" mb-4 flex justify-between items-center">
          <div className="flex flex-col">
            <div className="dark:text-white text-sm font-semibold mb-1">
              {name}
            </div>
            <small className="text-xs text-gray-400">{postedAtDate}</small>
          </div>
          {/* <button
            className=" px-2 py-1 rounded flex items-center text-gray-400 hover:bg-gray-400 hover:bg-opacity-30 hover:text-white cursor-pointer self-start"
            onClick={() => setCurrentId(_id)}
          >
            <PencilIcon className="h-3.5 " />
            <small className="ml-1">Edit</small>
          </button> */}
          <PostHandler setCurrentId={setCurrentId} _id={_id} />
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
          <div className={`font-lg text-gray-300 italic`}>{liner}</div>
          <div className="flex items-center my-4 text-white justify-between">
            <div className="flex gap-1 items-center">
              <HeartIcon
                className={`${
                  likes.length - dislikes.length > 0
                    ? "text-pink-600"
                    : "text-gray-500"
                } h-4 `}
              />
              <small className="text-gray-400">
                {likes.length - dislikes.length}{" "}
                {likes.length - dislikes.length === 1 ||
                likes.length - dislikes.length === -1 ||
                likes.length - dislikes.length === 0
                  ? "Vote"
                  : "Votes"}
              </small>
            </div>
            <small className="text-gray-400">comments</small>
          </div>
        </Link>
        <div className="flex justify-between items-center ">
          <div className="flex items-center gap-4">
            <button
              className={`${
                like && user
                  ? "text-green-500 bg-green-500 bg-opacity-10"
                  : "text-white"
              } flex h-full gap-1 items-center bg-[#28353E] px-4 py-1 rounded-lg text-white hover:text-green-500 hover:bg-green-500 hover:bg-opacity-10 justify-center transition-all`}
              onClick={() => likeHandler()}
            >
              <ChevronUpIcon className="h-6" />
              <small className="">Like</small>
            </button>
            <button
              className={`${
                dislike && user
                  ? "text-red-500 bg-red-500 bg-opacity-10"
                  : "text-white"
              } flex h-full gap-1 items-center bg-[#28353E] px-4 py-1 rounded-lg hover:text-red-500 hover:bg-red-500 hover:bg-opacity-10 justify-center transition-all`}
              onClick={() => dislikeHandler()}
            >
              <ChevronDownIcon className="h-6 " />
              <small className="">Dislike</small>
            </button>
            <button className="flex h-full gap-1 items-center bg-[#28353E] px-4 py-1 rounded-lg text-white">
              <AnnotationIcon className="h-5 " />
              <small className="">Comment</small>
            </button>
          </div>
          <RWebShare
            data={{
              text: `"${liner}" Liner at`,
              url: `${url}/${_id}`,
              title: "Share Liner",
            }}
            onClick={() => console.log("shared successfully!")}
          >
            <button className="flex h-full gap-1 items-center bg-[#28353E] px-4 py-1 rounded-lg">
              <ShareIcon className="h-4 text-white" />
              <small className="text-white">Share</small>
            </button>
          </RWebShare>
        </div>
      </div>
    </div>
  );
};

export default Post;
