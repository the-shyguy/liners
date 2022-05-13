import React, { useEffect, useState } from "react";
import Post from "../Posts";
import { useSelector } from "react-redux";
import Form from "../Form";
import TopPosts from "../TopPosts";
import InfiniteScroll from "react-infinite-scroll-component";
import Loader from "../icons/Loader";

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
    <div className=" flex justify-evenly bg-gray-700 py-6 md:w-5/6 xl:w-4/6 mx-auto gap-8 pt-16 min-h-screen">
      {!posts.length ? (
        <div className=" w-2/3 flex justify-center items-center">
          {/* <Loading /> */}
          <Loader />
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
