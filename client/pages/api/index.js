// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from "axios";

const url = "http://localhost:5001/posts";

// const deployedURL = "https://liner-server.herokuapp.com/posts";

export const fetchPosts = () => axios.get(url);

export const createPost = (newPost) => axios.post(url, newPost);

export const updatePost = (id, updatedPost) =>
  axios.patch(`${url}/${id}`, updatedPost);

export const deletePost = (id) => axios.delete(`${url}/${id}`);
