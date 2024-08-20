const db = require("./server");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.Login = async (req, res) => {
  console.log(req.body);

  try {
    conn = await db.getConnection();
    const result = await conn.query("SELECT * FROM users WHERE email = ?", [
      req.body.email,
    ]);
    conn.release();
    if (result.length === 0) {
      return res.status(401).json({ error: "Utilisateur non trouvé" });
    }
    const user = result[0];
    const isPasswordValid = await bcrypt.compare(req.body.pswd, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ error: "Mot de passe incorrect" });
    }
    let token = jwt.sign({ email: user.email }, process.env.API_KEY, {
      expiresIn: "1h",
    });
    res.status(200).json({
      message: "Connexion réussie",
      token,
    });
  } catch (error) {
    console.log(error);
  }
};
