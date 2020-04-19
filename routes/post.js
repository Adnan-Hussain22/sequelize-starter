const { Router } = require("express");
const { PostController } = require("../controller");
const PostRouter = Router();

PostRouter.post("/", PostController.createPost);

module.exports = { PostRouter };
