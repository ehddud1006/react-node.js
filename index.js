const express = require('express')
const app = express()
const port = 3000
const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://ehddud1006:ehdrnajd55@boilerplate.tdugp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
}).then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err))

app.get('/', (req, res) => res.send('Hello BAAM!!!!!!'))

app.listen(port, () => console.log(`Example app listning on port ${port}!`))