let val;

// document.getElementById('')

val = document.getElementById('tasks-title');
val = document.getElementById('tasks-title').id;
val = document.getElementById('tasks-title').className;

const tasksTitle = document.getElementById('tasks-title');

// stiili muutmine

tasksTitle.style.background = "#333"
tasksTitle.style.color = "#fff"
tasksTitle.style.padding = "5px"
// tasksTitle.style.display = "none"

// sisu muutmine
tasksTitle.textContent = "My tasks"
tasksTitle.innerText = "My favourite tasks"
//tasksTitle.innerHTML = "<span style="color: red;">My Tasks</span>";

// document.querySelector

val = document.querySelector("#tasks-title")
val = document.querySelector(".card-title")
val = document.querySelector("h2")

document.querySelector("li").style.color = "red"

document.querySelector("ul li").style.color = "blue"

document.querySelector("li:last-child").style.color = "green"

document.querySelector("ul li").style.color = "blue"

document.querySelector("li:nth-child(odd)").style.background = "#ccc"

document.querySelector("li:nth-child(even)").style.background = "#f4f4f4"

document.querySelector("li:last-child").style.background = "#ccc"

console.log(val);