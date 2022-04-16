import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  message: String,
  user: String,
  likeCount: {
    type: Number,
    default: 0,
  },
  disLikeCount: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const PostMessage = mongoose.model("PostMessage", postSchema);
export default PostMessage;
