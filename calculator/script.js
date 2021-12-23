"use strict";

let title;
let screens;
let screenPrice;
let adaptive;

let rollback = 10;
let allServicePrices;
let fullPrice;
let servicePercentPrice;
let service1;
let service2;

const isNumber = function (num) {
  return !isNaN(parseFloat(num)) && isFinite(num);
};

const asking = function () {
  title = prompt(
    "What is the name of the project?",
    "Services calculator"
  ).trim();
  screens = prompt(
    "What types of screens are needed?",
    "Simple, Complex, Interactive"
  )
    .toLowerCase()
    .split(" ");
  screenPrice = prompt("How much is it?", "1000");
  while (!isNumber(screenPrice)) {
    screenPrice = prompt("How much is it?", "1000");
  }

  adaptive = !!prompt("Adaptive needed?", "true");
};

const getAllServicePrices = function () {
  let sum = 0;

  for (let i = 0; i < 2; i++) {
    if (i === 0) {
      service1 = prompt("Any additional service?");
    } else if (i === 1) {
      service2 = prompt("Any additional service?");
    }
    sum += +prompt("How much is it?");
  }
  return sum;
};

const swowTypeOf = function (variable) {
  console.log(variable, typeof variable);
};

const getTitle = function (title) {
  return title[0].toUpperCase() + title.toLowerCase().slice(1);
};

const getFullPrice = function (scrPrice, allServPrices) {
  return scrPrice + allServPrices;
};

const getServicePercentPrices = function (fullPrice, rollback) {
  return Math.ceil(fullPrice - fullPrice * (rollback / 100));
};

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

asking();
allServicePrices = getAllServicePrices();
fullPrice = getFullPrice(screenPrice, allServicePrices);
servicePercentPrice = getServicePercentPrices(fullPrice, rollback);
title = getTitle(title);

swowTypeOf(title);
swowTypeOf(screenPrice);
swowTypeOf(adaptive);

console.log(getRollbackMessage(fullPrice));

console.log(screens.length);
console.log(servicePercentPrice);
console.log(allServicePrices);

console.log("This work will cost " + screenPrice + " dollars");
console.log("The full price will be " + fullPrice + " dollars");
