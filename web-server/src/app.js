const express = require('express')
const path = require('path')
const hbs = require('hbs')
const app = express()
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

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
    if (!req.query.address) {
        return res.send({
            error: 'You must provide an address!'
        })
    }

    geocode(req.query.address, (error, { latitude, longitude, place_name } = {}) => {
        if (error) {
            return res.send({ error })
        }

        forecast(latitude, longitude, (error, forecastData) => {
            if (error) {
                return res.send({ error })
            }

            res.send({
                forecast: forecastData,
                location: place_name,
                address: req.query.address
            })
        })
    })
    

    // res.send({
    //     weather: 'It is raining outside.',
    //     location: 'Bangalore',
    //     address: req.query.address
    // })
})

app.get('/products', (req,res) => {
    if (!req.query.search) {
        return res.send({
            error: 'You must provide a search term.'
        })
    }
    res.send({
        products: []
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