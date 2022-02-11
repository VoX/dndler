// import lodash library
import e from 'express';
import pkg from 'lodash';
const { sum, zipWith, add, shuffle, sample, sampleSize, flatten, flattenDeep } = pkg;
import {
  sourcebooks,
  names,
  backgrounds,
  races,
  classes,
  classFeatures,
  equipment,
  miscRollTable
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

// generate stats, weighted or unweighted based on bool
const generateStats = (raceChoice, classChoice, isWeighted = false) => {
  let baseStats = [];
  console.log(isWeighted);
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

// generate character level
const generateLevel = (min = 1, max = 20) => {
  let charLevel = 0;
  if (min === max) {
    charLevel = min;
  } else {
    charLevel = Math.floor(Math.random() * (max) + min);
  };
  return charLevel;
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
  let modSTR = modifiers["STR"];
  let modDEX = modifiers["DEX"];
  let modCON = modifiers["CON"];
  let modINT = modifiers["INT"];
  let modWIS = modifiers["WIS"];
  let modCHA = modifiers["CHA"];
  let armorClass = 10 + modDEX
  // special cases of Barbarian and Monk
  if (classChoice === "Barbarian") {
    armorClass = 10 + modDEX + modCON;
  } else if (classChoice === "Monk") {
    armorClass = 10 + modDEX + modWIS;
  };
  // normal cases of armor in inventory
  if (equipmentList.includes("Chain Mail")) {
    armorClass = 16;
  } else if (equipmentList.includes("Scale Mail")) {
    if (modDEX >= 2) {
      armorClass = 16;
    } else {
      armorClass = 14 + modDEX;
    };
  } else if (equipmentList.includes("Studded Leather Armor")) {
    armorClass = 12 + modDEX;
  } else if (equipmentList.includes("Leather Armor")) {
    armorClass = 11 + modDEX;
  };
  if (equipmentList.includes("Shield")) {
    armorClass = armorClass + 2;
  };
  return armorClass;
};

//generates name
const generateName = () => {
  let firstname = sample(names['First']);
  let lastname = sample(names['Last']);
  return firstname + ' ' + lastname;
};

// generates race
const generateRace = (raceArray) => {
  let raceChoice = "";
  if(raceArray.length > 0)
  {
    raceChoice = sample(Object.keys(races).filter((raceName) => raceArray.includes(raceName)));
  }
  else
  {
    raceChoice = sample(Object.keys(races));
  }
  return raceChoice;
};

// generates class
const generateClass = (classArray) => {
  let classChoice = ""
  if(classArray.length > 0)
  {
    classChoice = sample(Object.keys(classFeatures).filter((className) => classArray.includes(className)));
  }
  else
  {
    classChoice = sample(Object.keys(classFeatures));
  }
    // let classchoice = "Bard"
  return classChoice;
};

// calculates hit dice available based on class and level
const calcHitDice = (classChoice, level) => {
  let hitDice = level + classes[classChoice]["HitDice"];
  return hitDice;
}

// generates background
const generateBackground = (backgroundArray) => {
  let backgroundChoice = "";
  if(backgroundArray.length > 0)
  {
    backgroundChoice = sample(Object.keys(backgrounds).filter((backgroundName) => backgroundArray.includes(backgroundName)));
  }
  else
  {
    backgroundChoice = sample(Object.keys(backgrounds));
  }
  // let background = "Sage";
  let bgObject = {
    Name: backgroundChoice
  };
  if (backgroundChoice === "House Agent") {
    bgObject["House"] = "House " + sample(names['Last']);
  }
  Object.keys(backgrounds[backgroundChoice]).forEach(k => bgObject[k] = sample(backgrounds[backgroundChoice][k]));
  bgObject["Gear"] = backgrounds[backgroundChoice]["Gear"];
  bgObject["Features"] = backgrounds[backgroundChoice]["Features"];
  bgObject["Skills"] = backgrounds[backgroundChoice]["Skills"];
  bgObject["Tools"] = backgrounds[backgroundChoice]["Tools"];
  bgObject["Languages"] = backgrounds[backgroundChoice]["Languages"];
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
      options = miscRollTable["Artisan's Tools"];
      choice = sample(options);
      break;
    case 'Instrument Choice':
      options = miscRollTable["Musical Instruments"];
      choice = sample(options);
      break;
    case 'Gaming Set Choice':
      options = miscRollTable["Gaming Sets"];
      choice = sample(options);
      break;
    case 'Language Choice':
      options = miscRollTable["Languages"];
      choice = sample(options);
      break;
    case 'Exotic Language Choice':
      options = miscRollTable["Exotic Languages"];
      choice = sample(options);
      break;
    default:
      break;
  }
  return choice;
};

// generate equipment list based on class and background
const generateEquipment = (classChoice, bgObject) => {
  let needSwap = [
    "Simple",
    "Simple Melee",
    "Simple Ranged",
    "Martial",
    "Martial Melee",
    "Martial Ranged",
    "Artisan Choice",
    "Instrument Choice",
    "Trinket Choice"
  ];
  let equipment = [];
  equipment.push(classes[classChoice]["Equipment"]);
  equipment.push(bgObject["Gear"]);
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
  let profBonus = 0;
  if (charLevel < 5) {
    profBonus = 2;
  } else if (charLevel < 9) {
    profBonus = 3;
  } else if (charLevel < 13 ) {
    profBonus = 4;
  } else if (charLevel < 17) {
    profBonus = 5;
  } else if (charLevel <= 20) {
    profBonus = 6;
  };
  return profBonus;
};

// check if two arrays share any element(s)
const sharesElement = (array1, array2) => {
  let shares = false;
  for (let index in array1) {
    if (array2.includes(array1[index])) {
      shares = true;
      break;
    }
  }
  return shares;
}

// choose skill proficiencies based on class and background
const chooseProficientSkills = (classChoice, bgObject) => {
  //console.log("")
  //console.log("Class: " + classChoice);
  //console.log("Background: " + bgObject["Name"]);
  let bgSkills = bgObject["Skills"];
  //console.log("From BG: " + bgSkills);
  for (let index in bgSkills) {
    if (Array.isArray(bgSkills[index])) {
      bgSkills[index] = sample(bgSkills[index]);
    };
  };
  //console.log("From BG (after choices): " + bgSkills);
  let classSkillOptions = classes[classChoice]["Proficiencies"]["Skills"]["Choices"];
  let numChoices = classes[classChoice]["Proficiencies"]["Skills"]["numChoices"];
  //console.log("From class: " + numChoices + " choices out of " + classSkillOptions);
  let classSkills = sampleSize(classSkillOptions, numChoices);
  //console.log("From class (after choices): " + classSkills);
  //console.log(sharesElement(bgSkills, classSkills));
  while (sharesElement(bgSkills, classSkills)) {
    classSkills = sampleSize(classSkillOptions, numChoices);
    //console.log("From class (after choices): " + classSkills);
  }
  //console.log(sharesElement(bgSkills, classSkills));
  let proficientSkills = bgSkills.concat(classSkills);
  proficientSkills = flatten(proficientSkills);
  //console.log(proficientSkills);
  return proficientSkills;
};

const chooseOtherProficiencies = (classChoice, bgChoice) => {
  let needSwap = [
    "Artisan Choice",
    "Instrument Choice",
    "Language Choice",
    "Gaming Set Choice"
  ];
  let otherProficiencies = {
    Armor: [],
    Weapons: [],
    Tools: [],
    Languages: []
  };
  for (let key of Object.keys(otherProficiencies)) {
    switch (key) {
      case 'Armor':
      case 'Weapons':
        otherProficiencies[key] = classes[classChoice]["Proficiencies"][key];
        otherProficiencies[key].forEach(function (item, index) {
          if (Array.isArray(otherProficiencies[key][index])) {
            otherProficiencies[key][index] = sample(otherProficiencies[key][index]);
          };
        });
        otherProficiencies[key].forEach(function (item, index) {
          if (needSwap.includes(item)) {
            otherProficiencies[index] = equipmentReplace(item);
          };
        });
        break;
      case 'Tools':
        let classTools = classes[classChoice]["Proficiencies"][key];
        let bgTools = bgChoice[key];
        if (classTools === bgTools) { // add this check to Languages after adding race languages
          otherProficiencies[key] = classTools;
        } else {
          otherProficiencies[key] = classTools.concat(bgTools);
        }
        otherProficiencies[key].forEach(function (item, index) {
          if (Array.isArray(otherProficiencies[key][index])) {
            let choice = sample(otherProficiencies[key][index]);
            while (otherProficiencies[key].includes(choice)) {
              choice = sample(otherProficiencies[key][index]);
            };
            otherProficiencies[key][index] = choice;
          };
        });
        otherProficiencies[key].forEach(function (item, index) {
          if (needSwap.includes(item)) {
            let choice = equipmentReplace(item);
            while (otherProficiencies[key].includes(choice)) {
              choice = equipmentReplace(item);
            }
            otherProficiencies[key][index] = choice;
          };
        });
        break;
      case 'Languages':
        let bgLangs = bgChoice[key];
        // raceLangs = raceChoice[key]
        otherProficiencies[key] = bgLangs // .concat(raceChoice[key])
        otherProficiencies[key].forEach(function (item, index) {
          if (Array.isArray(otherProficiencies[key][index])) {
            let choice = sample(otherProficiencies[key][index]);
            while (otherProficiencies[key].includes(choice)) {
              choice = sample(otherProficiencies[key][index])
            };
            otherProficiencies[key][index] = sample(otherProficiencies[key][index]);
          };
        });
        otherProficiencies[key].forEach(function (item, index) {
          if (needSwap.includes(item)) {
            let choice = equipmentReplace(item);
            while (otherProficiencies[key].includes(choice)) {
              choice = equipmentReplace(item);
            }
            otherProficiencies[key][index] = choice;
          };
        });
        break;
    };
  };
  return otherProficiencies;
};

// generate skills object based on proficiencies selected
const generateProficiency = (modObject, classChoice, bgObject, charLevel) => {
  let profBonus = calcProfBonus(charLevel);
  let proficientSkills = chooseProficientSkills(classChoice, bgObject);
  let otherProficiencies = chooseOtherProficiencies(classChoice, bgObject);
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
    "Skills": skillsObject,
    "Other": otherProficiencies
  };
  return profObject;
};

// combine features from background and class, still need to add race
const generateFeatures = (classChoice, bgChoice, charLevel) => {
  let ind = 0;
  let features = {};
  for (let feature of bgChoice["Features"]) {
    features[ind] = {
        "Name": feature,
        "Description": 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        "Source": bgChoice["Name"]
    };
    ind += 1;
  };
  let iter = 1;
  // features.push(bgChoice["Features"]);
  while (iter <= charLevel) {
    for (let feature of classFeatures[classChoice][String(iter)]["Features"]) {
      features[ind] = {
          "Name": feature,
          "Description": 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          "Source": classChoice + ' ' + String(iter)
      };
      ind += 1;
    };
    // features.push(classFeatures[classChoice][String(iter)]["Features"]);
    iter += 1;
  };
  return features;
};

//generates a full character sheet
const generateAll = (options) => {

  console.log(options);
  let level = generateLevel(
    options['Levels'] ? options['Levels'][0] : 1,
    options['Levels'] ? options['Levels'][1] : 20);
  let race = generateRace(
    options['Races'] ? options['Races'] : []
  );
  let name = generateName();
  let classChoice = generateClass(
    options['Classes'] ? options['Classes'] : []
  );
  let hitdice = calcHitDice(classChoice, level);
  let background = generateBackground(
    options['Backgrounds'] ? options['Backgrounds'] : []
  );
  let stats = generateStats(race, classChoice,
    options['Other'] ? options['Other']['weighted'] ? true : false : true
  );
  let equipment = generateEquipment(classChoice, background);
  let armorclass = calcArmorClass(stats["Total Modifiers"], classChoice, equipment);
  let profObject = generateProficiency(stats["Total Modifiers"], classChoice, background, level);
  let features = generateFeatures(classChoice, background, level);

  const characterJSON = {
    race: race,
    name: name,
    class: classChoice,
    level: level,
    hitdice: hitdice,
    hitpoints: calcHitpoints(stats["Total Modifiers"]['CON'], classChoice, level),
    armorclass: armorclass,
    background: background,
    stats: stats,
    features: features,
    proficiency: profObject,
    equipment: equipment,
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
  generateLevel,
  generateStats,
  generateEquipment,
  generateProficiency,
  calcModFromScore,
  calcProfBonus,
  calcArmorClass,
  calcHitpoints
};