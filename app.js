const cityName = document.querySelector(".search input");
const searchButton = document.querySelector(".search button");
const nameOfCity = document.querySelector(".info-clouds h1");
const weatherIcon = document.querySelector(".icon");
const tempInfo = document.querySelector(".tempInfo");

const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q={city name}&appid=6397ba8dff866af95f98b9b86f3f3a34";
const api = '6397ba8dff866af95f98b9b86f3f3a34';

async function checkWeather(cityName) {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${cityName}&appid=6397ba8dff866af95f98b9b86f3f3a34`)
    let data = await response.json();
    nameOfCity.innerHTML =  data.name;
    document.querySelector(".temp h1").innerHTML = ` ${Math.round(data.main.temp)} °C` ;
           
    if (data.weather[0].main == "Clouds")
                {
                    weatherIcon.src = "images/clouds.png"
                    tempInfo.innerHTML = 'Clouds';
                }
            else   if (data.weather[0].main == "Clear")
                {
                    weatherIcon.src = "images/clear.png"
                    tempInfo.innerHTML = 'Clear';
                } 
                else 
                if (data.weather[0].main == "Rain")
                    {
                        weatherIcon.src = "images/rain.png"
                        tempInfo.innerHTML = 'Rain';
                    }
                    else   if (data.weather[0].main == "Drizzle")
                        {
                            weatherIcon.src = "images/drizzle.png"
                            tempInfo.innerHTML = 'Drizzle';
                        }
                        else   if (data.weather[0].main == "Mist")
                            {
                                weatherIcon.src = "images/mist.png"
                                tempInfo.innerHTML = 'Mist';
                            }
                            else {
                                tempInfo.innerHTML = 'Undtermind';
                            }

    

    


}
searchButton.addEventListener("click", ()=>{

    checkWeather(cityName.value);
    cityName.value = " ";
   

})