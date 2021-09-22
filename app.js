const name = "Gardo";
const surname = "Kirsipuu";
const age = 21;
const text = "Tere, olen Gardo";
const tags = "programeerimine, linux, windows"

let val;

// concatenation

val = name + " " + surname;

// append

val = "Gardo ";
val += surname;
// val = val + "Gardo"

val = text + ". Minu tegevusalad on " + tags;

// escaping

val = /"See on jutumärkides"/;

// suuruse vahetus

val = name.toUpperCase();
val = name.toLowerCase();

val = surname[1];
val = surname.indexOf("G");
val = surname.lastIndexOf("o");

val = surname.charAt(2);
val = surname.charAt(surname.lenght - 1);

val = surname.substring(0, 4);
val = surname.slice(0, 4);
val = surname.slice(-3);

val = tags.split();

console.log(val);