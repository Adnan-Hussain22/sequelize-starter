const { Router } = require("express");
const { PostController } = require("../controller");
const PostRouter = Router();

PostRouter.post("/", PostController.createPost);
PostRouter.get("/", PostController.getPosts);

module.exports = { PostRouter };
