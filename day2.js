let a=10;
let b=3;

const addResult = a+b;
const minusResult = a-b;
const multiplyResult = a*b;
const divideResult = a/b;
const reminderResult = a%b;

console.log(`the numbers are ${a} ${b}.`);
console.log(`on addition ${addResult}.`);
console.log(`the subtraction ${minusResult}.`);
console.log(`the on multiplication ${multiplyResult}.`);
console.log(`the on division ${divideResult}.`);
console.log(`the on reminder of a%b ${reminderResult}.`);

console.log(`a value change ${a+=10} b value change ${b-=2}`);

if(a>b) {
 console.log(`a is greater than b`);
} else if (a<=b) {
 console.log(`a is less or equal to b`);
} else if (a==b) {
 console.log(`a is equal to b`);
}

if (a==10 && b==3) {
 console.log(`both conditions satisfied`);
} else if (a==10 || b==4) {
 console.log(`either one of the conditions satisfied`);
} else if (a!=b) {
 console.log(`a is not equal to b`);
}

const numberisPositive = a >= 0 ? 'positive' : 'negative';

console.log(`a is ${numberisPositive}`);