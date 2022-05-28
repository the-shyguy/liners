import React, { useEffect, useState, Fragment } from "react";
import Post from "../Posts";
import { useSelector } from "react-redux";
import Form from "../Form";
import TopPosts from "../TopPosts";
import InfiniteScroll from "react-infinite-scroll-component";
import Loader from "../icons/Loader";
import Profile from "../Profile";
const Home = () => {
  const posts = useSelector((state) => state.posts);
  const [topPosts, setTopPosts] = useState([]);
  const [currentId, setCurrentId] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    setTopPosts(
      [...posts].sort((a, b) => b.likeCount - a.likeCount).slice(0, 5)
    );
  }, [posts]);

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("profile")));
  }, []);

  return (
    <div className="grid md:grid-cols-4 h-screen gap-6 px-6 pt-24">
      <Profile />
      {!posts ? (
        <div className=" flex justify-center items-center h-screen">
          <Loader />
        </div>
      ) : (
        <Fragment>
          <div className=" col-span-2 flex flex-col overflow-scroll liners">
            <div className="text-white mb-1 font-medium text-lg pl-1">
              Latest Liners
            </div>
            {posts.length ? (
              <InfiniteScroll dataLength={posts.length}>
                {posts.map((post) =>
                  post.creator || post.title || post.liner ? (
                    <Post
                      key={post._id}
                      _id={post._id}
                      creator={post.creator}
                      name={post.name}
                      title={post.title}
                      liner={post.liner}
                      time={post.createdAt}
                      likes={post.likes}
                      dislikes={post.dislikes}
                      setCurrentId={setCurrentId}
                      tags={post.tags}
                      user={user}
                    />
                  ) : null
                )}
              </InfiniteScroll>
            ) : (
              <div className="flex justify-center items-center h-full">
                <Loader />
              </div>
            )}
          </div>
          <div className="">
            <div>
              <div className="text-white mb-1 font-medium text-lg pl-1">
                Top Liners
              </div>
              {/* {topPosts.map((post) => (
                <TopPosts post={post} key={post._id} />
              ))} */}
            </div>
            <div className="mb-1 text-white font-medium text-lg mt-6 pl-1">
              {currentId ? "Edit" : "Create"} a Liner
            </div>
            <Form currentId={currentId} setCurrentId={setCurrentId} />
          </div>
        </Fragment>
      )}
    </div>
  );
};

export default Home;
