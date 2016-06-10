// var a = 1;
// var b = 2;
// var c = a + b;
//
// console.log(c);
// function greet() {
//   console.log('Hi');
// }
// greet();
// //function are like first class
//
// function logGreeting(fn) {
//   fn();
// }
// logGreeting(greet);
//
// //function expression
// var greetMe = function() {
//   console.log('Hi Alan');
// };
//
// greetMe();
//
// logGreeting(greetMe);
//
// logGreeting(function(){
//   console.log("hihi");
// });

var greet = require('./greet');
greet();
