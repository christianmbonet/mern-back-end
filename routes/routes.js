const express = require('express');

const router = express.Router();


router.get('/', (req, res) => {
    res.send('this is posts')
})

router.post('/', (req, res) => {
    const post = new Post ({
        title: req.body.title,
        description: req.body.description,
    })
})



module.exports = router;