const request = require('request')

const url = "http://api.weatherstack.com/current?access_key=3a824de6160f4d2caf09b2f9789425e8&query=15,75"
const geocode_url = "https://api.mapbox.com/geocoding/v5/mapbox.places/Bangalore.json?access_token=pk.eyJ1Ijoic291cmF2MjExMyIsImEiOiJja2gycXRrYjQwaDhwMnNteHV4amJsdGYyIn0.nqDy4xOMljn9q131QbSA2w"

request({ url: url, json: true }, (error, response) => {
    if (error) {
        console.log('Unable to connect to weather service. ')
    } else if (response.body.error){
        console.log('Unable to find location.')
    } else {
        const current_temp = response.body.current.temperature
        const feels_like = response.body.current.feelslike
        console.log('It is currently '+ current_temp + ' degrees but it feels like ' + feels_like + ' degrees out.')
    }
}) 

// Geocoding

// Address -> Lat/Long -> Weather

request({ url: geocode_url, json: true }, (error, response) => {
    if (error) {
        console.log('Unable to connect to geocoding service. ')
    } else if (response.body.features.length === 0) {
        console.log('Could not find this location. Try another search')
    } else {
        const latitude = response.body.features[0].center[1]
        const longitude = response.body.features[0].center[0]
        console.log(latitude, longitude)
    }
}) 