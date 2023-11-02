const ApiKey = (req, res, next) => {
  const Api_key = "2803";
  const Api = req.query.api_key;
  if (Api && Api === Api_key) {
    next();
  } else {
    res.json({ message: "not allowed" });
  }
};
module.exports = ApiKey;
