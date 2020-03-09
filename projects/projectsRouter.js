const db = require("../data/config");

const express = require("express");

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
      const projects = await db('projects')

      res.json(projects)
  } catch (error) {
    next(error);
  }
});
router.post("/", async (req, res, next) => {
  try {
    const newProjectID = await db("projects").insert(req.body);
    const newProject = await db("projects").where("id", newProjectID).first();
    res.json(newProject);
  } catch (error) {
    next(error);
  }
});
router.get("/:id/tasks", async (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
});
router.get("/", async (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
});
router.get("/", async (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
});

module.exports = router;
