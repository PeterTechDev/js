// Crie um algoritmo que transforme as notas do sistema
// numérico para sistema de notas em caracteres tipo A B C

// * de 90 para cima -   A
// * entre 80 - 89   -   B
// * entre 70 - 79   -   C
// * entre 60 - 69   -   D
// * menor que 60    -   F

let grade = -1;

const getGrade = (grade) => {
    if (grade < 60 && grade >=0) {
        console.log('F');
    } else if (grade >= 60 && grade <= 69) {
        console.log('D');
    } else if (grade >= 70 && grade <= 79) {
        console.log('C');
    } else if (grade >= 80 && grade <= 89) {
        console.log('B');
    } else if (grade >= 90) {
        console.log('A');
    } else {
        console.log('Nota Inválida');
    }
}
getGrade(grade)