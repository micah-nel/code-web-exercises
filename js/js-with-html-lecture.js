console.log("Testing");

//let easyMath = 2 + 2;
//console.log("easyMath");

let x = 1;
x = x + 1;
console.log(x);

// Unary Operators note
//let y = 5;
// y ++ adds 1 to y
//y++;
//y--;
//console.log(y);
// method to turn number into string
//let pi = 3.14;
//console.log(pi);
//let piString = pi.toString(); // this is a method toSting
//console.log (piString);

// from a string to a number note
//let numOfStudents = "19.23";
//numOfStudents = parseInt(numOfStudents); // this is a function parseInt
//numOfStudents = parseFloat(numOfStudents); // parseFloat gets all numbers even if number has decimal
//console.log(numOfStudents);

let bankAccount = "23.234";
console.log ("Orignal value =>", bankAccount);
//bankAccount = parseFloat (bankAccount);
bankAccount = parseInt(bankAccount);
console.log (bankAccount);

//let X = "griffin";
//let XNumber = Number(X);

//let isEqual = NaN === NaN;
//console.log(isEqual);

/// truthy / falsey

// let emptyString = "" == false;
// console.log(emptyString)
// let zero = 0 == false;
// console.log("zero =>" , zero)
// let noData = null;
// let middleName = "Adam"
// if (middleName) {
//     console.log ("Yep Its truthy");
// } else {
//     console.log ("NOPE its false");
// }
// //string methods
// let username = "Justino(Nova)";
// let guildName;
// let nameLength = username.length;

// let  guildNameStart = username.indexOf ("(");
// console.log ("guildNameStart => ", guildNameStart);
// let guildNameEnd = nameLength -1;
// guildName = username.substring(guildNameStart + 1 ,guildNameEnd);
// console.log ("guildName => ", guildName);
// username = username.replace("(" + guildName + ")", "");
// console.log ("username =>", username);
// guildName = guildName.trim();
// console.log ("guildName =>", guildName);
// // template string
// let channelMessage = " username from the guildName guild has logged in.";
// channelMessage = username + " from the " + guildName + " guild has logged in";
// channelMessage = `${username} from the ${guildName} has logged in.`
// console.log(channelMessage);


// the prompt function
// let favColor = prompt ("What is your fav color?");
// alert (`Your fav color is ${favColor}`);
