import jwt from "jsonwebtoken";
import { UnauthenticatedError } from "../errors/index.js";

const auth = async (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    throw new UnauthenticatedError("Authentication Invalid");
  }

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    // TEST USER
    const testUser = payload.userId === "641b028aedf1ad1050d477eb";
    req.user = { userId: payload.userId, testUser };
    // TEST USER
    next();
  } catch (error) {
    throw new UnauthenticatedError("Authentication invalid");
  }
};

export default auth;
