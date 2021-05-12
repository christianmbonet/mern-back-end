const express = require('express');
const Mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config')

const app = express();

// MIDDLEWARE

app.use(bodyParser.json())

// IMPORT

const postRoutes = require('./routes/routes');

app.use('/posts', postRoutes)

//ROUTES

app.get('/', (req, res) => {
    res.send('this is home')
})

// CONNECT TO DB 

Mongoose.connect(process.env.DB_CONNECTION, 
    { useNewUrlParser: true,
    useUnifiedTopology: true },
    () => console.log('connected to db')
)


// LISTENING ON PORT

app.listen(4000)