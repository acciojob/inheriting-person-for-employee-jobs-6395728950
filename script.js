// complete this js code
// Person constructor function
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.greet = function () {
  console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
};

// Employee constructor function (inherits from Person)
function Employee(name, age, title) {
  Person.call(this, name, age); // Call Person constructor
  this.jobTitle = title;
}

// Inherit from Person prototype
Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

// Add jobGreet method
Employee.prototype.jobGreet = function () {
  console.log(
    `Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`
  );
};

 
 

// Do not change code below this line
window.Person = Person;
window.Employee = Employee;
