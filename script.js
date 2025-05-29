// complete this js code
class Person{
function Person(name, age) {
	this.name = name;
	this.age=age;
}
	greet(){
		console.log(`Hello, my name is ${name},I am ${age} years old.`);
	}
};
class Employee extends Person{
	function Employee(name, age, jobTitle) {
		this.name =name;
		this.age = age;
		this.jobTitle = jobTitle;
	}
	jobGreet(){
		console.log(`Hello, my name is ${name},I am ${age} years old, and my job title is ${jobTitle}`);
	}
};

const person  = new Person("Alice",25);
person.greet();

const employee  = new Employee("Bob",30,"Manager");
employee.jobGreet();
 

// Do not change code below this line
window.Person = Person;
window.Employee = Employee;
