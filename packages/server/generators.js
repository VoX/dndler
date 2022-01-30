// import lodash library
import pkg from 'lodash';
const { sum, zipWith, add, shuffle, sample, sampleSize, flatten, flattenDeep } = pkg;
import {
  sourcebooks,
  names,
  backgrounds,
  races,
  classes,
  classFeatures,
  equipment
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

const generateStats = (raceChoice, classChoice, isWeighted = false) => {
  let baseStats = [];
  if (isWeighted === true) {
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
    };
  } else {
    baseStats = [roll4DropLowest(), roll4DropLowest(), roll4DropLowest(), roll4DropLowest(), roll4DropLowest(), roll4DropLowest()];
  };
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

// replace equipment keywords with actual choices
const equipmentReplace = (item) => {
  let choice = '';
  let options = '';
  switch (item) {
    case 'Simple':
      options = Object.keys(equipment["Weapons"]["Simple Melee"]).concat(Object.keys(equipment["Weapons"]["Simple Ranged"]));
      choice = sample(options);
      break;
    case 'Simple Melee':
      options = Object.keys(equipment["Weapons"]["Simple Melee"]);
      choice = sample(options);
      break;
    case 'Simple Ranged':
      options = Object.keys(equipment["Weapons"]["Simple Ranged"]);
      choice = sample(options);
      break;
    case 'Martial':
      options = Object.keys(equipment["Weapons"]['Martial Melee']).concat(Object.keys(equipment["Weapons"]['Martial Ranged']));
      choice = sample(options);
      break;
    case 'Martial Melee':
      options = Object.keys(equipment["Weapons"]["Martial Melee"]);
      choice = sample(options);
      break;
    case 'Martial Ranged':
      options = Object.keys(equipment["Weapons"]["Martial Ranged"]);
      choice = sample(options);
      break;
    case 'Artisan Choice':
      options = equipment["Artisan's Tools"];
      choice = sample(options);
      break;
    case 'Instrument Choice':
      options = equipment["Musical Instruments"];
      choice = sample(options);
      break;
    default:
      break;
  }
  return choice;
};

// generate equipment list based on class and background
const generateEquipment = (classChoice, bgChoice) => {
  let needSwap = [
    "Simple",
    "Simple Melee",
    "Simple Ranged",
    "Martial",
    "Martial Melee",
    "Martial Ranged",
    "Artisan Choice",
    "Instrument Choice"
  ];
  let equipment = [];
  equipment.push(classes[classChoice]["Equipment"]);
  equipment.push(bgChoice["Gear"]);
  equipment = flatten(equipment);
  for (let item in equipment) {
    if (Array.isArray(equipment[item])) {
      equipment[item] = sample(equipment[item]);
    }
  };
  equipment = flattenDeep(equipment);
  equipment.forEach(function (item, index) {
    if (needSwap.includes(item)) {
      equipment[index] = equipmentReplace(item);
    }
  });
  return equipment;
};

// calculate proficiency bonus based on character level
const calcProfBonus = (charLevel) => {
  let profBonus = 2;
  if (charLevel >= 5) {
    profBonus = 3;
    if (charLevel >= 9) {
      profBonus = 4;
      if (charLevel >= 13) {
        profBonus = 5;
        if (charLevel >= 17) {
          profBonus = 6;
        }
      }
    }
  }
  return profBonus;
};

// choose skill proficiencies based on class and background
// note: add bgChoice to arguments here after adding necessary data
const chooseProficientSkills = (classChoice) => {
  let proficientSkills = [];
  let skillOptions = classes[classChoice]["Proficiencies"]["Skills"]["Choices"];
  let numChoices = classes[classChoice]["Proficiencies"]["Skills"]["numChoices"];
  proficientSkills.push(sampleSize(skillOptions, numChoices));
  proficientSkills = flatten(proficientSkills);
  return proficientSkills;
};

// generate skills object based on proficiencies selected
const generateProficiency = (modObject, classChoice, bgChoice, charLevel) => {
  let profBonus = calcProfBonus(charLevel);
  let proficientSkills = chooseProficientSkills(classChoice);
  let proficientThrows = classes[classChoice]["Proficiencies"]["Saving Throws"];
  let savingThrows = {
    "STR": modObject["STR"],
    "DEX": modObject["DEX"],
    "CON": modObject["CON"],
    "INT": modObject["INT"],
    "WIS": modObject["WIS"],
    "CHA": modObject["CHA"]
  };
  let skillsObject = {
    "Acrobatics": modObject["DEX"],
    "Animal": modObject["WIS"],
    "Arcana": modObject["INT"],
    "Athletics": modObject["STR"],
    "Deception": modObject["CHA"],
    "History": modObject["INT"],
    "Insight": modObject["WIS"],
    "Intimidation": modObject["CHA"],
    "Investigation": modObject["INT"],
    "Medicine": modObject["WIS"],
    "Nature": modObject["INT"],
    "Perception": modObject["WIS"],
    "Performance": modObject["CHA"],
    "Persuasion": modObject["CHA"],
    "Religion": modObject["INT"],
    "Sleight": modObject["DEX"],
    "Stealth": modObject["DEX"],
    "Survival": modObject["WIS"]
  };
  for (let skill of proficientSkills) {
    skillsObject[skill] = skillsObject[skill] + profBonus;
  };
  for (let save in proficientThrows) {
    savingThrows[save] = savingThrows[save] + profBonus;
  };
  let profObject = {
    "Proficient Skills": proficientSkills,
    "Proficient Throws": proficientThrows,
    "Saving Throws": savingThrows,
    "Skills": skillsObject
  };
  return profObject;
};

//generates a full character sheet
const generateAll = () => {
  let level = 1;
  let race = generateRace();
  let name = generateName();
  let classchoice = generateClass();
  let background = generateBackground();
  let stats = generateStats(race, classchoice, true);
  let equipment = generateEquipment(classchoice, background)
  let profObject = generateProficiency(stats["Total Modifiers"], classchoice, background, 1);

  const characterJSON = {
    race: race,
    name: name,
    class: classchoice,
    level: 1,
    hitpoints: calcHitpoints(stats["Total Modifiers"]['CON'], classchoice, 1),
    armorclass: 0,
    background: background,
    stats: stats,
    features: [],
    proficiency: profObject,
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
  generateStats,
  generateEquipment,
  generateProficiency,
  calcModFromScore,
  calcArmorClass,
  calcHitpoints
};