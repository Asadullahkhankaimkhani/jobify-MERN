import User from "../models/User.js";
import { StatusCodes } from "http-status-codes";
import { NotFoundError, BadRequestError } from "../errors/index.js";

export const register = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    throw new BadRequestError("Please provide all values");
  }

  const alreadyExistedUser = await User.findOne({ email }).exec();
  if (alreadyExistedUser) {
    throw new BadRequestError("Email Already Registered");
  }

  const user = await User.create(req.body);
  const token = user.createJWT();
  res.status(StatusCodes.CREATED).json({
    user: {
      email: user.email,
      lastName: user.lastName,
      location: user.location,
      name: user.name,
    },
    token,
    location: user.location,
  });
};

export const login = async (req, res) => {
  res.send("Login Endpoint");
};

export const updateUser = async (req, res) => {
  res.send("userUpdate Endpoint");
};
