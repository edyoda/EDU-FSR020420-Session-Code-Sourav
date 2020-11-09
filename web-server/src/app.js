const express = require('express')

const app = express()

app.get('', (req, res) => {
    res.send('<h1> Hello express! </h1>')
})

app.get('/help', (req, res) => {
    res.send({
        message: 'You ll get help here'
    })
})

app.get('/about', (req, res) => {
    res.send('<h1> About </h1>')
})

app.get('/weather', (req, res) => {
    res.send({
        forecast: "It is raining outside.",
        location: "Bangalore"
    })
})

app.listen(3000, () => {
    console.log('Server is listening at 3000')
})