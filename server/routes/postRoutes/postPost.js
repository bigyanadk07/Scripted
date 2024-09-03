const express = require('express');
const router = express.Router();
const PostModel = require('../../models/blogpostModel'); // Ensure the path is correct

// Route to handle POST requests to add a new post
router.post('/', async (req, res) => {
  try {
    const { title, imgsrc, author, tagline, description } = req.body;

    // Validate request body
    if (!title || !author || !tagline || !description) {
      return res.status(400).json({ error: 'Title, author, tagline, and description are required' });
    }

    // Create a new post
    const newPost = new PostModel({
      title,
      imgsrc, // imgsrc is optional
      author,
      tagline,
      description,
    });

    // Save the post to the database
    const savedPost = await newPost.save();

    // Send response
    res.status(201).json(savedPost);
  } catch (err) {
    console.error('Error:', err.message || err);
    res.status(500).json({ error: 'Server error', details: err.message });
  }
});

module.exports = router;
