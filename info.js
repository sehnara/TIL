const infoBar = document.querySelector('.infoBar');
const weahter = infoBar.querySelector('#weahter');
const geo = infoBar.querySelector('#geo');

const APIKey = "a844a55029efb3334e600fc098d7d5fd";  
const Coord = "loca";

function getWeather(lat, lon){
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIKey}&units=metric&lang=kr`)
    .then(function(response){
        return response.json();
    })
    .then(function(myJson){
        const main = myJson.weather[0].main;
        const temp = myJson.main.temp;
        const feels_like = myJson.main.feels_like;

        console.log(`${main} // ${temp} // ${feels_like}`);

        weather.innerHTML = `Today is "${main}". temperature(${temp}) / feels_like(${feels_like})`;
    })
}

function getGeoLocation(){
    const coord = navigator.geolocation.getCurrentPosition(successCoord, errorCoord);
}

function successCoord(position){        
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;     

    const geoObj = {
        lat,
        lon
    }
    saveGeoLocation(geoObj);
}
function errorCoord(){
    console.log("error");
}

function saveGeoLocation(geoObj){
    localStorage.setItem(Coord,JSON.stringify(geoObj));
}


function init(){
    const localGeoLocation = localStorage.getItem(Coord);
    console.log(localGeoLocation);
    
    if(localGeoLocation===null){
        getGeoLocation();
        const parsedLocation = JSON.parse(localGeoLocation);
        getWeather(parsedLocation.lat, parsedLocation.lon);
        geo.innerHTML = `${parsedLocation.lat} // ${parsedLocation.lon}`;
    }
    else{
        const parsedLocation = JSON.parse(localGeoLocation);
        getWeather(parsedLocation.lat, parsedLocation.lon);
        geo.innerHTML = `${parsedLocation.lat} // ${parsedLocation.lon}`;
    }
}
init();
