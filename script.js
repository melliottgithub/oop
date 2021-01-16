"use strict";
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
(Contains methods)           (Can access those methods)
------Prototypes <=========== Object-----------------
each object has a prototype.
Objects are linked to a prototype object!

*/

/* Creating Prototypes
    1.Constructor Function
    2.Classes(ES6)
    3.Object.create()
*/

/********************************** Pseudoclasical *************************************/

/* Constructor Functions */
const Person = function(firstName, birthYear) {
    // console.log(this); // Person {}
    // console.log(arguments);
    // Arguments(2) ["Mike", 1990, callee: (...), Symbol(Symbol.iterator): ƒ]

    //instance properties
    this.firstName = firstName;
    this.birthYear = birthYear;

    //create method not a good way!
    //let's get back to prototype inheritance
    // this.calcAge = function () {
    //     console.log(2202 - this.birthYear);
    // };
};
//invoke the new function Person we need to use new!
const me = new Person("Mike", 1990); // create a constructor with the new operator;

// me.firstName = 'Steve'

console.log(me);
// 1. New object {} is created
// 2. function is invoked then setting this = {}
// 3. {} is linked to prototype
// 4. function automatically return {}

const anthony = new Person("Anthony", 1995);
const peter = new Person("Peter", 1994);
const steve = new Person("Steve", 1993);
console.log(me, anthony, peter, steve);

//let's check !!

console.log(me instanceof Person); // true
console.log(peter instanceof Person); // true
console.log(steve instanceof Person); // true
console.log(anthony instanceof Person); // true

const randName = "Ted";
console.log(randName instanceof Person); // false

/* Prototypes */

console.log(Person.prototype);

//Constructor function
Person.prototype.calcAge = function() {
    console.log(2020 - this.birthYear);
};

console.log(Person.prototype);

//invoking calcAge method even though is not in the
// object itself!!
// Examples of prototypal inheritance!!!
me.calcAge();
console.log(me);

peter.calcAge();
console.log(peter);

anthony.calcAge();
console.log(anthony);

// objects have access to their
// methods and properties of its prototype

console.log(me.__proto__);
// dunder proto === __proto__ ==>> double under
// person's constructor function === Person.prototype
console.log(me.__proto__ === Person.prototype); //true

console.log(Person.prototype.isPrototypeOf(me)); //true
console.log(Person.prototype.isPrototypeOf(peter)); //true
console.log(Person.prototype.isPrototypeOf(Person)); //false

Person.prototype.species = "Humans";
console.log(me.species); // Humans
console.log(peter.species); // Humans
console.log(steve.species); // Humans
console.log(anthony.species); // Humans

console.log(me.hasOwnProperty("firstName")); //true
console.log(me.hasOwnProperty("species")); //false

console.log(me.__proto__);
console.log(me.__proto__.__proto__);
console.log(me.__proto__.__proto__.__proto__); //null

console.log(Person.prototype.constructor);

const arr = [1, 2, 3, 4];
console.log(arr.__proto__); // all the methods from new Array

/* Example practice */

//speed property current speed(km/h)
const Car = function(make, speed) {
    console.log(this);
    this.make = make;
    this.speed = speed;
};

Car.prototype.accelerate = function() {
    this.speed += 10;
    console.log(this.speed);
};
Car.prototype.brake = function() {
    this.speed -= 5;
    console.log(this.speed);
};

const ferrari = new Car("Ferrari", 120);

const bmw = new Car("BMW", 95);

ferrari.accelerate();
ferrari.brake();
ferrari.accelerate();
ferrari.accelerate();
ferrari.brake();
ferrari.brake();
ferrari.accelerate();
ferrari.accelerate();
ferrari.brake();
ferrari.brake();
ferrari.brake();
ferrari.accelerate();
ferrari.accelerate();

console.log(ferrari);

/* Creating Prototypes
    1.Constructor Function
    2.Classes(ES6)
    3.Object.create()
*/

/* Classes(ES6+) */

class PersonClass {
    constructor(firstName, birthYear) {
            //constructor method
            this.firstName = firstName;
            this.birthYear = birthYear;
        }
        //prototype method
    calcAge() {
        console.log(2020 - this.birthYear);
    }

    greet() {
        console.log(`Hello, I am ${this.firstName}`);
    }
}
const mike = new PersonClass("Mike", 1990);

console.log(mike);

mike.calcAge();

console.log(mike.__proto__ === PersonClass.prototype); //true

mike.greet();

/* 
    -classes are not hoisted
    -class are first-class citizens
    -classes are executed in strict mode
*/

/* Lets work on Getters and Setters */

const account = {
    owner: "Mike",
    transactions: [200, -100, 500, 170, -50],

    get latest() {
        return this.transactions.slice(-1).pop();
    },
    set latest(trans) {
        this.transactions.push(trans);
    },
};

console.log(account.latest); //-50

account.latest = 50;

console.log(account.latest); //-50
console.log(account.transactions);

/* Creating Prototypes
    1.Constructor Function
    2.Classes(ES6)
    3.Object.create()
*/
/* ******************************Prototypal ********************** */
/* Object.create() */

const PersonProto = {
    calcAge() {
        console.log(2021 - this.birthYear);
    },
    init(firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear;
    },
};

const javier = Object.create(PersonProto);
console.log(javier);
console.dir(javier);

javier.name = "Javier";
javier.birthYear = 2010;
javier.calcAge(); //how it works?

console.log(javier.__proto__ === PersonProto);

const laura = Object.create(PersonProto);
laura.init("Laura", 1999);
laura.calcAge();

