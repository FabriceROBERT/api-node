const express = require("express");
const db = require("./server");
const cors = require("cors");

const app = express();
const PORT = 3000;
app.use(cors());
app.use(express.json());

app.get("/duncanworld", async (req, res) => {
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

app.get("/duncan:id", async (req, res) => {
  let conn;
  try {
    conn = await db.getConnection();
    const id = req.params.id;
    res.status(200).json(result);
    const result = await conn.query("SELECT * FROM users WHERE id = ?", [id]);
  } catch (error) {
    res.status(500).json({ error: "An error occurred while fetching data" });
  } finally {
    if (conn) conn.release();
  }
});

app.post("/newduncan", async (req, res) => {
  let conn;
  try {
    conn = await db.getConnection();
    const result = await conn.query(
      "INSERT INTO users (name, email) VALUES (?, ?)",
      [req.body.name, req.body.email]
    );
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: "An error occurred while fetching data" });
  } finally {
    if (conn) conn.release();
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log("http://localhost:3000/duncanworld");
});
