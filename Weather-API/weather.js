const apikey = "c1247aa6022e62d9b24667c256f6a1bf";
const url = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

let cityval = document.querySelector("#city-input");
let btn = document.querySelector("#search-btn");
let city = document.querySelector("#city-name");
let temp = document.querySelector("#temp");
let humid = document.querySelector("#humidity");
let wind = document.querySelector("#wind-speed");
let image = document.querySelector("#weather-img");

async function checkWeather(cityval) {
    const response = await fetch(url + cityval + `&appid=${apikey}`);
  if (response.status === 404){
    alert("Invalid City Name");    
      document.querySelector("#weather-info").style.display = "none";
  }
  else{
        var data = await response.json();
        console.log(data);
        city.innerHTML = data.name;
        temp.innerHTML = Math.round(data.main.temp) + "&degC";/*MATH ROUND DIRECT UPAR MTT LAGANA YAHA PAR HII LAGANA */
        humid.innerHTML = data.main.humidity + " %";
        wind.innerHTML = data.wind.speed + " km\h";

        if (data.weather[0].main === 'Clouds') {
            image.src = "";
            image.alt = "CLOUDS";
        }
        else if (data.weather[0].main === "Clear") {
            image.src = "";
            image.alt = "CLEAR";
        }
        else if (data.weather[0].main === "Rain") {
            image.src = "";
            image.alt = "RAIN";
        }
        else if (data.weather[0].main === "Drizzle") {
            image.src = "";
            image.alt = "DRIZZLE";
        }
        else if (data.weather[0].main === "Mist") {
            image.src = "";
            image.alt = "MIST";
        }
        else if (data.weather[0].main === "Snow") {
            image.src = "";
            image.alt = "SNOW";
        }
        else {
            image.src = "";
            image.alt = `${data.weather[0].main}`;
        }

      document.querySelector("#weather-info").style.display = "block";/*YEH DISPLAY SHOW KRNE KE LIYE */
        

    }
  }

btn.addEventListener("click", (e) => {
    e.preventDefault();/* YEH FORM SE BACHNE KE LIYE LAGAYA HAI */
    checkWeather(cityval.value);/* YEH UPAR LIKHNE PAR TYPE ERROR AARA HAI */
})


/* ESE API CALL KRNA HAI */
/* 
const response = await fetch(url + cityval + `&appid=${apikey}`);
var data = await response.json();
console.log(data);
*/



