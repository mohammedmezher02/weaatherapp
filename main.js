const api_key="53d2b982fec30ac7ca8e8cc362ea3b0d";
const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchbox=document.querySelector(".search input");
const searchbtn=document.querySelector(".search button");
const weatherIcon=document.querySelector(".weather-icon");
async function checkweather(city){

const response=await fetch(apiurl+city+`&appid=${api_key}`);
var data =await response.json();
console.log(data);

document.querySelector(".city").innerHTML=data.name;
document.querySelector(".temp").innerHTML= Math.round(data.main.temp) +"°C" ;
document.querySelector(".humdinty").innerHTML=data.main.humidity + "%";
document.querySelector(".wind").innerHTML=data.wind.speed + " Km/h";
if(data.weather[0].main=="clouds"){

weatherIcon.src="images/icons8-clouds-48.png";

}
else if(data.weather[0].main=="Rain"){
    weatherIcon.src="images/icons8-rain-48.png";
}
else if(data.weather[0].main=="clear"){
    weatherIcon.src="images/icons8-sun-48.png";
}
else if(data.weather[0].main=="Drizzle"){
    weatherIcon.src="images/icons8-drizzle-80.png";
}
else if(data.weather[0].main=="Mist"){
    weatherIcon.src="images/icons8-mist-48.png";
}

}

searchbtn.addEventListener("click",()=>{
    checkweather(searchbox.value);

})
