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
        wthrs:[
            {temp:"66", curConditions:"Partly Cloudy", curcity:"Republic"}
        ]
    },
    methods:{
        curWeather() {
            apiString = "https://api.openweathermap.org/data/2.5/weather?zip=65738,us&units="+ this.apiParam + "&appid=6df605a29ea5d833a7dbfa5767e8d5b0"
            axios.get(apiString)
            .then(function (e){
                console.log(e.data.main) //to see my results in the console for reference
                app.wthrs = e.data.main
                
            })
        }

    }
   
})

