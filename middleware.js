const jwt = require("jsonwebtoken");
require("dotenv").config();
exports.authenticator = (req, res, next) => {
  const token = req.query.authorization
    ? req.query.authorization
    : req.headers.authorization;

  if (token && process.env.API_KEY) {
    jwt.verify(token, process.env.API_KEY, (err, decoded) => {
      if (err) {
        return res.status(401).json({ error: "Token invalide" });
      }
      req.user = decoded;
      next();
    });
  } else {
    return res.status(401).json({ error: "Token invalide" });
  }
};
