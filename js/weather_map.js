import{getForecast} from "./api/openweather.js";
import{createMap, getCoordinates, getAddress} from "./api/mapbox.js";

const createCardElement = (forecast) =>{
    const newDate = new Date(parseFloat(forecast?.dt) * 1000)
    const formatedDate = newDate.toLocaleDateString(`en-US`,{
        weekday: `long`,
        month: 'long',
        day: `numeric`,
        year: `numeric`
    })
    const card = document.createElement("div")
    card.innerHTML = `
      <div class="card" style="width: 18rem;">
        <div class="card-body">
        <h5 class="cardTitle">${formatedDate}</h5>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">HUMIDITY: ${forecast.humidity}%</li>
            <li class="list-group-item">${forecast.summary}%</li>
            <li class="list-group-item">RAIN: ${forecast?.rain || 0}%</li>
            <img src="https://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png" class="cardImg">
        </ul>
      </div>
        `;
    const cardElement = document.querySelector("#card")
    return cardElement.appendChild(card)
}
const updateCards = async (days) => {
    const cardContainer = document.querySelector('#card');
    cardContainer.innerHTML = '';
    const cardFragment = document.createDocumentFragment();
    days.forEach((forecast, index) => {
        if (index <= 4){
            createCardElement(forecast);
        }
    });
    cardContainer.appendChild(cardFragment);
}
//MAIN
(async ()=>{
    const sanAntonioForecast = await getForecast(29.458472, -98.6791838);
    console.log(sanAntonioForecast);
    const forecasts = sanAntonioForecast
    forecasts.forEach((forecast, index) => {
        if (index <= 4){
            createCardElement(forecast);
        }
    });
    const map = await createMap("map",[-98.6791838,29.458472])
    const geocoder = new MapboxGeocoder({
        // Initialize the geocoder
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl,
        marker: false,
    });
    map.addControl(geocoder);
    geocoder.on(`result`, async function(e){
        const coords = await getCoordinates(e.result.place_name);
        const newForecast = await getForecast(coords[1], coords[0]);
        console.log("Triggered from Geocoder result listener => ", newForecast);
        updateCards(newForecast);
    });

})()