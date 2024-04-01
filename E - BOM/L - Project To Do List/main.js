
let input = document.querySelector('.input');
let submit = document.querySelector('.add');
let tasks = document.querySelector('.tasks');


// Empty Array To Store The Tasks
let ArrTasks = [];

if(localStorage.getItem('tasks')) {
    ArrTasks = JSON.parse(localStorage.getItem('tasks'));
}

// Trigger Get Data From Local Storage Function
getDataToLocalStorage();


// Add Task After Click Submit

submit.addEventListener('click', function () {
    
    if(input.value !== "") {
    
        addTaskToArray(input.value); 
        
        input.value = ''; // Empty Input Field

    }
})

function addTaskToArray(taskText) {
    
    // Tasks Data
    const task = {
        id: Date.now(),
        title: taskText,
        completed: false,
    };

    // Push Task Data In Array
    ArrTasks.push(task);

    // Add Tasks To Page
    addElementToPage(ArrTasks);

    // Add Tasks To Local Storage
    addDataToLocalStorage(ArrTasks);
}

function addElementToPage(ArrTasks) {
    
    // Empty Task 
    tasks.innerHTML = '';

    ArrTasks.forEach(task => {
        
        // Create Tasks Element
        let div = document.createElement('div');
        div.className = 'task';
        // Check If Task Is Done
        if(task.completed) {
            div.className = 'task done';
        }
        div.setAttribute('id', task.id);
        div.appendChild(document.createTextNode(task.title));
        
        // Add Value On Felid Input To Task
        input.value = div.innerHTML;
        
        // Add To Tasks Container
        tasks.appendChild(div);

        // Create Button Done Task
        let done = document.createElement('span');
        done.className = 'task done';
        done.appendChild(document.createTextNode('Done'))
        div.appendChild(done);
        
        // Done The Task After click Done
        done.addEventListener('click', function() {
            div.style.opacity = '.5';
            done.style. backgroundColor = '#ddd';
            done.style. color = '#000';
        });

        // Create Button Delete Task
        let btnDeleteTask = document.createElement('span');
        btnDeleteTask.className = 'del';
        btnDeleteTask.appendChild(document.createTextNode('Delete'));
        div.appendChild(btnDeleteTask);

        // Remove Task After Click Delete
        btnDeleteTask.addEventListener('click', function(e) {
            // Remove To Page
            div.remove(); 
            // Remove Local Storage
            ArrTasks = ArrTasks.filter(task => task.id != e.target.parentElement.getAttribute('data-id'));
            addDataToLocalStorage(ArrTasks);
        })
    });

}

function addDataToLocalStorage(ArrTasks) {
    window.localStorage.setItem("tasks", JSON.stringify(ArrTasks));
}

function getDataToLocalStorage() {
    let data = window.localStorage.getItem("tasks");
    if(data) {
        let tasks = JSON.parse(data);
        addElementToPage(tasks);
    }
}
