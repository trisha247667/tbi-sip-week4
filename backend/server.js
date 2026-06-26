const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Sample Products Data
const products = [
  {
    id: 1,
    name: "Handmade Vase",
    price: "₹500",
    category: "Pottery",
  },
  {
    id: 2,
    name: "Wooden Sculpture",
    price: "₹850",
    category: "Wood Crafts",
  },
  {
    id: 3,
    name: "Traditional Painting",
    price: "₹1200",
    category: "Paintings",
  },
  {
    id: 4,
    name: "Warli Painting",
    price: "₹1500",
    category: "Paintings",
  },
];

// Home Route
app.get("/", (req, res) => {
  res.send("Artisan Connect Backend Running!");
});

// Get All Products
app.get("/api/products", (req, res) => {
  res.json(products);
});

// Search Products
app.get("/api/products/search", (req, res) => {
  const query = (req.query.q || "").toLowerCase();

  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(query) ||
      product.category.toLowerCase().includes(query)
  );

  res.json(filteredProducts);
});

// Get Product By ID
app.get("/api/products/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const product = products.find((p) => p.id === id);

  if (!product) {
    return res.status(404).json({
      message: "Product not found",
    });
  }

  res.json(product);
});

// Categories API
app.get("/api/categories", (req, res) => {
  res.json([
    "Pottery",
    "Wood Crafts",
    "Paintings",
    "Jewellery",
    "Textiles",
  ]);
});

// About API
app.get("/api/about", (req, res) => {
  res.json({
    project: "Artisan Connect Backend",
    version: "1.0.0",
    developer: "Trisha Gupta",
    description:
      "Backend API for connecting local artisans with customers.",
  });
});

// 404 Route
app.use((req, res) => {
  res.status(404).json({
    message: "Route not found",
  });
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});