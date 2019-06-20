class UI {
    constructor() {
        this.location = document.getElementById('w-location');
        this.desc = document.getElementById('w-desc');
        this.string = document.getElementById('w-string');
        this.details = document.getElementById('w-details');
        this.icon = document.getElementById('w-icon');
        this.humidity = document.getElementById('w-humidity');
        this.wind = document.getElementById('w-wind');
        this.pressure = document.getElementById('w-pressure');
    }

    paint(weather) {
        this.location.textContent = weather.name;
        this.desc.textContent = weather.weather[0].description;
        this.string.textContent = `${weather.main.temp.toFixed()}°C`;
        this.icon.setAttribute('src', `http://openweathermap.org/img/w/${weather.weather[0].icon}.png` );
        this.humidity.textContent = `Relative Humidity: ${weather.main.humidity}`;
        this.wind.textContent = `Wind: ${weather.wind.speed}`;
        this.pressure.textContent = `Pressure: ${weather.main.pressure}`;
    }
}