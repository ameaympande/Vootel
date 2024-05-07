require("dotenv").config();
const http = require("http");
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 4000;
const ENV = process.env.ENV || "development";
const cors = require("cors");
const server = http.createServer(app);
const connectDB = require("./config/dbConn");
const auth = require("./auth/authHelper");

const corsOptions = {
  origin: "http://localhost:3000",
  methods: ["GET", "POST"],
  credentials: true,
};

connectDB();

app.use(cors(corsOptions));

app.use(express.json());

app.post("/login", auth.login);
app.post("/signup", auth.signUp);
app.use("/users", require("./routes/userRoutes"));

const io = require("socket.io")(server, {
  cors: corsOptions,
});

const activeUsers = new Set();

io.on("connection", (socket) => {
  console.log(`🟢 : ${socket.id} user just connected!`);

  socket.on("new user", function (data) {
    socket.userId = data;
    activeUsers.add(data);
    io.emit("new user", [...activeUsers]);
  });

  socket.on("chat message", (data) => {
    console.log(data);
    io.emit("chat message", data);
  });

  socket.on("disconnect", () => {
    console.log(`🔴 : ${socket.id} user disconnected`);
    activeUsers.delete(socket.userId);
    io.emit("user disconnected", socket.userId);
  });
});

app.get("/", (req, res) => {
  res.json({
    message: "Hello From server",
  });
});

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} with ${ENV} Environment`);
});

mongoose.connection.on("error", (err) => {
  console.log(err);
});
