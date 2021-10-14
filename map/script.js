
function newStudent(name, age) {
    return {name, age};
}

let students = [
    newStudent('Mario', 44),
    newStudent('Pedro', 34),
    newStudent('Jairo', 32),
    newStudent('Caio', 23)
];

function studentsInFiveYears(student){
    return{
        name: student.name,
        age: student.age + 5
    }
}

console.log(students.map(studentsInFiveYears));