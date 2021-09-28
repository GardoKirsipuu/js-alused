// funktsiooni defineerimine (deklareerimine)
function greeting(firstname = "Kadi", lastname = "Tamm"){

	/*
	if(typeof firstname == "undefined"){
		firstname = "Kadi";
	}
	if(typeof lastname == "undefined"){
		lastname = "Tamm";
	}
	*/
	return "Tere, " + firstname + " " + lastname;
}
// funktsiooni kutsumine tööle

let greet = greeting("Gardo", "Kirsipuu");
console.log(greet);

console.log();
// funktsioon avaldise kujul
const square = function(number = 3){
	return number * number;
}
console.log(square());

// IIRE - Immediately Invoked Function Expression
(function(){
	console.log("function is ran")
})();

(function(name){
	console.log("Tere " + name)
})("Gardo");

console.log();
// objekti sees defineeritud funktsioon

const todo = {
	add: function(){
		console.log("add todo......")
	},
	edit: function(id){
		console.log(`edit todo ${id}`)
	},
	delete: function(){
		console.log("delete todo......")
	}
}

todo.add();
todo.edit(5);
todo.delete();