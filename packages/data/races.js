const races = {
    "Changeling": {
        "bonuses": [0, 0, 0, 0, 0, 2],
        "additionalStatChoices": [1],
        "speed": "30",
        "languages": {
            "HasCommon": true,
            "RacialLanguages": [],
            "OtherLanguageCount": 2
            },
        "traits": ["Shapechanger", "Changeling Instincts"]
    },
    "Kalashtar": {
        "bonuses": [0, 0, 0, 0, 2, 1],
        "speed": "30",
        "languages": {},
        "traits": []
    },
    "Orc of Eberron": {
        "bonuses": [2, 0, 1, 0, 0, 0],
        "speed": "30",
        "languages": {},
        "traits": []
    },
    "Shifter": {
        "bonuses": [0, 0, 0, 0, 0, 0],
        "speed": 30,
        "languages": {
            "HasCommon": true,
            "RacialLanguages": [],
            "OtherLanguageCount": 1
            },
        "traits": []
    },
    "Warforged": {
        "bonuses": [0, 0, 2, 0, 0, 0],
        "speed": "30",
        "languages": {},
        "traits": []
    },
    "Aarakocra": {
        "bonuses": [0, 2, 0, 0, 1, 0],
        "speed": "30",
        "languages": {},
        "traits": []
    },
    "Genasi": {
        "bonuses": [0, 0, 2, 0, 0, 0],
        "speed": "",
        "languages": {},
        "traits": []
    },
    "Goliath": {
        "bonuses": [2, 0, 1, 0, 0, 0],
        "speed": "",
        "languages": {},
        "traits": []
    },
    "Orc of Exandria": {
        "bonuses": [2, 0, 1, 0, 0, 0],
        "speed": "",
        "languages": {},
        "traits": []
    },
    "Centaur": {
        "bonuses": [2, 0, 0, 0, 1, 0],
        "speed": "",
        "languages": {},
        "traits": []
    },
    "Loxodon": {
        "bonuses": [0, 0, 2, 0, 1, 0],
        "speed": "",
        "languages": {},
        "traits": []
    },
    "Minotaur": {
        "bonuses": [2, 0, 1, 0, 0, 0],
        "speed": "",
        "languages": {},
        "traits": []
    },
    "Simic Hybrid": {
        "bonuses": [0, 0, 2, 0, 0, 0],
        "speed": "",
        "languages": {},
        "traits": []
    },
    "Vedalken": {
        "bonuses": [0, 0, 0, 2, 1, 0],
        "speed": "",
        "languages": {},
        "traits": []
    },
    "Leonin": {
        "bonuses": [1, 0, 2, 0, 0, 0],
        "speed": "",
        "languages": {},
        "traits": []
    },
    "Satyr": {
        "bonuses": [0, 1, 0, 0, 0, 2],
        "speed": "",
        "languages": {},
        "traits": []
    },
    "Dragonborn": {
        "bonuses": [0, 2, 0, 0, 0, 1],
        "speed": "",
        "languages": {},
        "traits": []
    },
    "Drow Elf": {
        "bonuses": [0, 2, 0, 0, 0, 1],
        "speed": "",
        "languages": {},
        "traits": []
    },
    "Forest Gnome": {
        "bonuses": [0, 1, 0, 2, 0, 0],
        "speed": "",
        "languages": {},
        "traits": []
    },
    "Half-Elf": {
        "bonuses": [0, 0, 0, 0, 0, 2],
        "speed": "",
        "languages": {},
        "traits": []
    },
    "Half-Orc": {
        "bonuses": [2, 0, 1, 0, 0, 0],
        "speed": "",
        "languages": {},
        "traits": []
    },
    "High Elf": {
        "bonuses": [0, 2, 0, 1, 0, 0],
        "speed": "",
        "languages": {},
        "traits": []
    },
    "Hill Dwarf": {
        "bonuses": [0, 0, 2, 0, 1, 0],
        "speed": "",
        "languages": {},
        "traits": []
    },
    "Human": {
        "bonuses": [1, 1, 1, 1, 1, 1],
        "speed": "",
        "languages": {},
        "traits": []
    },
    "Lightfoot Halfling": {
        "bonuses": [0, 2, 0, 0, 0, 1],
        "speed": "",
        "languages": {},
        "traits": []
    },
    "Mountain Dwarf": {
        "bonuses": [2, 0, 2, 0, 0, 0],
        "speed": "",
        "languages": {},
        "traits": []
    },
    "Rock Gnome": {
        "bonuses": [0, 0, 1, 2, 0, 0],
        "speed": "",
        "languages": {},
        "traits": []
    },
    "Stout Halfling": {
        "bonuses": [0, 2, 1, 0, 0, 0],
        "speed": "",
        "languages": {},
        "traits": []
    },
    "Tiefling": {
        "bonuses": [0, 0, 0, 1, 0, 2],
        "speed": "",
        "languages": {},
        "traits": []
    },
    "Variant Human": {
        "bonuses": [0, 0, 0, 0, 0, 0],
        "speed": "",
        "languages": {},
        "traits": []
    },
    "Wood Elf": {
        "bonuses": [0, 2, 0, 0, 1, 0],
        "speed": "",
        "languages": {},
        "traits": []
    },
    "Feral Tiefling": {
        "bonuses": [0, 2, 0, 1, 0, 0],
        "speed": "",
        "languages": {},
        "traits": []
    },
    "Fairy": {
        "bonuses": [0, 0, 0, 0, 0, 0],
        "speed": "",
        "languages": {},
        "traits": []
    },
    "Harengon": {
        "bonuses": [0, 0, 0, 0, 0, 0],
        "speed": "",
        "languages": {},
        "traits": []
    },
    "Aasimar": {
        "bonuses": [0, 0, 0, 0, 0, 2],
        "speed": "",
        "languages": {},
        "traits": []
    },
    "Bugbear": {
        "bonuses": [2, 1, 0, 0, 0, 0],
        "speed": "",
        "languages": {},
        "traits": []
    },
    "Firbolg": {
        "bonuses": [1, 0, 0, 0, 2, 0],
        "speed": "",
        "languages": {},
        "traits": []
    },
    "Goblin": {
        "bonuses": [0, 2, 1, 0, 0, 0],
        "speed": "",
        "languages": {},
        "traits": []
    },
    "Hobgoblin": {
        "bonuses": [0, 0, 2, 1, 0, 0],
        "speed": "",
        "languages": {},
        "traits": []
    },
    "Kenku": {
        "bonuses": [0, 2, 0, 0, 1, 0],
        "speed": "",
        "languages": {},
        "traits": []
    },
    "Kobold": {
        "bonuses": [0, 2, 0, 0, 0, 0],
        "speed": "",
        "languages": {},
        "traits": []
    },
    "Lizardfolk": {
        "bonuses": [0, 0, 2, 0, 1, 0],
        "speed": "",
        "languages": {},
        "traits": []
    },
    "Orc": {
        "bonuses": [2, 0, 1, 0, 0, 0],
        "speed": "",
        "languages": {},
        "traits": []
    },
    "Tabaxi": {
        "bonuses": [0, 2, 0, 0, 0, 1],
        "speed": "",
        "languages": {},
        "traits": []
    },
    "Triton": {
        "bonuses": [1, 0, 1, 0, 0, 1],
        "speed": "",
        "languages": {},
        "traits": []
    },
    "Yuan-Ti Pureblood": {
        "bonuses": [0, 0, 0, 1, 0, 2],
        "speed": "",
        "languages": {},
        "traits": []
    }
};

export default races;