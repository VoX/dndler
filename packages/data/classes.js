const classes = {
    "Artificer": {
        "HitDice": "d8",
        "Proficiencies": {
            "Armor": ["Light", "Medium", "Shield"],
            "Weapons": ["Simple"],
            "Tools": ["Thieves' Tools", "Tinker's Tools", "Artisan Choice"],
            "Saving Throws": ["CON", "INT"],
            "Skills": {
                "Choices": ["Arcana", "History", "Investigation", "Medicine", "Nature", "Perception", "Sleight"],
                "numChoices": 2
            }
        },
        "Equipment": [
                "Simple",
                "Simple",
                "Light Crossbow",
                "Bolt (20)",
                "Thieves' Tools",
                "Dungeoneer's Pack",
                ["Studded Leather Armor", "Scale Mail"]
        ]
    },
    "Barbarian": {
        "HitDice": "d12",
        "Proficiencies": {
            "Armor": ["Light", "Medium", "Shield"],
            "Weapons": ["Simple", "Martial"],
            "Tools": [],
            "Saving Throws": ["STR", "CON"],
            "Skills": {
                "Choices": ["Animal", "Athletics", "Intimidation", "Nature", "Perception", "Survival"],
                "numChoices": 2
            }
        },
        "Equipment": [
                "Explorer's Pack",
                "Javelin (4)",
                ["Greataxe", "Martial Melee"],
                ["Handaxe (2)", "Simple"]
            ]
    },
    "Bard": {
        "HitDice": "d8",
        "Proficiencies": {
            "Armor": ["Light"],
            "Weapons": ["Simple", "Hand Crossbow", "Longsword", "Rapier", "Shortsword"],
            "Tools": ["Instrument Choice", "Instrument Choice", "Instrument Choice"],
            "Saving Throws": ["DEX", "CHA"],
            "Skills": {
                "Choices": ["Acrobatics", "Animal", "Arcana", "Athletics", "Deception", "History", "Insight", "Intimidation", "Investigation", "Medicine", "Nature", "Perception", "Performance", "Religion", "Sleight", "Stealth", "Survival"],
                "numChoices": 3
            }
        },
        "Equipment": [
                "Leather Armor",
                "Dagger",
                ["Rapier", "Longsword", "Simple"],
                ["Diplomat's Pack", "Entertainer's Pack"],
                ["Lute", "Instrument Choice"]
            ]
    },
    "Cleric": {
        "HitDice": "d8",
        "Proficiencies": {
            "Armor": ["Light", "Medium", "Shield"],
            "Weapons": ["Simple"],
            "Tools": [],
            "Saving Throws": ["WIS", "CHA"],
            "Skills": {
                "Choices": ["History", "Insight", "Medicine", "Persuasion", "Religion"],
                "numChoices": 2
            }
        },
        "Equipment": [
                "Shield",
                "Holy Symbol",
                ["Mace", "Warhammer"],
                ["Scale Mail", "Leather Armor", "Chain Mail"],
                [["Light Crossbow", "Bolt (20)"], "Simple"],
                ["Priest's Pack", "Explorer's Pack"]
            ]
    },
    "Druid": {
        "HitDice": "d8",
        "Proficiencies": {
            "Armor": ["Light", "Medium", "Shield"],
            "Weapons": ["Club", "Dagger", "Dart", "Javelin", "Mace", "Quarterstaff", "Scimitar", "Sickle", "Sling", "Spear"],
            "Tools": ["Herbalism Kit"],
            "Saving Throws": ["INT", "WIS"],
            "Skills": {
                "Choices": ["Arcana", "Animal", "Insight", "Medicine", "Nature", "Perception", "Religion", "Survival"],
                "numChoices": 2
            }
        },
        "Equipment": [
                "Leather Armor",
                "Explorer's Pack",
                "Druidic Focus",
                ["Shield", "Simple"],
                ["Scimitar", "Simple Melee"]
            ]
    },
    "Fighter": {
        "HitDice": "d10",
        "Proficiencies": {
            "Armor": ["Light", "Medium", "Heavy", "Shield"],
            "Weapons": ["Simple", "Martial"],
            "Tools": [],
            "Saving Throws": ["STR", "CON"],
            "Skills": {
                "Choices": ["Acrobatics", "Animal", "Athletics", "History", "Insight", "Intimidation", "Perception", "Survival"],
                "numChoices": 2
            }
        },
        "Equipment": [
                ["Chain Mail", ["Leather Armor", "Longbow", "Bolt (20)"]],
                [["Martial", "Shield"], ["Martial", "Martial"]],
                [["Light Crossbow", "Bolt (20)"], "Handaxe (2)"]
            ]
    },
    "Monk": {
        "HitDice": "d8",
        "Proficiencies": {
            "Armor": [],
            "Weapons": ["Simple", "Shortsword"],
            "Tools": [["Artisan Choice", "Instrument Choice"]],
            "Saving Throws": ["STR", "DEX"],
            "Skills": {
                "Choices": ["Acrobatics", "Athletics", "History", "Insight", "Religion", "Stealth"],
                "numChoices": 2
            }
        },
        "Equipment": [
                "Dart (10)",
                ["Shortsword", "Simple"],
                ["Dungeoneer's Pack", "Explorer's Pack"]
            ]
    },
    "Paladin": {
        "HitDice": "d10",
        "Proficiencies": {
            "Armor": ["Light", "Medium", "Heavy", "Shield"],
            "Weapons": ["Simple", "Martial"],
            "Tools": [],
            "Saving Throws": ["WIS", "CHA"],
            "Skills": {
                "Choices": ["Athletics", "Insight", "Intimidation", "Medicine", "Persuasion", "Religion"],
                "numChoices": 2
            }
        },
        "Equipment": [
                "Chain Mail",
                "Holy Symbol",
                [["Martial", "Shield"], ["Martial", "Martial"]],
                ["Javelin (5)", "Simple"],
                ["Priest's Pack", "Explorer's Pack"]
            ]
    },
    "Ranger": {
        "HitDice": "d10",
        "Proficiencies": {
            "Armor": ["Light", "Medium", "Shield"],
            "Weapons": ["Simple", "Martial"],
            "Tools": [],
            "Saving Throws": ["STR", "DEX"],
            "Skills": {
                "Choices": ["Animal", "Athletics", "Insight", "Investigation", "Nature", "Perception", "Stealth", "Survival"],
                "numChoices": 3
            }
        },
        "Equipment": [
                "Longbow",
                "Quiver",
                "Arrow (20)",
                ["Scale Mail", "Leather Armor"],
                ["Shortsword (2)", ["Simple", "Simple"]],
                ["Dungeoneer's Pack", "Explorer's Pack"]
            ]
    },
    "Rogue": {
        "HitDice": "d10",
        "Proficiencies": {
            "Armor": ["Light"],
            "Weapons": ["Simple", "Hand Crossbow", "Longsword", "Rapier", "Shortsword"],
            "Tools": ["Thieves' Tools"],
            "Saving Throws": ["DEX", "INT"],
            "Skills": {
                "Choices": ["Acrobatics", "Athletics", "Deception", "Insight", "Intimidation", "Investigation", "Perception", "Performance", "Persuasion", "Sleight", "Stealth"],
                "numChoices": 4
            }
        },
        "Equipment": [
                "Leather Armor",
                "Dagger (2)",
                "Thieves' Tools",
                ["Rapier", "Shortsword"],
                [["Shortbow", "Arrow (20)"], "Shortsword"],
                ["Burglar's Pack", "Dungeoneer's Pack", "Explorer's Pack"]
            ]
    },
    "Sorcerer": {
        "HitDice": "d6",
        "Proficiencies": {
            "Armor": [],
            "Weapons": ["Dagger", "Dart", "Sling", "Quarterstaff", "Light Crossbow"],
            "Tools": [],
            "Saving Throws": ["CON", "CHA"],
            "Skills": {
                "Choices": ["Arcana", "Deception", "Insight", "Intimidation", "Persuasion", "Religion"],
                "numChoices": 2
            }
        },
        "Equipment": [
                "Dagger (2)",
                [["Light Crossbow", "Bolt (20)"], "Simple"],
                ["Component Pouch", "Arcane Focus"],
                ["Dungeoneer's Pack", "Explorer's Pack"]
            ]
    },
    "Warlock": {
        "HitDice": "d8",
        "Proficiencies": {
            "Armor": ["Light"],
            "Weapons": ["Simple"],
            "Tools": [],
            "Saving Throws": ["WIS", "CHA"],
            "Skills": {
                "Choices": ["Arcana", "Deception", "History", "Intimidation", "Investigation", "Nature", "Religion"],
                "numChoices": 2
            }
        },
        "Equipment": [
                "Leather Armor",
                "Simple",
                [["Light Crossbow", "Bolt (20)"], "Simple"],
                ["Component Pouch", "Arcane Focus"],
                ["Scholar's Pack", "Dungeoneer's Pack"]
            ]
    },
    "Wizard":{
        "HitDice": "d6",
        "Proficiencies": {
            "Armor": [],
            "Weapons": ["Dagger", "Dart", "Sling", "Quarterstaff", "Light Crossbow"],
            "Tools": [],
            "Saving Throws": ["INT", "WIS"],
            "Skills": {
                "Choices": ["Arcana", "History", "Insight", "Investigation", "Medicine", "Religion"],
                "numChoices": 2
            }
        },
        "Equipment": [
                "Spellbook",
                ["Quarterstaff", "Dagger"],
                ["Component Pouch", "Arcane Focus"],
                ["Scholar's Pack", "Explorer's Pack"]
            ]
    }
}

export default classes;