const { Router } = require("express");
const { UserController } = require("../controller");
const UserRouter = Router();

/*USER ROUTES*/
UserRouter.get("/", UserController.getUsers);
UserRouter.post("/", UserController.createUser);
UserRouter.post("/import_dum", UserController.importDum);
UserRouter.get("/search/:query", UserController.searchUsers);
UserRouter.get("/user/:id", UserController.getUserById);
UserRouter.put("/user/:id", UserController.updateUser);
UserRouter.delete("/user/:id", UserController.deleteUser);

module.exports = { UserRouter };
