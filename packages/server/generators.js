// import lodash library
import pkg from 'lodash';
const { sum, zipWith, add, shuffle, sample } = pkg;
import {
  sourcebooks,
  names,
  backgrounds,
  races,
  classFeatures
} from '../data/data.js';

// array of ability score abbreviations
const abilityScores = ['STR', 'DEX', 'CON', 'INT', 'WIS', 'CHA'];

// function to calculate mod based on total score
const calcModFromScore = (abilityScore) => {
  let abilityMod = Math.floor((abilityScore - 10) / 2);
  return abilityMod;
};

// simulated dicerolls for base stats
const roll4DropLowest = () => {
  let dicerolls = [
    Math.floor(Math.random() * 6) + 1,
    Math.floor(Math.random() * 6) + 1,
    Math.floor(Math.random() * 6) + 1,
    Math.floor(Math.random() * 6) + 1
  ];
  dicerolls.sort().reverse();
  return sum(dicerolls.slice(0, 3));
};

// zip together ability score names and stats
const zipStats = (statArray) => {
  let zippedArray = statArray.reduce((result, stat, index) => {
    result[abilityScores[index]] = stat;
    return result;
  }, {})
  return zippedArray;
};

// generate stats, assigned randomly to ability scores
const generateUnweightedStats = (raceChoice) => {
  let baseStats = [roll4DropLowest(), roll4DropLowest(), roll4DropLowest(), roll4DropLowest(), roll4DropLowest(), roll4DropLowest()];
  let totalStats = zipWith(baseStats, races[raceChoice]['bonuses'], add);
  let totalModifiers = totalStats.map(i => calcModFromScore(i));
  let statsObject = { baseStats: zipStats(baseStats), totalStats: zipStats(totalStats), totalModifiers: zipStats(totalModifiers) };
  return statsObject;
};

// stat generator helper function
const prioritizeStats = (sortedStats, priorityStats) => {
  let baseStats = [0, 0, 0, 0, 0, 0];
  let remainingStats = [0, 1, 2, 3, 4, 5];
  priorityStats.forEach(stat => baseStats[stat] = sortedStats.shift());
  remainingStats = remainingStats.filter(x => !priorityStats.includes(x));
  sortedStats = shuffle(sortedStats);
  remainingStats.forEach(stat => baseStats[stat] = sortedStats.shift());
  return baseStats;
};

// generate stats, assign with priority to certain scores, assign rest randomly
const generateWeightedStats = (raceChoice, classChoice) => {
  let baseStats = []
  let sortedStats = [
    roll4DropLowest(),
    roll4DropLowest(),
    roll4DropLowest(),
    roll4DropLowest(),
    roll4DropLowest(),
    roll4DropLowest()
  ];
  sortedStats.sort(function (a, b) {
    return a - b;
  }).reverse();
  switch (classChoice) {
    case 'Artificer':
      baseStats = prioritizeStats(sortedStats, [3, 1]);
      break;
    case 'Barbarian':
      baseStats = prioritizeStats(sortedStats, [0, 2, 1]);
      break;
    case 'Bard':
      baseStats = prioritizeStats(sortedStats, [5, 1]);
      break;
    case 'Cleric':
      baseStats = prioritizeStats(sortedStats, [4, 2]);
      break;
    case 'Druid':
      baseStats = prioritizeStats(sortedStats, [4, 2]);
      break;
    case 'Fighter':
      baseStats = prioritizeStats(sortedStats, [0, 1, 2]);
      break;
    case 'Monk':
      baseStats = prioritizeStats(sortedStats, [1, 4, 2]);
      break;
    case 'Paladin':
      baseStats = prioritizeStats(sortedStats, [5, 0, 3]);
      break;
    case 'Ranger':
      baseStats = prioritizeStats(sortedStats, [1, 4]);
      break;
    case 'Rogue':
      baseStats = prioritizeStats(sortedStats, [1]);
      break;
    case 'Sorcerer':
      baseStats = prioritizeStats(sortedStats, [5, 2]);
      break;
    case 'Warlock':
      baseStats = prioritizeStats(sortedStats, [5, 1]);
      break;
    case 'Wizard':
      baseStats = prioritizeStats(sortedStats, [3]);
      break;
    default:
      break;
  }
  let totalStats = zipWith(baseStats, races[raceChoice]['bonuses'], add);
  let totalModifiers = totalStats.map(i => calcModFromScore(i));
  let statsObject = {
    'Base Stats': zipStats(baseStats),
    'Total Stats': zipStats(totalStats),
    'Total Modifiers': zipStats(totalModifiers)
  };
  return statsObject;
};

// calculate hitpoints based on con mod, class, and char level
const calcHitpoints = (conMod, classChoice, charLevel) => {
  let hitpoints = 0;
  switch (classChoice) {
    case 'Artificer':
    case 'Bard':
    case 'Cleric':
    case 'Druid':
    case 'Monk':
    case 'Rogue':
    case 'Warlock':
      hitpoints = (8 + conMod) + (5 + conMod) * (charLevel - 1);
      break;
    case 'Barbarian':
      hitpoints = (12 + conMod) + (8 + conMod) * (charLevel - 1);
      break;
    case 'Fighter':
    case 'Paladin':
    case 'Ranger':
      hitpoints = (10 + conMod) + (6 + conMod) * (charLevel - 1);
      break;
    case 'Sorcerer':
    case 'Wizard':
      hitpoints = (6 + conMod) + (4 + conMod) * (charLevel - 1);
      break;
    default:
      break;
  }
  return hitpoints;
};

// calculate armor class based on available gear and proficiencies
const calcArmorClass = (modifiers, classChoice, equipmentList) => {
  modSTR = modifiers['STR'];
  modDEX = modifiers['DEX'];
  modCON = modifiers['CON'];
  modINT = modifiers['INT'];
  modWIS = modifiers['WIS'];
  modCHA = modifiers['CHA'];
  armorClass = 10 + modDEX
  // special cases of Barbarian and Monk
  if (classChoice === 'Barbarian') {
    armorClass = 10 + modDEX + modSTR
  } else if (classChoice === 'Monk') {
    armorClass = 10 + modDEX + modWIS
  }
  // normal cases of armor in inventory
  if (equipmentList.includes('Chain Mail')) {
    armorClass = 16
  } else if (equipmentList.includes('Scale Mail')) {
    if (modDEX >= 2) {
      armorClass = 16
    } else {
      armorClass = 14 + modDEX
    }
  } else if (equipmentList.includes('Studded Leather Armor')) {
    armorClass = 12 + modDEX
  } else if (equipmentList.includes('Leather Armor')) {
    armorClass = 11 + modDEX
  }
  if (equipmentList.includes('Shield')) {
    armorClass = armorClass + 2
  }
  return armorClass
};

//generates name
const generateName = () => {
  let firstname = sample(names['First']);
  let lastname = sample(names['Last']);
  return firstname + ' ' + lastname;
};

// generates race
const generateRace = () => {
  let race = sample(Object.keys(races));
  return race;
};

// generates class
const generateClass = () => {
  let classchoice = sample(Object.keys(classFeatures));
  return classchoice;
};

// generates background
const generateBackground = () => {
  let background = sample(Object.keys(backgrounds));
  let bgObject = {
    Name: background
  };
  Object.keys(backgrounds[background]).forEach(k => bgObject[k] = sample(backgrounds[background][k]));
  bgObject['Gear'] = backgrounds[background]['Gear'];
  return bgObject;
};

//generates a full character sheet
const generateAll = () => {
  let race = generateRace();
  let name = generateName();
  let classchoice = generateClass();
  let background = generateBackground();
  let stats = generateUnweightedStats(race);

  const characterJSON = {
    race: race,
    name: name,
    class: classchoice,
    level: 1,
    hitpoints: calcHitpoints(stats.totalModifiers['CON'], classchoice, 1),
    armorclass: 0,
    background: background,
    stats: stats,
    features: [],
    proficiency: {},
    equipment: [],
    spells: {},
    weapons: {},
    sources: {}
  };
  return characterJSON;
};

export {
  generateAll,
  generateName,
  generateRace,
  generateBackground,
  generateClass,
  generateWeightedStats,
  generateUnweightedStats,
  calcModFromScore,
  calcArmorClass,
  calcHitpoints
};