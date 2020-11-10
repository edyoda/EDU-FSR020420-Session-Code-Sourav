const express = require('express')
const path = require('path')

const app = express()

const publicDirectoryPath = path.join(__dirname, '../public')

app.set('view engine', 'hbs')
app.use(express.static(publicDirectoryPath))

app.get('',(req,res)=> {
    res.render('index', {
        title: "Weather app",
        name: "Sourav"
    })
})

app.get('/about',(req,res)=> {
    res.render('about', {
        title: "About Me",
        name: "Sourav"
    })
})

app.get('/help',(req,res)=> {
    res.render('help', {
        helpText: "New help text here"
    })
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