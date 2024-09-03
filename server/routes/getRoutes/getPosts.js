const express = require('express')
const mongoose = require('mongoose')
const router = express.Router()
const PostModel = require("../../models/blogpostModel")

router.get('/', async(req,res) => {
    try{
        const posts = await PostModel.find();
        res.json(posts)
    } catch(err) {
        res.status(500).json({err: err.message});
    }
});

module.exports  = router;