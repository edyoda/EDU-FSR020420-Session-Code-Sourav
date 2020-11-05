const request = require('request')

const url = "http://api.weatherstack.com/current?access_key=3a824de6160f4d2caf09b2f9789425e8&query=Bangalore"

request({ url: url, json:true }, (error, response) => {
    console.log(response.body.current.temperature)
})