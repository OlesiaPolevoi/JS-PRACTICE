"use strict";

let title = prompt(
  "What is the name of the project?",
  "Services calculator"
).trim();
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

let allServicePrices;
let fullPrice;

let servicePercentPrice;

const getTitle = function (title) {
  return title[0].toUpperCase() + title.toLowerCase().slice(1);
};
title = getTitle(title);

const getAllServicePrices = function (serv1, serv2) {
  return serv1 + serv2;
};
allServicePrices = getAllServicePrices(servicePrice1, servicePrice2);

const getFullPrice = function (scrPrice, allServPrices) {
  return scrPrice + allServPrices;
};
fullPrice = getFullPrice(screenPrice, allServicePrices);

const swowTypeOf = function (variable) {
  console.log(variable, typeof variable);
};

const getServicePercentPrices = function (fullPrice, rollback) {
  return Math.ceil(fullPrice - fullPrice * (rollback / 100));
};
servicePercentPrice = getServicePercentPrices(fullPrice, rollback);
console.log(servicePercentPrice);

const getRollbackMessage = function (price) {
  if (price > 30000) {
    return "The discount is 10%";
  } else if (price >= 15000 && price <= 30000) {
    return "The discount is 5%";
  } else if (price >= 0 && price < 15000) {
    return "There is no discount";
  } else {
    return "Something went wrong";
  }
};

console.log(getRollbackMessage(fullPrice));

swowTypeOf(title);
swowTypeOf(fullPrice);
swowTypeOf(adaptive);

console.log(fullPrice);

console.log(screens);
console.log(servicePercentPrice);
console.log(allServicePrices);

console.log("This work will cost " + screenPrice + " dollars");
console.log("The full price will be " + fullPrice + " dollars");
