var Level;
(function (Level) {
    Level[Level["ADMIN"] = 0] = "ADMIN";
    Level[Level["MODERATEUR"] = 1] = "MODERATEUR";
    Level[Level["SUPPORT"] = 2] = "SUPPORT";
    Level[Level["USER_READ_ONLY"] = 3] = "USER_READ_ONLY";
})(Level || (Level = {}));
var users = {
    pseudo: "John",
    level: Level.SUPPORT
};
if (users.level === Level.ADMIN) {
    console.log("Vous êtes admin", users.pseudo, users.level);
}
else if (users.level === Level.MODERATEUR) {
    console.log("Vous êtes moderateur", users.pseudo, users.level);
}
else if (users.level === Level.SUPPORT) {
    console.log("Vous êtes support", users.pseudo, users.level);
}
else if (users.level === Level.USER_READ_ONLY) {
    console.log("Vous êtes user read only", users.pseudo, users.level);
}
var Color;
(function (Color) {
    Color[Color["RED"] = 3] = "RED";
    Color[Color["GREEN"] = 10] = "GREEN";
    Color[Color["BLUE"] = 11] = "BLUE";
})(Color || (Color = {}));
var c = Color.GREEN;
var b = Color[11]; // BLUE recupere grace a la valeur 11 de l'enum Color
console.log(c, "Color.GREEN");
console.log(b, "Color[11]");
