// event elements
const form = document.querySelector('form');
const taskInput = document.querySelector('#task');
const taskList = document.querySelector('ul')
const remAll = document.getElementById('remAllbtn')

// submit 
form.addEventListener('submit', addToList)

function addToList(e) {
	const li = document.createElement('li');
	const list = document.querySelector('ul');

	li.className = 'collection-item';
	li.appendChild(document.createTextNode(taskInput.value));

	const link = document.createElement('a');
	link.className = 'secondary-content'
	link.appendChild(document.createTextNode('X'));
	link.setAttribute('href', '#')

	li.appendChild(link);
	list.appendChild(li);

	taskInput.value = '';

	e.preventDefault();
}

// click
taskList.addEventListener('click', removeFromList)
remAll.addEventListener('click', removeAll)

function removeFromList(e) {
	if (e.target.textContent == 'X') {
		if (confirm('Are you sure you want to delete this task?')) {
			e.target.parentElement.remove();
		}
	}
}

function removeAll(e) {
	if (confirm('Are you sure you want to delete all task?')) {
		if (e.target.id == 'remAllbtn') {
			taskList.innerHTML = '';
		}
	}
}
