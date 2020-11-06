const request = require("request")

const forecast = (latitude, longitude, callback) => {
    const url = "http://api.weatherstack.com/current?access_key=3a824de6160f4d2caf09b2f9789425e8&query=" + latitude + ',' + longitude
    request({ url: url, json: true}, (error, response) => {
        if (error) {
            callback('Unable to reach weather service!', undefined)
        } else if (response.body.error) {
            callback('Unable to fetch the weather for this location, please try again!', undefined)
        } else {
            callback(undefined, response.body.current.weather_descriptions[0] + ". It is currently " + response.body.current.temperature + " degress out.")
        }
    })
}

module.exports = forecast