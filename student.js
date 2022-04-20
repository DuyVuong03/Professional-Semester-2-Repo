students = []
const student_key = 'students'

loadStudent();

document.querySelector("#add_btn").addEventListener("click", function(){
    let stu = {
        id: document.querySelector("#id").value,
        name: document.querySelector("name").value
    }
    students.push(stu);
    saveStudent();
});

document.querySelector("#view_btn").addEventListener("click", function(){
    for (let s of students){
        alert(s.id+":"+s['name'])
    }
    students.push(stu)
    saveStudent();
});

document.querySelectorAll("#delete_btn").addEventListener("click", function(){
    let temp = []
    let delete_id = document.querySelector("#id").value
    for (let s of students) {
        if (s.id != delete_id) {
            temp.push(s)
        }
    }
    students = temp
    saveStudent();
});

function saveStudent() {
    localStorage.setItem(student_key, JSON.stringify(students))
}

function loadStudent() {
    students = JSON.parse(localStorage.getItem(student_key));
}