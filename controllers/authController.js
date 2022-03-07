import User from "../models/User.js";
import { StatusCodes } from "http-status-codes";
import { NotFoundError, BadRequestError } from "../errors/index.js";

export const register = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    throw new BadRequestError("Please provide all values");
  }

  const alreadyExistedUser = await User.findOne({ email: email }).exec();
  if (alreadyExistedUser) {
    throw new BadRequestError("Email Already Registered");
  }

  const user = await User.create(req.body);
  res.status(StatusCodes.CREATED).json({ user });
};

export const login = async (req, res) => {
  res.send("Login Endpoint");
};

export const updateUser = async (req, res) => {
  res.send("userUpdate Endpoint");
};
