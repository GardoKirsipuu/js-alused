// elemendi loomine
const form = document.querySelector('form');
const taskInput = document.querySelector('#task');
const heading = document.querySelector('h4');

taskInput.value = '';

// submit
// form.addEventListener('submit', runEvent);

// keyboard
// form.addEventListener('keydown', runEvent);
// form.addEventListener('keyup', runEvent);
// taskInput.addEventListener('keypress', runEvent);

// input väljas fokuseerimine ja lahti fokuseerimine
// taskInput.addEventListener('focus', runEvent);
// taskInput.addEventListener('blur', runEvent);

// taskInput.addEventListener('cut', runEvent);
// taskInput.addEventListener('paste', runEvent);
// taskInput.addEventListener('input', runEvent);


function runEvent(e) {
	console.log(`Event type: ${e.type}`);
	heading.innerText = e.target.value;
	// e.preventDefault();
}
