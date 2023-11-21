import {getPokemon, getPokemonAll} from "./pokemon-api.js";


// MAIN
(async ()=>{
    const list = await getPokemonAll(0, 10);
    console.log(list);
})();