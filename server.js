const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const projectRouter = require("./data/projectRouter");

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());
server.use("/api/projects", projectRouter);

module.exports = server;
