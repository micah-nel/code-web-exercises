// let hello = ("Hello from external JavaScript");
// console.log(hello);

//alert("Welcome to my Website!");
// let userInput = prompt("What is your favorite color");
// console.log(`The user entered: ${userInput}`);
// alert(`${userInput} that's my favorite color too`);




// You have rented some movies for your kids: The little mermaid (for 3 days), Brother Bear (for 5 days,
// they love it),
// and Hercules (1 day, you don't know yet if they're going to like it).
// If price for a movie per day is $3, how much will you have to pay
// Suppose you're working as a contractor for 3 companies: Google,' +
// ' Amazon and Facebook, they pay you a different rate per hour. ' +
// 'Google pays $400, Amazon $380, and Facebook $350.' +
// ' How much will you receive in payment for this week? ' +
// 'You worked 10 hours for Facebook, 6 hours for Google and 4 hours for Amazon.

// let littleMermaidDays = prompt("How long did you rent The little mermaind");
// let LittleMermaidInput = parseFloat(littleMermaidDays);
//
// let brotherBearDays = prompt("How long did you rent Brother Bear");
// let brotherBearInput = parseFloat(brotherBearDays)
//
// let herculesDays = prompt("How long did you rent Hercules");
// let herculesInput = parseFloat(herculesDays)
//
// let totalPrice = 3;
// let totalDays = (herculesInput + brotherBearInput + LittleMermaidInput);
// let totaleverything = (totalPrice * totalDays);
//
// alert(`Your total amount for the days requested are   ${totaleverything} `);

let theMermaid = 34;
let hercules= 98;
let brotherBear = 9;
const rentList = (movie1,movie2,movie3) => {

let rentalTotal = movie1 +movie2 + movie3;
return rentalTotal;
}

const rentaltotallist = rentList(theMermaid,hercules,brotherBear);
console.log (rentaltotallist);




// let totalHoursAmazon = prompt("How many hours did you work at Amazon?");
// let amazonHours = parseFloat(totalHoursAmazon)
// let amazonAmountPreHour = totalHoursAmazon *380;
//
// let totalHoursFb = prompt("How many hours did you work at Facebook?");
// let fbHours = parseFloat(totalHoursFb)
// let fbAmountPreHour = fbHours *380;
//
// let totalHoursGoogle = prompt("How many hours did you work at google?");
// let googleHours = parseFloat(totalHoursGoogle);
// let googleAmountPreHour = googleHours *380;
//
// let total = amazonAmountPreHour + fbAmountPreHour + googleAmountPreHour;
// alert(`your total  pay for your work hours are ${total}`)




