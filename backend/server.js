require('dotenv').config(); // must be first
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
const mongoUri = process.env.MONGO_URL;
if (!mongoUri) {
  console.error("❌ MONGO_URL is not defined in .env");
  process.exit(1);
}

mongoose.connect(mongoUri)
  .then(() => console.log("✅ Connected to MongoDB Atlas"))
  .catch(err => console.error("❌ MongoDB connection error:", err));

// Simple route
app.get('/api/hello', (req, res) => {
  res.json({ message: "Hello from backend!" });
});

// Start server
app.listen(5000, () => console.log("🚀 Backend running on port 5000"));
