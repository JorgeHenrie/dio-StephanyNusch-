const form = document.querySelector('.task-form');
const taskList = document.querySelector('.tasks')
 
form.onsubmit = function (qualquer) {
    if(!document.querySelector('.task-input').value){
    	alert("Adicione uma tarefa!");
    	return false;
    }
    
	qualquer.preventDefault();
	const inputField = document.querySelector('.task-input');
	addTask(inputField.value);
	form.reset();
};

function addTask(description) {
	const taskContainer = document.createElement('div');
	const newTask = document.createElement('input');
	const taskLabel = document.createElement('label');
	const taskDescriptionNode =  document.createTextNode(description);

	newTask.setAttribute('type', 'checkbox');
	newTask.setAttribute('name', description);
	newTask.setAttribute('class', description);

	taskLabel.setAttribute('for', description);
	taskLabel.appendChild(taskDescriptionNode);

	taskContainer.classList.add('task-item');
	taskContainer.appendChild(newTask);
	taskContainer.appendChild(taskLabel);

	taskList.appendChild(taskContainer);
}

