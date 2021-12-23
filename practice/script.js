"use strict";
// // console.log("hi");
//NOTE Exercise
// let num = 266219;
// num = num.toString().split("");

// // num = num.toNumber();
// // console.log(num);
// let numArray = [];

// for (let i = 0; i < num.length; i++) {
//   numArray.push(parseInt(num[i]));
// }
// // console.log(numArray);

// let resul2 = 1; //1
// numArray.forEach((element) => {
//   resul2 = resul2 * element;
// });
// // console.log(resul2);
// const result3 = resul2 ** 3;
// let resul4 = result3.toString();
// // console.log(resul4[0] + resul4[1]);

// const arr = [1, 4, 3, 8, 8, 0, 99];

// // for (let i = 0; i < arr.length; i++) {
// //   console.log(arr[i] + 2);
// // }

// const nikitaForEach = (arr, callback) => {
//   for (let i = 0; i < arr.length; i++) {
//     callback(arr[i]);
//   }
// };

// const cb = (element) => {
//   console.log(element + 2);
// };

// // nikitaForEach(arr, cb);

// arr.forEach((element) => {
//   console.log(element + 2);
// });

// console.log(arr.toString());

// // const func = (variable) => {};

// // 1) Создать переменную num со значением 266219 (тип данных число)
// // 2) Вывести в консоль произведение (умножение) цифр этого числа
// // Например: число 123, при помощи javaScript получить каждую цифру ( 1, 2, 3 ) и перемножить их. Правильно использовать цикл или методы перебора.
// // 3) Полученный результат возвести в степень 3, используя только 1 оператор (Math.pow не подходит)

// // 4) Вывести в консоль первые 2 цифры полученного числа

////NOTE Notes
// console.log(true + false);
// console.log(+true);
// console.log(+false);
// console.log(12 / "6");

// console.log("number" + 15 + 3);
// console.log(15 + 3 + "number");

// console.log([1] > null);
// console.log("foo" + +"bar");

// console.log("true" == true);
// console.log(!!"true" == true);
// console.log(false == "false");

// console.log(null == "");
// console.log(!!"false" == !!"true");
// console.log([‘x’] == ‘x’);
// console.log([] + null + 1);
// console.log(0 || "0" && {});
// console.log([1,2,3] == [1,2,3];
// console.log({}+[]+{}+[1]);
// console.log(!+[]+[]+![]);
// console.log(new Date(0) - 0);
// console.log(new Date(0) + 0);

// //NOTE lesson03 HARD exercise
// // 1). Переменная lang может принимать 2 значения: 'ru' 'en'.
// // Написать условия при котором в зависимости от значения lang будут выводится дни недели на русском или английском языке. Решите задачу

// //  a) через if
// const lang = prompt("What is your language?", "ru/eng");

// if (lang == "ru") {
//   console.log("дни недели");
// } else if (lang == "eng") {
//   console.log("weekdays");
// } else {
//   prompt("Something went wrong");
// }

// //  b) через switch-case
// let lang1 = prompt("What is your language?", "ru/eng");

// switch (lang1) {
//   case (lang1 = "ru"):
//     console.log("дни недели");
//     break;
//   case (lang1 = "eng"):
//     console.log("weekdays");
//     break;
//   default:
//     prompt("Something went wrong");
// }

// //  c) через многомерный массив без ифов и switch
// const lang2 = prompt("What is your language?", "ru/eng");

// const obj = {
//   ru: "дни недели",
//   eng: "weekdays",
// };

// console.log(obj[lang2]);

// // 2). У нас есть переменная namePerson. Если значение этой переменной “Артем” то вывести в консоль “директор”, если значение “Александр” то вывести в консоль “преподаватель”, с любым другим значением вывести в консоль “студент”
// //  Решить задачу с помощью нескольких тернарных операторов, без использования if или switch

// const personName = prompt("Введите имя", "Артем, Александр").trim();

// let result =
//   personName == "Артем"
//     ? "директор"
//     : personName == "Александр"
//     ? "преподаватель"
//     : "студент";

// console.log(result);

//// NOTE lesson 04 exercise

// const countSum = function (a, b, callback) {
//   return a + callback(b);
// };

// const secondFunc = function (num) {
//   return num + 2;
// };

// console.log(countSum(3, 10, secondFunc));
//NOTE functions and callbacks

// var foo = function bar() {
//   console.log("some text");
//   bar();
//   // arguments.callee();
//   // foo();
// };

// foo();

// // определяем нашу функцию с аргументом callback
// function some_function(arg1, arg2, callback) {
//   // переменная, генерирующая случайное число в интервале между arg1 и arg2 NOTE ??
//   var my_number = Math.ceil(Math.random() * (arg1 - arg2) + arg2);
//   // теперь всё готово и  мы вызываем callback, куда передаём наш результат
//   callback(my_number);
// }
// // вызываем функцию
// some_function(5, 15, function (num) {
//   // эта анонимная функция выполнится после вызова callback-функции
//   console.log("callback called! " + num);
// });

//NOTE lesson04 HARD exercise
// 1) Создайте функцию, которая принимает 1 аргумент (название произвольное)
// — Если в качестве аргумента передана не строка - функция оповещает об этом пользователя
// — В полученной (как аргумент) строке функция должна убрать все пробелы в начале и в конце
// — Если строка более 30 знаков - то после 30го символа часть текста скрывается и вместо них появляются три точки (...)

// const workingHard = function (variable) {
//   if (typeof variable !== "string") {
//     return "В качестве аргумента передана не строка.";
//   }

//   let variable1 = variable.trim();
//   if (variable1.length <= 30) {
//     return variable1;
//   }

//   return variable1.substring(0, 30) + "...";
// };

// // const numInput = workingHard(123);
// // console.log(numInput);

// const strInput = workingHard(" Hello beautiful people of this earth  ");
// console.log(strInput);

// //NOTE
// function makeNegative(num) {
//   return num <= 0 ? num : num * -1;
// }
// console.log(makeNegative(-5));

// //NOTE

// function tribonacci(signature, n) {
//   let trib = signature;

//   for (let i = 3; i < n; i++) {
//     trib.push(trib[i - 1] + trib[i - 2] + trib[i - 3]);
//   }
//   return trib.slice(0, n);
// }
// console.log(tribonacci([1, 1, 1], 10));
// //expected return
// // [1, 1, 1, 3, 5, 9, 17, 31, 57, 105 ...]

// //NOTE

// 1) Создать массив arr = []
// — Записать в него 7 любых многозначных чисел в виде строк
// — Вывести в консоль только те, что начинаются с цифры 2 или 4 (Должны присутствовать в массиве)
// 2) Вывести в столбик все простые числа от 1 до 100 (сделать при помощи цикла)
// — Рядом с каждым числом написать оба делителя данного числа
//     Например: “Делители этого числа: 1 и n”
