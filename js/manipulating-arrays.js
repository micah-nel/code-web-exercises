(()=>{
//     const daysOfTheWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday'];
//
//     let myName = "Micah";
//     let myNameUpper = myName.toUpperCase();
//     console.log(myNameUpper);
//
//     //may array methos do
//     //the push method
//     // console.log (daysOfTheWeek)
//     daysOfTheWeek.push("Friday");
//     // console.log (daysOfTheWeek)
//
//     // the unshift method
//      daysOfTheWeek.unshift("Sunday");
//     console.log(daysOfTheWeek)
//
//     // const todoList = ['Take out the trash', 'Clean the car', 'Pay the bills'];
//     // const choreRemoved = todoList.pop();
//     // console.log(todoList);
//     // console.log(choreRemoved);
//
//     const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet', 'red'];
//     const greenIndex = colors.indexOf("green")
// console.log("Green Index => ", greenIndex);
//
//     // start fromn the beginning
//
//     const redIndexStart = colors.indexOf("red");
//     console.log ("Red index = ", redIndexStart);
//
//     const redIndexLast = colors.lastIndexOf("red");
//     console.log ("Red index = ", redIndexLast);
//
//     //slice method
//     const lastTwocolors = colors.slice(colors.length-2, colors.length);
//     console.log (lastTwocolors)
//
    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";


    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */
    // const planetsArray = planetsString.split("|")
    //  console.log(planetsArray);

    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     *
     * BONUS:
     * Create another string that would display your planets in an undordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */

    //    let planetsString1 = planetsArray.join(`<br>`)
    // console.log(planetsString1)

    var planets = [
        'Mercury',
        'Venus',
        'Earth',
        'Mars',
        'Jupiter',
        'Saturn',
        'Uranus',
        'Neptune'
    ];

    /**
     * TODO:
     * Read each console log below, and write some javascript code to perform
     * the step that it describes
     */
    planets.unshift(`Sun`)
    console.log('Adding "The Sun" to the beginning of the planets array.');
    console.log(planets);

    planets.push(`Pluto`)
    console.log('Adding "Pluto" to the end of the planets array.');
    console.log(planets);

    const sunRemove = planets.shift();
    console.log('Removing "The Sun" from the beginning of the planets array.');
    console.log(planets);

    const  plutoRemove = planets.pop();
    console.log('Removing "Pluto" from the end of the planets array.');
    console.log(planets);


    console.log('Finding and logging the index of "Earth" in the planets array.');
    let index = planets.indexOf("Earth");
    console.log (index);

    planets.reverse();
    console.log("Reversing the order of the planets array.");
    console.log(planets);

    planets.sort()
    console.log("Sorting the planets array.");
    console.log(planets);


})()