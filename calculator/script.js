"use strict";

const title = prompt("What is the name of the project?", "Calculator");
const screens = prompt(
  "What types of screens are needed?",
  "Simple, Complex, Interactive"
)
  .toLowerCase()
  .split(" ");
const screenPrice = +prompt("How much is it?", "1000");
const rollback = 10;
const adaptive = !!prompt("Adaptive needed?", "true");

const service1 = prompt("Any additional service?");
const servicePrice1 = +prompt("How much is it?");
const service2 = prompt("Any additional service?");
const servicePrice2 = +prompt("How much is it?");

const fullPrice = screenPrice + servicePrice1 + servicePrice2;
console.log(fullPrice);
const servicePercentPrice = Math.ceil(fullPrice - fullPrice * (rollback / 100));

console.log(servicePercentPrice);

// занести в нее итоговую стоимость за вычетом отката посреднику (servicePercentPrice = fullPrice - Откат посреднику), округлив результат в большую сторону (методы объекта Math в помощь). Вывести servicePercentPrice в консоль.

// alert("any text here");
// console.log("any text here");

// console.log(typeof title);
// console.log(typeof fullPrice);
// console.log(typeof adaptive);

// console.log(screens.length);
// console.log("This work will cost " + screenPrice + " dollars");
// console.log("The full price will be " + fullPrice + " dollars");

// Привести строку screens к нижнему регистру и разбить строку на массив, вывести массив в консоль
// console.log(screens.toLowerCase().split(" "));

// Вывести в консоль Процент отката посреднику за работу (fullPrice * (rollback/100))
// console.log(fullPrice * (rollback / 100));

// NOTE Написать конструкцию условий (расчеты приведены в рублях)
// - Если fullPrice больше 30000, то “Даем скидку в 10%”
// - Если fullPrice больше 15000 и меньше 30000, то сообщение “Даем скидку в 5%”
// - Если fullPrice меньше 15000 и больше 0 то в консоль вывести сообщение “Скидка не предусмотрена”
// - Если отрицательное значение то вывести “Что то пошло не так”
// - Учесть варианты 0, 15000 и 30000(к какому уровню не важно)

if (fullPrice > 30000) {
  console.log("The discount is 10%");
} else if (fullPrice >= 15000 && fullPrice <= 30000) {
  console.log("The discount is 5%");
} else if (fullPrice >= 0 && fullPrice < 15000) {
  console.log("There is no discount");
} else {
  console.log("Something went wrong");
}
