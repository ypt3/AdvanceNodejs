var obj = {
  name: 'Alan Tsai',
  greet: function() {
    console.log(`Hello ${this.name}`);
  }
};

obj.greet();
obj.greet.call({ name: 'Angela Vuong'});
obj.greet.apply({ name: 'Tom Mattew'});
