const express = require("express");
const ejs = require("ejs");
const path = require("path");

const app = express();
const viewsPath = path.join(__dirname, "views");
const publicPath = path.join(__dirname, "public");

app.set("view engine", "ejs");
app.set("views", viewsPath);

app.use(express.static(publicPath));

app.engine("html", ejs.renderFile);

app.get("/", (req, res) => {
    res.render("index.html");
});

app.listen(3000, () => {
    console.log("Server is running on port http://localhost:3000");
});