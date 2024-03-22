const apiKey = "47bf8c5aee7c7a5e90c687bddcfe3e26";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBar = document.querySelector("#searchbar");
const searchBtn = document.querySelector("#search-img");
const weatherIcon = document.querySelector("#Weather-icon");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();

    document.querySelector("#city").innerHTML = data.name;
    document.querySelector("#Temp").innerHTML = Math.round(data.main.temp)  + "°C";
    document.querySelector(".Percantage").innerHTML = data.main.humidity + "%";
    document.querySelector(".Fig-km").innerHTML = data.wind.speed + "KM/hr";


    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "assets/clouds.png";
    }
    else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "assets/clear.png";
    }
    else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "assets/drizzle.png";
    }
    else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "assets/rain.png";
    }
    else if(data.weather[0].main == "Mist"){
        weatherIcon.src = "assets/mddist.png";
    }
    else if(data.weather[0].main == "Snow"){
        weatherIcon.src = "assets/snow";
    }

    document.querySelector("#Weather-icon").style.display = "block";
}


searchBtn.addEventListener("click", () => {
    checkWeather(searchBar.value);
})



