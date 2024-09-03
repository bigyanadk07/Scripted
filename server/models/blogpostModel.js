const mongoose = require('mongoose');

// Define the schema for the posts
const postSchema = new mongoose.Schema({
  title: { type: String, required: true },
  imgsrc: { type: String, required: false }, // Renamed from 'image' to 'imgsrc' to match the frontend
  author: { type: String, required: true },
  tagline: { type: String, required: true },
  description: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
}, {
  collection: 'Posts', // Collection name in MongoDB
  timestamps: true // Automatically add createdAt and updatedAt fields
});

// Export the model
module.exports = mongoose.model('Post', postSchema);
