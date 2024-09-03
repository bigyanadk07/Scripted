const express = require('express');
const router = express.Router();
const PostModel = require('../../models/blogpostModel'); // Ensure the path is correct

// Route to fetch post by partial _id (first 4 digits)
router.get('/find/:partialId', async (req, res) => {
  try {
    const { partialId } = req.params;
    
    // Find posts where the string representation of _id starts with partialId
    const posts = await PostModel.find({
      $where: function() {
        return this._id.toString().startsWith(partialId);
      }
    });

    if (posts.length === 0) {
      return res.status(404).json({ error: 'No posts found with the given partial ID' });
    }

    res.status(200).json(posts);
  } catch (err) {
    console.error('Error fetching posts:', err); // Detailed logging
    res.status(500).json({ error: 'Server error', details: err.message });
  }
});

module.exports = router;
