
// //For loops
// for (let i = 10; i > 0; i-- ) {
//     // body
//     console.log(`the code ran index ${i}`);
// }

// while loop
// let favPizza = prompt("What is your fav pizza");
// while (favPizza !== "pepperoni" ) {
// favPizza = prompt("Wrongggg try again");
// }

// Do while loop
// do {
//     //body
// } while(/*condition*/);

// let myNumber = 0
//
// do {
//     console.log(myNumber);
//     myNumber++;
// }while (myNumber <= 10);

//Loop within a loop
//write a funcation called buildPyramid that takes a num as an argument
//the funtion should return a asterik pyramid that has as many rows as the number
// const buildRow = (num) => {
//     let result =""
//     for(let i =0;i< num; i++){
//         result += "*"
//     }
//     result += "\n";
//     return result;
// }
// const buildPyramid = (rows) => {
//     let result="";
//     //first loop
//     for (let i = 1; i <= rows ;i++){
//         result += buildRow(i);
//     };
//
//     return result;
// }
//
// let pyramid =buildPyramid(5)
// console.log(pyramid);

// // brake and continue
// for (let i = 0; i <= 10; i++){
//     if(i ===5){
//         continue
//     }
//     console.log (`the current index is ${i}`);
// }


// const showMultiplicationTable = (choseNumber) => {
//     for (let i =1; i <= 10; i++) {
//         let numberChoice = i * choseNumber;
//         console.log (`7 X ${i} = ${numberChoice} `);
//     }
//
// }
// showMultiplicationTable(7);



// for (let i =0; i <10; i++) {

//     let isEven = ( i % 2 ===0);
// let isEvenMessage = isEven ? `${luckyNumber} is even`: `${luckyNumber} is odd`
// console.log (isEvenMessage);
//
// }

//
// const buildRow = (num) => {
//     let result =""
//     for(let i =0;i< num; i++){
//         result += num
//     }
//     result += "\n";
//     return result;
// }
// const buildPyramid = (rows) => {
//     let result="";
//     //first loop
//     for (let i = 1; i <= rows ;i++){
//         result += buildRow(i);
//     };
//
//     return result;
// }
//
// let pyramid =buildPyramid(9)
// console.log(pyramid);
//
// const countDownBy5 = (num =>) {
//     for (let i = num )
// }

const luckyNumber = Math.floor(Math.random() * 200) + 20;

let conesLeft = luckyNumber (50,100)
do {
    const conesToSell = luckyNumber (1,5);
    if (conesLeft >= conesToSell) {
        console.log (`${conesToSell} cones sold`);
        conesLeft= conesLeft - conesToSell;
    }else {
        console.log(`I dont have that many, I have ${conesLeft} cones`);
      conesLeft = 0;
        console.log (`I have solf everything `)
    }
} while (conesLeft > 0);