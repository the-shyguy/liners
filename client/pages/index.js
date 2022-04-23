import React, { useEffect } from "react";
import Head from "next/head";
import Navbar from "./components/Navbar";
import Posts from "./components/Posts/Posts";
import { useDispatch } from "react-redux";
import { getPosts } from "./actions/posts";

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <div>
      <Head>
        <title>Liner</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Posts />
    </div>
  );
}
