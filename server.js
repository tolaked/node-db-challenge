const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const projectRouter = require("./data/projectRouter");

const server = express();

const projectRouter = require("./projects/projectModel");
const resourceRouter = require("./resources/resourceRoute");
const taskRouter = require("./task/taskRoute");

server.use("/api/projects", projectRouter);
server.use("/api/resources", resourceRouter);
server.use("/api/tasks", taskRouter);

server.get("/", (req, res) => {
  res.send(`
      <h2>HELLO THERE!!!!</h>
    `);
});

module.exports = server;
