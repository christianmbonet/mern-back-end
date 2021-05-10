const express = require('express');
const Mongoose = require('mongoose');
require('dotenv/config')

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

// CONNECT TO DB 

Mongoose.connect(process.env.DB_CONNECTION, 
    { useNewUrlParser: true,
    useUnifiedTopology: true },
    () => console.log('connected to db')
)


// LISTENING ON PORT

app.listen(4000)