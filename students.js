var students = [];

$(document).ready(() => {
    if(localStorage.getItem("students2") != null)
    students = JSON.parse(localStorage.getItem("students2"))
renderStudentsTable();
})




    



function createStudent() {
    let prename = $("#inputPrename").val();
    let lastname = $("#inputLastname").val();
    let id = $("#inputID").val();

    let newStudent = new Student(prename, lastname, id);
    students.push(newStudent);

    localStorage.setItem("students2", JSON.stringify(students));
    
    renderStudentsTable();
}
function renderStudentsTable() {
  //delete all rows that contain students
    $("table tr:gt(0)").remove();
  // render/create rows for all studenst
    for(let i = 0; i < students.length; i++){
      $("table").append("<tr></tr>");
      let row =  $("tr:last");
       $(row).append("<td>" + students[i].prename + "</td>");
       $(row).append("<td>" + students[i].lastname + "</td>");
       $(row).append("<td>" + students[i].id + "</td>");
    }
    console.log(students)
}


class Student{
    constructor(prename, lastname, id){
        this.prename = prename;
        this.lastname = lastname;
        this.id = id;
    }
}