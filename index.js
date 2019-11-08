const dotenv = require("dotenv");
dotenv.config();

const server = require("./server");

const port = process.env.PORT;

server.get("*", (req, res) => {
  console.log("Hello from cars Server!");
  res.json({ success: "hello!!!" });
});

server.listen(port, () => {
  console.log("Listening on port", port);
});