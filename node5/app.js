// object properties and method
var obj = {
  greet: 'Hello'
};

console.log(obj.greet);
console.log(obj['greet']);

var prop = 'greet';
console.log(obj[prop]);

// fucntion and arrays
var arr = [];
arr.push(function() {
  console.log("Hello World 1");
});

arr.push(function() {
  console.log("Hello World 1");
});

arr.push(function() {
  console.log("Hello World 1");
});

arr.forEach(function(item) {
  item();
});
