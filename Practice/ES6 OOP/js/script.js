class Person {
	constructor(firstName, lastName) {
		this.firstName = firstName;
		this.lastName = lastName;
	}

	greeting() {
		return `Hello, ${this.firstName}, ${this.lastName}`;
	}

	static addNumber(x, y) {
		return x + y;
	}
}

const user1 = new Person("Ajai", "Sandhu");
// console.log(user1.greeting());

// Static Method needs to be called by classname
const test  = Person.addNumber(1, 3);
// console.log(test);

//  we use extends keyword for inheritence in JS

class Customer extends Person {
	constructor(firstName, membership) {
		// calling the parent class;
		super(firstName);
		this.membership = membership;
	}

}

const customer1 = new Customer("Test", "Yes");
console.log(customer1.greeting());