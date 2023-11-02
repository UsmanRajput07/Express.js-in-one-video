const router = require("express").Router();

router.get("/", (req, res) => {
  res.render("index", {
    title: "Welcome to home page!!",
  });
});

router.get("/about", (req, res) => {
  res.render("about", {
    title: "Welcome to about page!!",
  });
});

module.exports = router;
