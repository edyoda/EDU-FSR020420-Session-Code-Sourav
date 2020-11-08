const request = require('request')

const url = "http://api.weatherstack.com/current?access_key=3a824de6160f4d2caf09b2f9789425e8&query=15,75"

request({ url: url, json: true }, (error, response) => {
    const current_temp = response.body.current.temperature
    const feels_like = response.body.current.feelslike
    console.log('It is currently '+ current_temp + ' degrees but it feels like ' + feels_like + ' degrees out.')
}) 