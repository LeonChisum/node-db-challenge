const db = require("../data/config");

const express = require("express");

const router = express.Router();

router.get("/", async (req, res, next) => {
    try {
        const resources = await db('resources')

        res.json(resources)
    } catch (error) {
        next(error);
    }
});
router.post("/", async (req, res, next) => {
    try {
        const newResourceID = await db("resources").insert(req.body);
        const newResource = await db("resources").where("id", newResourceID).first();
        res.json(newResource);
    } catch (error) {
        next(error);
    }
});

module.exports = router