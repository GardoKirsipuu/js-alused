// event elements
const form = document.querySelector('form');
const taskInput = document.querySelector('#task');
const taskList = document.querySelector('ul');
const remAll = document.getElementById('remAllbtn');
const filterInput = document.querySelector('#filter');

document.addEventListener('DOMContentLoaded', getTasks);

// filter input event
filterInput.addEventListener('keyup', filterTask);

// submit 
form.addEventListener('submit', addToList);

// Adding to list
function addToList(e) {
	const li = document.createElement('li');

	li.className = 'collection-item';
	li.appendChild(document.createTextNode(taskInput.value));

	const link = document.createElement('a');
	link.className = 'secondary-content'
	link.appendChild(document.createTextNode('X'));
	link.setAttribute('href', '#')

	li.appendChild(link);
	taskList.appendChild(li);

	storeInLocalStorage(taskInput.value);

	taskInput.value = '';

	e.preventDefault();
}

// click
taskList.addEventListener('click', removeFromList)
remAll.addEventListener('click', removeAll)

// Removing one element from list
function removeFromList(e) {
	if (e.target.textContent == 'X') {
		if (confirm('Are you sure you want to delete this task?')) {
			e.target.parentElement.remove();
			removeFromLocalStorage(e.target.parentElement.textContent);
		}
	}
}

// Removing All elements from list
function removeAll(e) {
	if (confirm('Are you sure you want to delete all task?')) {
		if (e.target.id == 'remAllbtn') {
			taskList.innerHTML = '';
		}
		localStorage.clear();
	}
}

// Add tasks to localstorage
function storeInLocalStorage(task=null) {
	let tasks;
	if(localStorage.getItem('tasks') === null){
		tasks = [];
	} else {
		tasks = JSON.parse(localStorage.getItem('tasks'))
	}
	tasks.push(task);
	localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Removing tasks from localstorage
function removeFromLocalStorage(task) {
	let tasks;
	if(localStorage.getItem('tasks') === null){
		tasks = [];
	} else {
		tasks = JSON.parse(localStorage.getItem('tasks'));
	}
	tasks.forEach(function(element, index){
		if(element == task.slice(0, -1)){
			tasks.splice(index, 1)
		}
	});
	localStorage.setItem('tasks', JSON.stringify(tasks));
}

function getTasks(e){
	let tasks;
	if(localStorage.getItem('tasks') === null){
		tasks = [];
	} else {
		tasks = JSON.parse(localStorage.getItem('tasks'));
	}
	tasks.forEach(function(task, index){
		const li = document.createElement('li');

		li.className = 'collection-item';
		li.appendChild(document.createTextNode(task));

		const link = document.createElement('a');
		link.className = 'secondary-content'
		link.appendChild(document.createTextNode('X'));
		link.setAttribute('href', '#')

		li.appendChild(link);
		taskList.appendChild(li);

		e.preventDefault();
	});
	localStorage.setItem('tasks', JSON.stringify(tasks));
}

function filterTask(e){
	const text = e.target.value.toLowerCase();
	const tasks = document.querySelectorAll('.collection-item');
	tasks.forEach(function(element){
		const task = element.firstChild.textContent.toLowerCase();
		if(task.indexOf(text) != -1){
			element.style.display = 'block';
		} else {
			element.style.display = 'none'
		}
	});
	}