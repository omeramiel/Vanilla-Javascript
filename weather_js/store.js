class Store {

    constructor() {
        this.city;
        this.state;
        this.defaultCity = 'Tel Aviv';
        this.defaultState = 'IL';
    }

    saveLocation(city, state) {
        localStorage.setItem('city', city);
        localStorage.setItem('state', state);
    }

    loadLocation() {
        let city = localStorage.getItem('city');
        let state = localStorage.getItem('state');
        if (!city || !state) {
            city = this.defaultCity;
            state = this.defaultState;
        }
        return { city, state }
    }
}