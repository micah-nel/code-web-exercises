//
// //array
// const fruits = ["orange", "strawberry" , "kiwi" , "tomato" , "banana", "blueberry"]
// const firstFruit = fruits[0];
// const numOfFruits = fruits.length;
//
// // //traditional for loop
// for(let i = 0; i < fruits.length; i++){
//      const fruit = fruits[i];
//     if(fruit.includes("berry")) {
//         console.log (fruit);
//     }
// }
//
// //for ... of loop
// for(let fruit of fruits){
//     if(fruit.includes("berry")) {
//         console.log (fruit);
//     }
//
// }
//
// // for each method
// fruits.forEach((fruit, index, array) =>{
//     if(fruit.includes("berry")) {
//         console.log (fruit);
//     }
//
// });
//
// //IIFE (Immeidatley Invoke function Expression)
// //Main METHOD
// (()=>{
//     // START CODE
// })()

(function(){
    "use strict";

    /**
     * TODO:
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */
const names = ["Emily", "Liam", "Sophia", "Jackson"];
    /**
     * TODO:
     * Create a log statement that will log the number of elements in the names
     * array.
     */
// console.log (names)
    /**
     * TODO:
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */
    // const firstName = names[0];
    // const numOfNames = names.length;
    // console.log(names[0])
    // console.log(names[1])
    // console.log(names[2])
    // console.log(names[3])

    /**
     * TODO:
     * Write some code that uses a for loop to log every item in the names
     * array.
     */
    // for(let i = 0; i < names.length; i++){
    // console.log (names[i])
    // }
    /**
     * TODO:
     * Refactor your above code to use a `forEach` loop
    //  */
    // names.forEach((name) =>{
    //  console.log(name)
    // });

    /**
     * TODO:
     * Create the following three functions, each will accept an array and
     * return an an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array
     *
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */


     const first = (array) => {
       let result = array[0];
       return result;
     }
    const second = (array) => {
        let result = array[1];
        return result;

    }
    const last = (array) => {
         let arrayLength = array.length;
         let result = array[arrayLength-1];
         return result;

    }
    console.log (first(names));
    console.log (second(names));
    console.log (last(names));
})();