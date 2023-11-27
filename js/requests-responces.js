
// THE FETCH
// const url ="https://pokeapi.co/api/v2/pokemon/treeko";
// const options = {
//     method: "GET",
//     headers: {
//         "Content-Type": "application/json"
//     }
// }
// fetch(url, options)
//     .then((response)=>{
//     return response.json()
// })
//     .then((pokemon) =>{
//
//     });
//
// const getPokemon = (id=1) =>{
//     const url =`https://pokeapi.co/api/v2/pokemon/$[id}`;
//     const options = {
//     method: "GET",
//     headers: {
//         "Content-Type": "application/json"
//         }
//     }
//     const response = await fetch(url, options)
//     const data = await response.json();
//     return data

//     fetch(url, options)
//     .then((response)=>{
//     return response.json()
//     })
//     .then((pokemon) =>{
//     });
//
// }

(() => {
    getPokemon(2).then((pokemon) => {
    alert(pokemon.name)
    })

})();