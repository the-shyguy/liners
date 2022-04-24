import React from "react";
import {
  PencilIcon,
  ChevronUpIcon,
  ChevronDownIcon,
  AnnotationIcon,
  ShareIcon,
  TrashIcon,
} from "@heroicons/react/solid";

const Post = ({ _id, creator, title, liner, time, like, setCurrentId }) => {
  const postedAtDate = time
    .split("T")[0]
    .replace(/-/g, "/")
    .split("/")
    .reverse()
    .join("/");
  const postedAtTime = time.split("T")[1].split(".")[0];

  return (
    <a className="flex mb-2 max-w-lg rounded bg-gray-800 border border-gray-600 hover:border-gray-400">
      <div className="flex flex-col justify-center items-center px-1.5 bg-gray-900 rounded">
        <ChevronUpIcon className="h-6 text-gray-400 hover:text-green-500 hover:bg-gray-600 hover:bg-opacity-50 rounded-sm cursor-pointer mb-1" />
        <small className="text-gray-400 font-semibold">{like}</small>
        <ChevronDownIcon className="h-6 text-gray-400 hover:text-red-500 hover:bg-gray-600 hover:bg-opacity-50 rounded-sm cursor-pointer mt-1" />
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
          <button className="flex items-center text-red-400 hover:bg-red-400 hover:bg-opacity-20 hover:text-red-500 px-1 rounded cursor-pointer">
            <TrashIcon className="h-4 mr-1" />
            <small>Delete</small>
          </button>
        </div>
      </div>
    </a>
  );
};

export default Post;
