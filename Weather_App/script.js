
const basicUrl = "https://api.openweathermap.org/data/2.5/weather?q="
const API = `&appid=${myApiKey}`

const search_btn = document.querySelector("#search")
const weather_icon = document.querySelector("#weather_icon")
const error_box = document.querySelector("#error_msg")
const weather_img = document.querySelector(".weather_img_container")
const show_weather = document.querySelector(".show_weather_container")
let loading = true;

const getWeather = async (city) => {
    if (city) {
        if (loading) {
            setTimeout(() => { }, 3000)
            error_box.style.display = "block"
            error_box.style.color = "green"
            error_box.innerHTML = "Loading ..."
            show_weather.style.display = "none"
            weather_icon.style.display = "none"
        }
        const URL = `${basicUrl}${city}${API}&units=metric`;
        let response = await fetch(URL);
        const data = await response.json();
        // console.log(data);

        if (data.cod === 200) {
            let city_name = document.querySelector("#city_name")
            let temp = document.querySelector("#temp")
            let humidity = document.querySelector("#humidity_value")
            let wind = document.querySelector("#wind_speed")

            city_name.innerHTML = data.name
            temp.innerHTML = data.main.temp + "°C"
            humidity.innerHTML = data.main.humidity + "%"
            wind.innerHTML = data.wind.speed + "km/h"

            let weather_status = data.weather[0].main
            switch (weather_status) {
                case "Clear":
                    weather_icon.src = "./images/clear.png"
                    break;
                case "Clouds":
                    weather_icon.src = "./images/clouds.png"
                    break;
                case "Mist":
                    weather_icon.src = "./images/mist.png"
                    break
                case "Snow":
                    weather_icon.src = "./images/snow.png"
                    break
                case "Drizzle":
                    weather_icon.src = "./images/drizzle.png"
                    break
                default:
                    weather_icon.src = "./images/clear.png"
                    break;
            }
            error_box.style.display = "none"
            show_weather.style.display = "inline-block"
            weather_icon.style.display = "inline-block"

        } else {
            error_box.style.display = "block"
            error_box.style.color = "red"
            error_box.innerHTML = data.cod + " : " + data.message
            show_weather.style.display = "none"
            weather_icon.style.display = "none"

        }
    }

}
const city_name = document.querySelector("#city_input");
city_name.addEventListener("keydown", (event) => {
    if (event.key == "Enter") {
        getWeather(event.target?.value)
    }
})
search_btn.addEventListener("click", () => {
    getWeather(city_name.value)
})
