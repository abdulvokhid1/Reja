const http = require("http");
const mongodb = require("mongodb");

let db;
const connectionString =
  "mongodb+srv://ali:OO0mjh8KtjIJ32AV@cluster0.ed9udo3.mongodb.net/Reja";

mongodb.connect(
  connectionString,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err, client) => {
    if (err) console.log("ERROR on connection MongoDB");
    else {
      console.log(" connection succeed");
      module.exports = client;
      const app = require("./app");
      const server = http.createServer(app);
      let PORT = 3000;
      server.listen(PORT, function () {
        console.log(
          `This server is running succesfully on port:${PORT} http://localhost${PORT}:`
        );
      });
    }
  }
);
