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
       
        wthrs:[
            {temp:"66", curConditions:"Partly Cloudy", curCity:"Republic"}
        ],
        conds:[]
    },
    methods:{
        curWeather() {
            apiString = "https://api.openweathermap.org/data/2.5/weather?zip="+ this.zipCode +",us&units="+ this.apiParam + "&appid=6df605a29ea5d833a7dbfa5767e8d5b0"
            axios.get(apiString)
            .then(function (e){
                console.log(e.data) //to see my results in the console for reference
                
                app.wthrs = e.data.main
                app.curCity = e.data.name
                app.conds = e.data.weather[0]

            })
        }

    }
   
})

