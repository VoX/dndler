import {
    generateName,
    generateRace,
    generateClass,
    generateBackground,
    generateAll,
    generateWeightedStats,
    generateUnweightedStats,
    calcModFromScore,
    calcArmorClass,
    calcHitpoints
} from './generators.js';

let name = generateName();
let race = generateRace();
let classchoice = generateClass();
let background = generateBackground();
let stats = generateWeightedStats(race, classchoice);

console.log("");
console.log("Name: " + name);
console.log("Race: " + race);
console.log("Class: " + classchoice);
console.log("");
console.log("Background: ");
Object.keys(background).forEach(k => console.log(k + ": " + background[k]));
console.log("");
console.log("Stats:");
Object.keys(stats["Total Stats"]).forEach(k => console.log(k + ": " + stats["Total Stats"][k]));
console.log("");

