class Weather {
    constructor(city, state) {
        this.apiKey = '915e917ff635471db97e9c2774ee42f7';
        this.city = city;
        this.state = state;
    }

    async getWeather() {
        const weatherResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${this.city},${this.state}&appid=${this.apiKey}`);
        return await weatherResponse.json();
    }

    changeLocation(city, state) {
        this.city = city;
        this.state = state;
    }

}