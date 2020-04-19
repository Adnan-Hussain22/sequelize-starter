const express = require("express");
const bodyParser = require("body-parser");
const { UserRouter, PostRouter, CommentRouter } = require("./routes");
const app = express();
const PORT = 5000;

app.use(bodyParser.json()); //parse the string body

app.use("/api/user", UserRouter);
app.use("/api/post", PostRouter);
app.use("/api/comment", CommentRouter);

app.listen(PORT, () => console.log("Server listening on PORT " + PORT));
