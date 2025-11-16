// unknown est un type de données qui permet de stocker n'importe quelle valeur
// il est utilisé pour stocker des valeurs qui ne sont pas connues à l'avance
// a utiliser avec parcimonie et avec des interfaces
// verifier le type de la variable avant de l'utiliser et utiliser l'assertion de type pour forcer le type
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
