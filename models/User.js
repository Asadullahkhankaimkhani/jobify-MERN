import mongoose from "mongoose";
import validator from "validator";

const userSchema = mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: [true, "Please Provide name"],
    minlength: 3,
    maxlength: 20,
  },
  email: {
    type: String,
    unique: true,
    validate: {
      validator: validator.isEmail,
      message: "Please provide valid email",
    },
    required: [true, "Please Provide email"],
  },
  password: {
    type: String,
    required: [true, "Please Provide password"],
    minlength: 6,
  },
  lastName: {
    type: String,
    trim: true,
    maxlength: 20,
    default: "LastName",
  },
});

export default mongoose.model("User", userSchema);
