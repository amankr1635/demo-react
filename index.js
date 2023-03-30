const app = require("express");
const server = app();
require("dotenv").config();
const port = process.env.PORT;
const cors = require("cors");

server.use(app.json());
server.use(app.urlencoded({ extended: true }));
server.use(
  cors({
    origin: "*",
  })
);

server.get("/", (req, res) => {
  res.send("Hello World!");
});

server.get("/user", (req, res) => {
  res.json({
    name: "John Doe",
  });
});

server.get("/classroom", (req, res) => {
  const room1 = [
    {
      name: "John Doe",
      class: "1A",
    },
    {
      name: "John Doe",
      class: "2A",
    },
  ];
  res.json(room1);
});

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
