const { Project, User } = require("../model");

module.exports = {
  addProject: async (req, res) => {
    try {
      const { title, description, workers } = req.body;
      const project = await Project.create({
        title,
        description,
      });

      if (Array.isArray(workers) && workers.length) {
        if (workers.some((worker) => !worker.uuid))
          throw new Error("workers should have id");
        await project.setWorkers(workers.map((worker) => worker.uuid));
      }

      res.json({
        status: true,
        message: "Project created successfull",
        data: project,
      });
    } catch (error) {
      res
        .status(500)
        .send({ status: false, message: error.message, data: null });
    }
  },
  addWorker: async (req, res) => {
    try {
      const { projectId, worker } = req.body;
      const project = await Project.findByPk(projectId);

      if (!Boolean(project)) throw { message: "No project found" };
      else if (!worker || !worker.length)
        throw new Error("Please provide a worker is");

      const workerRes = await project.addWorker(worker);
      res.json({
        status: true,
        message: "Worker added to project successfully",
        data: workerRes,
      });
    } catch (error) {
      res
        .status(500)
        .send({ status: false, message: error.message, data: null });
    }
  },
  getUserProjects: async (req, res) => {
    try {
      const projects = await Project.findAll({
        include: [
          {
            model: User,
            as: "Workers",
            attributes: ["fullName", "email"],
          },
        ],
      });
      res.json({
        status: true,
        message: "",
        data: projects,
      });
    } catch (error) {
      res
        .status(500)
        .send({ status: false, message: error.message, data: null });
    }
  },
};
