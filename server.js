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

app.get("/", function (req, res) {
  res.render("harid.ejs");
});
app.post("/create-item", (req, res) => {
  console.log(req.body);
  res.json({ test: "success" });
});

const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function () {
  console.log(`This server is running succesfully on port:${PORT}`);
});