enum Level {
    ADMIN,
    MODERATEUR,
    SUPPORT,
    USER_READ_ONLY,
}

const users: {pseudo: string, level: number} = {
    pseudo: "John",
    level: Level.SUPPORT
}

if (users.level === Level.ADMIN) {
    console.log("Vous êtes admin", users.pseudo, users.level);
} else if (users.level === Level.MODERATEUR) {
    console.log("Vous êtes moderateur", users.pseudo, users.level);
} else if (users.level === Level.SUPPORT) {
    console.log("Vous êtes support", users.pseudo, users.level);
} else if (users.level === Level.USER_READ_ONLY) {
    console.log("Vous êtes user read only", users.pseudo, users.level);
}


enum Color {
    RED = 3,
    GREEN = 10,
    BLUE,
}

const c: Color = Color.GREEN;
const b: string = Color[11]; // BLUE recupere grace a la valeur 11 de l'enum Color

console.log(c, "Color.GREEN");
console.log(b, "Color[11]");