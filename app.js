// event elements
const taskList = document.querySelector('ul')

// taskList.remove();

// click
taskList.addEventListener('click', runEvent)

function runEvent(e) {
	console.log(`Event is ${e.type}`);
}