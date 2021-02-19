var students = [];

document.getElementById('submit').addEventListener('click', () => {
    let x = 20;
	let nameInputEl = document.getElementById('name');
	let idInputEl = document.getElementById('idNumber');
	let gdpaInputEl = document.getElementById('gdpa');

	// Validation for input
	inputValidation(nameInputEl.value, idInputEl.value, gdpaInputEl.value);

	// insert student
	insertStudent(nameInputEl.value, idInputEl.value, gdpaInputEl.value);

	// Show success message

});

function inputValidation(name, id, gdpa) {
	// check for the value of each element
    let x = 30;

	if (name == '') {
		alert('Please insert the student name');
	}

	if (id == '') {
		alert('Please insert the student id number');
	}

	if (gdpa == '') {
		alert('Please insert the student gdpa');
	}
}

function insertStudent(name, id, gdpa) {
	let student = {
		name: name,
		id: id,
		gdpa: gdpa,
	};
	students.push(student);
    console.log('students array: ', students);
}

function showMessage(event){
    if (event == 'success') {
        alert('Studnet added!')
    }else{
        alert('Faild to add student')
    }
}

function deleteStudent(){
	var id_to = document.getElementById('idToRemove').value
	for(var i=0;i<students.length;i++){
		if(students[i].id==id_to){
			students.splice(i,1);
		}
	}
}

function makeList() {
	
	var x ='';
for(var i in students){
    var name=[];
	for(var j in students[i])
	name.push(students[i][j]);

	x += "<li>" + name.join(" ") + "</li> <br>"
}
 document.getElementById("menu").innerHTML = "<ul>"+ x +"</ul>";
console.log("done");
}

function update(){
	var id = document.getElementById('num').value;
	for(var i in students){
		console.log(students[i].name);
		if(students[i].id == id){
			students[i].name = document.getElementById('nameUp').innerHTML;
			students[i].id = document.getElementById('idUp').value;
			students[i].gdpa = document.getElementById('gpaUp').value;
			document.getElementById('show').innerHTML="Added done.";
			return 0;
		}
	}
	document.getElementById('show').innerHTML="can't fined number";

}
// Usage

// This week task:
// Show list of students 
// Update student
// Delete student

// 10 marks
// 1) based on the follwoing:
// a) easy to use  and prettyu look 3
// b) resposnive design 2

// c) clean code 2
// d) show list for the user 1
// e) update 1
// f) delete 1

// Deeadline: 20/2, on github.
