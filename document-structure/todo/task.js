const taskList = document.querySelector('.tasks__input');
const taskInput = document.querySelector('.tasks');
const taskMessages = document.querySelector('.tasks__list');

const getTaskFromStorage = function() {
    if(localStorage.length) {
        for (i = 0; i < localStorage.length; i++) {
            let key = localStorage.key(i);
            taskMessages.innerHTML += localStorage.getItem(key);
        }
    }
};

const setTaskToStorage = function() {
    document.querySelectorAll('.task').forEach((item, index) => {
        localStorage.setItem(`task_${index}`, item.outerHTML);
    });
};

getTaskFromStorage();

taskInput.addEventListener('click', (e) => {
    e.preventDefault();
    if (e.target.id == 'tasks__input'){
        e.addEventListener('keydown', (e) => {
            if (e.key == 'Enter') {
                if(e.target.value) {
        taskMessages.innerHTML += `
        <div class="task">
        <div class="task__title">
        ${e.target.value}
        </div>
        <a href="#" class="task__remove">&times;</a>
        </div>`;

        e.target.value = '';
        setTaskToStorage();
                }
            }
        });
    } else if (e.target.id == 'tasks__add') {
        if (taskList.value) {
            taskMessages.innerHTML += `
            <div class="task">
            <div class="task__title">
            ${taskList.value}
            </div>
            <a href="#" class="task__remove">&times;</a>
            </div>`;

            taskList.value = '';
            setTaskToStorage();
        }
    } else if (e.target.className == 'task__remove') {
        e.target.parentElement.remove();
        for (i = 0; i < localStorage.length; i++) {
            let key = localStorage.key(i);
            let value = localStorage.getItem(key);
            if(value.includes(e.target.parentElement.outerHTML)){
                localStorage.removeItem(key);
            }
        }
    }
});