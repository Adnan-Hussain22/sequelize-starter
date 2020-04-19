const { Router } = require("express");
const UserController = require("../controller");
const router = Router();

router.get("/", UserController.getUsers);
router.post("/", UserController.createUser);
router.post("/import_dum", UserController.importDum);
router.get("/search/:query", UserController.searchUsers);
router.get("/user/:id", UserController.getUserById);
router.put("/user/:id", UserController.updateUser);

module.exports = router;
