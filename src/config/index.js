const express = require("express");
const db = require("./server");
const cors = require("cors");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const app = express();
const PORT = 3000;
const register = require("./register.js");
const login = require("./login.js");
const middleware = require("../../middleware.js");

const Produit = require("./sequelize/newProduit.js");

app.use(cors());
app.use(express.json());

app.get("/duncanworld", middleware.authenticator, async (req, res) => {
  let conn;
  try {
    conn = await db.getConnection();
    const result = await conn.query("SELECT * FROM users");
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: "An error occurred while fetching data" });
  } finally {
    if (conn) conn.release();
  }
});

app.get("/duncan/:id", async (req, res) => {
  let conn;
  try {
    conn = await db.getConnection();
    const id = req.params.id;
    const result = await conn.query("SELECT * FROM users WHERE id = ?", [id]);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: "An error occurred while fetching data" });
  } finally {
    if (conn) conn.release();
  }
});

app.post("/register", register.Register);
app.post("/login", login.Login);

// Produit.createTableProduit();
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log("http://localhost:3000/duncanworld");
});
