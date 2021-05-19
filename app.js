// This will be my vue. I will use it to set parameters and methods including api call
const app = new Vue({
    el: "#app", //Gets at the element with the id of app
    data: {
        temp: "",
        curConditions: "",
        curCity: "",
        zipCode: "",
        apiParam: "imperial",
        imp: "° f",
        met: "° c",
       
        wthrs:[
            {temp:"66", curConditions:"Partly Cloudy", curCity:"Republic"}
        ],
        conds:[]
    },
    methods:{
        valZip () {
            zips = this.zipCode
            console.log(zips.length)
            valRegEx = /^[^\W_]$|\d{5}/gm;
            validZip = valRegEx.test(zips);
            if (validZip == true && zips.length == 5){
                this.curWeather()
            } else {
               alert(" Please enter a valid 5 digit zip code.  Numeric only. If your zip code is less than 3 digits, use 0 before the zip to get 5 digits. e.g. for '501'  use '00501' ")
            }
            
           
            
        },
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

