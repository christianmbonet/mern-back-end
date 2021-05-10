const express = require('express');

const app = express();

// MIDDLEWARE

app.use('/post', () => {
    console.log('this is middleware')
})

//ROUTES

app.get('/', (req, res) => {
    res.send('this is home')
})

app.get('/post', (req, res) => {
    res.send('this is post')
})


// LISTENING ON PORT

app.listen(4000)