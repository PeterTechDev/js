
function newStudent(name, age) {
    return {name, age};
}

let students = [
    newStudent('Mario', 44),
    newStudent('Pedro', 34),
    newStudent('Jairo', 32),
    newStudent('Caio', 23)
]

function ageClass(total, student){
    return total + student.age;
}
function greetingAll(name, student){
    return name + ' ' + student.name
}

// Retorna o total somado de todas as idades da turma
console.log(students.reduce(ageClass,0));

// Retornar uma saudação com os nomes
console.log(students.reduce(greetingAll,'Olá'));