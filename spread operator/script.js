let person = {
    name: 'John',
    age: 21,
}

let contact = {
    telephone: 278878746,
    email: 'john@gmail.com'
}

//
let copy = {...person, city: 'New York', ...contact}
copy.age = 55;

console.log(person);
console.log(copy);