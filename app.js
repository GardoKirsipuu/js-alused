function lisamine(){
	let b = document.getElementById("lisaAdd").value;
	console.log(b);
	document.getElementById("list").innerHTML += `<li>${b}</li>`;
}