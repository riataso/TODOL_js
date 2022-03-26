const taskValue = document.getElementsByClassName('task_text')[0];
const taskSubmit = document.getElementsByClassName('task_submit')[0];
const taskList = document.getElementsByClassName('task_list')[0];
const form = document.getElementsByClassName('task_text')[0];
const input = document.getElementById('input');



input.addEventListener('submit', e => {
    e.preventDefault();
    console.log(form.value);
    pitem();
});

const  pitem =() =>{ 
    let todoList = form.value;
    if(todoList.length){
        const liItem = document.createElement('li');
        liItem.innerHTML = form.value;
        ul.appendChild(liItem);
        form.value="";

        const deleteList = document.createElement('button');
        deleteList.innerHTML = 'Delete' ;
        liItem.appendChild(deleteList);

        liItem.addEventListener('contextmenu', e =>{
            e.preventDefault();
            liItem.remove();
        });

        deleteList.addEventListener('click' , e =>{
            e.preventDefault();
            deleteTasks(deleteList);
        });
    };
};



const addTasks = (task) => {

const listItem = document.createElement('li');
const showItem = taskList.appendChild(listItem);
showItem.innerHTML = task;


const deleteButton = document.createElement('button');
deleteButton.innerHTML = 'Delete';
listItem.appendChild(deleteButton);


deleteButton.addEventListener('click', e => {
    e.preventDefault();
    deleteTasks(deleteButton);

llistItem.addEventListener('contextmenu', e =>{
    e.preventDefault();
    listItem.remove();
});

});
};


const deleteTasks = (deleteButton) => {
const chosenTask = deleteButton.closest('li');
taskList.removeChild(chosenTask);
};


taskSubmit.addEventListener('click', e => {
        e.preventDefault();
        console.log(taskValue.value);
        const task = taskValue.value;
        if (task){
            addTasks(task);
            taskValue.value = '';
        };
});

