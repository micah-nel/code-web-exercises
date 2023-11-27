import {keys} from "../js/keys.js";
const getUsername = (username) => {
    const url = `https://api.github.com/users/${username}/events`;
    const options = {
        method: "GET",
        headers: {
            "Authorization": `token ${keys.github}`
        },
    };
    return fetch(url, options)
        .then(response=>response.json());
}
(async ()=>{
    getUsername("micah-nel").then((data)=>{
        console.log(data[0]);
    })
})();