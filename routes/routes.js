const express = require('express');

const router = express.Router();

const getPost = async (req, res, next) => {
    let post
    try {
        post = await Post.findById(req.params.id)
        if (post == null) {
            return res.status(404).json({ message: 'cannot find post'})
        }
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }
    res.post = post;
    next()
}

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

router.get('/:id', getPost, (req, res) => {
    res.send(req.post.title)
})

// Create one

router.post('/', async (req, res) => {
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

module.exports = router;