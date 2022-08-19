let favoriteCityId = "rome";
const citiesId = ["paris", "nyc", "rome", "rio-de-janeiro"];

console.log("favoriteCityId :", favoriteCityId);

favoriteCityId = "paris";

console.log("favoriteCityId :", favoriteCityId);

console.log("citiesId : ", citiesId);

citiesId.push("tokyo");

console.log("citiesId : ", citiesId);

function getWeather(cityId) {
  let city = cityId.toUpperCase();
  let temperature = 20;

  let object = { city: city, temperature: temperature };

  return object;
}

const weather = getWeather(favoriteCityId);

console.log(weather);

const { city, temperature } = weather;

console.log("city :", city);
console.log("temperature :", temperature);

const [parisId, nycId, ...otherCitiesId] = citiesId;

console.log("parisId : ", parisId);
console.log("nycId :", nycId);
console.log("otherCitiesId :", otherCitiesId);

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
    return new Trip(
      "rio-de-janeiro",
      "Rio de Janeiro",
      "img/rio-de-janeiro.jpg"
    );
  }
}

const parisTrip = new Trip("paris", "Paris", "img/paris.jpg");

console.log("parisTrip :", parisTrip);
console.log("parisTrip.name :", parisTrip.name);

parisTrip.price = 100;

console.log("parisTrip.toString() :", parisTrip.toString());

const defaultTrip = Trip.getDefaultTrip();

console.log("defaultTrip.toString() :", defaultTrip.toString());

class FreeTrip extends Trip {
  constructor(id, name, imageUrl) {
    super(id, name, imageUrl);
    this._price = 0;
  }
}

const freeTrip = new FreeTrip("nantes", "Nantes", "img/nantes.jpg");

console.log("freeTrip.toString() :", freeTrip.toString());

class TripService {
  constructor() {
    // TODO Set of 3 trips
    //
    // new Trip('paris', 'Paris', 'img/paris.jpg')
    // new Trip('nantes', 'Nantes', 'img/nantes.jpg')
    // new Trip('rio-de-janeiro', 'Rio de Janeiro', 'img/rio-de-janeiro.jpg')
    this.tripsSet = new Set();
    this.tripsSet.add(new Trip("paris", "Paris", "img/paris.jpg"));
    this.tripsSet.add(new Trip("nantes", "Nantes", "img/nantes.jpg"));
    this.tripsSet.add(new Trip("rio-de-janeiro", "Rio de Janeiro", "img/rio-de-janeiro.jpg"));
  }

  findByName(tripName) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // ici l'exécution du code est asynchrone
        // TODO utiliser resolve et reject en fonction du résultat de la recherche
        //let tripToReturn = this.tripsSet.filter(t => t.name == tripName);
        let tripToReturn = null;

        for(let trip of this.tripsSet) {
            if(trip.name == tripName) {
                tripToReturn = trip;
            }
        }
        if (tripToReturn != null) {
          resolve(tripToReturn);
        } 
        else {
          reject("Pas de voyage à ce nom");
        }
      }, 2000);
    });
  }
}
class PriceService {
  constructor() {
    // TODO Map of 2 trips
    // 'paris' --> price == 100
    // 'rio-de-janeiro' --> price == 800)
    // no price for 'nantes'
    this.pricesMap = new Map();
    this.pricesMap.set("paris", 150);
    this.pricesMap.set("rio-de-janeiro", 800);
  }
  findPriceByTripId(tripId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // ici l'exécution du code est asynchrone
        // TODO utiliser resolve et reject en fonction du résultat de la recherche
        let priceToReturn = null;

        for (let [key, value] of this.pricesMap.entries()) {
            if (key == tripId) {
                priceToReturn = value;
            }
        }
        if(priceToReturn != null) {
            resolve(priceToReturn);
        }
        else {
            reject("Pas de voyage avec cet id");
        }

      }, 2000);
    });
  }
}

let tripService = new TripService();
tripService
  .findByName("Paris")
  .then(
    (data) => {
      console.log("data :", data);
    },
    (reject) => {
      console.log("reject :", reject);
      throw reject;
    }
  )
  .catch((err) => console.log(err));

  let priceService = new PriceService();
  priceService.findPriceByTripId('paris')
  .then(
    (data) => {
      console.log("data :", data);
    },
    (reject) => {
      console.log("reject :", reject);
      throw reject;
    }
  )
  .catch((err) => console.log(err));
