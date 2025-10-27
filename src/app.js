const express = require('express');
const cors = require('cors');
const aiRoutes = require('./routes/ai.routes');

const app = express();

// ✅ CORS setup (final)
app.use(
  cors({
    origin: [
      "https://code-review-tool-frontend.vercel.app", 
    ],
    methods: ["GET", "POST"],
    credentials: true,
  })
);

// Middleware
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.send('Hello from Backend 👋');
});

app.use('/ai', aiRoutes);

module.exports = app;
