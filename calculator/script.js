"use strict";

const title = "calculator";
const screens = "Simple, Complex, Interactive";
const screenPrice = 1000;
const rollback = 10;
const fullPrice = 1000;
const adaptive = true;

// alert("any text here");
console.log("any text here");

console.log(typeof title);
console.log(typeof fullPrice);
console.log(typeof adaptive);

console.log(screens.length);
console.log("This work will cost " + screenPrice + " dollars");
console.log("The full price will be " + fullPrice + " dollars");

// Привести строку screens к нижнему регистру и разбить строку на массив, вывести массив в консоль
console.log(screens.toLowerCase().split(" "));

// Вывести в консоль Процент отката посреднику за работу (fullPrice * (rollback/100))
console.log(fullPrice * (rollback / 100));
