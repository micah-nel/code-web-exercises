
// const username = "micah";
//
// if (username){
//     console.log("The user is logged in");
// }else{
//     console.log("The user is not logged in!");
// }
// const isTwo = (number) => {
//     if (typeof number !== "number") ;
//     {
//
//     }
//     let result = number === 2;
//     return result;
// }

// const calculateTip= (tipPercentage, billTotal) => {
//     const isTheTipBs = (parseFloat(tipPercentage))
//     const isTheTotalbs = (parseFloat(billTotal));
//     if(isTheTipBs || isTheTotalbs) {
//       return "not able to calculate";
//     }
//     let tipDecimal = parseFloat(tipPercentage) / 100;
//     let result = parseFloat(billTotal) * parseFloat(tipPercentage);
//     return result.toFixed(2);
// };
// let myTip = calculateTip(.20, 145.67)
// console.log (`The tip is ${myTip}`);

// Ternary operator
//original
// const isLoggedIn = false;
// // let message;
// if (isLoggedIn) {
//     message = "Welcome back";
// } else {
//     message ="Please log back in";
// }
// Ternary operator
// let message = isLoggedIn ? "Welcome back" : "Please log in";
// console.log (message);

//switch
// let pizzaPerference = prompt("What kind of pizza do you like");
// switch (pizzaPerference.toLowerCase()) {
//     case "cheese":
//         console.log ("I love cheese pizza");
//         break;
//     case "hawaiian":
//         console.log("I like it too");
//         break;
//     case "surpem":
//         console.log("Thats not to bads ether");
//         break;
//     case "pepperoni":
//         console.log("Ohhhhh thats the best");
//         break;
//     default:
//         console.log("ok now thats really weird");
//         break;
// }

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message which relates to the
 * color stated in the argument of the function. For colors you do not have
 * responses written for, return a string stating so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *
 *
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */
// const analyzeColor = (colorName) => {
//
//     // happy path
//     let result;
//     if(colorName === "red") {
//        result= " that's the color of blood";
//     } else if (colorName === "blue"){
//        result= "That is the color of the sky";
//     } else {
//         result = "I don't have that color."
//     }
//     return result;
// }
// const userColor = prompt("Please pick a color.");
// const colorResponse = analyzeColor(userColor);
//console.log(colorResponse);



// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
// const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
// const randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.
 * You should see a different message every time you refresh the page
 */
// analyzeColor(randomColor);
// console.log (analyzeColor(randomColor));
/**
 * TODO:
 * Comment out the code above, and refactor your function to use a switch-case statement
 */
// let colorPick = prompt("What color do you want?");
// switch (colorPick.toLowerCase()) {
//     case "red":
//         console.log ("that's the color of blood");
//         break;
//     case "blue":
//         console.log("color of the sky");
//         break;
//     case "green":
//         console.log("thats the grass");
//         break;
//     case "yellow":
//         console.log("the sun");
//         break;
//     default:
//         console.log("nahh we dont got that ");
//         break;
// }
/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */
// let colorPick = prompt("What color do you want?");
// switch (colorPick.toLowerCase()) {
//     case "red":
//        alert("that's the color of blood");
//         break;
//     case "blue":
//         alert("color of the sky");
//         break;
//     case "green":
//        alert("thats the grass");
//         break;
//     case "yellow":
//         alert("the sun");
//         break;
//     default:
//         alert("nahh we dont got that ");
//         break;
// }
/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * everything for free!.
 *
 * Write a function named `calculateTotal` which accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */
const calculateTotal = (totalAmount,luckyNumber) => {

    let result;
    if (luckyNumber === 0) {
        result = " there is no discount";
    } else if (luckyNumber === 1) {
        result = "you get a 10% discount";
    } else if (luckyNumber === 2) {
        result = "you get a 20% discount";
    } else if (luckyNumber === 3){
        result = "wow that 30% discount"
    } else if (luckyNumber === 4){
        result =" ok thats 40% off"
    } else if (luckyNumber === 5) {
        result = " 50% discount look at you!"
    } else {
        result = "idk."
    }
    return result;
}
console.log(calculateTotal(100,3));


/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 5.
 * (In this line of code, 0 is inclusive, and 6 is exclusive)
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
 // //Generate a random number between 0 and 6
 const luckyNumber = Math.floor(Math.random() * 6);
 //
 // let userNum = prompt ("What is your total bill?");
 // calculateTotal(luckyNumber)
 // alert(`this is your lucky number ${luckyNumber}`);
 // confirm(`This is your bill before the discount ${userNum}`);
 // let discountNum = luckyNumber;
 // let discountPercentage = luckyNumber / 100;
 // let finalDiscount = discountPercentage * userNum;
 // let finalBill = userNum - finalDiscount.toFixed(2);
 // alert(`This is your bill after the discount ${finalBill}`);
/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * Do *NOT* display any of the above information
 * if the user enters a value that is not of the number data type.
 * Instead, use an alert to inform them of the incorrect input data type.
 *
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */


const doTheToDoThang = () => {
const willEnterNumber = confirm("Would you like to enter a number?");
if(!willEnterNumber) {
    return false;
}
    const userNumber = prompt("Enter a number.");
    const userNumberFloat = parseFloat(userNumber);
    if(isNaN(userNumberFloat)) {
       alert("I cannot return");
        return false;
    }
        const isEven = userNumberFloat % 2 === 0;
        const isEvenMessage = isEven ? "Your number is even" : "your number is odd";
        alert(isEvenMessage);
        const pluss100 = userNumberFloat + 100;
        alert(`your number plus 100 is ${pluss100}`);
        const isPositive = userNumberFloat >= 0;
        const isPositiveMessage = isPositive ? "Your number is positive" : "Your number is negative"
        alert(isPositiveMessage);

}
  doTheToDoThang
}