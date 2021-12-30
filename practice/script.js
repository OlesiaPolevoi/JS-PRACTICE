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
// NOTE NOTE NOTE NOTE

// let a = 1;

// function one() {
//   // a = 2;
//   console.log(a);
// }

// one();

////NOTE  OOP

// // let arr = [1, 2, 3, 4, 5];

// // console.log(arr.__proto__);
// // console.log(Array.prototype);

// const man = {
//   hands: 2,
//   legs: 2,
//   eyes: 2,

//   walk: function () {
//     console.log("I can walk");
//   },
//   talk: function () {
//     console.log("I can talk");
//   },
// };

// console.log(man);

// const newMan = Object.create(man);
// console.log(newMan);

// newMan.walk();
// console.log(newMan.hands);
// // add uniqness to the Man, add key: value to the oject:
// newMan.name = "Ivan";
// newMan.age = 23;

// // not like this, because this adds key: value to the original object, but we need a new Man
// //man.name = "Mike";

// console.log(newMan);

// //create a newWoman too so the newMan has a pair
// const newWoman = Object.create(man);

// newWoman.name = "Anna";
// newWoman.age = 22;
// console.log(newWoman);

// ////NOTE continue with OOP
// //create object to keep info about company's workers

// const worker = {
//   workplace: 1,
//   dinner: 1,

//   goToWork: function () {
//     console.log("Going to work");
//   },

//   leaveWork: function () {
//     console.log("Leaving work");
//   },

//   work: function () {
//     console.log("Working");
//   },
//   sayHello: function () {
//     console.log("Hello, my name is " + this.name);
//   },
// };
// console.log(worker);

// //create new positions based on the already created object worker

// const frontEndDev = Object.create(worker);
// const backEndDev = Object.create(worker);

// // Front End developers begun to have two dinners. Redefine dinner here
// frontEndDev.dinner = 2;

// frontEndDev.role = "Front end developer";
// backEndDev.role = "Back end developer";

// console.log(frontEndDev);
// console.log(backEndDev);

// // //run work method for the two different professions

// // frontEndDev.work();
// // backEndDev.work();

// // // redefine method work to make it unique for each profession

// // frontEndDev.work = function () {
// //   console.log("Writing quality code, eating cookies.");
// // };
// // backEndDev.work = function () {
// //   console.log("Struggling with databases, need a day off.");
// // };
// // // and run the method
// // frontEndDev.work();
// // backEndDev.work();

// ////Hire new people
// //not like this XXX
// // const developer1 = Object.create(worker);

// //like this:
// const developer1 = Object.create(frontEndDev);
// const developer2 = Object.create(frontEndDev);
// const developer3 = Object.create(backEndDev);
// const developer4 = Object.create(backEndDev);

// ////give each developer a name
// developer1.name = "Alex";
// developer2.name = "Mike";
// developer3.name = "Anna";
// developer4.name = "Jen";

// console.log(developer1);
// //create method sayHello in the original object

// ////run this method
// developer1.sayHello();
// developer2.sayHello();
// developer3.sayHello();
// developer4.sayHello();

// //show each unique worker in console

// console.log(developer1);
// console.log(developer2);
// console.log(developer3);
// console.log(developer4);

// console.log(developer1.dinner);
// console.log(developer2.dinner);
// console.log(developer3.dinner);
// console.log(developer4.dinner);

// //check if this person has his/her own property "name"?

// console.log(developer1.hasOwnProperty("name"));
// //shows true

// console.log(developer1.hasOwnProperty("role"));
// //shows false
// //but I can reach this value through prototype, like this

// console.log(developer1.__proto__.hasOwnProperty("role"));
// //shows true

// //will show false if we look for workplace
// console.log(developer1.__proto__.hasOwnProperty("workplace"));
// //shows false

// //but, get into another prototype to get it
// console.log(developer1.__proto__.__proto__.hasOwnProperty("workplace"));
// //shows true

// ////Check if one object is the prototypeOf other

// //check is frontEndDev is the prototype of developer1

// console.log(frontEndDev.isPrototypeOf(developer1));
// //shows true

// //then check developer3
// console.log(frontEndDev.isPrototypeOf(developer3));
// //shows false

// ////NOTE function - constructor
// //instead of manually creating objects like those

// // const person1 = {
// //   name: "Vlad",
// // };

// // const person1 = {
// //   name: "Anna",
// // };

// //create a function constructor that will create those objects:

// const Person = function (name) {
//   this.name = name;

//   const age = 33;

//   this.sayHello = function () {
//     console.log("Hello, my name is " + this.name);
//     console.log("I'm " + age + " years old");
//   };
// };

// // // add a new method to the prototype:
// // Person.prototype.sayHello = function () {
// //   console.log("Hello, my name is " + this.name);
// // }; //this method can also be created inside of the original function-constructor - move it there.

// //name those functions - constructors with Capital letter

// // any function that uses the word  new   is a constructor function
// //create new objects here
// //call the function while giving it the parameters/arguments
// const person1 = new Person("Mike");
// const person2 = new Person("Tolik");
// const person3 = new Person("Evpatyi");

// //call this newly created method - sayHello with person1:
// person1.sayHello();
// //console shows: Hello, my name is Mike

// //create new object manually and check the differences in console vs those created by a constructor function
// //This is done so we can add methods to the prototype

// // const person4 = {
// //   name: "Anna",
// // };
// // console.log(person4);

// //when the word new is read the EMPTY object is created, and saved into the named variable, then the function runs with the given parameters and fills the object

// console.log(person1);
// console.log(person2);
// console.log(person3);

// //this shows whether person1 depends on function-constructor Person
// console.log(person1 instanceof Person);

////NOTE lesson 15 hw
// "use strict";

// const DomElement = function (selector, height, width, bg, fontSize) {
//   this.selector = selector;
//   this.height = height;
//   this.width = width;
//   this.bg = bg;
//   this.fontSize = fontSize;

//   this.createElem = function () {
//     if (this.selector[0] === ".") {
//       const newDiv = document.createElement("div");
//       newDiv.classList.add(this.selector.slice(1));
//       const cssText = `height: ${this.height}px;width: ${this.width}px;background-color: ${this.bg}`;
//       newDiv.style.cssText = cssText;
//       return newDiv;
//     }
//     if (this.selector[0] === "#") {
//       const newParagraph = document.createElement("p");
//       newParagraph.setAttribute("id", this.selector.slice(1));
//       const cssTextFont = `font-size: ${this.fontSize}px`;
//       console.log(cssTextFont);
//       newParagraph.style.cssText = cssTextFont;
//       return newParagraph;
//     }
//   };
//   this.addText = function (text) {
//     const elem = document.querySelector(this.selector);
//     elem.innerHTML = text;
//   };
// };

// let elem1 = new DomElement("#best", 100, 200, "red", 36);

// const bodyElem = document.querySelector("body");

// //parentElem.addtoend(theElemweinserting.creaeElem())
// bodyElem.append(elem1.createElem());

// elem1.addText("some text");

// //NOTE lesson 16: Особенности современного стандарта ES6

// //receive an image from the page:
// const img = document.querySelector("img");
// console.log(img);

// const user = {
//   name: "Alex",
//   age: 33,
//   ////this is a function and an object method
//   say() {
//     console.log(this);
//     const foo = (name, age) => {
//       console.log(this);
//       console.log("Hello, my name is " + name);
//       console.log("I'm " + age + " years old");
//     };

//     foo("Alex", 33);
//   },
// };

// user.say();

// img.addEventListener("click", () => {
//   user.say();
// });

////NOTE lesson 16 cont

// // const foo = (name, age = 20) => {
// //   // console.log("Hello, my name is " + name + "\n" + "I'm " + age + " years old");
// // };

// // foo("alex");

// //using back ticks ``
// //can do calculations inside ${ } or ternary operator ${ ? : }
// const foo = (name, age) => {
//   console.log(`Hello, my name is ${name}.
// I'm ${age + 1} years old.`);
// };

// foo("alex", 33);

////NOTE lesson 16 CLASSES
////old version
// create function - constructor

// const Person = function (name, age) {
//   this.name = name;
//   this.age = age;
// };
// //add method sayHello :
// Person.prototype.sayHello = function () {
//   console.log(`Hello my name is ${this.name}`);
// }; // if we include this method inside the object/function-constructor - DON'T DO it - Bad for productivity. keep it here on the outside

// //create person1 using function constructor:
// const person1 = new Person("Alex", 23);
// //call newly created method sayHello
// person1.sayHello();
// console.log(person1);

// //NOTE NOW the CURRENT/modern WAY of doing the same, using class:

// class Person2 {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//     Person2.incrementCount();
//   }
//   //create static variable - only available here
//   static count = 0;

//   //create static method
//   static getCount() {
//     return Person2.count;
//   }

//   static incrementCount() {
//     Person2.count++;
//   }
//   //include method sayHello under the constructor. This method is now included in the prototype
//   sayHello() {
//     console.log(`Hello, my name is ${this.name}`);
//   }
// }

// const person2 = new Person2("Nikita", 23);

// // //create more people to see how incrementCount() works each time incteasing count by one
// // const person3 = new Person2("Nikita", 23);
// // const person4 = new Person2("Nikita", 23);

// person2.sayHello();
// // // console.log(person2.count); //shows undefined, so go through Class
// // // console.log(Person2.count); //shows 0;

// // console.log(Person2.getCount()); // shows 0, calls function/method, inside of the class Person2

// console.log(person2);

// ////NOTE наследует:

// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   sayHello() {
//     console.log(`Hello, my name is ${this.name}`);
//   }
// }
// ////FrontEndDev наследует class Person
// class FrontEndDev extends Person {
//   constructor(name, age, skills = []) {
//     //to connect the constructors with the class Person constructor
//     super(name, age);
//     this.skills = skills;
//   }

//   test() {
//     super.sayHello();
//   }
// }

// const dev = new FrontEndDev("Nikita", 33);

// console.log(dev);

// dev.sayHello();

// // run method test to run method sayHello from Person:
// dev.test(); // results in: Hello, my name is Nikita

// ////NOTE methods GET & SET

// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   sayHello() {
//     console.log(`Hello, my name is ${this.name}`);
//   }
// }

// class FrontEndDev extends Person {
//   constructor(name, age, skills = []) {
//     super(name, age);
//     this._skills = skills;
//   }

//   get skills() {
//     return this._skills; // _ for read only
//   }

//   set skills(str) {
//     this.skills.push(str);
//   }
// }

// const dev = new FrontEndDev("Nikita", 33);

// console.log(dev.skills);
// console.log(dev._skills);

// dev.skills = "Skill 1";
// dev.skills = "Skill 2";
// dev.skills = "Skill 3";

// console.log(dev);

////NOTE Деструктуризация

// const user = {
//   name: "Alex",
//   age: 32,
//   isAuth: false,
//   projects: {
//     firstProject: "firstProject",
//     secondProject: "secondProject",
//   },
// };
// //instead of this,use destructurization
// // const name = user.name
// // const age = user.age

// //Деструктуризация
// const {
//   name: nameUser,
//   age,
//   isAuth,
//   projects,
//   projects: { firstProject, secondProject },
// } = user;

// console.log(nameUser);
// console.log(age);
// console.log(isAuth);
// console.log(projects);

// console.log(firstProject);
// console.log(secondProject);

// // // NOTE ARRAY destructurization

// const names = ["Max", "Alex", "Nick", ["Peter", "Bob"]];
// // const [max, alex, nick, others] = names;

// const [max, alex, nick, [pete, bob]] = names;

// console.log(max);
// console.log(alex);
// console.log(nick);
// // console.log(others);
// console.log(pete);
// console.log(bob);

//// NOTE using destructurization:

// const logger = ({ first, second, third }) => {
//   console.log(second);
// };

// logger({ first: "I", second: "JavaScript", third: "love" });

//// NOTE Операторы Rest и Spread

// const sum = (a, b, c, ...params) => {
//   console.log(a);
//   console.log(b);
//   console.log(c);
//   console.log(params);
// };

// sum(1, 2, 3, 4, 5, 6, 7, 8, 9, "args", false, 12000);

const sum = (...params) => {
  // console.log(params);
  return params.reduce((sum, num) => sum + num);
};

console.log(sum(1, 2, 3));
