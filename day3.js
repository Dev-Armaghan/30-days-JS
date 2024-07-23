let number = 10;
if(number >= 0) 
 console.log('positive');
else
 console.log('negative');

let personAge = 17;
if(personAge>=18)
 console.log('eligible to vote');
else
 console.log('not eligible to vote');

 let num1 = 10;
 let num2 = 20;
 let num3 = 30;

 if(num1 > num2)
  if(num1>num3)
   console.log('num1 is greater');
 if(num2>num1)
  if(num2>num3)
   console.log('num2 is greater');

 if(num3>num1)
  if(num3>num2)
   console.log('num3 is greater');
 
let numberToCheckEvenOdd = 29;
const resultEvenOdd = numberToCheckEvenOdd % 2 == 0 ? 'number is even' : 'number is odd'
console.log(resultEvenOdd);

let dayOfWeek = 3;
switch (dayOfWeek) {
 case 1:
  console.log('monday');
  break;

 case 2:
  console.log('tuesday');
  break;

 case 3:
  console.log('wednesday');
  break;

 case 4:
  console.log('thursday');
  break;

 case 5:
  console.log('friday');
  break;
 default:
  break;
}

let studentNumber = 72;

switch (true) {
 case studentNumber > 90 :
 console.log('GPA is 4');
 break;

 case studentNumber>=70:
 case studentNumber<=90:
  console.log('GPA is 3');
  break;

  case studentNumber>=50:
  case studentNumber < 70:
  console.log('GPA is 2');
  break;

 default:
  console.log('fail');
  break;
}

const yearToCheckForLeap = 2019;
if(yearToCheckForLeap%4==0 && yearToCheckForLeap!=100 && yearToCheckForLeap%400 ==0)
 console.log('year is leap');
else
 console.log('year is not leap');

