//printing 1 to 10
for (let index = 1; index <= 10; index++) {
 console.log(index);
}

//Multiplicatipon table of 5
var tableResult = 5;
for (let index = 0; index < 10; index++) {
 console.log(`5 * ${index+1} = ${tableResult}`);
 tableResult += 5;
}

//sum of numbers from 1 to 10
var sumOfOneToTen = 0;
var index = 1;
while (index <= 10) {
 sumOfOneToTen += index;
 index++;
}
console.log(`the sum of 1 to 10 is ${sumOfOneToTen}`)

//writing number from 1 to 10
let number = 10;
while (number<0) {
 console.log(number);
 number--;
}

//printing number with do while
let doNumber = 1;
do {
 console.log(doNumber)
 doNumber++;
} while (doNumber <=5);

//get factorial of number using do while
let numToFactorial = 5;
let factorial = numToFactorial;
let numToFactorialResult = 1;
do {
 numToFactorialResult = numToFactorial * numToFactorialResult;
 numToFactorial--;
} while (numToFactorial>0);

console.log(`factorial of ${factorial} is ${numToFactorialResult}`);

//printing stars
for (let i = 0; i < 5; i++) {
 for (let j = 0; j <= i; j++) {
  process.stdout.write('*');
 }
 process.stdout.write('\n');
}

//skin number 5
for (let index = 1; index <= 10; index++) {
 if(index==5) continue;
 process.stdout.write(`${index} `);
}

//stop loop at 7
for (let index = 1; index <= 10; index++) {
 if(index==1) console.log('\n');
 if(index==7) break;
 process.stdout.write(`${index} `);
}