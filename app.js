console.log("Web Servernin Boshlash");
const express = require("express");
const res = require("express/lib/response");
const app = express();
const fs = require("fs");

// MongoDb

const db = require("./server").db();

let user;
fs.readFile("database/user.json", "utf8", (err, data) => {
  if (err) {
    console.log("ERROR", err);
  } else {
    user = JSON.parse(data);
  }
});

// 4 bosqichga bolinadi

//1 => express ga kiirb kelyotgan malumotlarga bogliq bolgan kodlar yoziladi
// bu har qanday broweserdan kirib kelyotgan zaproslar uchun public folder ochiq degan manoni bildiradi
app.use(express.static("public"));
app.use(express.json()); // bu kiirb keyotgan jason formatdagi datani object holatga ogirib beradi
app.use(express.urlencoded({ extended: true })); // => formdan HTML orqali bror bir narsani post qilsak bizni express serverimizm qabul qiladi

//2 : Sessionlarga bogliq bolgan narsa yoziladi

//3: BSS: BackEnd Server Site Rendering, backend da html yasab uni client ga yuboramiz
// views ga bogliq codelar
app.set("views", "views");
app.set("view engine", "ejs");

//4 => bu routerlarga moljallangan
app.get("/", (req, res) => {
  res.render("reja");
});

app.get("/author", (req, res) => {
  res.render("author", { user: user });
});

app.post("/create-item", (req, res) => {
  console.log(req.body);
  res.json({ test: "success" });
});

module.exports = app;
