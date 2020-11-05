const request = require('request')

// const url = "http://api.weatherstack.com/current?access_key=3a824de6160f4d2caf09b2f9789425e8&query="

// request({ url: url, json:true }, (error, response) => {
//     if (error) {
//         console.log('Unable to reach weather service!')
//     } else if (response.body.error) {
//         console.log('Unable to fetch the weather for this location, please try again!')
//     } else {
//         console.log(response.body.current.temperature) 
//     }  
// })

// request({ url: geocode_url, json:true }, (error, response) => {
//     if (error) {
//         console.log('Unable to reach the geocoding services.')
//     } else if (response.body.features.length === 0) {
//         console.log('Unable to fetch the co-ordinates. Please try any other location. ')
//     } else {
//         console.log("latitude = " + response.body.features[0].center[0])
//         console.log("longitude = " + response.body.features[0].center[1])
//     }
// })

const geocode = (address, callback) => {
    const url = "https://api.mapbox.com/geocoding/v5/mapbox.places/Bangalore.json?access_token=pk.eyJ1Ijoic291cmF2MjExMyIsImEiOiJja2gycXRrYjQwaDhwMnNteHV4amJsdGYyIn0.nqDy4xOMljn9q131QbSA2w"
    request({ url: url, json:true }, (error, response) => {
        if (error) {
            callback('Unable to connect to geocode services!', undefined)
        } else if (response.body.features.length === 0) {
            callback('Unable to fetch location!', undefined)
        } else {
            callback(undefined, {
                latitude: response.body.features[0].center[0],
                longitude: response.body.features[0].center[1],
                place_name: response.body.features[0].place_name
            })
        }
    })
}

geocode('Bangalore', (error, data) => {
    if(error){
        console.log('Error = ', error)
    }
    console.log('Data = ', data)
})