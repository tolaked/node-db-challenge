const dotenv = require("dotenv");
dotenv.config();

const server = require("./server");

const port = process.env.PORT || 7000;

server.listen(port, () => {
  console.log("Listening on port", port);
});
