// function evenOrOdd(number) {
//  if(number%2==0) console.log('number is even');
//  else console.log('number is odd');
// }

// evenOrOdd(9);

// function squareOfNumber(number){
//  console.log(`Square of number is ${number*number}`);
// }

// squareOfNumber(4);

// //writing funciton expression to get maximum number
// let maxNumber = function(num1,num2) {
//  return num1 > num2 ? num1 : num2;
// }
// number1ToCheckMax = 10;
// number2ToCheckMax = 20;
// console.log(`The greater number between ${number1ToCheckMax} and ${number2ToCheckMax} is ${maxNumber(number1ToCheckMax,number2ToCheckMax)} `);

// //function expression to concate two strings
// const concatedString = function (str1,str2) {
// return `string 1 was ${str1}, string 2 was ${str2}. Concated string is ${str1} ${str2}`
// }
// concatedString('I am','Armghan')

// //arrow function to calculate sum of two numbers
// const sumOfTwoNumber = (num1,num2) => {
//  return `the sum of ${num1} ${num2} is ${num1+num2}`;
// }

// sumOfTwoNumber(10,20);

// //number to check if A exist in the string
// const letterExist = (str, strToCheck) => {
//  for (let index = 0; index < str.length; index++) {
//   if (str[index] == strToCheck)
//    return true;
//   else
//    return false
//  }
// }
// let strToCheck = 'B'
// let str = 'Armaghan'
// console.log(`${strToCheck} exists in ${str} = ${letterExist(str,strToCheck)}`);

// //fucntion to get produnct using default value;
// let productUsingDefault = (num1,num2 = 1) => {
//  return num1*num2;
// }
// let num1ToProduct = 5;
// let num2ToProduct = 3;
// console.log(`product of ${num1ToProduct} and ${num2ToProduct} is ${productUsingDefault(num1ToProduct,num2ToProduct)}`);

// //function to greet user using default value;
// let greetUser = (name,age = 0) => {
//  console.log(`Hi ${name} you are ${age} years old now`);
// }
// greetUser('Armaghan');


const votesArray = [
 { name: "Zia Ul Haq", votes: 21 },
 { name: "Areej Zainab", votes: 13 },
 { name: "Haris Ahmad", votes: 8 },
 { name: "Maham Awais", votes: 6 },
 { name: "Farhan Yazdani", votes: 15 },
 { name: "Shanza Latif", votes: 6 },
 { name: "Ahmad Hassan", votes: 22 },
 { name: "Laiba Faiz", votes: 9 },
 { name: "Muhammad Rizwan", votes: 14 },
 { name: "Rameen Mudassar", votes: 7 }
];

function getTop5Persons(votesArray) {
 // Sort the array by votes in descending order
 const sortedArray = votesArray.sort((a, b) => b.votes - a.votes);

 // Get the top 5 persons
 const top5 = sortedArray.slice(0, 5);

 // Display the top 5 persons with names and votes
 top5.forEach(person => {
     console.log(`Name: ${person.name}, Votes: ${person.votes}`);
 });
}

// Call the function
getTop5Persons(votesArray);

