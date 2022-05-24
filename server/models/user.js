import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  about: {
    String,
  },
  password: {
    type: String,
    required: true,
  },
  id: {
    type: String,
  },
  googleAuth: {
    type: Boolean,
  },
});

const User = mongoose.model("Users", userSchema);
export default User;
