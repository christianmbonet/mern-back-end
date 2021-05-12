const express = require('express');

const router = express.Router();


router.get('/artwork', (req, res) => {
    res.send('this is work')
})

router.get('/artworks', (req, res) => {
    res.send('this is artworks')
})

module.exports = router;