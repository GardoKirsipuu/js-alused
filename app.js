/*
if(tingimus) {
	// tegevused if puhul
} else {
	// tegevused else puhul
}
*/

const id = 100;

// == - võrdub
// != - ei võrdu
// === - võrdub ja tüübikontroll
// !== - ei võrdu ja tüübikontroll

// kui undefined
/*
let testId;
if(typeof testId !== 'undefined'){
	console.log(`id on ${testId}`);
} else {
	console.log('id puudub');
}
*/

// > ja <
/*
if(id > 100) {
	console.log(`id on ${id} - suurem kui 100`);
} else {
	console.log(`id on ${id} - väiksem või võrdne 100`);
}
*/

// if - else if - else
/*
const color = "blue";
if(color === 'red'){
	console.log('Stop!');
} else if(color === 'yellow'){
	console.log('Attention!');
} else if(color === 'green'){
	console.log('Go!');
} else {
	console.log('Color is not accepted!');
}
*/

// and - &&
const name = 'Kadi';
const age = 70;

if(age > 0 && age <= 12){
	console.log(`${name} on laps`);
} else if(age > 12 && age < 18){
	console.log(`${name} on nooruk`);
} else {
	console.log(`${name} on täiskasvanu`);
}

// or - ||
if(age < 18 || age > 65){
	console.log(`${name} ei saa registreerida`);
} else {
	console.log(`${name} on registreeritud`);
}

// ? - ternary operaator
console.log(id === 100 ? 'Õige' : 'Vale');

// ilma {}
if(id === 100) 
	console.log('Korras');
else 
	console.log('Ei ole korras');