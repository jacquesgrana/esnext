let favoriteCityId = "rome";
const citiesId = ["paris", "nyc", "rome", "rio-de-janeiro"];

console.log('favoriteCityId :', favoriteCityId);

favoriteCityId = "paris";

console.log('favoriteCityId :', favoriteCityId);

console.log('citiesId : ', citiesId);

citiesId.push('tokyo');

console.log('citiesId : ', citiesId);


function getWeather(cityId) {
    let city = cityId.toUpperCase();
    let temperature = 20;

    let object = {city: city, temperature: temperature}

    return object
}

const weather = getWeather(favoriteCityId);

console.log(weather);

const {city, temperature} = weather;

console.log('city :', city);
console.log('temperature :', temperature);

const [parisId, nycId, ...otherCitiesId] = citiesId;

console.log('parisId : ', parisId);
console.log('nycId :', nycId);
console.log('otherCitiesId :', otherCitiesId);


class Trip {

    constructor(id, name, imageUrl) {
        this.id = id;
        this.name = name;
        this.imageUrl = imageUrl;
    }

    get price() {
        return this._price;
    }

    set price(price) {
        this._price = price;
    }

    toString() {
        return `Trip [${this.id}, ${this.name}, ${this.imageUrl}, ${this._price}]`;
    }

    static getDefaultTrip() {
        return new Trip('rio-de-janeiro', 'Rio de Janeiro', 'img/rio-de-janeiro.jpg');
    }
}

const parisTrip = new Trip('paris', 'Paris', 'img/paris.jpg');

console.log('parisTrip :', parisTrip);
console.log('parisTrip.name :', parisTrip.name);

parisTrip.price = 100;

console.log('parisTrip.toString() :', parisTrip.toString());

const defaultTrip = Trip.getDefaultTrip();

console.log('defaultTrip.toString() :', defaultTrip.toString());

class FreeTrip extends Trip {
    constructor(id, name, imageUrl) {
        super(id, name, imageUrl);
        this._price = 0;
    }
}

const freeTrip = new FreeTrip('nantes', 'Nantes', 'img/nantes.jpg');

console.log('freeTrip.toString() :', freeTrip.toString());

