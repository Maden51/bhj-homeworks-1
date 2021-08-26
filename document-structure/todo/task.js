const taskList = document.querySelector('.tasks__input');
const taskInput = document.querySelector('.tasks');
const taskMessages = document.querySelector('.tasks__list');
const taskTitle = document.querySelector('.task__title');

const getTaskFromStorage = function() {
   let allTasks = JSON.parse(localStorage.getItem('taskList')) || [];
   console.log(allTasks);
   for (i = 0; i < allTasks.length; i++) {
        let taskName = allTasks[i];
        taskMessages.innerHTML +=
        `<div class="task">
        <div class="task__title">
        ${taskName}
        </div>
        <a href="#" class="task__remove">&times;</a>
        </div>`;
   }
};

const setTaskToStorage = function() {
    let taskName = `${taskList.value}`;
    let allTasks = JSON.parse(localStorage.getItem('taskList'));
    if(allTasks == null) allTasks = [];
    allTasks.push(taskName);
    localStorage.setItem('taskList', JSON.stringify(allTasks)); 
};

const addTask = function() {
    if (taskList.key == 'Enter' || (taskList.value).trim()) {
        taskMessages.innerHTML += `
        <div class="task">
        <div class="task__title">
        ${taskList.value}
        </div>
        <a href="#" class="task__remove">&times;</a>
        </div>`; 
        setTaskToStorage();
        taskList.value = null;
    }
}

getTaskFromStorage();

taskInput.addEventListener('click', (e) => {
    e.preventDefault();
    if (e.target.id == 'tasks__input'){
        e.addEventListener('keydown', addTask());
    } else if (e.target.id == 'tasks__add') {
        addTask();
    } else if (e.target.className == 'task__remove') {
        let allTasks = JSON.parse(localStorage.getItem('taskList'));
        console.log(allTasks);
        for (i = 0; i < allTasks.length; i++) {
            if(allTasks[i] === (e.target.previousElementSibling.innerText)){
                allTasks.splice(i, 1);
                console.log(allTasks);
            }
        }
        e.target.parentElement.remove();
        localStorage.setItem('taskList', JSON.stringify(allTasks));
    }
});