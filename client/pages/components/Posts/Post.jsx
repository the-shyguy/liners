import React from "react";

const Post = ({ creator, title, liner, time }) => {
  const postedAtDate = time
    .split("T")[0]
    .replace(/-/g, "/")
    .split("/")
    .reverse()
    .join("/");
  const postedAtTime = time.split("T")[1].split(".")[0];

  return (
    <div className="block px-2 py-1 max-w-md rounded bg-gray-700 border border-gray-600 mb-2">
      <div className="text-gray-500 mb-2">
        <small>
          Posted by{" "}
          <span className=" font-semibold text-gray-400">{creator}</span> on{" "}
          {postedAtDate} at {postedAtTime}
        </small>
      </div>
      <h5 className="mb-1 text-xl font-bold tracking-wider text-white">
        {title}
      </h5>
      <p className="font-lg text-gray-300">{liner}</p>
    </div>
  );
};

export default Post;
