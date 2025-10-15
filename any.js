// any est un type de données qui permet de stocker n'importe quelle valeur
// c'est un type de données très flexible
// il est utilisé pour stocker des valeurs qui ne sont pas connues à l'avance
// a utiliser avec parcimonie et avec des interfaces
var anyData = "John";
console.log(typeof anyData); // string
anyData = 40;
console.log(typeof anyData); // number
anyData = true;
console.log(typeof anyData); // boolean
anyData = [1, 2, 3];
console.log(typeof anyData); // object
anyData = { name: "John", age: 20 };
console.log(typeof anyData); // object
var anyDataArray = [];
anyDataArray = [1, 2, 3, "John", true, { name: "John", age: 20 }, [1, 'salut']];
console.log(typeof anyDataArray); // object
var user = { name: "John", pseudo: 20 };
console.log('type de user : ', typeof user);
console.log('user : ', user);
user.pseudo = "John";
console.log('user : ', user);
var user2 = { name: "John", pseudo: 20 };
user2 = "John"; // on peut assigner une autre valeur a user2 grace a any
