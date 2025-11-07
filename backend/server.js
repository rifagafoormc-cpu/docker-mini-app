const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb://mongo:27017/dockerlearn', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("✅ Connected to MongoDB"))
.catch(err => console.error("MongoDB error:", err));

// Simple route
app.get('/api/hello', (req, res) => {
  res.json({ message: "Hello from backend!" });
});

// Start server
app.listen(5000, () => console.log("🚀 Backend running on port 5000"));
