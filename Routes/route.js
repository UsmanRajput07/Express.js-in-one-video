const router = require("express").Router();

// <----- use middleware ----->
const middleware = require("../MiddleWare/ApiKey");

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

// <----- use middleware ----->
router.get("/product/api", middleware, (req, res) => {
  res.json([
    {
      id: "123",
      name: "hlo",
    },
    {
      id: "1234",
      name: "how are you",
    },
  ]);
});

module.exports = router;
