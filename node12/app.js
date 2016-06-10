'use strict';

class Person {
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
  }

  greet() {
    console.log('Hello, ' + this.firstname +' ' + this.lastname);
  }
}

// function Person(firstname, lastname) {
//   this.firstname = firstname;
//   this.lastname = lastname;
// }

// Person.prototype.greet = function() {
//   console.log('Hello, ' + ' ' + this.firstname + this.lastname);
// };



var alan = new Person('Alan', 'Tsai');
alan.greet();

var john = new Person('John', 'Doe');
john.greet();

console.log(alan.__proto__);
console.log(john.__proto__);
console.log(john.__proto__ === alan.__proto__);
