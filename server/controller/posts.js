import PostMessage from "../models/postMessage.js";

export const getPosts = async (_, res) => {
  try {
    const postMessages = await PostMessage.find();

    res.status(200).json(postMessages);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createPost = async (_, res) => {
  const post = res.body;

  const newPost = new PostMessage(post);

  try {
    await newPost.Save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
