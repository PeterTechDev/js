let student = {
    code: 1234,
    name: 'Peter',
    telephone: 2798898489,
    city: 'Linhares'
}
//mostrar diferença no array
let student1 = {
    code: 23123,
    name: 'Gabriel',
    telephone: 3213124323,
    city: 'São Mateus'
}

// pegar atributos especificos
// let {code, name, telephone} = student;

// fazer uma copia de student
// let {...copy} = student;


//Salvar todo o restante em uma variável
let {code, name, ...remaining} = student;
console.log(remaining);

//O que identifica o array é o index e não o atributo
let students = [student, student1];
let [peter, gabriel] = students
console.log(students);
console.log(peter);
console.log(gabriel);