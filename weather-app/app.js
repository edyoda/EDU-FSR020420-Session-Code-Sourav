const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const address = process.argv[2]
if (!address) {
    return console.log('Please provide the location!')
}
// Location -> Latitude/Longitude
geocode(address, (error, data) => {
    if (error){
        return console.log('Error = ', error)
    }
    // Latitude/Longitude -> Weather data
    forecast(data.latitude, data.longitude, (error, forecastData) => {
        if (error) {
            return console.log('Error = ', error)
        }
        console.log('Place = ', data.place_name)
        console.log(forecastData) 
    })
})

