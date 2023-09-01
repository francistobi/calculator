var sqrt = require("math-sqrt");
var cubeRoot = require("cube-root");
const { Claculator } = require("./classes/calClass");
const { digitalRobot } = require("./classes/digiRobot");

var val = sqrt(4);
var cube = cubeRoot(27);
let claculator = new Claculator("ebuka");
var addRobot = digitalRobot(3456);

console.log(val);
console.log(cube);
console.log(addRobot);
console.log(claculator.addition(1, 2, 3, 4));
