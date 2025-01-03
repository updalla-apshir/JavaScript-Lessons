const titleName = document.querySelector('#titleName'),
      description = document.querySelector('#description'),
      btnSave = document.querySelector('#btnSave'),
      modaTitle = document.querySelector('.modal-title'),
      outnote = document.querySelector('.output');

let noteinfo = JSON.parse(localStorage.getItem("noteinfo") || "[]");
let toUpdateId;

display(noteinfo);

btnSave.addEventListener('click', (e) => {
    e.preventDefault();
    if (titleName.value == '' || description.value == '') {
        alert('Fill in both fields');
    } else {
        if (btnSave.innerHTML == 'Save') {
            addNote({ titleName: titleName.value, description: description.value });
        } else {
            updateNote({ titleName: titleName.value, description: description.value });
        }
    }
});

function addNote(obj) {
    const currentDate = new Date();
    obj.timestamp = currentDate.toLocaleString(); 
    noteinfo.push(obj);
    localStorage.setItem('noteinfo', JSON.stringify(noteinfo));
    alert('Successfully added');
    location.reload();
}

function display(data) {
    let output = '';
    data.forEach((task, index) => { 
        output += `
        <li class="note text-light bg-primary">
            <div class="detail">
                <p>${task.titleName}</p> 
                <span class="text-light">${task.description}</span>
            </div>
            <div class="bottom">
                <span>${task.timestamp}</span> 
                <div class="dropdown dropup dropstart position-relative">
                    <button class="btn dropdown-toggle text-light" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                        <i class="fa-solid fa-ellipsis"></i>
                    </button>
                    <div class="dropdown-menu bg-primary position-absolute start-0  py-0" style="min-width: 90px;">
                        <span class="dropdown-item" onclick="remove(${index})"><i class="fa-solid fa-trash"></i> Delete</span>
                        <span class="dropdown-item" onclick="prepareUpdate(${index})" data-bs-toggle="modal"
                        data-bs-target="#courseModal"><i class="fa-solid fa-file-pen"></i> Edit</span>
                    </div>
                </div>
            </div>
        </li>`;
    });
    outnote.innerHTML = output;
}

function remove(index){
    if (confirm('Are you sure you want to delete this note?')) {
        noteinfo.splice(index, 1);
        localStorage.setItem('noteinfo', JSON.stringify(noteinfo));
        location.reload();
    }
}

function updateNote(object){
    if (toUpdateId !== undefined) {
        noteinfo[toUpdateId] = object;
        localStorage.setItem('noteinfo', JSON.stringify(noteinfo));
        alert('Successfully updated');
        location.reload();
        
    } else {
        alert('No note updated');
    }
}

function prepareUpdate(index){
    titleName.value = noteinfo[index].titleName;
    description.value = noteinfo[index].description;
    btnSave.innerHTML = 'Update';
    toUpdateId = index;
    modaTitle.innerHTML = 'Update The Task'
    
}