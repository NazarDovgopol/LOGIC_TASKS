const User = function(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;

  User.prototype.print = () => {
    console.log(`Name: ${this.firstName}; Last Name: ${this.lastName}; age: ${this.age}`);
  }
};

const user = new User('John', 'Connor', '32');
user.print();
