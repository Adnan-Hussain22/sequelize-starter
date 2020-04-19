const { Router } = require("express");
const { CommentController } = require("../controller");
const CommentRouter = Router();

CommentRouter.post("/", CommentController.addComment);

module.exports = { CommentRouter };
