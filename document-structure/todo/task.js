const taskList = document.querySelector('.tasks__input');
const taskInput = document.querySelector('.tasks');
const taskMessages = document.querySelector('.tasks__list');

const getTaskFromStorage = function() {
    if (localStorage.taskSet) {
        taskMessages.innerHTML +=
        `<div class="task">
        <div class="task__title">
        ${JSON.parse(localStorage.taskSet)};
        </div>
        <a href="#" class="task__remove">&times;</a>
        </div>`;
    }
};

const setTaskToStorage = function() {
    let taskName = `${taskList.value}`;
    let taskSet = [];
    taskSet.push(taskName);
    localStorage.taskSet += JSON.stringify({'task': taskName}); 
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
        e.target.parentElement.remove();
        for (i = 0; i < localStorage.length; i++) {
            let key = localStorage.key(i);
            let value = localStorage.getItem(key);
            if(value.includes(e.target.parentElement.textContent)){
                localStorage.removeItem(key);
            }
        }
    }
});