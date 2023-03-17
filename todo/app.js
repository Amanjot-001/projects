window.onload = function(){ // so html load before js
const form = document.querySelector('#new-task-form');
const input = document.querySelector('#new-task-input');
const submitButton = document.querySelector('#new-task-submit');
const allTasks = document.querySelector('.task-list');

form.addEventListener('submit', (e) =>{
    e.preventDefault();
    const newTask = input.value;
    if(!newTask){
        alert('fill something');
        return;
    }

    const taskList = document.createElement('div');
    taskList.classList.add('content');

    const taskInfo = document.createElement('input');
    taskInfo.classList.add('text');
    taskInfo.type = 'text';
    taskInfo.setAttribute('readonly', 'readonly');
    taskInfo.value = newTask;

    taskList.appendChild(taskInfo);

    const editButton = document.createElement('button');
    editButton.classList.add('edit');
    editButton.innerText = 'Edit';

    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete');
    deleteButton.innerText = 'Delete';

    taskList.appendChild(editButton);
    taskList.appendChild(deleteButton);

    allTasks.appendChild(taskList);

    input.value='';

    editButton.addEventListener('click', (e) =>{
        if(editButton.innerText === 'Edit'){
            taskInfo.removeAttribute('readonly');
            editButton.innerText = 'Save'
        }
        else{
            editButton.innerText = 'Edit';
            taskInfo.setAttribute('readonly', 'readonly');
        }
    })

    deleteButton.addEventListener('click', (e) =>{
        allTasks.removeChild(taskList);
    })
})
}
