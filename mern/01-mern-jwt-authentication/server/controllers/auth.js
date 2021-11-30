import User from "../models/User.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import StatusCodes from "http-status-codes";

export const register = async (req, res) => {
  try {
    const user = await User.create({ ...req.body });
    const token = jwt.sign(
      { userId: user._id, username: user.username },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRY }
    );
    res
      .status(StatusCodes.CREATED)
      .json({ user: { username: user.username }, token });
  } catch (error) {
    res.status(StatusCodes.BAD_REQUEST).json({ message: "Something went wrong" });
  }
};

export const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
     return res
        .status(StatusCodes.BAD_REQUEST)
        .json("Please provide username and password");
    }

    const user = await User.findOne({ username });

    if (!user) {
     return res.status(StatusCodes.UNAUTHORIZED).json("Invalid Credentials");
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password);

    if (!isPasswordCorrect) {
      return res.status(StatusCodes.UNAUTHORIZED).json("Invalid Credentials");
    }

    const token = jwt.sign(
      { userId: user._id, username: user.username },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRY }
    );

    res
      .status(StatusCodes.OK)
      .json({ user: { username: user.username }, token });
  } catch (error) {
    res.status(400).json(error);
  }
};
