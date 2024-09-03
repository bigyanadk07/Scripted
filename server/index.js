const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const port = 4000;

const app = express();
app.use(express.json());
app.use(cors());

// Connect to the MongoDB database
mongoose.connect("mongodb://localhost:27017/Scripted")
  .then(() => console.log("Connected to MongoDB Database Successfully"))
  .catch(err => console.error("Error connecting to MongoDB database:", err));

// Import routes
const postgetRoute = require('../server/routes/getRoutes/getPosts');
const postPostRoute = require('../server/routes/postRoutes/postPost');
const editPostRoutes = require('../server/routes/updateRoutes/updatePost');
const deletePostRoute = require('../server/routes/deleteRoutes/deletePost'); // Import delete route

// Use routes
app.use('/getPosts', postgetRoute);
app.use('/addPost', postPostRoute);
app.use('/editPost', editPostRoutes);
app.use('/deletePost', deletePostRoute); // Use delete route

// Error handling middleware
app.use((req, res, next) => {
  res.status(404).json({ error: 'Endpoint not found' });
});

app.use((err, req, res, next) => {
  console.error('Server error:', err);
  res.status(500).json({ error: 'Internal Server Error' });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
