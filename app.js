// This will be my vue. I will use it to set parameters and methods including api call
const app = new Vue({
    el: "#app", //Gets at the element with the id of app
    data: {
        curTemp: "testing",
        curConditions: "",
        curCity: "",
        zipCode: 65738,
        weather:[
            {curTemp:"66", curConditions:"Partly Cloudy", curcity:"Republic"}
        ]
    },
    methods:{
        curWeather() {
            weather = "api.openweathermap.org/data/2.5/weather?zip=65738 US&appid=6df605a29ea5d833a7dbfa5767e8d5b0"
            axios.get(weather)
            .then(function (e){
                console.log(e)
            })
        }

    }
   
})

