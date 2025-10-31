var inputNumber;
inputNumber = 42;
console.log(typeof inputNumber, ' => inputNumber');
var string;
// string = unknown; // erreur
if (typeof inputNumber === 'number') {
    string = inputNumber;
    console.log(typeof string, ' => string');
}
// console.log(typeof string); // erreur
