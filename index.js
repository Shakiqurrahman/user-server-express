require("dotenv").config();
const express = require("express");

const app = express();
const port = process.env.PORT || 3000;

const loginText = "<h1>Please Login First!!</h1>"
const registarText = '<h3>Before Login, You must have to register!!</h3>'
const userData = {
    "name" : "Shakiqur Rahman",
    "profession" : "Web Developer",
    "specializedIn" : "Front-End Development"
}

app.get("/", (req, res) => {
  res.send("Hello World!!");
});

app.get("/login", (req, res) => {
  res.send(loginText);
});

app.get('/registar', (req, res) => {
    res.send(registarText)
})

app.get('/user', (req, res) => {
    res.send(userData);
})

app.listen(port, () => {
  console.log(`App is running at port: ${port}`);
});
