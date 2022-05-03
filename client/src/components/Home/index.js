import React, { useEffect, useState } from "react";
import Post from "../Posts";
import { useSelector } from "react-redux";
import Form from "../Form";
import TopPosts from "../TopPosts";
import InfiniteScroll from "react-infinite-scroll-component";

const Home = () => {
  const posts = useSelector((state) => state.posts);

  const [topPosts, setTopPosts] = useState([]);
  const [currentId, setCurrentId] = useState(null);

  useEffect(() => {
    setTopPosts(
      [...posts].sort((a, b) => b.likeCount - a.likeCount).slice(0, 5)
    );
  }, [posts]);

  return (
    <div className=" flex justify-evenly bg-gray-700 py-6 md:w-5/6 xl:w-4/6 mx-auto gap-8 pt-16">
      {!posts.length ? (
        <div className=" w-2/3 flex justify-center items-center">
          <svg
            role="status"
            className="w-10 h-10 text-gray-200 animate-spin dark:text-gray-200 fill-blue-500"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
        </div>
      ) : (
        <>
          <div className=" w-2/3 bg-slate-700 flex">
            <div className="w-full flex flex-col">
              <h4 className="text-white mb-1 font-medium text-lg pl-1">
                Latest Liners
              </h4>
              <InfiniteScroll dataLength={posts.length}>
                {posts.map((post) =>
                  post.creator || post.title || post.liner ? (
                    <Post
                      key={post._id}
                      _id={post._id}
                      creator={post.creator}
                      title={post.title}
                      liner={post.liner}
                      time={post.createdAt}
                      likeCount={post.likeCount}
                      setCurrentId={setCurrentId}
                      tags={post.tags}
                    />
                  ) : null
                )}
              </InfiniteScroll>
            </div>
          </div>
          <div className="w-2/4">
            <div className="w-full">
              <h4 className="text-white mb-1 font-medium text-lg pl-1">
                Top Liners
              </h4>
              {topPosts.map((post) => (
                <TopPosts post={post} key={post._id} />
              ))}
            </div>
            <div className="">
              <h4 className="mb-1 text-white font-medium text-lg mt-6 pl-1">
                {currentId ? "Edit" : "Create"} a Liner
              </h4>
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
