// server/routes/deleteRoutes/deletePost.js
const express = require('express');
const router = express.Router();
const PostModel = require('../../models/blogpostModel'); // Adjust the path to your Post model if necessary

// Route to delete a post by ID
router.delete('/:id', async (req, res) => {
  try {
    const postId = req.params.id;

    // Find and delete the post
    const result = await PostModel.findByIdAndDelete(postId); // Use PostModel here

    if (!result) {
      return res.status(404).json({ error: 'Post not found' });
    }

    res.status(200).json({ message: 'Post deleted successfully' });
  } catch (err) {
    console.error('Error deleting post:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
