const request = require("postman-request");


const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=ab5d31ad2396a903f459f5d7da3e68c1&query=' + latitude +','+ longitude + '&units=m'

    request({url, json: true}, (error, {body}) => {
        if (error) {
            callback('Unable to connect to the services', undefined)
        } else if (body.error) {
            callback('Unable to find the location. Try another search', undefined)
        } else {
            callback(undefined, body.current.weather_descriptions[0] + '. Its is currently ' + body.current.temperature + ' out. It feels like '
                + body.current.feelslike + ' degress out. The humidity is ' + body.current.humidity);
        }
    });
}

module.exports = forecast;

