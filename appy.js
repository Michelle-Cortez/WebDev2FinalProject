// This will be my vue. I will use it to set parameters and methods including api call
const app = new Vue({
    el: "#app", //Gets at the element with the id of app
    data: {
        temp: "",
        curConditions: "",
        curCity: "",
        zipCode: 65738,
        apiParam: "imperial",
        imp: "° f",
        met: "° c",
        wthrs: [{
            City: {
                "coord": {
                    "lon": -93.48,
                    "lat": 37.123
                },
                "weather": [{
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04d"
                }],
                "base": "stations",
                "main": {
                    "temp": 74.19,
                    "feels_like": 74.84,
                    "temp_min": 69.4,
                    "temp_max": 78.22,
                    "pressure": 1017,
                    "humidity": 75
                },
                "visibility": 10000,
                "wind": {
                    "speed": 1.01,
                    "deg": 51,
                    "gust": 1.99
                },
                "clouds": {
                    "all": 90
                },
                "dt": 1621363498,
                "sys": {
                    "type": 2,
                    "id": 2034497,
                    "country": "US",
                    "sunrise": 1621335789,
                    "sunset": 1621387070
                },
                "timezone": -18000,
                "id": 0,
                "name": "Republic",
                "cod": 200
            }
        }]
    },
    methods: {
        curWeather() {
            apiString = "https://api.openweathermap.org/data/2.5/weather?zip=65738,us&units=" + this.apiParam + "&appid=6df605a29ea5d833a7dbfa5767e8d5b0"
            axios.get(apiString)
                .then(function (e) {
                    console.log(e.data.main) //to see my results in the console for reference
                    console.log(e.data)
                    app.wthrs = e.data


                })
        }

    }

})