const express = require('express');

const router = express.Router();

// Get all

router.get('/', (req, res) => {
    res.send('this is get all')
})

// Get one

router.get('/:id', (req, res) => {
    res.params.id('this is get one:id')
})

// Create one

router.post('/', (req, res) => {
    const post = new Post ({
        title: req.body.title,
        description: req.body.description,
    })
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