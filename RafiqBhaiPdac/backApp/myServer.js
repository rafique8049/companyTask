const express = require("express");
const cors = require("cors");
const app = express();
const ConnectDB = require("./db");
const userModel = require("./Models/userModel");

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Welcome to GOPDAC....");
});
app.post("/addusers", (req, res) => {
  ConnectDB("userdata");
  const result = new userModel(req.body);
  result.save();
  res.send("new user has been added");
});
app.listen(3030, () => {
  console.log(`Connected to server : 3030`);
});
