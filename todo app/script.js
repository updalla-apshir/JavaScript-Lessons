const taskInput = document.querySelector('#input'),
      addTaskBtn = document.querySelector('.btnadd'),
      taskBox = document.querySelector('.task-box'),
      clearBtn = document.querySelector('.clear-btn'),
      filters = document.querySelectorAll('.filters span');

let taskInfo = JSON.parse(localStorage.getItem('taskinfo') || "[]"), toUpdateId;

// Display all tasks initially

// Filter tasks based on selected filter
filters.forEach(filter => {
    filter.addEventListener('click', () => {
        document.querySelector('span.active').classList.remove("active");
        filter.classList.toggle('active');
        display(filter.id);
    });
});



// Add new task
addTaskBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (taskInput.value == '') {
        alert('Fill the field.');
    } else {
        if (addTaskBtn.innerHTML == '<i class="fa-solid fa-plus"></i>') {
            addTask({ taskInput: taskInput.value, status: "No-Completed" });
        } else {
            updateTask({ taskInput: taskInput.value, status: "No-Completed" });
        }
    }
});

// Function to add task to taskInfo array
function addTask(obj) {
    let userField = taskInput.value.trim();
    let taskAdd = { taskInput: userField, status: obj.status }
    taskInfo.push(taskAdd);
    localStorage.setItem('taskinfo', JSON.stringify(taskInfo));
    alert('Task added successfully!');
    location.reload(); // Refresh page to display updated tasks
}

// Function to display tasks based on filter
function display(filter) {
    let output = '';
    if (taskInfo.length) {
        taskInfo.forEach((task, index) => {
            if (filter == "all" || filter == task.status.toLowerCase()) {
                let completed = task.status == "Completed" ? "checked" : "";
                output += `
                <li class="task">
                    <label for="${index}">
                        <input type="checkbox" onclick="updateStatus(this)" id="${index}" ${completed}>
                        <p class="${completed}">${task.taskInput}</p>
                    </label>
                    <div class="right-task">
                        <span onclick="prepareUpdate(${index})"><i class="fa-solid fa-file-pen"></i></span>
                        <span onclick="remove(${index})"><i class="fa-solid fa-trash"></i></span>
                    </div>
                </li>`;
            }
        });
    }

    taskBox.innerHTML = output;
}
display("all");


// Function to update task status
function updateStatus(selectedTask) {
    let taskId = selectedTask.id;
    let taskName = selectedTask.parentElement.lastElementChild;
    if (selectedTask.checked) {
        taskName.classList.add('checked');
        taskInfo[taskId].status = "Completed";
    } else {
        taskName.classList.remove('checked');
        taskInfo[taskId].status = "No-Completed";
    }
    localStorage.setItem('taskinfo', JSON.stringify(taskInfo)); // Update local storage
}

// Function to update task name
function updateTask(object) {
    if (toUpdateId !== undefined) {
        taskInfo[toUpdateId] = object;
        localStorage.setItem('taskinfo', JSON.stringify(taskInfo));
        alert('Successfully Updated');
        location.reload();
    } else {
        alert('No task to update');
    }
}

// Function to prepare for updating task
function prepareUpdate(index) {
    taskInput.value = taskInfo[index].taskInput;
    addTaskBtn.innerHTML = '<i class="fa-solid fa-file-pen"></i>';
    toUpdateId = index; // Store the index of the task to be updated
}

function remove(index){
    if(confirm('Are you sure to delete ?')) {
        taskInfo.splice(index,1);
        localStorage.setItem('taskinfo', JSON.stringify(taskInfo))
        alert(' Successfully Deleted ')
        location.reload()
   }
}
clearBtn.addEventListener('click',()=>{
    taskInfo.splice(0,taskInfo.length)
    localStorage.setItem('taskinfo',JSON.stringify(taskInfo))
    display()
})