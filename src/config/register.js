const db = require("./server");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();
exports.Register = async (req, res) => {
  try {
    const { name, email, pswd } = req.body;
    conn = await db.getConnection();
    const result = await conn.query("SELECT * FROM users WHERE email = ?", [
      email,
    ]);
    conn.release();
    console.log(result);

    if (result.length > 0) {
      return res.status(400).json({ error: `Cet utilisateur existe deja` });
    }
    const hashedPassword = await bcrypt.hash(pswd, 10);
    const insertUserQuery =
      "INSERT INTO users (nom, email, password) VALUES (?,?,?)";
    const insertUserValues = [name, email, hashedPassword];
    await conn.query(insertUserQuery, insertUserValues);
    conn.release();

    // Si l'utilisateur est créé avec succès, il sera redirigé vers le tableau de bord
    //  const token = jwt.sign({ email }, process.env.API_KEY, { expiresIn: "1h" });
    // res.json({ token });
  } catch (error) {
    console.log(error);
  }
};
