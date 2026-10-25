import express from "express";
import axios from "axios";

const app = express();
const port = 5000;
const API_URL = "http://localhost:4000";

const yourUsername = "anup";
const yourPassword = "123";
const yourAPIKey = "96872f88-cd6b-4e02-97e4-6e95a4e790da";
const yourBearerToken = "86514cfe-9f5a-49f4-a23b-8a131a6af416";

app.get("/", (req, res) => {
  res.render("index.ejs", { content: "API Response." });
});

app.get("/clear", (req, res) => {
  res.redirect("/");
});

app.get("/noAuth", async (req, res) => {
  try {
    const response = await axios.get("http://localhost:4000/random");
    const data = response.data;
    const result = JSON.stringify(data);
    res.render("index.ejs", { content: result });
  } catch (e) {
    console.error(e);
  }
});

app.get("/basicAuth", async (req, res) => {
  try {
    const response = await axios.get("http://localhost:4000/all?page=2", {
      auth: {
        username: yourUsername,
        password: yourPassword,
      },
    });
    const data = response.data;
    const result = JSON.stringify(data);
    res.render("index.ejs", { content: result });
  } catch (e) {
    console.error(e);
  }
});

app.get("/apiKey", async (req, res) => {
  try {
    const response = await axios.get(
      `http://localhost:4000/filter?score=8&apiKey=${yourAPIKey}`,
    );
    const data = response.data;
    const result = JSON.stringify(data);
    res.render("index.ejs", { content: result });
  } catch (e) {
    console.error(e);
  }
});

app.get("/bearerToken", async (req, res) => {
  try {
    const response = await axios.get("http://localhost:4000/secrets/1", {
      headers: {
        Authorization: `Bearer ${yourBearerToken}`,
      },
    });
    const data = response.data;
    const result = JSON.stringify(data);
    res.render("index.ejs", { content: result });
  } catch (e) {
    console.error(e);
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
