const express = require("express");
const path = require("path");

const app = express();

// index.jsのファイルの場所を取得できる
// console.log(__dirname);
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", function (req, res) {
  //   console.log(req);
  res.send("<h1>トップページ!!</h1>");
});
app.get("/about", function (req, res) {
  res.send("aboutページ");
});
app.post("/api/v1/quiz", function (req, res) {
  const answer = req.body.answer;
  if (answer === "2") {
    // res.send("正解");
    res.redirect("/collect.html");
  } else {
    // res.send("不正解");
    res.redirect("/wrong.html");
  }
});
app.get("/api/v1/users", function (req, res) {
  res.send({
    name: "Mike",
    age: 30,
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("I an running"));

console.log("最終行");
