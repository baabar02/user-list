// import { format } from "date-fns";

import { compareAsc, eachMonthOfInterval, format, formatDate } from "date-fns";

// const result = format(Date(), "yyyy MMMM dd");

// console.log(result);



const today = new Date();
console.log(today); 

const formatted = format(today, 'dd MMMM yyyy');
console.log(formatted);



const result = eachMonthOfInterval({
  start: new Date(2025, 1, 2),
  end: new Date(2025, 7, 10)
})

console.log(result);



// export * from "./clamp.js";

const addDate = formatDate(Date (), 'yyyy MMMM dd' );
console.log(addDate);



const dates = [
  new Date(1995, 6, 2),
  new Date(2000, 5, 30),
  new Date(2025, 4, 2),
];
console.log(dates);

dates.sort(compareAsc);


const triangle = {a: 5, b: 2, c:3}

let sum = Object.values(triangle).reduce((acc, el) => {
  return acc + el;
 },0);

console.log(sum);

const numbers = [1, 3, 5, 7, 8.7, 4.5];

// const sumN = numbers.filter(num => Number.isInteger(num))
// .reduce((acc,num) => acc + num, 0) 

// console.log(sumN);

let sumN = 0;

for(const num of numbers) {
  if(Number.isInteger(num)) {
    sumN += num;
  }
}

// const sumN = numbers
//   .filter(num => num % 1 === 0) 
//   .reduce((acc, num) => acc + num, 0);


console.log(sumN);


// 1. Өгөгдсөн гурвалжны периметрийг ол.
// 2. 1,3,5,7,8.7 бүхэл тооны нийлбэрийг ол.
// 3. Өгөгдсөн тэгш өнцөгтийн талбай ба периметрийг ол. Урт=10 Өргөн=5
// 4. Өгөгдсөн 98 секундыг минут секунд болго.
// 5. Өгөгдсөн 1297 секундыг цаг минут секунд болго.
// 6. Өгөгдсөн 875минут, 88секундыг, секунд рүү шилжүүл.
// 7. Өгөгдсөн 83 цаг, 84минут, 85секундыг секунд рүү шилжүүл.