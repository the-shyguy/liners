import React from "react";
import Post from "./Post";
import TopPosts from "./TopPosts";
import { useSelector } from "react-redux";
import Form from "./Form";
const Posts = () => {
  const posts = useSelector((state) => state.posts);
  console.log(posts);
  return (
    <div className=" flex justify-evenly bg-red-400 py-6 md:w-5/6 xl:w-4/5 mx-auto">
      <Post />
      <div className="w-1/3">
        <TopPosts />
        <Form />
      </div>
    </div>
  );
};

export default Posts;
