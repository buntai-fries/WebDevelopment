import express from "express";
import ejs from "ejs";
import { dirname } from "path";
import { fileURLToPath } from "url";

const app = express();
const port = 5000;
const __dirname = dirname(fileURLToPath(import.meta.url));

// app.set("view engine", "ejs"); (optional: connect ejs to express)

app.get("/", (req, res) => {
  const data = {
    name: "Lenovo",
  };
  res.render("index.ejs", data);
});

/*
app.post("/submit", (req, res) => {
  res.render("index.ejs", { name: req.body["name"] });
});
*/

app.listen(port, () => {
  console.log(`The server port ${port} is up!`);
});
