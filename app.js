// event elements
const taskList = document.querySelector('ul')
const remAll = document.getElementById('remAllbtn')

// taskList.remove();

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
