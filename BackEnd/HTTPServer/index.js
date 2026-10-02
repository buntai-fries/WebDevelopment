import express, { response } from "express";

const app = express();
const port = 5000;

app.get("/", (req, res) => {
  res.send("Hello World.");
});

app.post("/register", (req, res) => {
  res.sendStatus("201");
});

app.put("/user/Anup", (req, res) => {
  res.sendStatus("200");
});

app.patch("/user/Anup", (req, res) => {
  app.sendStatus("200");
});

app.delete("/user/Anup", (req, res) => {
  app.sendStatus("200");
});

app.listen(port, () => {
  console.log(`The server ${port} started.`);
});
