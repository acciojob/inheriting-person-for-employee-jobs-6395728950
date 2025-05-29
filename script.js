// complete this js code
function Person(name, age) {
    this.name = name;
    this.age = age;
}

// Method for greeting
Person.prototype.greet = function() {
    console.log(`Hello, my name is ${this.name}, I am ${this.age} years old.`);
};

// Constructor function for Employee that inherits from Person
function Employee(name, age, jobTitle) {
    // Call the Person constructor to initialize name and age
    Person.call(this, name, age);
    this.jobTitle = jobTitle;
}

// Inherit the prototype of Person
Employee.prototype = Object.create(Person.prototype);
// Employee.prototype.constructor = Employee;

// Method for job greeting
Employee.prototype.jobGreet = function() {
    console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`);
};

 
 

// Do not change code below this line
window.Person = Person;
window.Employee = Employee;
