const User = function(name, lastname, age) {
  this.name = name,
  this.lastname = lastname,
  this.age = age,

  this.print = () => {
    console.log(`Name: ${this.name}, lastname: ${this.lastname}, age: ${this.age}`); 
  }
};

const user = new User('John', 'Smith', 30);
user.print();
