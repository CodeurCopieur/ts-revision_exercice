// exercice 1

let names: string;
let speed: number = 25;
let isLoading: boolean;
let age: string|number;


// exercice 2
let colors: string[] = [];
colors.push("red");
console.log(colors);

let infos: Array<string|number|boolean> = [];
infos.push("string");
infos.push(true);
infos.push(40);
console.log(infos);

let infos2: (string|number|boolean)[] = [];
infos2.push("string");
infos2.push(true);
infos2.push(40);
console.log(infos2);

// exercice 3 : erreur de type
let member: object = {
    name: "John",
    age: 20,
    isLoggedIn: true 
}
console.log(member.age);


