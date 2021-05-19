// This will be my vue. I will use it to set parameters and methods including api call
const app = new Vue({
    el: "#app", //Gets at the element with the id of app
    data: {
        //Set up parameter's. I only used strings here
        temp: "",
        curConditions: "",
        curCity: "",
        zipCode: "",
        apiParam: "imperial",
        imp: "° f",
        met: "° c",
       
        //An array for temps
        wthrs:[
            {temp:"66", curConditions:"Partly Cloudy", curCity:"Republic"}
        ],
        //An array for the weather condition
        conds:[]
    },
    methods:{
        // This is my method to validate zip code. It makes sure only numbers are used and uses the length of the input to make sure it is 5 digits.  
        valZip () {
            zips = this.zipCode //this is the zip that the user entered
            valRegEx = /^[^\W_]$|\d{5}/gm; //this is my regex expression restricting the use of letters and characters and allowing for 5 digits. 
            validZip = valRegEx.test(zips); //testing the conditions set
            //Using if/else statement, if regex conditions are met and zip is only 5 digits then call API method below. Otherwise give an error explaining conditions.
            if (validZip == true && zips.length == 5){
                this.curWeather()
            } else {
               alert(" Please enter a valid 5 digit zip code.  Numeric only. If your zip code is less than 3 digits, use 0 before the zip to get 5 digits. e.g. for '501'  use '00501' ")
            }
            
           
            
        },
        //this is the method that uses axios to call my api string. 
        curWeather() {
            apiString = "https://api.openweathermap.org/data/2.5/weather?zip="+ this.zipCode +",us&units="+ this.apiParam + "&appid=6df605a29ea5d833a7dbfa5767e8d5b0"
            //API call and parse. I love AXIOS
            axios.get(apiString)
            .then(function (e){
                console.log(e.data) //to see my results in the console for reference
                
                app.wthrs = e.data.main //puting temps into array
                app.curCity = e.data.name //setting the current city param
                app.conds = e.data.weather[0] //putting the conditions into an array

            })
        }

    }
   
})

