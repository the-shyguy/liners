import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  creator: String,
  name: String,
  title: String,
  liner: String,
  tags: [],
  likes: {
    type: [String],
    default: [],
  },
  dislikes: {
    type: [String],
    default: [],
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const PostMessage = mongoose.model("PostMessage", postSchema);
export default PostMessage;
