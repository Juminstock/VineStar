// Reasignación y redeclaración

var firstName; // Se le asigna el valor de Undefined
firstName = "Carlos";
console.log(firstName);

var lastName = "Rodríguez"; // Declaramos y asignamos
lastName = "Duque";
console.log(lastName);

var middleName = "Javier"; // Declaramos y asignamos
var middleName = "Juan"; // Redeclaramos y reasignamos
console.log(middleName);

// Let examples

let fruit = "Apple"; // Declaramos y asignamos
fruit = "Mango"; // Reasignamos

// Const examples

const animal = "Dog"; // Declaramos y asignamos
animal = "Cat"; // Intentamos reasignar una constante, dará error
console.log(animal);

const vehicles = [];
vehicles.push("Mazda", "AKT");
console.log(vehicles);