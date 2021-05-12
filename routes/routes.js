const express = require('express');

const router = express.Router();


router.get('/', (req, res) => {
    res.send('this is posts')
})

router.post('/posts', (req, res) => {
    res.send('this is posts')
})

module.exports = router;