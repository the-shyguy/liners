import { ChevronDoubleUpIcon } from "@heroicons/react/solid";
import React from "react";

const TopPosts = ({ post }) => {
  return (
    <div className="bg-gray-800 rounded flex mb-2">
      <div className="flex flex-col justify-center items-center px-1.5 py-2 bg-gray-900 rounded">
        <ChevronDoubleUpIcon className="h-4 text-green-500" />
        <small className="text-green-500 font-semibold text-xs">
          {post.likes.length}
        </small>
      </div>
      <div className="flex flex-col p-2">
        <div className="text-gray-500 flex justify-between flex-col text-xs mb-1">
          <small>
            Posted by{" "}
            <span className=" font-semibold text-gray-400">{post.name}</span> on{" "}
            {post.createdAt.split("T")[0]} at {post.createdAt.split("T")[1]}
          </small>
        </div>
        <div className="text-white text-base font-bold">{post.title} </div>
        <div className="text-gray-300 text-sm">{post.liner}</div>
      </div>
    </div>
  );
};

export default TopPosts;
