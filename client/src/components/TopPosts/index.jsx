import { ChevronDoubleUpIcon } from "@heroicons/react/solid";
import React from "react";
import { dateFormatter } from "../helper";

const TopPosts = ({ post }) => {
  return (
    <div className=" w-full flex py-2 top-post-card" key={post._id}>
      <div className="flex flex-col items-center mr-3 justify-center">
        <ChevronDoubleUpIcon className="h-4 text-green-500" />
        <small className="text-green-500 font-semibold text-xs">
          {post.likes.length}
        </small>
      </div>
      <div className="flex flex-col w-full">
        <div className="flex justify-between">
          <div className="dark:text-white">{post.liner}</div>
          <small className=" text-white text-xs">
            {dateFormatter(post.createdAt)}
          </small>
        </div>
        <small className="dark:text-white">Posted by{post.name}</small>
      </div>
    </div>
  );
};

export default TopPosts;
