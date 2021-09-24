const numbers1 = [55, 32, 22, 86, 99, 1, 11, 66];
const numbers2 = new Array(55, 32, 22, 86, 99, 1, 11, 69);
const fruits = ["Õun", "Banaan", "Pirn"];
const mixed = [22, "Tere", true, undefined, null, {a:1, b:2}, new Date()];

let val;

val = numbers1.length; //massiivi pikkus
val = Array.isArray(numbers1); // kas on massiiv

val = numbers1[0]; // kindel element
val = numbers1[2];

numbers1[2] = 100; //elemendi lisamine

val = numbers1.indexOf(66); // elemendi järgi index

numbers1.push(250); // elemendi massiivi lõppu lisamine
numbers1.unshift(120); // elemendi massiivi algusesse lisamine
numbers1.pop(); // elemendi kustutamine massiivi lõpust
numbers1.shift(); // elemendi kustutamine massiivi algusest

// console.log(numbers1);

// numbers1.splice(1, 3); // massiivi alates index 1 3 elementi kustutamine

// numbers1.reverse(); // massiivi tagurpidi keeramine

val = numbers1.concat(numbers2); // kahe massiivi kokku panemine

val = fruits.sort(); // massiivi sorteerimine

console.log(numbers1);

// massiivi sorteerimine suurem-> väiksem ja vastupidi

val = numbers1.sort(function(x, y){
	return x - y;
})

val = numbers1.sort(function(x, y){
	return y - x;
})

console.log(val);