// my-fullstack-app/server.js

const express = require('express');
const cors = require('cors');
const pool = require('./db');
const apiRoutes = require('./routes/api');

const app = express();

// Enable CORS for all routes
app.use(cors());

app.use(express.json()); // for parsing application/json

// Use API routes
app.use('/api', apiRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
