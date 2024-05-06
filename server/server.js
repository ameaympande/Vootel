require("dotenv").config();
const http = require("http");
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT;
const ENV = process.env.ENV;
const cors = require("cors");
const server = http.createServer(app);
const connectDB = require("./config/dbConn");
const auth = require("./auth/authHelper");

const corsOption = require("./config/corsOption");
const { logger, logEvents } = require("./middleware/logger");
const errorHandler = require("./middleware/errorHandler");

connectDB();

// app.use(logger);

app.use(cors(corsOption));

app.use(express.json());

app.post("/login", auth.login);
app.post("/signup", auth.signUp);
app.use("/users", require("./routes/userRoutes"));

app.use(errorHandler);

const socketIO = require("socket.io")(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
    credential: true,
  },
});

app.use(cors());

socketIO.on("connection", (socket) => {
  console.log(`🟢 : ${socket.id} user just connected!`);

  socket.on("message", (message) => {
    console.log(`Received message from ${socket.id}: ${message}`);
    socket.broadcast.emit("message", message);
  });

  socket.on("disconnect", (socket) => {
    console.log(`🔴 : ${socket.id} user disconnected`);
  });
});

app.get("/", (req, res) => {
  res.json({
    message: "Hello From server",
  });
});

mongoose.connection.once("open", () => {
  server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT} with ${ENV} Environment`);
  });
});

mongoose.connection.on("error", (err) => {
  console.log(err);
  logEvents(
    `${err.no}: ${err.code}\t${err.syscall}\t${err.hostname}`,
    "mongoErrLog.log"
  );
});
