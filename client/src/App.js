import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getPosts } from "./store/actions/posts";
import Navbar from "./components/Navbar";
import Home from "./components/Home";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <div className="dark:bg-[#05151C] bg-[#F1F2F5]">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
