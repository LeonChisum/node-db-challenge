const db = require("../data/config");

const express = require("express");

const router = express.Router();

router.get("/", async (req, res, next) => {
    try {
        const tasks = await db('tasks as t').join('projects as p', 't.project_id', 'p.id').select('t.description as taskDescription', 't.notes as taskNotes', 'p.name as projectName', 'p.description', 't.completed')

        res.json(tasks)
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

module.exports = router