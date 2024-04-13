const http = require("http");
const express = require("express");
const app = express();
const PORT = 4000;
const cors = require("cors");
const server = http.createServer(app);
const socketIO = require("socket.io")(server, {
  cors: {
    origin: "http://localhost:3000",
  },
});

app.use(cors());

socketIO.on("connection", (socket) => {
  console.log(`🟢 : ${socket.id} user just connected!`);
  socket.on("disconnect", () => {
    console.log("🔴 : A user disconnected");
  });
});

app.get("/", (req, res) => {
  res.json({
    message: "Hello From server",
  });
});

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
