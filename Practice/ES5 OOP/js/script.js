// Person Constructor
// class Person {
// 	constructor(name, dob) {
// 		this.name = name;
// 		this.birthday = new Date(dob);
// 	}
// 	calculateAge() {
// 		const difference = Date.now() - this.birthday.getTime();
// 		const years = new Date(difference);
// 		return Math.abs(years.getUTCFullYear() - 1970);
// 	}

// 	greet() {
// 		return `Hello, ${this.name}`;
// 	}
// }
// // // OR
function Person(name, dob) {
	this.name = name;
	this.birthday = new Date(dob);
}

Person.prototype.calculateAge = function () {
	const difference = Date.now() - this.birthday.getTime();
	const years = new Date(difference);
	return Math.abs(years.getUTCFullYear() - 1970);
};

Person.prototype.greet = function() {
	return `Hello, ${this.name}`;
}


let user1 = new Person("Ajai", "1 June 1994");
console.log(user1.greet());
console.log(user1.calculateAge());

function Customer(name, membership) {
		Person.call(this, name);
		this.membership = membership;
}
Customer.prototype = Object.create(Person.prototype);
Customer.prototype.constructor = Customer;

let customer1 = new Customer("Test", "Yes");
console.log(customer1.greet());
console.log(customer1);

