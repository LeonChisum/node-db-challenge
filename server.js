const express = require('express');

const projectsRouter = require('./projects/projectsRouter')
const tasksRouter = require('./tasks/tasksRouter.js')
const resourceRouter = require('./resources/resourceRouter')

const server = express();

server.use(express.json());
server.use('/projects', projectsRouter)
server.use('/tasks', tasksRouter)
server.use('/resources', resourceRouter)

module.exports = server;