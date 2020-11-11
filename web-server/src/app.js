const express = require('express')
const path = require('path')
const hbs = require('hbs')
const app = express()

const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')
const publicDirectoryPath = path.join(__dirname, '../public')

app.set('views', viewsPath)
app.set('view engine', 'hbs')
hbs.registerPartials(partialsPath)

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
        title: "Help page",
        helpText: "New help text here",
        name: "Sourav"
    })
})

app.get('/weather', (req, res) => {
    res.send({
        forecast: "It is raining outside.",
        location: "Bangalore"
    })
})

app.get('/help/*', (req, res) => {
    res.render('404', {
        title: "404",
        errorMessage: "Help article not found!",
        name: "Sourav"
    })
})

app.get('*', (req, res) => {
    res.render('404', {
        title: "404",
        errorMessage: "Page not found!",
        name: "Sourav"
    })
})

app.listen(3000, () => {
    console.log('Server is listening at 3000')
})