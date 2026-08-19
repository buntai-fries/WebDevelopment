import express from "express";
import ejs from "ejs";

const app = express();
const port = 5000;
const _day = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const today = new Date();
const __day = _day[today.getDay()];
let _activity =
  __day == "Sunday" || __day == "Saturday" ? "have fun" : "work hard";
const data = { day: __day, activity: _activity };

// app.set("view engine", "ejs"); (optional: connect ejs to express)

app.get("/", (req, res) => {
  res.render("index.ejs", data);
});

app.listen(port, () => {
  console.log(`The server port ${port} is up!`);
});
