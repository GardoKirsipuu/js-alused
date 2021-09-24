const person = {
	firstName: "Kadi",
	lastname: "Tamm",
	age: 36,
	email: "kadi.tamm@gmail.com",
	hobbies: ["muusika", "sport"],
	address: {
		city: "Tallinn",
		county: "Harjumaa"
	},
	getBirthYear: function() {
		return 2021 - this.age;
	}
};

let val;

val = person;

val = person.firstName;
val = person["lastname"];
val = person.age;
val = person.hobbies[1];
// val = person.address.city;
val = person.address["city"];
val = person.getBirthYear();

const people = [
	{name: "Kadi", age: 36},
	{name: "Mati", age: 38},
	{name: "Mike", age: 23},
];

val = people;

for(let i = 0; i < people.length; i++){
	console.log(people[i].name);
};

console.log(val);