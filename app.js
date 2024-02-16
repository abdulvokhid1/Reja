console.log("Web Servernin Boshlash");
const { rejects } = require("assert");
const express = require("express");
const res = require("express/lib/response");
const app = express();
const fs = require("fs");

// MongoDb

const db = require("./server").db();
const mongodb = require("mongodb");

let user;
fs.readFile("database/user.json", "utf8", (err, data) => {
  if (err) {
    console.log("ERROR", err);
  } else {
    user = JSON.parse(data);
  }
});

// 4 bosqichga bolinadi

//1 => express ga kiirb kelyotgan malumotlarga bogliq bolgan kodlar yoz iladi
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
app.post("/create-item", (req, res) => {
  console.log(req.body);
  const new_reja = req.body.reja;
  db.collection("plans").insertOne({ reja: new_reja }, (err, data) => {
    console.log(data.ops);
    res.json(data.ops[0]);
  });
  // TODO: code with db here
});

app.post("/delete-item", (req, res) => {
  const id = req.body.id;
  db.collection("plans").deleteOne(
    { _id: new mongodb.ObjectId(id) },
    function (err, data) {
      res.json({ state: "success" });
    }
  );
});

app.post("/edit-item", (req, res) => {
  const data = req.body;
  console.log(data);
  db.collection("plans").findOneAndUpdate(
    {
      _id: new mongodb.ObjectId(data.id),
    },
    { $set: { reja: data.new_input } },
    function (err, data) {
      res.json({ state: "success" });
    }
  );
});

app.post("/delete-all", (req, res) => {
  if (req.body.delete_all) {
    db.collection("plans").deleteMany(function () {
      res.json({ state: " all plans deleted" });
    });
  }
});

app.get("/", function (req, res) {
  console.log("user entered /");
  db.collection("plans")
    .find()
    .toArray((err, data) => {
      if (err) {
        console.log(err);
        res.end("something went wrong");
      } else {
        console.log(data);
        res.render("reja", { items: data });
      }
    });
});

app.get("/author", (req, res) => {
  res.render("author", { user: user });
});

module.exports = app;
