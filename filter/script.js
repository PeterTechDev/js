
function newStudent(name, age) {
    return {name, age};
}

let students = [
    newStudent('Mario', 44),
    newStudent('Pedro', 34),
    newStudent('Jairo', 32),
    newStudent('Caio', 23)
];
console.log(students);

function under30(student){
    return student.age < 30
}

let studentsUnder30 = students.filter(under30);
console.log(studentsUnder30);