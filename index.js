
// src/index.js
const form = document.getElementById('create-task-form');
const taskList = document.getElementById('tasks');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const taskInput = document.getElementById('new-task-description');
    const taskDescription = taskInput.value.trim();

if (taskDescription) {
    const taskItem = document.createElement('li');
    taskItem.textContent = taskDescription;
    taskList.appendChild(taskItem);
    taskInput.value = '';
}
});