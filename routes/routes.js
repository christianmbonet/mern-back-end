const express = require('express');

const router = express.Router();

// Get all

router.get('/', async (req, res) => {
    try {
        const posts = await Post.find()
        res.json(posts)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

// Get one

router.get('/:id', (req, res) => {
    res.send(req.params.id)
})

// Create one

router.post('/', (req, res) => {
    const post = new Post ({
        title: req.body.title,
        description: req.body.description,
    })

    try {
        const newPost = await post.save()
        res.status(201).json(newPost)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})

// Update one

router.patch('/:id', (req, res) => {
    res.send('this is posts')
})

// Delete one

router.get('/:id', (req, res) => {
    res.send('this is posts')
})

const async getPost = (req, res, next) => {
    try {
        post = await Post.findById(req.params.id)
    } catch (err) {

    }
}

module.exports = router;