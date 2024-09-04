const express = require("express");
const app = express();
const path = require("path");

const port = 8080;

app.use(express.static("public"));

app.set("view engines", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.get("/ig/:username", (req, res) => {
  const followers = ["adam", "steve", "Bob"];
  let { username } = req.params;
  res.render("instagram.ejs", { username, followers });
});

app.get("/hello", (req, res) => {
  res.render("hello");
});

app.get("/rolldice", (req, res) => {
  let diceVal = Math.floor(Math.random() * 6) + 1;
  res.render("rolldice.ejs", { diceVal: diceVal });
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
