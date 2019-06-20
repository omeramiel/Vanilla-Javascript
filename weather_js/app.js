const store = new Store();
const weatherLocation = store.loadLocation();
const weather = new Weather(weatherLocation.city, weatherLocation.state);
const ui = new UI;

document.addEventListener('DOMContentLoaded', getWeather);
document.getElementById('w-change-btn').addEventListener('click', (e) => {
    const city = document.getElementById('city').value;
    const state = document.getElementById('state').value;
    weather.changeLocation(city, state);
    store.saveLocation(city, state);
    getWeather();
    $('#lockModal').modal('hide');
});

function getWeather () {
    weather.getWeather().then((data) => {
        ui.paint(data);
    })
    .catch(err => console.log(err));
}
