import {NETFLIX_TITLES} from "../data/netflix-titles.js";

(() => {
    // filter method
//     const scifiTitles = NETFLIX_TITLES.filter(title=> title.listed_in.includes("Sci-Fi"));
// console.log(scifiTitles)
    // find method
    const theNextGeneration = NETFLIX_TITLES.find(movie => {
        return movie.title.toLowerCase() === "Star Trek : The Next Generation".toLowerCase()
    });
    // some method
    const hasStarTrek = NETFLIX_TITLES.some((movie)=>{
return movie.title.toLowerCase().includes("star trek") && movie.type.toLowerCase() === "movie"
})
    if (hasStarTrek){
        // console.log("it got it")
    }
    // THE MAP METHOD
    const betterNetflixTitles = NETFLIX_TITLES.map((movie, index)=> {
        const betterObject = {
            id: index + 1,
            type: movie.type,
            direct: movie.director,
            cast: movie.cast?.split(", "),
            date_added: movie.date_added,
            release_year: movie.release_year,
            rating: movie.rating,
            duration: movie.duration,
            listed_in: movie.listed_in?.split(", "),
            description: movie.description
        };
        return betterObject;
    });
    // console.log(betterNetflixTitles);

    // THE REDUCE METHOD
    // how many action movies did Sylvester Stallone star in
    const numrOfActionStalloneMovies = betterNetflixTitles.reduce((accumulator, movie)=>{
        if (movie.categories?.includes("Action & Adventure")&& movie.cast?.includes("Sylvester Stallone")){
            return accumulator + 1;
        }else {
            return accumulator
        }
    },0);
    console.log(numrOfActionStalloneMovies);
})();
