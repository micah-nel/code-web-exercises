const getPerson = (id = 1) =>{
    const url =`https://swapi.dev/api/people/${id}`;
    const options={
        method: "GET",
        headers:{
            "Content-Type": "application/json"
        },
    }
    fetch(url,options)
        .then(response => {
            return response.json();
        })
        .then(person =>{
            return person;
        })
        .catch(error =>{
            return error;
        })
}
const getFilm = () =>{
    const url
}
(()=>{
   getPerson(2).then((person) => {
       console.log(person)
       const url = person.films[0]
       const options = {
           method:"GET",
           headers: {
               "Content-Type" : "application/json"
           },
       }
   });
})();