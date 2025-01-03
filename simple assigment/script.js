let inputValue = document.getElementById('userinput');
let inputOutput = document.querySelector('#displayOutput');
let addTaskForm = document.getElementById('task');

let taskinfo = JSON.parse(localStorage.getItem('taskinfo')) || [];
display(taskinfo);

addTaskForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if (inputValue.value != '') {
        addTaskFunction({ input: inputValue.value });
    } else {
        alert('Fill the task');
    }
});

function display(array) {
    let output = '';
    if (array.length) {
        array.forEach((task, index) => {
            output += `<tr>
                            <td>${task.input}</td>
                            <td> 
                                <button class="btn btn-danger" onclick="deleteOutput(${index})">Delete</button>
                            </td>
                        </tr>`;
        });
    }
    inputOutput.innerHTML = output;
}

function addTaskFunction(obj) {
    taskinfo.push(obj);
    localStorage.setItem('taskinfo', JSON.stringify(taskinfo));
    location.reload();
}

function deleteOutput(index) {
    if (confirm('Are you sure to delete?')) {
        taskinfo.splice(index, 1);
        localStorage.setItem('taskinfo', JSON.stringify(taskinfo));
        location.reload();

    }
}