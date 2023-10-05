// Exersize 1
let a = 1;
let b = a++ ;
let c = ++a;
console.log (a,b,c);
// resulte is 3, 1 3

// Exersize 2
let d = "hello";
let e = false;
d++;
e++;
// resulte is NuN and 1

//Escersize 3
console.log(d++,e++)
let perplexed
perplexed + 2;
console.log (perplexed)
// resulte is undefined any value undinfed will stay undifined

//Excersize 4
let price = 2.7;
let priceFixed = price.toFixed(2);
console.log (priceFixed);
//Excersize 4
// let priceString = "2.7";
// priceString.toFixed(2);
// console.log(price);
// to fixed changed string to number result 2.7

let ex1 = isNaN(0);
console.log (ex1);

let ex2 = isNaN(1);
console.log (ex2);

let ex3 = isNaN (" ");
console.log (ex3);

let ex4 = isNaN("String");
console.log(ex4);

let ex5 = isNaN(0);
console.log(ex5);

let sample = "Hello Codeup";
console.log(sample);

let sampleLength = sample.length;
console.log("Sample Length -",  sampleLength);

// find length of sample
let sampleUpper = sample.toUpperCase();
console.log("Sample to Upper case - ", sampleUpper);

// chnage sample to upper case
//short hand with +=
let sampleStudents = sample + " students";
console.log("adding student's -" ,sampleStudents);


let sampleChange = sampleStudents.replace("students","class");
console.log (" changing students for class - ", sampleChange);

let sampleIndexc = sampleChange.indexOf("c");
console.log(sampleIndexc);
// Observed console displayed 13

let sampleIndexC = sampleChange.indexOf("C");
console.log(sampleIndexC);
// Obsereeved console displayed 6

let CodeNameStart = sampleChange.indexOf("C");
console.log(CodeNameStart);
 let CodeNameEnd = sampleLength
console.log(CodeNameEnd)

let Codeword = sampleChange.substring(CodeNameStart -1, CodeNameEnd);
 console.log (Codeword);



 /* You have rented some movies for your kids: The little mermaid (for 3 days), Brother Bear (
 for 5 days, they love it), and Hercules (1 day, you don't know yet if they're going to l
 ike it). If price for a movie per day is $3, how much will you have to pay?
  */
/*Suppose you're working as a contra' doctor for 3 companies: Google, Amazon and Facebook,
they pay you a different rate per hour. Google pays $400, Amazon $380, and Facebook $350.
How much will you receive in payment for this week? You worked 10 hours for Facebook, 6
hours for Google and 4 hours for Amazon.
 */

let pricePreDay = 3;
let amountOfdays = 9;
console.log(pricePreDay * amountOfdays);

let amazonPay = 380;
let googlePay = 400;
let facebookPay= 350;

let hoursForAmazon = 4;
let hoursForFB = 6;
let hoursForGoogle = 10;

let amazaonTotle = amazonPay * hoursForAmazon;
let fbTotle = facebookPay * hoursForFB;
let googleTotle = googlePay * hoursForGoogle;
console.log(amazaonTotle, fbTotle, googleTotle);

let username = 'codeup';
let password = 'notastrongpassword';

// find to see if the unsername is in the password
let findUserName = password.includes(username)
console.log(findUserName);
// find to see if passsword is longer that 5 charaters
let passwordIncludes = password.length > 5;
console.log(passwordIncludes);
// find to see if length of username is less than of equal to 20
let usernameIncludes = username.length <= 20;
console.log(usernameIncludes);
// find to see if the unsername has any white spance or and after it
let findwhitespaceuser = username.includes(" ");
console.log(findwhitespaceuser);
//find to see if the password has any white space before or after it
let findwhotespacepass = password.includes(" ");
console.log(findwhotespacepass);


