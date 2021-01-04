'use strict';
/* Object Oriented Programming */

/*  Principles!!!

    1.Abstraction
    2.Encapsulation
    3.Inheritance
    4.Polymorphism

 */

/* -----OOP: Classes----- */

/*  
-----instantiation-----
Class ========> Instance 
instances from a class
*/

/* OOP in Javascript: Prototypes */

/* 
                    (Delegation)
---------------Prototypal Inheritance--------------
(Contains methods)           (Can acces those methods)
------Prototypes <=========== Object-----------------
each object has a prototype.
Objects are linked to a prototype object!

*/

/* Creating Prototypes
    1.Constructor Function
    2.Classes(ES6)
    3.Object.create()
*/

/* Constructor Functions */
const Person = function (firstName, birthYear) {
    // console.log(this); // Person {}
    // console.log(arguments); 
    // Arguments(2) ["Mike", 1990, callee: (...), Symbol(Symbol.iterator): ƒ]

    //instance properties
    this.firstName = firstName;
    this.birthYear = birthYear;

    //create method not a good way!
    //let's get back to prototype inheritance
    // this.calcAge = function () {
    //     console.log(2202 = this.birthYear);
    // };
};
//invoke the new function Person we need to use new!
const me = new Person('Mike', 1990); // create a constructor with the new operator;
console.log(me);
// 1. New object {} is created
// 2. function is invoked then setting this = {}
// 3. {} is linked to prototype
// 4. function automatically return {}


const anthony = new Person('Anthony', 1995);
const peter = new Person('Peter', 1994);
const steve = new Person('Steve', 1993);
console.log(me, anthony, peter, steve);

//let's check !!

console.log(me instanceof Person); // true
console.log(peter instanceof Person); // true
console.log(steve instanceof Person); // true
console.log(anthony instanceof Person); // true

const randName = 'Ted';
console.log(randName instanceof Person); // false

/* Prototypes */