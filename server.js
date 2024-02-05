console.log("Web Servernin Boshlash");
const express = require("express");
const app = express();
const http = require("http");

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

app.get("/hello", function (req, res) {
  res.end("<h1>Hello World by ALi</h1>");
});
app.get("/gift", function (req, res) {
  res.end("<h1>You are in gift page</h1>");
});

const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function () {
  console.log(`This server is running succesfully on port:${PORT}`);
});
