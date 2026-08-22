import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  let data = { form: "Enter your name below 👇" };
  res.render("index.ejs", data);
});

app.post("/submit", (req, res) => {
  const _fName = req.body["fName"];
  const _lName = req.body["lName"];
  const wordCount = _fName.length + _lName.length;
  let data = { form: "There are " + wordCount + " letter in your name." };
  res.render("index.ejs", data);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
