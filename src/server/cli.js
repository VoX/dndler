import {
    generateName,
    generateRace,
    generateClass,
    generateBackground,
    generateEquipment,
    generateAll,
    generateWeightedStats,
    generateUnweightedStats,
    generateStats,
    generateProficiency,
    calcModFromScore,
    calcArmorClass,
    calcHitpoints
} from './generators.js';

let name = generateName();
let race = generateRace();
let classchoice = generateClass();
let background = generateBackground();
let stats = generateStats(race, classchoice, true);
let equipment = generateEquipment(classchoice, background)
let profObject = generateProficiency(stats["Total Modifiers"], classchoice, background, 1);

console.log("");
console.log("Name: " + name);
console.log("Race: " + race);
console.log("Class: " + classchoice);
console.log("Background: " + background['Name']);
console.log("");
console.log("Stats:");
Object.keys(stats["Total Stats"]).forEach(k => console.log(k + ": " + stats["Total Stats"][k]));
console.log("");
console.log("Skills: ");
Object.keys(profObject["Skills"]).forEach(k => console.log(k + ": " + profObject["Skills"][k]));
console.log("");
console.log("Proficient Skills:");
profObject["Proficient Skills"].forEach(k => console.log(k));
console.log("");

/*
console.log("Equipment: ");
equipment.forEach(k => console.log(k));
console.log("")
*/


/* 
Object.keys(background).forEach(k => console.log(k + ": " + background[k]));
console.log("");
*/
