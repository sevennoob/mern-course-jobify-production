import express from "express";
const router = express.Router();

//Limit Requests
import rateLimiter from "express-rate-limit";
const apiLimiter = rateLimiter({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 10,
  message: "Too many requests from this IP, please try again after 15 minutes",
});

import {
  register,
  login,
  updateUser,
  getCurrentUser,
  logout,
} from "../controllers/authController.js";
import authenticateUser from "../middleware/auth.js";
import testUser from "../middleware/testUser.js";

router.route("/register").post(apiLimiter, register);
router.route("/login").post(apiLimiter, login);
router.get('/logout', logout);
router.route("/updateUser").patch(authenticateUser, testUser, updateUser);
router.route("/getCurrentUser").get(authenticateUser, getCurrentUser);

// PATCH与PUT类似，发送一个修改数据的请求，区别在于PATCH代表部分更新；
// 作用：用于创建、更新资源。局部更新，比如：user对象，只更改了name属性，那么他的其他属性值是不会变的，如果用post，那么其他属性值会被设置为null（全局更新）

export default router;
