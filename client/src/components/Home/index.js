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
  const [greetText, setGreetText] = useState({ text: "", icon: "" });
  const time = new Date().getHours();

  console.log(greetText);

  useEffect(() => {
    if (time > 3 && time <= 12) {
      setGreetText((prevState) => ({
        ...prevState,
        text: "Morning",
        icon: "🌤",
      }));
    } else if (time > 12 && time < 16) {
      setGreetText((prevState) => ({
        ...prevState,
        text: "Afternoon",
        icon: "🔆",
      }));
    } else if (time > 16 && time <= 21) {
      setGreetText((prevState) => ({
        ...prevState,
        text: "Evening",
        icon: "🌖",
      }));
    } else if (time > 21 && time <= 23) {
      setGreetText((prevState) => ({
        ...prevState,
        text: "Night",
        icon: "🌙",
      }));
    } else if (time > 23 && time < 3) {
      setGreetText((prevState) => ({
        ...prevState,
        text: "Mid Night",
        icon: "✨🌙",
      }));
    } else {
      setGreetText((prevState) => ({
        ...prevState,
        text: "Hey",
        icon: "👋",
      }));
    }
    console.log(time);
  }, [time]);

  useEffect(() => {
    setTopPosts(
      [...posts].sort((a, b) => b.likeCount - a.likeCount).slice(0, 5)
    );
  }, [posts]);

  return (
    <div className=" flex flex-col items-center pt-20 px-4 md:px-0 min-h-screen w-full">
      {!posts.length ? (
        <div className=" w-2/3 flex justify-center items-center">
          {/* <Loading /> */}
          <Loader />
        </div>
      ) : (
        <>
          <h1 className=" block font-semibold text-3xl text-white">
            {greetText.text}, Rohit {greetText.icon}
          </h1>

          <div className="flex justify-evenly bg-gray-700 md:w-5/6 xl:w-4/6 mx-auto gap-8 mt-8">
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
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
