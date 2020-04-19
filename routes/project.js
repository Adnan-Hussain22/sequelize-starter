const { Router } = require("express");
const { ProjectController } = require("../controller");
const ProjectRouter = Router();

ProjectRouter.post("/", ProjectController.addProject);
ProjectRouter.post("/add_worker", ProjectController.addWorker);
ProjectRouter.get("/user_projects", ProjectController.getUserProjects);

module.exports = { ProjectRouter };
