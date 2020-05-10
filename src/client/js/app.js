
import { generateCardTrip_UI } from "./ui";

// Geoname Api
const GEONAME_API_USERNAME = "anexbm";
const GEONAME_API_URL = "http://api.geonames.org/searchJSON?formatted=true&username=" + GEONAME_API_USERNAME + "&maxRows=1&name_equals=";

// WEATHERBIT API
const WEATHERBIT_API_KEY = "2b97fb05d34b456b8d7addde91148464";
const WEATHERBIT_API_URL = "https://api.WEATHERBIT.io/v2.0/forecast/daily?days=8&key=" + WEATHERBIT_API_KEY + "&";

// restcountries API
const RESTCOUNTRIES_API_URL = "https://restcountries.eu/rest/v2/alpha/";

// PIXABAY API
const PIXABAY_API_KEY = "16455249-4a78f9726db3eaeb3a57cd6df"
const PIXABAY_API_URL = "https://pixabay.com/api/?key=" + PIXABAY_API_KEY + "&orientation=horizontal&image_type=photo&per_page=10&q=";

// primary Object Placeholder
const primaryObjectPlaceholder = {
  "dateDepart": new Date(),
  "dateReturn": new Date(),
  "country": {
    "name": "Morocco",
    "code": "MA",
    "capital": "Rabat",
    "region": "Africa",
    "population": 33337529,
    "nativeName": "المغرب",
    "flag": "https://restcountries.eu/data/mar.svg",
    "language": "Arabic"
  },
  "city": {
    "lat": "33.89469",
    "lng": "-6.30649",
    "name": "Tiflet"
  },
  "image": "https://pixabay.com/get/57e2d2434956a914f1dc84609629317a103adce15a4c704c7d267bd19344c35e_640.jpg",
  "weather": [
    {
      "moonrise_ts": 1589147786,
      "wind_cdir": "WSW",
      "rh": 72,
      "pres": 974.663,
      "high_temp": 22.1,
      "sunset_ts": 1589138599,
      "ozone": 315.36,
      "moon_phase": 0.888662,
      "wind_gust_spd": 14.6359,
      "snow_depth": 0,
      "clouds": 70,
      "ts": 1589068860,
      "sunrise_ts": 1589088650,
      "app_min_temp": 13.7,
      "wind_spd": 4.47096,
      "pop": 25,
      "wind_cdir_full": "west-southwest",
      "slp": 1015.54,
      "moon_phase_lunation": 0.57,
      "valid_date": "2020-05-10",
      "app_max_temp": 21.5,
      "vis": 0,
      "dewpt": 11.4,
      "snow": 0,
      "uv": 6.0731,
      "weather": {
        "icon": "c03d",
        "code": 803,
        "description": "Broken clouds"
      },
      "wind_dir": 255,
      "max_dhi": null,
      "clouds_hi": 24,
      "precip": 0.996094,
      "low_temp": 11,
      "max_temp": 22.1,
      "moonset_ts": 1589097636,
      "datetime": "2020-05-10",
      "temp": 17.1,
      "min_temp": 13.7,
      "clouds_mid": 22,
      "clouds_low": 53
    },
    {
      "moonrise_ts": 1589237970,
      "wind_cdir": "WSW",
      "rh": 67,
      "pres": 972.645,
      "high_temp": 26.2,
      "sunset_ts": 1589225046,
      "ozone": 320.336,
      "moon_phase": 0.806953,
      "wind_gust_spd": 11.2767,
      "snow_depth": 0,
      "clouds": 48,
      "ts": 1589155260,
      "sunrise_ts": 1589174998,
      "app_min_temp": 11,
      "wind_spd": 2.19894,
      "pop": 40,
      "wind_cdir_full": "west-southwest",
      "slp": 1013.43,
      "moon_phase_lunation": 0.61,
      "valid_date": "2020-05-11",
      "app_max_temp": 25.6,
      "vis": 0,
      "dewpt": 10.6,
      "snow": 0,
      "uv": 10.4729,
      "weather": {
        "icon": "c03d",
        "code": 803,
        "description": "Broken clouds"
      },
      "wind_dir": 253,
      "max_dhi": null,
      "clouds_hi": 24,
      "precip": 1.81641,
      "low_temp": 13.9,
      "max_temp": 26.2,
      "moonset_ts": 1589187388,
      "datetime": "2020-05-11",
      "temp": 18,
      "min_temp": 11,
      "clouds_mid": 21,
      "clouds_low": 22
    },
    {
      "moonrise_ts": 1589327706,
      "wind_cdir": "WSW",
      "rh": 71,
      "pres": 970.429,
      "high_temp": 20.7,
      "sunset_ts": 1589311494,
      "ozone": 338.801,
      "moon_phase": 0.712741,
      "wind_gust_spd": 15.9702,
      "snow_depth": 0,
      "clouds": 78,
      "ts": 1589241660,
      "sunrise_ts": 1589261347,
      "app_min_temp": 14.5,
      "wind_spd": 5.11497,
      "pop": 40,
      "wind_cdir_full": "west-southwest",
      "slp": 1011.11,
      "moon_phase_lunation": 0.64,
      "valid_date": "2020-05-12",
      "app_max_temp": 20.2,
      "vis": 0,
      "dewpt": 11.8,
      "snow": 0,
      "uv": 4.50058,
      "weather": {
        "icon": "c04d",
        "code": 804,
        "description": "Overcast clouds"
      },
      "wind_dir": 237,
      "max_dhi": null,
      "clouds_hi": 11,
      "precip": 1.89844,
      "low_temp": 12,
      "max_temp": 20.7,
      "moonset_ts": 1589277326,
      "datetime": "2020-05-12",
      "temp": 17.3,
      "min_temp": 14.5,
      "clouds_mid": 35,
      "clouds_low": 62
    },
    {
      "moonrise_ts": 1589330568,
      "wind_cdir": "WSW",
      "rh": 65,
      "pres": 980.443,
      "high_temp": 25.3,
      "sunset_ts": 1589397941,
      "ozone": 335.329,
      "moon_phase": 0.611946,
      "wind_gust_spd": 9.52526,
      "snow_depth": 0,
      "clouds": 47,
      "ts": 1589328060,
      "sunrise_ts": 1589347697,
      "app_min_temp": 13.5,
      "wind_spd": 5.46665,
      "pop": 25,
      "wind_cdir_full": "west-southwest",
      "slp": 1011.02,
      "moon_phase_lunation": 0.67,
      "valid_date": "2020-05-13",
      "app_max_temp": 24.7,
      "vis": 23.7894,
      "dewpt": 11.2,
      "snow": 0,
      "uv": 10.1486,
      "weather": {
        "icon": "c03d",
        "code": 803,
        "description": "Broken clouds"
      },
      "wind_dir": 242,
      "max_dhi": null,
      "clouds_hi": 25,
      "precip": 0.875,
      "low_temp": 16,
      "max_temp": 25.4,
      "moonset_ts": 1589367327,
      "datetime": "2020-05-13",
      "temp": 18.5,
      "min_temp": 13.4,
      "clouds_mid": 0,
      "clouds_low": 26
    },
    {
      "moonrise_ts": 1589419405,
      "wind_cdir": "WSW",
      "rh": 62,
      "pres": 978.897,
      "high_temp": 23.1,
      "sunset_ts": 1589484388,
      "ozone": 349.574,
      "moon_phase": 0.509477,
      "wind_gust_spd": 10.5094,
      "snow_depth": 0,
      "clouds": 67,
      "ts": 1589414460,
      "sunrise_ts": 1589434048,
      "app_min_temp": 15.4,
      "wind_spd": 5.58937,
      "pop": 40,
      "wind_cdir_full": "west-southwest",
      "slp": 1009.67,
      "moon_phase_lunation": 0.71,
      "valid_date": "2020-05-14",
      "app_max_temp": 22.3,
      "vis": 21.9223,
      "dewpt": 9.9,
      "snow": 0,
      "uv": 8.59329,
      "weather": {
        "icon": "c03d",
        "code": 803,
        "description": "Broken clouds"
      },
      "wind_dir": 238,
      "max_dhi": null,
      "clouds_hi": 43,
      "precip": 2.1875,
      "low_temp": 14.1,
      "max_temp": 23.1,
      "moonset_ts": 1589457291,
      "datetime": "2020-05-14",
      "temp": 17.7,
      "min_temp": 14.7,
      "clouds_mid": 11,
      "clouds_low": 63
    },
    {
      "moonrise_ts": 1589507902,
      "wind_cdir": "WSW",
      "rh": 65,
      "pres": 981.208,
      "high_temp": 21.9,
      "sunset_ts": 1589570835,
      "ozone": 362.924,
      "moon_phase": 0.409184,
      "wind_gust_spd": 15.2143,
      "snow_depth": 0,
      "clouds": 26,
      "ts": 1589500860,
      "sunrise_ts": 1589520401,
      "app_min_temp": 14.1,
      "wind_spd": 7.25639,
      "pop": 70,
      "wind_cdir_full": "west-southwest",
      "slp": 1012.12,
      "moon_phase_lunation": 0.74,
      "valid_date": "2020-05-15",
      "app_max_temp": 20.1,
      "vis": 20.9247,
      "dewpt": 10.1,
      "snow": 0,
      "uv": 6.87156,
      "weather": {
        "icon": "t02d",
        "code": 201,
        "description": "Thunderstorm with rain"
      },
      "wind_dir": 243,
      "max_dhi": null,
      "clouds_hi": 5,
      "precip": 6.5,
      "low_temp": 12.9,
      "max_temp": 21.1,
      "moonset_ts": 1589547168,
      "datetime": "2020-05-15",
      "temp": 16.9,
      "min_temp": 13.7,
      "clouds_mid": 8,
      "clouds_low": 20
    },
    {
      "moonrise_ts": 1589594302,
      "wind_cdir": "WSW",
      "rh": 67,
      "pres": 984.028,
      "high_temp": 23.9,
      "sunset_ts": 1589657281,
      "ozone": 362.621,
      "moon_phase": 0.314132,
      "wind_gust_spd": 6.7,
      "snow_depth": 0,
      "clouds": 28,
      "ts": 1589587260,
      "sunrise_ts": 1589606756,
      "app_min_temp": 12.9,
      "wind_spd": 3.88666,
      "pop": 20,
      "wind_cdir_full": "west-southwest",
      "slp": 1014.88,
      "moon_phase_lunation": 0.78,
      "valid_date": "2020-05-16",
      "app_max_temp": 21.3,
      "vis": 24.135,
      "dewpt": 10.4,
      "snow": 0,
      "uv": 8.39986,
      "weather": {
        "icon": "c02d",
        "code": 802,
        "description": "Scattered clouds"
      },
      "wind_dir": 242,
      "max_dhi": null,
      "clouds_hi": 9,
      "precip": 0.125,
      "low_temp": 14.3,
      "max_temp": 23.1,
      "moonset_ts": 1589636951,
      "datetime": "2020-05-16",
      "temp": 17.1,
      "min_temp": 12.8,
      "clouds_mid": 0,
      "clouds_low": 20
    }
  ]
}


// modal
const modal = document.getElementById("myModal");
const spinner = document.querySelector(".spinner-border");
const dateDepartElement = document.getElementById("date-depart");
const dateReturnElement = document.getElementById("date-return");
// contain all data from api
let geoname;

/**
* @description obtains weather and an image of the location, and info about country  from 4 external APIs
* @param {Event} event
*/
async function fetchGeonames(event) {
  event.preventDefault();

  // get City name 
  spinner.classList.remove("hide");
  // get City name 
  const cityName = document.getElementById("city").value;

  // get date depart 
  const dateDepart = dateDepartElement.value;

  // get date return
  const dateReturn = dateReturnElement.value;

  //fetch geoname
  const responseData = await fetch(GEONAME_API_URL + cityName);
  const resAsJson = await responseData.json();

  // check result
  if (resAsJson.geonames.length == 0) {
    spinner.classList.add("hide");
    return alert("not found");
  }

  geoname = {
    dateDepart: new Date(dateDepart),
    dateReturn: new Date(dateReturn),
    country: {
      name: resAsJson.geonames[0].countryName,
      code: resAsJson.geonames[0].countryCode
    },
    city: {
      lat: resAsJson.geonames[0].lat,
      lng: resAsJson.geonames[0].lng,
      name: resAsJson.geonames[0].name
    }
  };

  // api pixabay, fetch images 
  let pixabayResponse = await fetch(PIXABAY_API_URL + geoname.city.name);
  pixabayResponse = await pixabayResponse.json();

  // Pull in an image for the country from Pixabay API when the entered location brings up no results
  if (pixabayResponse.total == 0) {
    pixabayResponse = await fetch(PIXABAY_API_URL + geoname.country.name);
    pixabayResponse = await pixabayResponse.json();
  }
  geoname.image = pixabayResponse.hits[0].webformatURL;

  // weather api: returns a 7 day forecas
  let weatherForcast = await fetch(`${WEATHERBIT_API_URL}&lat=${geoname.city.lat}&lon=${geoname.city.lng}`);
  weatherForcast = await weatherForcast.json();
  geoname.weather = weatherForcast.data;

  // RestCountries APi: Get information about countries
  let restCountriesData = await fetch(RESTCOUNTRIES_API_URL + geoname.country.code);
  restCountriesData = await restCountriesData.json();

  geoname.country.capital = restCountriesData.capital;
  geoname.country.region = restCountriesData.region;
  geoname.country.population = restCountriesData.population;
  geoname.country.nativeName = restCountriesData.nativeName;
  geoname.country.flag = restCountriesData.flag;
  geoname.country.language = restCountriesData.languages[0].name;

  // update DOM
  generateCardTrip_UI(geoname, "#myModal #trip-data");
  spinner.classList.add("hide");
}

/**
* @description Show Primary Object
*/
function primaryObject() {

  generateCardTrip_UI(primaryObjectPlaceholder, "#cards .list");
}


async function postTrip() {
  try {
    
    const responseData = await fetch('http://localhost:8080/trip', {
      method: "POST",
      credentials: "same-origin",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ trip: geoname })
    });

    const responseAsJson = await responseData.json();
    if (responseData.status == 200) {
      modal.style.display = "none";
      generateCardTrip_UI(geoname, "#cards .list");
    } else {
      throw new Error(responseAsJson.message);
    }

  } catch (error) {
    alert(error);
  }
}

export {
  fetchGeonames,
  primaryObject,
  postTrip
}

