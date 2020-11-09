const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const address = process.argv[2]
if (!address) {
    return console.log('Please provide the location!')
}
// Location -> Latitude/Longitude
geocode(address, (error, { longitude, latitude, place_name } = {}) => {
    if (error){
        return console.log('Error = ', error)
    }
    // Latitude/Longitude -> Weather data
    forecast(latitude, longitude, (error, forecastData) => {
        if (error) {
            return console.log('Error = ', error)
        }
        console.log('Place = ', place_name)
        console.log(forecastData) 
    })
})

