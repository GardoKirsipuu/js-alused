let val;

val = document.querySelectorAll("li");

const oddLi = document.querySelectorAll(`li:nth-child(odd)`);

const evenLi = document.querySelectorAll(`li:nth-child(even)`);

oddLi.forEach(function(li){
	console.log(li)
	li.style.background = "grey"
})

for(let i = 0; i < evenLi.length; i++){
	evenLi[i].style.background = "green"
}

// console.log(evenLi);