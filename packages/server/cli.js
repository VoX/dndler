import {
    generateName,
    generateRace,
    generateClass,
    generateBackground,
    generateEquipment,
    generateAll,
    generateLevel,
    generateWeightedStats,
    generateUnweightedStats,
    generateStats,
    generateProficiency,
    calcModFromScore,
    calcProfBonus,
    calcArmorClass,
    calcHitpoints
} from './generators.js';

let name = generateName();
let race = generateRace();
let classchoice = generateClass();
let background = generateBackground();
let charLevel = generateLevel();
let profBonus = calcProfBonus(charLevel);
let stats = generateStats(race, classchoice, true);
let hitpoints = calcHitpoints(stats["Total Modifiers"]["CON"], classchoice, charLevel);
let equipment = generateEquipment(classchoice, background)
let profObject = generateProficiency(stats["Total Modifiers"], classchoice, background, charLevel);
let armorClass = calcArmorClass(stats["Total Modifiers"], classchoice, equipment);

// CHAR INFO BLOCK
console.log("");
console.log("Name: " + name);
console.log("Race: " + race);
console.log("Class: " + classchoice);
console.log("Level: " + charLevel);
console.log("Bonus: +" + profBonus);
console.log("HP: " + hitpoints);
console.log("AC: " + armorClass);
console.log()
console.log("Background: " + background['Name']);
console.log("");
console.log("Stats:");
Object.keys(stats["Total Stats"]).forEach(k => console.log(k + ": " + stats["Total Stats"][k]));
console.log("");

// SKILLS BLOCK
/*
console.log("Skills: ");
Object.keys(profObject["Skills"]).forEach(k => console.log(k + ": " + profObject["Skills"][k]));
console.log("");
console.log("Proficient Skills:");
profObject["Proficient Skills"].forEach(k => console.log(k));
console.log("");
*/

// EQUIPMENT BLOCK
console.log("Equipment: ");
equipment.forEach(k => console.log(k));
console.log("")


// BACKGROUND BLOCK
/*
Object.keys(background).forEach(k => console.log(k + ": " + background[k]));
console.log("");
*/
