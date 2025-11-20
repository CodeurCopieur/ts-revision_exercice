
function gift(age: number): number {
    return age + 3
}

console.log(gift(20));


// void est un type de données qui permet de ne rien renvoyer
// c'est un type de données très flexible
// il est utilisé pour stocker des valeurs qui ne sont pas connues à l'avance
// a utiliser avec parcimonie et avec des interfaces

function gift2(age: number): void {
    console.log(age + 3);
}

console.log(gift2(20), ' : gift2');
console.log(gift(40), ' : gift');


function clgData(arg) {
    console.log(`${arg} is a ${typeof arg}`) // pas de return
}

clgData(gift(20));