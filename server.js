const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const path = require("path");

// <----------- import router ------------->

// <----------used router ------->

const MainRouter = require("./Routes/route");

// <--------- use Router in Routes/routes.js file -------------->

app.use(MainRouter);

// <-------------use static middleware to used send static files------------>

// app.use(express.static("public"));

//<---------- setup a view engine--------->

app.set("view engine", "ejs");

// < ---------------- normal routing method--------------->

// app.get("/", (req, res) => {
//   res.sendFile(path.resolve(__dirname) + "/index.html");
// });
// app.get("/about", (req, res) => {
//   res.sendFile(path.resolve(__dirname) + "/About.html");
// });

// <------------- res.download method to used to download the file using relative path----->

// app.get("/download", (req, res) => {
//   res.download(path.resolve(__dirname) + "/about.html");
// });

// <-------------- using view engine method we define route like this---------------->

// app.get("/", (req, res) => {
//   res.render("index", {
//     title: "Welcome to home page!!",
//   });
// });

// app.get("/about", (req, res) => {
//   res.render("about", {
//     title: "Welcome to about page!!",
//   });
// });

app.listen(PORT, () => console.log(`lisning to the port ${PORT}`));
