import {keys} from "./keys.js";
/**
 * Create a mapbox map
 * @param {*} containerElem - the HTML element id to put the map in
 * @param {*} coordinates - the coordinates to center the map on, [lng, lat]
 * @returns {mapboxgl.Map} - the mapbox map
 */
const createMap = (containerElem, coordinates) => {
    const map = new mapboxgl.Map({
        container: containerElem, // container ID
        // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
        style: "mapbox://styles/mapbox/navigation-night-v1", // style URL
        center: coordinates, // starting position [lng, lat]
        zoom: 9, // starting zoom
        keyboard: false,
    });
    map.flyTo({
        center: coordinates,
        zoom: 15,
        speed: 2,
    });
    return map;
};
/**
 * Get the coordinates of a location using the Mapbox Geocoding API
 * @param {*} searchText - the location to search for
 * @returns {number[]} - the coordinates of the location, [lng, lat]
 */
const getCoordinates = async (searchText) => {
    searchText = encodeURIComponent(searchText);
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${searchText}.json?access_token=${keys.mapbox}`;
    const options = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    };
    const response = await fetch(url, options);
    const data = await response.json();
    return data.features[0].center;
};
/**
 * Get the address of a location using the Mapbox Geocoding API
 * @param {number} lng - the longitude of the location
 * @param {number} lat - the latitude of the location
 * @returns {string} - the address of the location
 */
const getAddress = async (lng, lat) => {
    if (Array.isArray(lng)) {
        lat = lng[1];
        lng = lng[0];
    }
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${lng},${lat}.json?access_token=${keys.mapbox}`;
    const options = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    };
    const response = await fetch(url, options);
    const data = await response.json();
    return data.features[0].place_name;
};
/**
 * Handle the end of a marker drag event
 * @param {Event} e - the event object
 * @param {mapboxgl.Map} map - the map to add the marker to
 * @returns {void}
 */
const handleDragEnd = async (e, map) => {
    console.log(e);
    const lng = e.target._lngLat.lng;
    const lat = e.target._lngLat.lat;
    map.flyTo({
        center: [lng, lat],
        zoom: 12,
        speed: 2,
    });
    const address = await getAddress(lng, lat);
    console.log(address);
};
/**
 * Create a marker on the map
 * @param {mapboxgl.Map} map - the map to add the marker to
 * @param {number[]} coordinates - the coordinates of the marker, [lng, lat]
 * @param {string} popupHTML - the HTML to display in the popup
 */
const createMarker = (map, coordinates, popupHTML) => {
    const popup = new mapboxgl.Popup().setHTML(popupHTML);
    const marker = new mapboxgl.Marker({
        draggable: true,
    })
        .setLngLat(coordinates)
        .addTo(map)
        .setPopup(popup);
    marker.on("dragend", (e) => {
        handleDragEnd(e, map);
    });
};
//MAIN

(async () => {
    const restaurantTwoCordinates = await getCoordinates("700 E Sonterra Blvd #1117, San Antonio")
    const restaurantOneCordinates = await getCoordinates("1350 Austin Hwy, San Antonio");
    const restaurant3Cordinates = await getCoordinates("8701 FM1560, San Antonio")
    console.log(restaurantOneCordinates)
    // get the coordinates of the address we're starting with
    const coordinates = await getCoordinates("8700 Tesoro Dr, San Antonio");
    // initialize our token into mapboxgl
    mapboxgl.accessToken = keys.mapbox;
    // create the map
    const map = createMap("map", coordinates);
    createMarker(map, restaurant3Cordinates,"<p>Best Tacos</p>" )
    createMarker(map, restaurantOneCordinates, "<p>Best SeaFood</p>")
    createMarker(map, restaurantTwoCordinates, "<p>great chicken</p>")
    // create a marker on the map
    // createMarker(map, coordinates, "<p>We live here now.</p>");
})();