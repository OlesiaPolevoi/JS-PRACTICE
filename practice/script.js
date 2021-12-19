"use strict";
// console.log("hi");

let num = 266219;
num = num.toString().split("");

// num = num.toNumber();
// console.log(num);
let numArray = [];

for (let i = 0; i < num.length; i++) {
  numArray.push(parseInt(num[i]));
}
// console.log(numArray);

let resul2 = 1; //1
numArray.forEach((element) => {
  resul2 = resul2 * element;
});
// console.log(resul2);
const result3 = resul2 ** 3;
let resul4 = result3.toString();
// console.log(resul4[0] + resul4[1]);

const arr = [1, 4, 3, 8, 8, 0, 99];

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i] + 2);
// }

const nikitaForEach = (arr, callback) => {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i]);
  }
};

const cb = (element) => {
  console.log(element + 2);
};

// nikitaForEach(arr, cb);

arr.forEach((element) => {
  console.log(element + 2);
});

console.log(arr.toString());

// const func = (variable) => {};

// 1) Создать переменную num со значением 266219 (тип данных число)
// 2) Вывести в консоль произведение (умножение) цифр этого числа
// Например: число 123, при помощи javaScript получить каждую цифру ( 1, 2, 3 ) и перемножить их. Правильно использовать цикл или методы перебора.
// 3) Полученный результат возвести в степень 3, используя только 1 оператор (Math.pow не подходит)

// 4) Вывести в консоль первые 2 цифры полученного числа
