// event elements
const taskList = document.querySelector('ul')

// taskList.remove();

// click
taskList.addEventListener('click', removeFromList)

function removeFromList(e) {
	const target = event.target.parentElement;
	target.remove();
}