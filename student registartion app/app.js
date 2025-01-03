// UI elements:

const courseTbody = document.querySelector('.courseinfo'),
      btnAddCourse = document.querySelector('#courseSave'),
      courseName = document.querySelector('#courseName'),
      courseForm = document.querySelector('#course-form'),
      instructor = document.querySelector('#instructor');
// fetch course data from local storage or empty array if not exist.

let courseinfo = JSON.parse(localStorage.getItem('courseinfo') || "[]");
let updateId;
display(courseinfo)

//insert or update course info
courseForm.addEventListener('submit',(e)=>{
    e.preventDefault;
    if(courseName.value === '' && instructor.value === ''){
        alert('fill the filds')
    }
    else {
        if(btnAddCourse.innerHTML=='Save'){
            addCourse({courseName: courseName.value , instructor: instructor.value})
        }
        else if(btnAddCourse.innerHTML=='Update'){
            updateCourse({courseName: courseName.value,instructor: instructor.value})
        }

    }
})


function display(array){
    let output='', id=0;
    if(array.length){
        array.forEach((cours, inde)=>{
            output+=`<tr> 
                        <td>${++id}</td>
                        <td>${cours.courseName}</td>
                        <td>${cours.instructor}</td>
                        <td>
                        <button class="btn btn-info" onclick="prepareUpdate(${inde})" data-bs-toggle="modal"
                        data-bs-target="#courseModal"> update </button>
                        <button class="btn btn-danger" onclick="deleted(${inde})"> Delete </button>
                    </tr>`
        })
    }
    else{
        output+=`<tr class="text-center fs-3" > <td colspan="4"> No data found! </td> </tr>`
    }
    courseTbody.innerHTML=output;
}

function addCourse(object){

    if(courseinfo.filter((course)=>course.courseName.trim().toLowerCase() == object.courseName.trim().toLowerCase()).length){
        alert('this course already registered')
    }
    else{
    courseinfo.push(object)
    localStorage.setItem('courseinfo',  JSON.stringify(courseinfo))
    alert('successfuly registred')
    location.reload()
    }

}
function updateCourse(object){
    if(updateId !== undefined){
        courseinfo[updateId] = object
        localStorage.setItem('courseinfo',JSON.stringify(courseinfo))
        alert('successfully updated')
        location.reload()
    }
    else{
        alert('No course updated')
    }
    
}


function prepareUpdate(inde){
    courseName.value = courseinfo[inde].courseName
    instructor.value = courseinfo[inde].instructor
    btnAddCourse.innerHTML='Update'
    updateId = inde
}

function deleted(inde){
    if(confirm('are you sure to delete')){
        courseinfo.splice(inde,1)
        localStorage.setItem('courseinfo',JSON.stringify(courseinfo))
        alert('Successfully Deleted')
        location.reload()
    }

}




//  student form code

const   studentTbody = document.querySelector('.studentInfo'),
        btnAddstudent = document.querySelector('#studentSave'),
        studentName = document.querySelector('#studentName'),
        studentForm = document.querySelector('#Student-form'),
        phone = document.querySelector('#phone'),
        address = document.querySelector('#address'),
        studentCourse = document.querySelector('#studentCourse');

// fetch student data from local storage or empty array if not exist.
let studentinfo= JSON.parse(localStorage.getItem('students') || "[]" ),  
    search = document.querySelector('#search');


search.addEventListener('keyup',()=>{
    let filterText = [],text = search.value;
    courseinfo.forEach((course)=>{
       if( course.courseName.includes(text.trim().toLowerCase()) || course.instructor.includes(text.trim().toLowerCase()) ){
                filterText.push(course)
       }
       display(filterText)
    })
})

let options = '';
courseinfo.forEach((course)=>{
   options+=`
         <option value = '${course.courseName}'>${course.courseName}</option>
        `

})
displayStudents(studentinfo)

studentCourse.innerHTML+= options;

studentForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    if(studentName.value !='' && phone.value !='' && address.value != '' && studentCourse.value != ''){
        if(btnAddstudent.innerHTML== 'Save'){
            add({studentName:studentName.value,address:address.value,studentCourse:studentCourse.value,phone:phone.value},'students')
        }else if(btnAddstudent.innerHTML== 'Update'){
          update({studentName:studentName.value,address:address.value,studentCourse:studentCourse.value,phone:phone.value},'students')
        }
       }else{
        alert('please fill the fields')
       }
})


function displayStudents(data){
let output='' , i=0;
if(data.length){
     data.forEach((student, index)=>{
            output+=`<tr> 
                        <td> ${++i}</td>
                        <td>${student.studentName} </td>
                        <td>${student.phone} </td>
                        <td>${student.address} </td>
                        <td>${student.studentCourse} </td>
                        <td> 
                          <button class="btn btn-info" onclick="prepareUpdate(${index})" data-bs-toggle="modal" data-bs-target="#studentModal"> Update </button>
                          <button class="btn btn-danger"  onclick="removeCourse(${index})"> Delete </button>
                        </td>
                     </tr>`
         })
    }
     
    else{
        output+= `<tr><td colspan="6"> No data Found!</td> </tr>`
    }
    studentTbody.innerHTML=output;
}

function add(object){
    studentinfo.push(object)
    localStorage.setItem('students',  JSON.stringify(studentinfo))
    alert('successfuly registred')
    location.reload()
  

}