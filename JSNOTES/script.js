"use strict";
console.log("Olesia, hello");

// //NOTE Reduce

// const array = [1, 2, 3, 4, 5];

// // const reducer = function (previousValue, currentValue) {
// //   return previousValue + currentValue;
// // };

// // const reducer1 = (previousValue, currentValue) => previousValue + currentValue;

// // console.log(array.reduce(reducer1));

// // const sum = array.reduce(
// //   (previousValue, currentValue, index) => previousValue + currentValue,
// //   0
// // );

// const myReduce = (arr, calback, initialValue) => {
//   let result = initialValue;

//   for (let i = 0; i < arr.length; i++) {
//     result = calback(result, arr[i], i);
//   }
//   return result;
// };

// const sum = myReduce(
//   array,
//   (previousValue, currentValue) => {
//     return previousValue + currentValue;
//   },
//   0
// );

// array.reduce((sum, num) => sum + num, 0);

// // console.log(sum);
