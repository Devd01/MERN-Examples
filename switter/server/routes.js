const express = require("express");
const router = express.Router();
require("dotenv").config();
const jwt_secret = process.env.JWT_SECRET;
const jwt = require("express-jwt");
const auth = jwt({
  secret: jwt_secret,
  requestProperty: "me"
});

const userCtrl = require("./userController");
const sweetsCtrl = require("./sweetsController");

router.get("/auth/google", userCtrl.goAuth);
router.get("/auth/google/callback", userCtrl.goAuthCB);
router.get("/users/liked", auth, userCtrl.getlikeIds);
router.get("/users/:uid", auth, userCtrl.getUser);

router.get("/sweets/feed", auth, sweetsCtrl.getFeed);
router.get("/sweets/:uid", auth, sweetsCtrl.getUserSweets);
router.post("/sweets/add", auth, sweetsCtrl.add);
router.post("/sweets/like", auth, sweetsCtrl.like);
router.post("/sweets/unlike", auth, sweetsCtrl.unlike);

module.exports = router;
