// muutuja
// var, let, const

// deklareerimine
// let name = "Gardo Kirsipuu";
// kasutamine
// console.log(name);
// name = "Amogus";
// console.log(name);

// lubatud märgid nime loomisel : tähed, numbrid, _ ja $
// ei ole lubatud numbriga alustada

// let $ = "dollar";
// console.log($);

const name = "Gardo Kirsipuu";
console.log(name);
// const ei saa väärtust muuta
// name = "lmao";

// massiivid
const numbers = [1, 2, 3, 4, 5];
numbers.push(6);
console.log(numbers);

// objektid
const person = {
	name: "Kadi" ,
	age: 20
};
person.name = "Kati";
person.age = 25;
console.log(person);