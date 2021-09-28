let val;

const today = new Date();

val = today.getMonth(); // 0 - jaanuar
val = today.getDate();
val = today.getDay();
val = today.getFullYear();
val = today.getHours();
val = today.getMinutes();
val = today.getSeconds();
val = today.getMilliseconds();
val = today.getTime();

let birthday = new Date("09/27/2001");
birthday = new Date('September 27 2001');

birthday.setMonth(2); // 0 - jaanuar
birthday.setDate(12);
birthday.setFullYear(2002);
birthday.setHours(11);
birthday.setMinutes(25);
birthday.setSeconds(50);

console.log(birthday);
console.log(val);