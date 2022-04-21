import React from "react";
import Post from "./Post";
import TopPosts from "./TopPosts";

const Posts = () => {
  return (
    <div className=" flex justify-evenly bg-red-400 py-6 md:w-5/6 xl:w-4/5 mx-auto">
      <Post />
      <TopPosts />
    </div>
  );
};

export default Posts;
