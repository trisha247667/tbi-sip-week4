require("dotenv").config();

const express = require("express");
const cors = require("cors");
const { Pool } = require("pg");

const app = express();

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

// Test Database Connection
pool.connect()
  .then(() => console.log("✅ Connected to Supabase PostgreSQL"))
  .catch((err) => console.error("❌ Database Connection Error:", err.message));

// Home Route
app.get("/", (req, res) => {
  res.send("Artisan Connect Backend Running with Supabase!");
});

// Get All Products
app.get("/api/products", async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT * FROM products ORDER BY id ASC"
    );

    res.json(result.rows);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

// Search Products
app.get("/api/products/search", async (req, res) => {
  try {
    const q = req.query.q || "";

    const result = await pool.query(
      `SELECT * FROM products
       WHERE LOWER(name) LIKE LOWER($1)
       OR LOWER(category) LIKE LOWER($1)
       ORDER BY id ASC`,
      [`%${q}%`]
    );

    res.json(result.rows);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

// Get Product By ID
app.get("/api/products/:id", async (req, res) => {
  try {
    const id = req.params.id;

    const result = await pool.query(
      "SELECT * FROM products WHERE id=$1",
      [id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({
        message: "Product not found",
      });
    }

    res.json(result.rows[0]);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

// Categories
app.get("/api/categories", async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT DISTINCT category FROM products"
    );

    res.json(result.rows);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

// About
app.get("/api/about", (req, res) => {
  res.json({
    project: "Artisan Connect Backend",
    database: "Supabase PostgreSQL",
    version: "2.0",
    developer: "Trisha Gupta",
  });
});

// CREATE Product
app.post("/api/products", async (req, res) => {
  try {
    const { name, price, category, description, image } = req.body;

    const result = await pool.query(
      `INSERT INTO products
      (name,price,category,description,image)
      VALUES($1,$2,$3,$4,$5)
      RETURNING *`,
      [name, price, category, description, image]
    );

    res.status(201).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

// UPDATE Product
app.put("/api/products/:id", async (req, res) => {
  try {
    const id = req.params.id;

    const { name, price, category, description, image } = req.body;

    const result = await pool.query(
      `UPDATE products
      SET name=$1,
      price=$2,
      category=$3,
      description=$4,
      image=$5
      WHERE id=$6
      RETURNING *`,
      [name, price, category, description, image, id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({
        message: "Product not found",
      });
    }

    res.json(result.rows[0]);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

// DELETE Product
app.delete("/api/products/:id", async (req, res) => {
  try {
    const id = req.params.id;

    const result = await pool.query(
      "DELETE FROM products WHERE id=$1 RETURNING *",
      [id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({
        message: "Product not found",
      });
    }

    res.json({
      message: "Product deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

// 404
app.use((req, res) => {
  res.status(404).json({
    message: "Route not found",
  });
});

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});