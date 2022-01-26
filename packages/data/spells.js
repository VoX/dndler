const spells = {
    "Cantrip": {
        "Acid Splash": {
            "Classes": [
                "Artificer",
                "Sorcerer",
                "Wizard"
            ],
            "School": "Conjuration",
            "Casting Time": "1 Action",
            "Range": "60 Feet",
            "Duration": "Instantaneous",
            "Components": "V, S"
        },
        "Booming Blade": {
            "Classes": [
                "Artificer",
                "Sorcerer",
                "Warlock",
                "Wizard"
            ],
            "School": "Evocation",
            "Casting Time": "1 Action",
            "Range": "Self (5-foot radius)",
            "Duration": "1 round",
            "Components": "S, M"
        },
        "Create Bonfire": {
            "Classes": [
                "Artificer",
                "Druid",
                "Sorcerer",
                "Warlock",
                "Wizard"
            ],
            "School": "Conjuration",
            "Casting Time": "1 Action",
            "Range": "60 Feet",
            "Duration": "Concentration up to 1 minute",
            "Components": "V, S"
        },
        "Dancing Lights": {
            "Classes": [
                "Artificer",
                "Bard",
                "Sorcerer",
                "Wizard"
            ],
            "School": "Evocation",
            "Casting Time": "1 Action",
            "Range": "120 Feet",
            "Duration": "Concentration up to 1 minute",
            "Components": "V, S, M"
        },
        "Fire Bolt": {
            "Classes": [
                "Artificer",
                "Sorcerer",
                "Wizard"
            ],
            "School": "Evocation",
            "Casting Time": "1 Action",
            "Range": "120 Feet",
            "Duration": "Instantaneous",
            "Components": "V, S"
        },
        "Frostbite": {
            "Classes": [
                "Artificer",
                "Druid",
                "Sorcerer",
                "Warlock",
                "Wizard"
            ],
            "School": "Evocation",
            "Casting Time": "1 Action",
            "Range": "60 Feet",
            "Duration": "Instantaneous",
            "Components": "V, S"
        },
        "Green-Flame Blade": {
            "Classes": [
                "Artificer",
                "Sorcerer",
                "Warlock",
                "Wizard"
            ],
            "School": "Evocation",
            "Casting Time": "1 Action",
            "Range": "Self (5-foot radius)",
            "Duration": "Instantaneous",
            "Components": "S, M"
        },
        "Guidance": {
            "Classes": [
                "Artificer",
                "Cleric",
                "Druid"
            ],
            "School": "Divination",
            "Casting Time": "1 Action",
            "Range": "Touch",
            "Duration": "Concentration up to 1 minute",
            "Components": "V, S"
        },
        "Light": {
            "Classes": [
                "Artificer",
                "Bard",
                "Cleric",
                "Sorcerer",
                "Wizard"
            ],
            "School": "Evocation",
            "Casting Time": "1 Action",
            "Range": "Touch",
            "Duration": "1 hour",
            "Components": "V, M"
        },
        "Lightning Lure": {
            "Classes": [
                "Artificer",
                "Sorcerer",
                "Warlock",
                "Wizard"
            ],
            "School": "Evocation",
            "Casting Time": "1 Action",
            "Range": "Self (15-foot radius)",
            "Duration": "Instantaneous",
            "Components": "V"
        },
        "Mage Hand": {
            "Classes": [
                "Artificer",
                "Bard",
                "Sorcerer",
                "Warlock",
                "Wizard"
            ],
            "School": "Conjuration",
            "Casting Time": "1 Action",
            "Range": "30 Feet",
            "Duration": "1 minute",
            "Components": "V, S"
        },
        "Magic Stone": {
            "Classes": [
                "Artificer",
                "Druid",
                "Warlock"
            ],
            "School": "Transmutation",
            "Casting Time": "1 Bonus Action",
            "Range": "Touch",
            "Duration": "1 minute",
            "Components": "V, S"
        },
        "Mending": {
            "Classes": [
                "Artificer",
                "Bard",
                "Cleric",
                "Druid",
                "Sorcerer",
                "Wizard"
            ],
            "School": "Transmutation",
            "Casting Time": "1 Minute",
            "Range": "Touch",
            "Duration": "Instantaneous",
            "Components": "V, S, M"
        },
        "Message": {
            "Classes": [
                "Artificer",
                "Bard",
                "Sorcerer",
                "Wizard"
            ],
            "School": "Transmutation",
            "Casting Time": "1 Action",
            "Range": "120 feet",
            "Duration": "1 round",
            "Components": "V, S, M"
        },
        "Poison Spray": {
            "Classes": [
                "Artificer",
                "Druid",
                "Sorcerer",
                "Warlock",
                "Wizard"
            ],
            "School": "Conjuration",
            "Casting Time": "1 Action",
            "Range": "10 feet",
            "Duration": "Instantaneous",
            "Components": "V, S"
        },
        "Prestidigitation": {
            "Classes": [
                "Artificer",
                "Bard",
                "Sorcerer",
                "Warlock",
                "Wizard"
            ],
            "School": "Transmutation",
            "Casting Time": "1 Action",
            "Range": "10 feet",
            "Duration": "Up to 1 hour",
            "Components": "V, S"
        },
        "Ray of Frost": {
            "Classes": [
                "Artificer",
                "Sorcerer",
                "Wizard"
            ],
            "School": "Evocation",
            "Casting Time": "1 Action",
            "Range": "60 feet",
            "Duration": "Instantaneous",
            "Components": "V, S"
        },
        "Resistance": {
            "Classes": [
                "Artificer",
                "Cleric",
                "Druid"
            ],
            "School": "Abjuration",
            "Casting Time": "1 Action",
            "Range": "Touch",
            "Duration": "Concentration up to 1 minute",
            "Components": "V, S, M"
        },
        "Shocking Grasp": {
            "Classes": [
                "Artificer",
                "Sorcerer",
                "Wizard"
            ],
            "School": "Evocation",
            "Casting Time": "1 Action",
            "Range": "Touch",
            "Duration": "Instantaneous",
            "Components": "V, S"
        },
        "Spare the Dying": {
            "Classes": [
                "Artificer",
                "Cleric"
            ],
            "School": "Necromancy",
            "Casting Time": "1 Action",
            "Range": "Touch",
            "Duration": "Instantaneous",
            "Components": "V, S"
        },
        "Sword Burst": {
            "Classes": [
                "Artificer",
                "Sorcerer",
                "Warlock",
                "Wizard"
            ],
            "School": "Conjuration",
            "Casting Time": "1 Action",
            "Range": "Self (5-foot radius)",
            "Duration": "Instantaneous",
            "Components": "V"
        },
        "Thorn Whip": {
            "Classes": [
                "Artificer",
                "Druid"
            ],
            "School": "Transmutation",
            "Casting Time": "1 Action",
            "Range": "30 feet",
            "Duration": "Instantaneous",
            "Components": "V, S, M"
        },
        "Thunderclap": {
            "Classes": [
                "Artificer",
                "Bard",
                "Druid",
                "Sorcerer",
                "Warlock",
                "Wizard"
            ],
            "School": "Evocation",
            "Casting Time": "1 Action",
            "Range": "Self (5-foot radius)",
            "Duration": "Instantaneous",
            "Components": "S"
        },
        "Blade Ward": {
            "Classes": [
                "Bard",
                "Sorcerer",
                "Warlock",
                "Wizard"
            ],
            "School": "Abjuration",
            "Casting Time": "1 Action",
            "Range": "Self",
            "Duration": "1 round",
            "Components": "V, S"
        },
        "Friends": {
            "Classes": [
                "Bard",
                "Sorcerer",
                "Warlock",
                "Wizard"
            ],
            "School": "Enchantment",
            "Casting Time": "1 Action",
            "Range": "Self",
            "Duration": "Concentration up to 1 minute",
            "Components": "S, M"
        },
        "Minor Illusion": {
            "Classes": [
                "Bard",
                "Sorcerer",
                "Warlock",
                "Wizard"
            ],
            "School": "Illusion",
            "Casting Time": "1 Action",
            "Range": "30 feet",
            "Duration": "1 minute",
            "Components": "S, M"
        },
        "True Strike": {
            "Classes": [
                "Bard",
                "Sorcerer",
                "Warlock",
                "Wizard"
            ],
            "School": "Divination",
            "Casting Time": "1 Action",
            "Range": "30 feet",
            "Duration": "Concentration up to 1 round",
            "Components": "S"
        },
        "Vicious Mockery": {
            "Classes": [
                "Bard"
            ],
            "School": "Enchantment",
            "Casting Time": "1 Action",
            "Range": "60 feet",
            "Duration": "Instantaneous",
            "Components": "V"
        },
        "Hand of Radiance (UA)": {
            "Classes": [
                "Cleric"
            ],
            "School": "Evocation",
            "Casting Time": "1 Action",
            "Range": "5 feet",
            "Duration": "Instantaneous",
            "Components": "V, S"
        },
        "Sacred Flame": {
            "Classes": [
                "Cleric"
            ],
            "School": "Evocation",
            "Casting Time": "1 Action",
            "Range": "60 feet",
            "Duration": "Instantaneous",
            "Components": "V, S"
        },
        "Thaumaturgy": {
            "Classes": [
                "Cleric"
            ],
            "School": "Transmutation",
            "Casting Time": "1 Action",
            "Range": "30 feet",
            "Duration": "Up to 1 minute",
            "Components": "V"
        },
        "Toll the Dead": {
            "Classes": [
                "Cleric",
                "Warlock",
                "Wizard"
            ],
            "School": "Necromancy",
            "Casting Time": "1 Action",
            "Range": "60 feet",
            "Duration": "Instantaneous",
            "Components": "V, S"
        },
        "Virtue (UA)": {
            "Classes": [
                "Cleric"
            ],
            "School": "Abjuration",
            "Casting Time": "1 Action",
            "Range": "Touch",
            "Duration": "1 round",
            "Components": "V, S"
        },
        "Word of Radiance": {
            "Classes": [
                "Cleric"
            ],
            "School": "Evocation",
            "Casting Time": "1 Action",
            "Range": "5 feet",
            "Duration": "Instantaneous",
            "Components": "V, M"
        },
        "Control Flames": {
            "Classes": [
                "Druid",
                "Sorcerer",
                "Wizard"
            ],
            "School": "Transmutation",
            "Casting Time": "1 Action",
            "Range": "60 Feet",
            "Duration": "Instantaneous or 1 hour",
            "Components": "S"
        },
        "Druidcraft": {
            "Classes": [
                "Druid"
            ],
            "School": "Transmutation",
            "Casting Time": "1 Action",
            "Range": "30 Feet",
            "Duration": "Instantaneous",
            "Components": "V, S"
        },
        "Gust": {
            "Classes": [
                "Druid",
                "Sorcerer",
                "Wizard"
            ],
            "School": "Transmutation",
            "Casting Time": "1 Action",
            "Range": "30 Feet",
            "Duration": "Instantaneous",
            "Components": "V, S"
        },
        "Infestation": {
            "Classes": [
                "Druid",
                "Sorcerer",
                "Warlock",
                "Wizard"
            ],
            "School": "Conjuration",
            "Casting Time": "1 Action",
            "Range": "30 Feet",
            "Duration": "Instantaneous",
            "Components": "V, S, M"
        },
        "Mold Earth": {
            "Classes": [
                "Druid",
                "Sorcerer",
                "Wizard"
            ],
            "School": "Transmutation",
            "Casting Time": "1 Action",
            "Range": "30 feet",
            "Duration": "Instantaneous or 1 hour",
            "Components": "S"
        },
        "Primal Savagery": {
            "Classes": [
                "Druid"
            ],
            "School": "Transmutation",
            "Casting Time": "1 Action",
            "Range": "Self",
            "Duration": "Self",
            "Components": "S"
        },
        "Produce Flame": {
            "Classes": [
                "Druid"
            ],
            "School": "Conjuration",
            "Casting Time": "1 Action",
            "Range": "Self",
            "Duration": "10 minutes",
            "Components": "V, S"
        },
        "Shape Water": {
            "Classes": [
                "Druid",
                "Sorcerer",
                "Wizard"
            ],
            "School": "Transmutation",
            "Casting Time": "1 Action",
            "Range": "30 feet",
            "Duration": "Instantaneous or 1 hour",
            "Components": "S"
        },
        "Shillelagh": {
            "Classes": [
                "Druid"
            ],
            "School": "Transmutation",
            "Casting Time": "1 Bonus Action",
            "Range": "Touch",
            "Duration": "1 minute",
            "Components": "V, S, M"
        },
        "Chill Touch": {
            "Classes": [
                "Sorcerer",
                "Warlock",
                "Wizard"
            ],
            "School": "Necromancy",
            "Casting Time": "1 Action",
            "Range": "120 Feet",
            "Duration": "1 round",
            "Components": "V, S"
        },
        "Mind Sliver": {
            "Classes": [
                "Sorcerer",
                "Warlock",
                "Wizard"
            ],
            "School": "Enchantment",
            "Casting Time": "1 Action",
            "Range": "60 feet",
            "Duration": "1 round",
            "Components": "V"
        },
        "On/Off": {
            "Classes": [
                "Sorcerer",
                "Warlock",
                "Wizard"
            ],
            "School": "Transmutation - T",
            "Casting Time": "1 Action",
            "Range": "60 feet",
            "Duration": "Instantaneous",
            "Components": "V, S"
        },
        "Eldritch Blast": {
            "Classes": [
                "Warlock"
            ],
            "School": "Evocation",
            "Casting Time": "1 Action",
            "Range": "120 Feet",
            "Duration": "Instantaneous",
            "Components": "V, S"
        },
        "Encode Thoughts": {
            "Classes": [
                "Wizard"
            ],
            "School": "Enchantment",
            "Casting Time": "1 Action",
            "Range": "Self",
            "Duration": "8 hours",
            "Components": "S"
        },
        "Sapping Sting": {
            "Classes": [
                "Wizard"
            ],
            "School": "Necromancy - D",
            "Casting Time": "1 Action",
            "Range": "30 feet",
            "Duration": "Instantaneous",
            "Components": "V, S"
        }
    },
    "1st Level": {
        "Absorb Elements": {
            "Classes": [
                "Artificer",
                "Druid",
                "Ranger",
                "Sorcerer",
                "Wizard"
            ],
            "School": "Abjuration",
            "Casting Time": "1 Reaction",
            "Range": "Self",
            "Duration": "1 round",
            "Components": "S"
        },
        "Alarm": {
            "Classes": [
                "Artificer",
                "Ranger",
                "Wizard"
            ],
            "School": "Abjuration",
            "Casting Time": "1 Action (R)",
            "Range": "30 feet",
            "Duration": "8 Hours",
            "Components": "V, S, M"
        },
        "Arcane Weapon (UA)": {
            "Classes": [
                "Artificer"
            ],
            "School": "Transmutation",
            "Casting Time": "1 Bonus Action",
            "Range": "Self",
            "Duration": "Concentration, up to 1 hour",
            "Components": "V, S"
        },
        "Catapult": {
            "Classes": [
                "Artificer",
                "Sorcerer",
                "Wizard"
            ],
            "School": "Transmutation",
            "Casting Time": "1 Action",
            "Range": "60 feet",
            "Duration": "Instantaneous",
            "Components": "S"
        },
        "Cure Wounds": {
            "Classes": [
                "Artificer",
                "Bard",
                "Cleric",
                "Druid",
                "Paladin",
                "Ranger"
            ],
            "School": "Evocation",
            "Casting Time": "1 Action",
            "Range": "Touch",
            "Duration": "Instantaneous",
            "Components": "V, S"
        },
        "Detect Magic": {
            "Classes": [
                "Artificer",
                "Bard",
                "Cleric",
                "Druid",
                "Paladin",
                "Ranger",
                "Sorcerer",
                "Wizard"
            ],
            "School": "Divination",
            "Casting Time": "1 Action (R)",
            "Range": "Self",
            "Duration": "Concentration, up to 10 minutes",
            "Components": "V, S"
        },
        "Disguise Self": {
            "Classes": [
                "Artificer",
                "Bard",
                "Sorcerer",
                "Wizard"
            ],
            "School": "Illusion",
            "Casting Time": "1 Action",
            "Range": "Self",
            "Duration": "1 hour",
            "Components": "V, S"
        },
        "Expeditious Retreat": {
            "Classes": [
                "Artificer",
                "Sorcerer",
                "Warlock",
                "Wizard"
            ],
            "School": "Transmutation",
            "Casting Time": "1 Bonus Action",
            "Range": "Self",
            "Duration": "Concentration, up to 10 minutes",
            "Components": "V, S"
        },
        "Faerie Fire": {
            "Classes": [
                "Artificer",
                "Bard",
                "Druid"
            ],
            "School": "Evocation",
            "Casting Time": "1 Action",
            "Range": "60 feet",
            "Duration": "Concentration, up to 1 minute",
            "Components": "V"
        },
        "False Life": {
            "Classes": [
                "Artificer",
                "Sorcerer",
                "Wizard"
            ],
            "School": "Necromancy",
            "Casting Time": "1 Action",
            "Range": "Self",
            "Duration": "1 hour",
            "Components": "V, S, M"
        },
        "Feather Fall": {
            "Classes": [
                "Artificer",
                "Bard",
                "Sorcerer",
                "Wizard"
            ],
            "School": "Transmutation",
            "Casting Time": "1 Reaction",
            "Range": "60 feet",
            "Duration": "1 minute",
            "Components": "V, M"
        },
        "Grease": {
            "Classes": [
                "Artificer",
                "Sorcerer",
                "Wizard"
            ],
            "School": "Conjuration",
            "Casting Time": "1 Action",
            "Range": "60 feet",
            "Duration": "1 minute",
            "Components": "V, S, M"
        },
        "Identify": {
            "Classes": [
                "Artificer",
                "Bard",
                "Wizard"
            ],
            "School": "Divination",
            "Casting Time": "1 Minute (R)",
            "Range": "Touch",
            "Duration": "Instantaneous",
            "Components": "V, S, M"
        },
        "Jump": {
            "Classes": [
                "Artificer",
                "Druid",
                "Ranger",
                "Sorcerer",
                "Wizard"
            ],
            "School": "Transmutation",
            "Casting Time": "1 Action",
            "Range": "Touch",
            "Duration": "1 minute",
            "Components": "V, S, M"
        },
        "Longstrider": {
            "Classes": [
                "Artificer",
                "Bard",
                "Druid",
                "Ranger",
                "Wizard"
            ],
            "School": "Transmutation",
            "Casting Time": "1 Action",
            "Range": "Touch",
            "Duration": "1 hour",
            "Components": "V, S, M"
        },
        "Purify Food and Drink": {
            "Classes": [
                "Artificer",
                "Cleric",
                "Druid",
                "Paladin"
            ],
            "School": "Transmutation",
            "Casting Time": "1 Action (R)",
            "Range": "10 feet",
            "Duration": "Instantaneous",
            "Components": "V, S"
        },
        "Sanctuary": {
            "Classes": [
                "Artificer",
                "Cleric"
            ],
            "School": "Abjuration",
            "Casting Time": "1 Bonus Action",
            "Range": "30 feet",
            "Duration": "1 minute",
            "Components": "V, S, M"
        },
        "Snare": {
            "Classes": [
                "Artificer",
                "Druid",
                "Ranger",
                "Wizard"
            ],
            "School": "Abjuration",
            "Casting Time": "1 Minute",
            "Range": "Touch",
            "Duration": "Until dispelled or triggered",
            "Components": "V, S, M"
        },
        "Tasha's Caustic Brew": {
            "Classes": [
                "Artificer",
                "Sorcerer",
                "Wizard"
            ],
            "School": "Evocation",
            "Casting Time": "1 Action",
            "Range": "Self (30-foot line)",
            "Duration": "Concentration, up to 1 minute",
            "Components": "V, S, M"
        },
        "Animal Friendship": {
            "Classes": [
                "Bard",
                "Druid",
                "Ranger"
            ],
            "School": "Enchantment",
            "Casting Time": "1 Action",
            "Range": "30 feet",
            "Duration": "24 hours",
            "Components": "V, S, M"
        },
        "Bane": {
            "Classes": [
                "Bard",
                "Cleric"
            ],
            "School": "Enchantment",
            "Casting Time": "1 Action",
            "Range": "30 feet",
            "Duration": "Concentration, up to 1 minute",
            "Components": "V, S, M"
        },
        "Charm Person": {
            "Classes": [
                "Bard",
                "Druid",
                "Sorcerer",
                "Warlock",
                "Wizard"
            ],
            "School": "Enchantment",
            "Casting Time": "1 Action",
            "Range": "30 feet",
            "Duration": "1 Hour",
            "Components": "V, S"
        },
        "Color Spray": {
            "Classes": [
                "Bard",
                "Sorcerer",
                "Wizard"
            ],
            "School": "Illusion",
            "Casting Time": "1 Action",
            "Range": "Self (15-foot cone)",
            "Duration": "1 round",
            "Components": "V, S, M"
        },
        "Command": {
            "Classes": [
                "Bard",
                "Cleric",
                "Paladin"
            ],
            "School": "Enchantment",
            "Casting Time": "1 Action",
            "Range": "60 feet",
            "Duration": "1 round",
            "Components": "V"
        },
        "Comprehend Languages": {
            "Classes": [
                "Bard",
                "Sorcerer",
                "Warlock",
                "Wizard"
            ],
            "School": "Divination",
            "Casting Time": "1 Action (R)",
            "Range": "Self",
            "Duration": "1 hour",
            "Components": "V, S, M"
        },
        "Dissonant Whispers": {
            "Classes": [
                "Bard"
            ],
            "School": "Enchantment",
            "Casting Time": "1 Action",
            "Range": "60 feet",
            "Duration": "Instantaneous",
            "Components": "V"
        },
        "Distort Value": {
            "Classes": [
                "Bard",
                "Sorcerer",
                "Warlock",
                "Wizard"
            ],
            "School": "Illusion",
            "Casting Time": "1 Minute",
            "Range": "Touch",
            "Duration": "8 hours",
            "Components": "V"
        },
        "Earth Tremor": {
            "Classes": [
                "Bard",
                "Druid",
                "Sorcerer",
                "Wizard"
            ],
            "School": "Evocation",
            "Casting Time": "1 Action",
            "Range": "Self (10-foot radius)",
            "Duration": "Instantaneous",
            "Components": "V, S"
        },
        "Guiding Hand (UA)": {
            "Classes": [
                "Bard",
                "Cleric",
                "Druid",
                "Wizard"
            ],
            "School": "Divination",
            "Casting Time": "1 Minute (R)",
            "Range": "5 feet",
            "Duration": "Concentration, up to 8 hours",
            "Components": "V, S"
        },
        "Healing Word": {
            "Classes": [
                "Bard",
                "Cleric",
                "Druid"
            ],
            "School": "Evocation",
            "Casting Time": "1 Bonus Action",
            "Range": "60 feet",
            "Duration": "Instantaneous",
            "Components": "V"
        },
        "Heroism": {
            "Classes": [
                "Bard",
                "Paladin"
            ],
            "School": "Enchantment",
            "Casting Time": "1 Action",
            "Range": "Touch",
            "Duration": "Concentration, up to 1 minute",
            "Components": "V, S"
        },
        "Illusory Script": {
            "Classes": [
                "Bard",
                "Warlock",
                "Wizard"
            ],
            "School": "Illusion",
            "Casting Time": "1 Minute",
            "Range": "Touch",
            "Duration": "10 days",
            "Components": "S, M"
        },
        "Puppet (UA)": {
            "Classes": [
                "Bard",
                "Warlock",
                "Wizard"
            ],
            "School": "Enchantment",
            "Casting Time": "1 Action",
            "Range": "120 feet",
            "Duration": "Instantaneous",
            "Components": "V"
        },
        "Sense Emotion (UA)": {
            "Classes": [
                "Bard",
                "Warlock",
                "Wizard"
            ],
            "School": "Divination",
            "Casting Time": "1 Action",
            "Range": "Self",
            "Duration": "Concentration, up to 1 minute",
            "Components": "V, S"
        },
        "Silent Image": {
            "Classes": [
                "Bard",
                "Sorcerer",
                "Wizard"
            ],
            "School": "Illusion",
            "Casting Time": "1 Action",
            "Range": "60 feet",
            "Duration": "Concentration, up to 10 minutes",
            "Components": "V, S, M"
        },
        "Sleep": {
            "Classes": [
                "Bard",
                "Sorcerer",
                "Wizard"
            ],
            "School": "Enchantment",
            "Casting Time": "1 Action",
            "Range": "90 feet",
            "Duration": "1 minute",
            "Components": "V, S, M"
        },
        "Speak with Animals": {
            "Classes": [
                "Bard",
                "Druid",
                "Ranger"
            ],
            "School": "Divination",
            "Casting Time": "1 Action (R)",
            "Range": "Self",
            "Duration": "10 minutes",
            "Components": "V, S"
        },
        "Sudden Awakening (UA)": {
            "Classes": [
                "Bard",
                "Ranger",
                "Sorcerer",
                "Wizard"
            ],
            "School": "Enchantment",
            "Casting Time": "1 Bonus Action",
            "Range": "10 feet",
            "Duration": "Instantaneous",
            "Components": "V"
        },
        "Tasha's Hideous Laughter": {
            "Classes": [
                "Bard",
                "Wizard"
            ],
            "School": "Enchantment",
            "Casting Time": "1 Action",
            "Range": "30 feet",
            "Duration": "Concentration, up to 1 minute",
            "Components": "V, S, M"
        },
        "Thunderwave": {
            "Classes": [
                "Bard",
                "Druid",
                "Sorcerer",
                "Wizard"
            ],
            "School": "Evocation",
            "Casting Time": "1 Action",
            "Range": "Self (15-foot cube)",
            "Duration": "Instantaneous",
            "Components": "V, S"
        },
        "Unearthly Chorus (UA)": {
            "Classes": [
                "Bard"
            ],
            "School": "Illusion",
            "Casting Time": "1 Action",
            "Range": "Self (30-foot radius)",
            "Duration": "Concentration, up to 10 minutes",
            "Components": "V"
        },
        "Unseen Servant": {
            "Classes": [
                "Bard",
                "Warlock",
                "Wizard"
            ],
            "School": "Conjuration",
            "Casting Time": "1 Action (R)",
            "Range": "60 feet",
            "Duration": "1 hour",
            "Components": "V, S, M"
        },
        "Bless": {
            "Classes": [
                "Cleric",
                "Paladin"
            ],
            "School": "Enchantment",
            "Casting Time": "1 Action",
            "Range": "30 feet",
            "Duration": "Concentration, up to 1 minute",
            "Components": "V, S, M"
        },
        "Ceremony": {
            "Classes": [
                "Cleric",
                "Paladin"
            ],
            "School": "Evocation",
            "Casting Time": "1 Action (R)",
            "Range": "Touch",
            "Duration": "Instantaneous",
            "Components": "V, S, M"
        },
        "Create or Destroy Water": {
            "Classes": [
                "Cleric",
                "Druid"
            ],
            "School": "Transmutation",
            "Casting Time": "1 Action",
            "Range": "30 feet",
            "Duration": "Instantaneous",
            "Components": "V, S, M"
        },
        "Detect Evil and Good": {
            "Classes": [
                "Cleric",
                "Paladin"
            ],
            "School": "Divination",
            "Casting Time": "1 Action",
            "Range": "Self",
            "Duration": "Concentration, up to 10 minutes",
            "Components": "V, S"
        },
        "Detect Poison and Disease": {
            "Classes": [
                "Cleric",
                "Druid",
                "Paladin",
                "Ranger"
            ],
            "School": "Divination",
            "Casting Time": "1 Action",
            "Range": "Self",
            "Duration": "Concentration, up to 10 minutes",
            "Components": "V, S, M"
        },
        "Guiding Bolt": {
            "Classes": [
                "Cleric"
            ],
            "School": "Evocation",
            "Casting Time": "1 Action",
            "Range": "120 feet",
            "Duration": "1 round",
            "Components": "V, S"
        },
        "Inflict Wounds": {
            "Classes": [
                "Cleric"
            ],
            "School": "Necromancy",
            "Casting Time": "1 Action",
            "Range": "Touch",
            "Duration": "Instantaneous",
            "Components": "V, S"
        },
        "Protection from Evil and Good": {
            "Classes": [
                "Cleric",
                "Druid",
                "Paladin",
                "Warlock",
                "Wizard"
            ],
            "School": "Abjuration",
            "Casting Time": "1 Action",
            "Range": "Touch",
            "Duration": "Concentration, up to 10 minutes",
            "Components": "V, S, M"
        },
        "Shield of Faith": {
            "Classes": [
                "Cleric",
                "Paladin"
            ],
            "School": "Abjuration",
            "Casting Time": "1 Bonus Action",
            "Range": "60 feet",
            "Duration": "Concentration, up to 1 minute",
            "Components": "V, S, M"
        },
        "Beast Bond": {
            "Classes": [
                "Druid",
                "Ranger"
            ],
            "School": "Divination",
            "Casting Time": "1 Action",
            "Range": "Touch",
            "Duration": "Concentration, up to 1 minute",
            "Components": "V, S, M"
        },
        "Entangle": {
            "Classes": [
                "Druid",
                "Ranger"
            ],
            "School": "Conjuration",
            "Casting Time": "1 Action",
            "Range": "90 feet",
            "Duration": "Concentration, up to 1 minute",
            "Components": "V, S"
        },
        "Fog Cloud": {
            "Classes": [
                "Druid",
                "Ranger",
                "Sorcerer",
                "Wizard"
            ],
            "School": "Conjuration",
            "Casting Time": "1 Action",
            "Range": "120 feet",
            "Duration": "Concentration, up to 1 hour",
            "Components": "V, S"
        },
        "Goodberry": {
            "Classes": [
                "Druid",
                "Ranger"
            ],
            "School": "Transmutation",
            "Casting Time": "1 Action",
            "Range": "Touch",
            "Duration": "Instantaneous",
            "Components": "V, S, M"
        },
        "Ice Knife": {
            "Classes": [
                "Druid",
                "Sorcerer",
                "Wizard"
            ],
            "School": "Conjuration",
            "Casting Time": "1 Action",
            "Range": "60 feet",
            "Duration": "Instantaneous",
            "Components": "S, M"
        },
        "Wild Cunning (UA)": {
            "Classes": [
                "Druid",
                "Ranger"
            ],
            "School": "Transmutation",
            "Casting Time": "1 Action (R)",
            "Range": "120 feet",
            "Duration": "Instantaneous",
            "Components": "V, S"
        },
        "Compelled Duel": {
            "Classes": [
                "Paladin"
            ],
            "School": "Enchantment",
            "Casting Time": "1 Bonus Action",
            "Range": "30 feet",
            "Duration": "Concentration, up to 1 minute",
            "Components": "V"
        },
        "Divine Favor": {
            "Classes": [
                "Paladin"
            ],
            "School": "Evocation",
            "Casting Time": "1 Bonus Action",
            "Range": "Self",
            "Duration": "Concentration, up to 1 minute",
            "Components": "V, S"
        },
        "Searing Smite": {
            "Classes": [
                "Paladin",
                "Ranger"
            ],
            "School": "Evocation",
            "Casting Time": "1 Bonus Action",
            "Range": "Self",
            "Duration": "Concentration, up to 1 minute",
            "Components": "V"
        },
        "Thunderous Smite": {
            "Classes": [
                "Paladin"
            ],
            "School": "Evocation",
            "Casting Time": "1 Bonus Action",
            "Range": "Self",
            "Duration": "Concentration, up to 1 minute",
            "Components": "V"
        },
        "Wrathful Smite": {
            "Classes": [
                "Paladin"
            ],
            "School": "Evocation",
            "Casting Time": "1 Bonus Action",
            "Range": "Self",
            "Duration": "Concentration, up to 1 minute",
            "Components": "V"
        },
        "Ensnaring Strike": {
            "Classes": [
                "Ranger"
            ],
            "School": "Conjuration",
            "Casting Time": "1 Bonus Action",
            "Range": "Self",
            "Duration": "Concentration, up to 1 minute",
            "Components": "V"
        },
        "Hail of Thorns": {
            "Classes": [
                "Ranger"
            ],
            "School": "Conjuration",
            "Casting Time": "1 Bonus Action",
            "Range": "Self",
            "Duration": "Concentration, up to 1 minute",
            "Components": "V"
        },
        "Hunter's Mark": {
            "Classes": [
                "Ranger"
            ],
            "School": "Divination",
            "Casting Time": "1 Bonus Action",
            "Range": "90 feet",
            "Duration": "Concentration, up to 1 hour",
            "Components": "V"
        },
        "Zephyr Strike": {
            "Classes": [
                "Ranger"
            ],
            "School": "Transmutation",
            "Casting Time": "1 Bonus Action",
            "Range": "Self",
            "Duration": "Concentration, up to 1 minute",
            "Components": "V"
        },
        "Acid Stream (UA)": {
            "Classes": [
                "Sorcerer",
                "Wizard"
            ],
            "School": "Evocation",
            "Casting Time": "1 Action",
            "Range": "Self (30-foot line)",
            "Duration": "Concentration, up to 1 minute",
            "Components": "V, S, M"
        },
        "Burning Hands": {
            "Classes": [
                "Sorcerer",
                "Wizard"
            ],
            "School": "Evocation",
            "Casting Time": "1 Action",
            "Range": "Self (15-foot cone)",
            "Duration": "Instantaneous",
            "Components": "V, S"
        },
        "Chaos Bolt": {
            "Classes": [
                "Sorcerer"
            ],
            "School": "Evocation",
            "Casting Time": "1 Action",
            "Range": "120 feet",
            "Duration": "Instantaneous",
            "Components": "V, S"
        },
        "Chromatic Orb": {
            "Classes": [
                "Sorcerer",
                "Wizard"
            ],
            "School": "Evocation",
            "Casting Time": "1 Action",
            "Range": "90 feet",
            "Duration": "Instantaneous",
            "Components": "V, S, M"
        },
        "Id Insinuation (UA)": {
            "Classes": [
                "Sorcerer",
                "Warlock",
                "Wizard"
            ],
            "School": "Enchantment",
            "Casting Time": "1 Action",
            "Range": "60 feet",
            "Duration": "Concentration, up to 1 minute",
            "Components": "V, S"
        },
        "Infallible Relay (UA)": {
            "Classes": [
                "Sorcerer",
                "Warlock",
                "Wizard"
            ],
            "School": "Divination - T",
            "Casting Time": "1 Minute",
            "Range": "Self",
            "Duration": "Concentration, up to 10 minutes",
            "Components": "V, S, M"
        },
        "Mage Armor": {
            "Classes": [
                "Sorcerer",
                "Wizard"
            ],
            "School": "Abjuration",
            "Casting Time": "1 Action",
            "Range": "Touch",
            "Duration": "8 hours",
            "Components": "V, S, M"
        },
        "Magic Missile": {
            "Classes": [
                "Sorcerer",
                "Wizard"
            ],
            "School": "Evocation",
            "Casting Time": "1 Action",
            "Range": "120 feet",
            "Duration": "Instantaneous",
            "Components": "V, S"
        },
        "Ray of Sickness": {
            "Classes": [
                "Sorcerer",
                "Wizard"
            ],
            "School": "Necromancy",
            "Casting Time": "1 Action",
            "Range": "60 feet",
            "Duration": "Instantaneous",
            "Components": "V, S"
        },
        "Remote Access (UA)": {
            "Classes": [
                "Sorcerer",
                "Warlock",
                "Wizard"
            ],
            "School": "Transmutation - T",
            "Casting Time": "1 Action",
            "Range": "120 feet",
            "Duration": "10 minutes",
            "Components": "V, S"
        },
        "Shield": {
            "Classes": [
                "Sorcerer",
                "Wizard"
            ],
            "School": "Abjuration",
            "Casting Time": "1 Reaction",
            "Range": "Self",
            "Duration": "1 round",
            "Components": "V, S"
        },
        "Witch Bolt": {
            "Classes": [
                "Sorcerer",
                "Warlock",
                "Wizard"
            ],
            "School": "Evocation",
            "Casting Time": "1 Action",
            "Range": "30 feet",
            "Duration": "Concentration, up to 1 minute",
            "Components": "V, S, M"
        },
        "Armor of Agathys": {
            "Classes": [
                "Warlock"
            ],
            "School": "Abjuration",
            "Casting Time": "1 Action",
            "Range": "Self",
            "Duration": "1 Hour",
            "Components": "V, S, M"
        },
        "Arms of Hadar": {
            "Classes": [
                "Warlock"
            ],
            "School": "Conjuration",
            "Casting Time": "1 Action",
            "Range": "Self (10-foot radius)",
            "Duration": "Instantaneous",
            "Components": "V, S"
        },
        "Cause Fear": {
            "Classes": [
                "Warlock",
                "Wizard"
            ],
            "School": "Necromancy",
            "Casting Time": "1 Action",
            "Range": "60 feet",
            "Duration": "Concentration, up to 1 minute",
            "Components": "V, S"
        },
        "Healing Elixir (UA)": {
            "Classes": [
                "Warlock",
                "Wizard"
            ],
            "School": "Conjuration",
            "Casting Time": "1 Minute",
            "Range": "Self",
            "Duration": "24 hours",
            "Components": "V, S, M"
        },
        "Hellish Rebuke": {
            "Classes": [
                "Warlock"
            ],
            "School": "Evocation",
            "Casting Time": "1 Reaction",
            "Range": "60 feet",
            "Duration": "Instantaneous",
            "Components": "V, S"
        },
        "Hex": {
            "Classes": [
                "Warlock"
            ],
            "School": "Enchantment",
            "Casting Time": "1 Bonus Action",
            "Range": "90 feet",
            "Duration": "Concentration, up to 1 hour",
            "Components": "V, S, M"
        },
        "Find Familiar": {
            "Classes": [
                "Wizard"
            ],
            "School": "Conjuration",
            "Casting Time": "1 Hour (R)",
            "Range": "10 feet",
            "Duration": "Instantaneous",
            "Components": "V, S, M"
        },
        "Frost Fingers": {
            "Classes": [
                "Wizard"
            ],
            "School": "Evocation",
            "Casting Time": "1 Action",
            "Range": "Self (15-foot cone)",
            "Duration": "Instantaneous",
            "Components": "V, S"
        },
        "Gift of Alacrity": {
            "Classes": [
                "Wizard"
            ],
            "School": "Divination - DC",
            "Casting Time": "1 Minute",
            "Range": "Touch",
            "Duration": "8 hours",
            "Components": "V, S"
        },
        "Jim's Magic Missile": {
            "Classes": [
                "Wizard"
            ],
            "School": "Evocation",
            "Casting Time": "1 Action",
            "Range": "120 feet",
            "Duration": "Instantaneous",
            "Components": "V, S, M"
        },
        "Magnify Gravity": {
            "Classes": [
                "Wizard"
            ],
            "School": "Transmutation - DG",
            "Casting Time": "1 Action",
            "Range": "60 feet",
            "Duration": "1 round",
            "Components": "V, S"
        },
        "Tenser's Floating Disk": {
            "Classes": [
                "Wizard"
            ],
            "School": "Conjuration",
            "Casting Time": "1 Action (R)",
            "Range": "30 feet",
            "Duration": "1 hour",
            "Components": "V, S, M"
        }
    },
    "2nd Level": {
        "Aid": {
            "Classes": [
                "Artificer",
                "Bard",
                "Cleric",
                "Paladin",
                "Ranger"
            ],
            "School": "Abjuration",
            "Casting Time": "1 Action",
            "Range": "30 Feet",
            "Duration": "8 hours",
            "Components": "V, S, M"
        },
        "Alter Self": {
            "Classes": [
                "Artificer",
                "Sorcerer",
                "Wizard"
            ],
            "School": "Transmutation",
            "Casting Time": "1 Action",
            "Range": "Self",
            "Duration": "Concentration, up to 1 hour",
            "Components": "V, S"
        },
        "Arcane Lock": {
            "Classes": [
                "Artificer",
                "Wizard"
            ],
            "School": "Abjuration",
            "Casting Time": "1 Action",
            "Range": "Touch",
            "Duration": "Until dispelled",
            "Components": "V, S, M"
        },
        "Blur": {
            "Classes": [
                "Artificer",
                "Sorcerer",
                "Wizard"
            ],
            "School": "Illusion",
            "Casting Time": "1 Action",
            "Range": "Self",
            "Duration": "Concentration, up to 1 minute",
            "Components": "V"
        },
        "Continual Flame": {
            "Classes": [
                "Artificer",
                "Cleric",
                "Druid",
                "Wizard"
            ],
            "School": "Evocation",
            "Casting Time": "1 Action",
            "Range": "Touch",
            "Duration": "Until dispelled",
            "Components": "V, S, M"
        },
        "Darkvision": {
            "Classes": [
                "Artificer",
                "Druid",
                "Ranger",
                "Sorcerer",
                "Wizard"
            ],
            "School": "Transmutation",
            "Casting Time": "1 Action",
            "Range": "Touch",
            "Duration": "8 hours",
            "Components": "V, S, M"
        },
        "Enhance Ability": {
            "Classes": [
                "Artificer",
                "Bard",
                "Cleric",
                "Druid",
                "Ranger",
                "Sorcerer",
                "Wizard"
            ],
            "School": "Transmutation",
            "Casting Time": "1 Action",
            "Range": "Touch",
            "Duration": "Concentration, up to 1 hour",
            "Components": "V, S, M"
        },
        "Enlarge/Reduce": {
            "Classes": [
                "Artificer",
                "Bard",
                "Druid",
                "Sorcerer",
                "Wizard"
            ],
            "School": "Transmutation",
            "Casting Time": "1 Action",
            "Range": "30 feet",
            "Duration": "Concentration, up to 1 minute",
            "Components": "V, S, M"
        },
        "Heat Metal": {
            "Classes": [
                "Artificer",
                "Bard",
                "Druid"
            ],
            "School": "Transmutation",
            "Casting Time": "1 Action",
            "Range": "60 feet",
            "Duration": "Concentration, up to 1 minute",
            "Components": "V, S, M"
        },
        "Invisibility": {
            "Classes": [
                "Artificer",
                "Bard",
                "Sorcerer",
                "Warlock",
                "Wizard"
            ],
            "School": "Transmutation",
            "Casting Time": "1 Action",
            "Range": "Touch",
            "Duration": "Concentration, up to 1 hour",
            "Components": "V, S, M"
        },
        "Lesser Restoration": {
            "Classes": [
                "Artificer",
                "Bard",
                "Cleric",
                "Druid",
                "Paladin",
                "Ranger"
            ],
            "School": "Abjuration",
            "Casting Time": "1 Action",
            "Range": "Touch",
            "Duration": "Instantaneous",
            "Components": "V, S"
        },
        "Levitate": {
            "Classes": [
                "Artificer",
                "Sorcerer",
                "Wizard"
            ],
            "School": "Transmutation",
            "Casting Time": "1 Action",
            "Range": "60 feet",
            "Duration": "Concentration, up to 10 minutes",
            "Components": "V, S, M"
        },
        "Magic Mouth": {
            "Classes": [
                "Artificer",
                "Bard",
                "Wizard"
            ],
            "School": "Illusion",
            "Casting Time": "1 Minute (R)",
            "Range": "30 feet",
            "Duration": "Until dispelled",
            "Components": "V, S, M"
        },
        "Magic Weapon": {
            "Classes": [
                "Artificer",
                "Paladin",
                "Ranger",
                "Sorcerer",
                "Wizard"
            ],
            "School": "Transmutation",
            "Casting Time": "1 Bonus Action",
            "Range": "Touch",
            "Duration": "Concentration, up to 1 hour",
            "Components": "V, S"
        },
        "Protection from Poison": {
            "Classes": [
                "Artificer",
                "Cleric",
                "Druid",
                "Paladin",
                "Ranger"
            ],
            "School": "Abjuration",
            "Casting Time": "1 Action",
            "Range": "Touch",
            "Duration": "1 hour",
            "Components": "V, S"
        },
        "Pyrotechnics": {
            "Classes": [
                "Artificer",
                "Bard",
                "Sorcerer",
                "Wizard"
            ],
            "School": "Transmutation",
            "Casting Time": "1 Action",
            "Range": "60 feet",
            "Duration": "Instantaneous",
            "Components": "V, S"
        },
        "Rope Trick": {
            "Classes": [
                "Artificer",
                "Wizard"
            ],
            "School": "Transmutation",
            "Casting Time": "1 Action",
            "Range": "Touch",
            "Duration": "1 hour",
            "Components": "V, S, M"
        },
        "See Invisibility": {
            "Classes": [
                "Artificer",
                "Bard",
                "Sorcerer",
                "Wizard"
            ],
            "School": "Divination",
            "Casting Time": "1 Action",
            "Range": "Self",
            "Duration": "1 hour",
            "Components": "V, S, M"
        },
        "Skywrite": {
            "Classes": [
                "Artificer",
                "Bard",
                "Druid",
                "Wizard"
            ],
            "School": "Transmutation",
            "Casting Time": "1 Action (R)",
            "Range": "Sight",
            "Duration": "Concentration, up to 1 day",
            "Components": "V, S"
        },
        "Spider Climb": {
            "Classes": [
                "Artificer",
                "Sorcerer",
                "Warlock",
                "Wizard"
            ],
            "School": "Transmutation",
            "Casting Time": "1 Action",
            "Range": "Touch",
            "Duration": "Concentration, up to 1 hour",
            "Components": "V, S, M"
        },
        "Web": {
            "Classes": [
                "Artificer",
                "Sorcerer",
                "Wizard"
            ],
            "School": "Conjuration",
            "Casting Time": "1 Action",
            "Range": "60 feet",
            "Duration": "Concentration, up to 1 hour",
            "Components": "V, S, M"
        },
        "Animal Messenger": {
            "Classes": [
                "Bard",
                "Druid",
                "Ranger"
            ],
            "School": "Enchantment",
            "Casting Time": "1 Action (R)",
            "Range": "30 Feet",
            "Duration": "24 hours",
            "Components": "V, S, M"
        },
        "Blindness/Deafness": {
            "Classes": [
                "Bard",
                "Cleric",
                "Sorcerer",
                "Wizard"
            ],
            "School": "Necromancy",
            "Casting Time": "1 Action",
            "Range": "30 Feet",
            "Duration": "1 minute",
            "Components": "V"
        },
        "Calm Emotions": {
            "Classes": [
                "Bard",
                "Cleric"
            ],
            "School": "Enchantment",
            "Casting Time": "1 Action",
            "Range": "60 feet",
            "Duration": "Concentration, up to 1 minute",
            "Components": "V, S"
        },
        "Cloud of Daggers": {
            "Classes": [
                "Bard",
                "Sorcerer",
                "Warlock",
                "Wizard"
            ],
            "School": "Conjuration",
            "Casting Time": "1 Action",
            "Range": "60 feet",
            "Duration": "Concentration, up to 1 minute",
            "Components": "V, S, M"
        },
        "Crown of Madness": {
            "Classes": [
                "Bard",
                "Sorcerer",
                "Warlock",
                "Wizard"
            ],
            "School": "Enchantment",
            "Casting Time": "1 Action",
            "Range": "120 feet",
            "Duration": "Concentration, up to 1 minute",
            "Components": "V, S"
        },
        "Detect Thoughts": {
            "Classes": [
                "Bard",
                "Sorcerer",
                "Wizard"
            ],
            "School": "Divination",
            "Casting Time": "1 Action",
            "Range": "Touch",
            "Duration": "Concentration, up to 1 minute",
            "Components": "V, S, M"
        },
        "Enthrall": {
            "Classes": [
                "Bard",
                "Warlock"
            ],
            "School": "Enchantment",
            "Casting Time": "1 Action",
            "Range": "60 feet",
            "Duration": "1 minute",
            "Components": "V, S"
        },
        "Gift of Gab": {
            "Classes": [
                "Bard",
                "Wizard"
            ],
            "School": "Enchantment",
            "Casting Time": "Reaction",
            "Range": "Self",
            "Duration": "Instantaneous",
            "Components": "V, S, M"
        },
        "Hold Person": {
            "Classes": [
                "Bard",
                "Cleric",
                "Druid",
                "Sorcerer",
                "Warlock",
                "Wizard"
            ],
            "School": "Enchantment",
            "Casting Time": "1 Action",
            "Range": "60 feet",
            "Duration": "Concentration, up to 1 minute",
            "Components": "V, S, M"
        },
        "Knock": {
            "Classes": [
                "Bard",
                "Sorcerer",
                "Wizard"
            ],
            "School": "Transmutation",
            "Casting Time": "1 Action",
            "Range": "60 feet",
            "Duration": "Instantaneous",
            "Components": "V"
        },
        "Locate Animals or Plants": {
            "Classes": [
                "Bard",
                "Druid",
                "Ranger"
            ],
            "School": "Divination",
            "Casting Time": "1 Action (R)",
            "Range": "Self",
            "Duration": "Instantaneous",
            "Components": "V, S, M"
        },
        "Locate Object": {
            "Classes": [
                "Bard",
                "Cleric",
                "Druid",
                "Paladin",
                "Ranger",
                "Wizard"
            ],
            "School": "Divination",
            "Casting Time": "1 Action",
            "Range": "Self",
            "Duration": "Concentration, up to 10 minutes",
            "Components": "V, S, M"
        },
        "Mirror Image": {
            "Classes": [
                "Bard",
                "Sorcerer",
                "Warlock",
                "Wizard"
            ],
            "School": "Illusion",
            "Casting Time": "1 Action",
            "Range": "Self",
            "Duration": "1 minute",
            "Components": "V, S"
        },
        "Nathair's Mischief (UA)": {
            "Classes": [
                "Bard",
                "Sorcerer",
                "Wizard"
            ],
            "School": "Illusion",
            "Casting Time": "1 Action",
            "Range": "60 feet",
            "Duration": "Concentration, up to 1 minute",
            "Components": "S, M"
        },
        "Phantasmal Force": {
            "Classes": [
                "Bard",
                "Sorcerer",
                "Wizard"
            ],
            "School": "Illusion",
            "Casting Time": "1 Action",
            "Range": "60 feet",
            "Duration": "Concentration, up to 1 minute",
            "Components": "V, S, M"
        },
        "Shatter": {
            "Classes": [
                "Bard",
                "Sorcerer",
                "Warlock",
                "Wizard"
            ],
            "School": "Evocation",
            "Casting Time": "1 Action",
            "Range": "60 feet",
            "Duration": "Instantaneous",
            "Components": "V, S, M"
        },
        "Silence": {
            "Classes": [
                "Bard",
                "Cleric",
                "Ranger"
            ],
            "School": "Illusion",
            "Casting Time": "1 Action (R)",
            "Range": "120 feet",
            "Duration": "Concentration, up to 10 minutes",
            "Components": "V, S"
        },
        "Suggestion": {
            "Classes": [
                "Bard",
                "Sorcerer",
                "Warlock",
                "Wizard"
            ],
            "School": "Enchantment",
            "Casting Time": "1 Action",
            "Range": "30 feet",
            "Duration": "Concentration, up to 8 hours",
            "Components": "V, M"
        },
        "Warding Wind": {
            "Classes": [
                "Bard",
                "Druid",
                "Sorcerer",
                "Wizard"
            ],
            "School": "Evocation",
            "Casting Time": "1 Action",
            "Range": "Self",
            "Duration": "Concentration, up to 10 minutes",
            "Components": "V"
        },
        "Zone of Truth": {
            "Classes": [
                "Bard",
                "Cleric",
                "Paladin"
            ],
            "School": "Enchantment",
            "Casting Time": "1 Action",
            "Range": "60 feet",
            "Duration": "10 minutes",
            "Components": "V, S"
        },
        "Augury": {
            "Classes": [
                "Cleric",
                "Druid",
                "Wizard"
            ],
            "School": "Divination",
            "Casting Time": "1 Minute (R)",
            "Range": "Self",
            "Duration": "Instantaneous",
            "Components": "V, S, M"
        },
        "Find Traps": {
            "Classes": [
                "Cleric",
                "Druid",
                "Ranger"
            ],
            "School": "Divination",
            "Casting Time": "1 Action",
            "Range": "120 feet",
            "Duration": "Instantaneous",
            "Components": "V, S"
        },
        "Gentle Repose": {
            "Classes": [
                "Cleric",
                "Paladin",
                "Wizard"
            ],
            "School": "Necromancy",
            "Casting Time": "1 Action (R)",
            "Range": "Touch",
            "Duration": "10 days",
            "Components": "V, S, M"
        },
        "Prayer of Healing": {
            "Classes": [
                "Cleric",
                "Paladin"
            ],
            "School": "Evocation",
            "Casting Time": "10 Minutes",
            "Range": "Touch",
            "Duration": "Instantaneous",
            "Components": "V"
        },
        "Spiritual Weapon": {
            "Classes": [
                "Cleric"
            ],
            "School": "Evocation",
            "Casting Time": "1 Bonus Action",
            "Range": "60 feet",
            "Duration": "1 minute",
            "Components": "V, S"
        },
        "Warding Bond": {
            "Classes": [
                "Cleric",
                "Paladin"
            ],
            "School": "Abjuration",
            "Casting Time": "1 Action",
            "Range": "Touch",
            "Duration": "1 hour",
            "Components": "V, S, M"
        },
        "Barkskin": {
            "Classes": [
                "Druid",
                "Ranger"
            ],
            "School": "Transmutation",
            "Casting Time": "1 Action",
            "Range": "Touch",
            "Duration": "Concentration, up to 1 hour",
            "Components": "V, S, M"
        },
        "Beast Sense": {
            "Classes": [
                "Druid",
                "Ranger"
            ],
            "School": "Divination",
            "Casting Time": "1 Action (R)",
            "Range": "Touch",
            "Duration": "Concentration, up to 1 hour",
            "Components": "S"
        },
        "Dust Devil": {
            "Classes": [
                "Druid",
                "Sorcerer",
                "Wizard"
            ],
            "School": "Conjuration",
            "Casting Time": "1 Action",
            "Range": "60 feet",
            "Duration": "Concentration, up to 1 minute",
            "Components": "V, S, M"
        },
        "Earthbind": {
            "Classes": [
                "Druid",
                "Sorcerer",
                "Warlock",
                "Wizard"
            ],
            "School": "Transmutation",
            "Casting Time": "1 Action",
            "Range": "300 feet",
            "Duration": "Concentration, up to 1 minute",
            "Components": "V"
        },
        "Flame Blade": {
            "Classes": [
                "Druid",
                "Sorcerer"
            ],
            "School": "Evocation",
            "Casting Time": "1 Bonus Action",
            "Range": "Self",
            "Duration": "Concentration, up to 10 minutes",
            "Components": "V, S, M"
        },
        "Flaming Sphere": {
            "Classes": [
                "Druid",
                "Sorcerer",
                "Wizard"
            ],
            "School": "Conjuration",
            "Casting Time": "1 Action",
            "Range": "60 feet",
            "Duration": "Concentration, up to 1 minute",
            "Components": "V, S, M"
        },
        "Gust of Wind": {
            "Classes": [
                "Druid",
                "Ranger",
                "Sorcerer",
                "Wizard"
            ],
            "School": "Evocation",
            "Casting Time": "1 Action",
            "Range": "Self (60-foot line)",
            "Duration": "Concentration, up to 1 minute",
            "Components": "V, S, M"
        },
        "Healing Spirit": {
            "Classes": [
                "Druid",
                "Ranger"
            ],
            "School": "Conjuration",
            "Casting Time": "1 Bonus Action",
            "Range": "60 feet",
            "Duration": "Concentration, up to 1 minute",
            "Components": "V, S"
        },
        "Moonbeam": {
            "Classes": [
                "Druid"
            ],
            "School": "Evocation",
            "Casting Time": "1 Action",
            "Range": "120 feet",
            "Duration": "Concentration, up to 1 minute",
            "Components": "V, S, M"
        },
        "Pass Without Trace": {
            "Classes": [
                "Druid",
                "Ranger"
            ],
            "School": "Abjuration",
            "Casting Time": "1 Action",
            "Range": "Self",
            "Duration": "Concentration, up to 1 hour",
            "Components": "V, S, M"
        },
        "Spike Growth": {
            "Classes": [
                "Druid",
                "Ranger"
            ],
            "School": "Transmutation",
            "Casting Time": "1 Action",
            "Range": "150 feet",
            "Duration": "Concentration, up to 10 minutes",
            "Components": "V, S, M"
        },
        "Summon Beast": {
            "Classes": [
                "Druid",
                "Ranger"
            ],
            "School": "Conjuration",
            "Casting Time": "1 Action",
            "Range": "90 feet",
            "Duration": "Concentration, up to 1 hour",
            "Components": "V, S, M"
        },
        "Branding Smite": {
            "Classes": [
                "Paladin"
            ],
            "School": "Evocation",
            "Casting Time": "1 Bonus Action",
            "Range": "Self",
            "Duration": "Concentration, up to 1 minute",
            "Components": "V"
        },
        "Find Steed": {
            "Classes": [
                "Paladin"
            ],
            "School": "Conjuration",
            "Casting Time": "10 Minutes",
            "Range": "30 feet",
            "Duration": "Instantaneous",
            "Components": "V, S"
        },
        "Find Vehicle (UA)": {
            "Classes": [
                "Paladin",
                "Sorcerer",
                "Warlock",
                "Wizard"
            ],
            "School": "Conjuration - T",
            "Casting Time": "10 Minutes",
            "Range": "30 feet",
            "Duration": "8 hours",
            "Components": "V, S"
        },
        "Cordon of Arrows": {
            "Classes": [
                "Ranger"
            ],
            "School": "Transmutation",
            "Casting Time": "1 Action",
            "Range": "5 feet",
            "Duration": "8 hours",
            "Components": "V, S, M"
        },
        "Aganazzar's Scorcher": {
            "Classes": [
                "Sorcerer",
                "Wizard"
            ],
            "School": "Evocation",
            "Casting Time": "1 Action",
            "Range": "30 Feet",
            "Duration": "Instantaneous",
            "Components": "V, S, M"
        },
        "Arcane Hacking (UA)": {
            "Classes": [
                "Sorcerer",
                "Warlock",
                "Wizard"
            ],
            "School": "Transmutation - T",
            "Casting Time": "1 Action",
            "Range": "Self",
            "Duration": "Concentration, up to 1 hour",
            "Components": "V, S, M"
        },
        "Darkness": {
            "Classes": [
                "Sorcerer",
                "Warlock",
                "Wizard"
            ],
            "School": "Evocation",
            "Casting Time": "1 Action",
            "Range": "60 feet",
            "Duration": "Concentration, up to 10 minutes",
            "Components": "V, M"
        },
        "Digital Phantom (UA)": {
            "Classes": [
                "Sorcerer",
                "Warlock",
                "Wizard"
            ],
            "School": "Abjuration - T",
            "Casting Time": "1 Action",
            "Range": "Self",
            "Duration": "Concentration, up to 1 hour",
            "Components": "V, S, M"
        },
        "Dragon's Breath": {
            "Classes": [
                "Sorcerer",
                "Wizard"
            ],
            "School": "Transmutation",
            "Casting Time": "1 Action",
            "Range": "Touch",
            "Duration": "Concentration, up to 1 minute",
            "Components": "V, S, M"
        },
        "Icingdeath's Frost (UA)": {
            "Classes": [
                "Sorcerer",
                "Wizard"
            ],
            "School": "Evocation",
            "Casting Time": "1 Action",
            "Range": "Self (15-foot cone)",
            "Duration": "Instantaneous",
            "Components": "S, M"
        },
        "Maximillian's Earthen Grasp": {
            "Classes": [
                "Sorcerer",
                "Wizard"
            ],
            "School": "Transmutation",
            "Casting Time": "1 Action",
            "Range": "30 feet",
            "Duration": "Concentration, up to 1 minute",
            "Components": "V, S, M"
        },
        "Mental Barrier (UA)": {
            "Classes": [
                "Sorcerer",
                "Warlock",
                "Wizard"
            ],
            "School": "Abjuration",
            "Casting Time": "1 Reaction",
            "Range": "Self",
            "Duration": "1 round",
            "Components": "V"
        },
        "Mind Spike": {
            "Classes": [
                "Sorcerer",
                "Warlock",
                "Wizard"
            ],
            "School": "Divination",
            "Casting Time": "1 Action",
            "Range": "60 feet",
            "Duration": "Concentration, up to 1 hour",
            "Components": "S"
        },
        "Mind Thrust (UA)": {
            "Classes": [
                "Sorcerer",
                "Warlock",
                "Wizard"
            ],
            "School": "Enchantment",
            "Casting Time": "1 Bonus Action",
            "Range": "60 feet",
            "Duration": "1 round",
            "Components": "V, S"
        },
        "Misty Step": {
            "Classes": [
                "Sorcerer",
                "Warlock",
                "Wizard"
            ],
            "School": "Conjuration",
            "Casting Time": "1 Bonus Action",
            "Range": "Self",
            "Duration": "Instantaneous",
            "Components": "V"
        },
        "Scorching Ray": {
            "Classes": [
                "Sorcerer",
                "Wizard"
            ],
            "School": "Evocation",
            "Casting Time": "1 Action",
            "Range": "120 feet",
            "Duration": "Instantaneous",
            "Components": "V, S"
        },
        "Shadow Blade": {
            "Classes": [
                "Sorcerer",
                "Warlock",
                "Wizard"
            ],
            "School": "Illusion",
            "Casting Time": "1 Bonus Action",
            "Range": "Self",
            "Duration": "Concentration, up to 1 minute",
            "Components": "V, S"
        },
        "Snilloc's Snowball Storm": {
            "Classes": [
                "Sorcerer",
                "Wizard"
            ],
            "School": "Evocation",
            "Casting Time": "1 Action",
            "Range": "90 feet",
            "Duration": "Instantaneous",
            "Components": "V, S, M"
        },
        "Tasha's Mind Whip": {
            "Classes": [
                "Sorcerer",
                "Wizard"
            ],
            "School": "Enchantment",
            "Casting Time": "1 Action",
            "Range": "90 feet",
            "Duration": "1 round",
            "Components": "V"
        },
        "Thought Shield (UA)": {
            "Classes": [
                "Sorcerer",
                "Warlock",
                "Wizard"
            ],
            "School": "Abjuration",
            "Casting Time": "1 Action",
            "Range": "Touch",
            "Duration": "8 hours",
            "Components": "V, S"
        },
        "Flock of Familiars": {
            "Classes": [
                "Warlock",
                "Wizard"
            ],
            "School": "Conjuration",
            "Casting Time": "1 Minute",
            "Range": "Touch",
            "Duration": "1 hour",
            "Components": "V, S"
        },
        "Ray of Enfeeblement": {
            "Classes": [
                "Warlock",
                "Wizard"
            ],
            "School": "Necromancy",
            "Casting Time": "1 Action",
            "Range": "60 feet",
            "Duration": "Concentration, up to 1 minute",
            "Components": "V, S"
        },
        "Fortune's Favor": {
            "Classes": [
                "Wizard"
            ],
            "School": "Divination - D",
            "Casting Time": "1 Action",
            "Range": "60 feet",
            "Duration": "1 hour",
            "Components": "V, S, M"
        },
        "Immovable Object": {
            "Classes": [
                "Wizard"
            ],
            "School": "Transmutation - DG",
            "Casting Time": "1 Action",
            "Range": "Touch",
            "Duration": "1 hour",
            "Components": "V, S, M"
        },
        "Jim's Glowing Coin": {
            "Classes": [
                "Wizard"
            ],
            "School": "Enchantment",
            "Casting Time": "1 Action",
            "Range": "60 feet",
            "Duration": "1 minute",
            "Components": "S, M"
        },
        "Melf's Acid Arrow": {
            "Classes": [
                "Wizard"
            ],
            "School": "Evocation",
            "Casting Time": "1 Action",
            "Range": "90 feet",
            "Duration": "Instantaneous",
            "Components": "V, S, M"
        },
        "Nystul's Magic Aura": {
            "Classes": [
                "Wizard"
            ],
            "School": "Illusion",
            "Casting Time": "1 Action",
            "Range": "Touch",
            "Duration": "24 hours",
            "Components": "V, S, M"
        },
        "Wristpocket": {
            "Classes": [
                "Wizard"
            ],
            "School": "Conjuration - D",
            "Casting Time": "1 Action (R)",
            "Range": "Self",
            "Duration": "Concentration, up to 1 hour",
            "Components": "S"
        }
    },
    "3rd Level": {
        "Blink": {
            "Classes": [
                "Artificer",
                "Sorcerer",
                "Wizard"
            ],
            "School": "Transmutation",
            "Casting Time": "1 Action",
            "Range": "Self",
            "Duration": "1 minute",
            "Components": "V, S"
        },
        "Catnap": {
            "Classes": [
                "Artificer",
                "Bard",
                "Sorcerer",
                "Wizard"
            ],
            "School": "Enchantment",
            "Casting Time": "1 Action",
            "Range": "30 feet",
            "Duration": "10 minutes",
            "Components": "S, M"
        },
        "Create Food and Water": {
            "Classes": [
                "Artificer",
                "Cleric",
                "Paladin"
            ],
            "School": "Conjuration",
            "Casting Time": "1 Action",
            "Range": "30 feet",
            "Duration": "Instantaneous",
            "Components": "V, S"
        },
        "Dispel Magic": {
            "Classes": [
                "Artificer",
                "Bard",
                "Cleric",
                "Druid",
                "Paladin",
                "Sorcerer",
                "Warlock",
                "Wizard"
            ],
            "School": "Abjuration",
            "Casting Time": "1 Action",
            "Range": "120 feet",
            "Duration": "Instantaneous",
            "Components": "V, S"
        },
        "Elemental Weapon": {
            "Classes": [
                "Artificer",
                "Druid",
                "Paladin",
                "Ranger"
            ],
            "School": "Transmutation",
            "Casting Time": "1 Action",
            "Range": "Touch",
            "Duration": "Concentration, up to 1 hour",
            "Components": "V, S"
        },
        "Flame Arrows": {
            "Classes": [
                "Artificer",
                "Druid",
                "Ranger",
                "Sorcerer",
                "Wizard"
            ],
            "School": "Transmutation",
            "Casting Time": "1 Action",
            "Range": "Touch",
            "Duration": "Concentration, up to 1 hour",
            "Components": "V, S"
        },
        "Fly": {
            "Classes": [
                "Artificer",
                "Sorcerer",
                "Warlock",
                "Wizard"
            ],
            "School": "Transmutation",
            "Casting Time": "1 Action",
            "Range": "Touch",
            "Duration": "Concentration, up to 10 minute",
            "Components": "V, S, M"
        },
        "Glyph of Warding": {
            "Classes": [
                "Artificer",
                "Bard",
                "Cleric",
                "Wizard"
            ],
            "School": "Abjuration",
            "Casting Time": "1 Hour",
            "Range": "Touch",
            "Duration": "Until dispelled or triggered",
            "Components": "V, S, M"
        },
        "Haste": {
            "Classes": [
                "Artificer",
                "Sorcerer",
                "Wizard"
            ],
            "School": "Transmutation",
            "Casting Time": "1 Action",
            "Range": "30 feet",
            "Duration": "Concentration, up to 1 minute",
            "Components": "V, S, M"
        },
        "Intellect Fortress": {
            "Classes": [
                "Artificer",
                "Bard",
                "Sorcerer",
                "Warlock",
                "Wizard"
            ],
            "School": "Abjuration",
            "Casting Time": "1 Action",
            "Range": "30 feet",
            "Duration": "Concentration, up to 1 hour",
            "Components": "V"
        },
        "Protection from Energy": {
            "Classes": [
                "Artificer",
                "Cleric",
                "Druid",
                "Ranger",
                "Sorcerer",
                "Wizard"
            ],
            "School": "Abjuration",
            "Casting Time": "1 Action",
            "Range": "Touch",
            "Duration": "Concentration, up to 1 hour",
            "Components": "V, S"
        },
        "Revivify": {
            "Classes": [
                "Artificer",
                "Cleric",
                "Druid",
                "Paladin",
                "Ranger"
            ],
            "School": "Necromancy",
            "Casting Time": "1 Action",
            "Range": "Touch",
            "Duration": "Instantaneous",
            "Components": "V, S, M"
        },
        "Tiny Servant": {
            "Classes": [
                "Artificer",
                "Wizard"
            ],
            "School": "Transmutation",
            "Casting Time": "1 Minute",
            "Range": "Touch",
            "Duration": "8 hours",
            "Components": "V, S"
        },
        "Water Breathing": {
            "Classes": [
                "Artificer",
                "Druid",
                "Ranger",
                "Sorcerer",
                "Wizard"
            ],
            "School": "Transmutation",
            "Casting Time": "1 Action (R)",
            "Range": "30 feet",
            "Duration": "24 hours",
            "Components": "V, S, M"
        },
        "Water Walk": {
            "Classes": [
                "Artificer",
                "Cleric",
                "Druid",
                "Ranger",
                "Sorcerer"
            ],
            "School": "Transmutation",
            "Casting Time": "1 Action (R)",
            "Range": "30 feet",
            "Duration": "1 hour",
            "Components": "V, S, M"
        },
        "Bestow Curse": {
            "Classes": [
                "Bard",
                "Cleric",
                "Wizard"
            ],
            "School": "Necromancy",
            "Casting Time": "1 Action",
            "Range": "Touch",
            "Duration": "Concentration, up to 1 minute",
            "Components": "V, S"
        },
        "Clairvoyance": {
            "Classes": [
                "Bard",
                "Cleric",
                "Sorcerer",
                "Wizard"
            ],
            "School": "Divination",
            "Casting Time": "10 Minutes",
            "Range": "1 mile",
            "Duration": "Concentration, up to 10 minutes",
            "Components": "V, S, M"
        },
        "Enemies Abound": {
            "Classes": [
                "Bard",
                "Sorcerer",
                "Warlock",
                "Wizard"
            ],
            "School": "Enchantment",
            "Casting Time": "1 Action",
            "Range": "120 feet",
            "Duration": "Concentration, up to 1 minute",
            "Components": "V, S"
        },
        "Fast Friends": {
            "Classes": [
                "Bard",
                "Cleric",
                "Wizard"
            ],
            "School": "Enchantment",
            "Casting Time": "1 Action",
            "Range": "30 feet",
            "Duration": "Concentration, up to 1 hour",
            "Components": "V"
        },
        "Fear": {
            "Classes": [
                "Bard",
                "Sorcerer",
                "Warlock",
                "Wizard"
            ],
            "School": "Illusion",
            "Casting Time": "1 Action",
            "Range": "Self (30-foot cone)",
            "Duration": "Concentration, up to 1 minute",
            "Components": "V, S, M"
        },
        "Feign Death": {
            "Classes": [
                "Bard",
                "Cleric",
                "Druid",
                "Wizard"
            ],
            "School": "Necromancy",
            "Casting Time": "1 Action (R)",
            "Range": "Touch",
            "Duration": "1 hour",
            "Components": "V, S, M"
        },
        "Hypnotic Pattern": {
            "Classes": [
                "Bard",
                "Sorcerer",
                "Warlock",
                "Wizard"
            ],
            "School": "Illusion",
            "Casting Time": "1 Action",
            "Range": "120 feet",
            "Duration": "Concentration, up to 1 minute",
            "Components": "S, M"
        },
        "Leomund's Tiny Hut": {
            "Classes": [
                "Bard",
                "Wizard"
            ],
            "School": "Evocation",
            "Casting Time": "1 Minute (R)",
            "Range": "Self (10-foot radius hemisphere)",
            "Duration": "8 hours",
            "Components": "V, S, M"
        },
        "Major Image": {
            "Classes": [
                "Bard",
                "Sorcerer",
                "Warlock",
                "Wizard"
            ],
            "School": "Illusion",
            "Casting Time": "1 Action",
            "Range": "120 feet",
            "Duration": "Concentration, up to 10 minutes",
            "Components": "V, S, M"
        },
        "Mass Healing Word": {
            "Classes": [
                "Bard",
                "Cleric"
            ],
            "School": "Evocation",
            "Casting Time": "1 Bonus Action",
            "Range": "60 feet",
            "Duration": "Instantaneous",
            "Components": "V"
        },
        "Motivational Speech": {
            "Classes": [
                "Bard",
                "Cleric"
            ],
            "School": "Enchantment",
            "Casting Time": "1 hour",
            "Range": "60 feet",
            "Duration": "1 hour",
            "Components": "V"
        },
        "Nondetection": {
            "Classes": [
                "Bard",
                "Ranger",
                "Wizard"
            ],
            "School": "Abjuration",
            "Casting Time": "1 Action",
            "Range": "Touch",
            "Duration": "8 hours",
            "Components": "V, S, M"
        },
        "Plant Growth": {
            "Classes": [
                "Bard",
                "Druid",
                "Ranger"
            ],
            "School": "Transmutation",
            "Casting Time": "1 Action or 8 Hours",
            "Range": "150 feet",
            "Duration": "Instantaneous",
            "Components": "V, S"
        },
        "Sending": {
            "Classes": [
                "Bard",
                "Cleric",
                "Wizard"
            ],
            "School": "Evocation",
            "Casting Time": "1 Action",
            "Range": "Unlimited",
            "Duration": "1 round",
            "Components": "V, S, M"
        },
        "Slow": {
            "Classes": [
                "Bard",
                "Sorcerer",
                "Wizard"
            ],
            "School": "Transmutation",
            "Casting Time": "1 Action",
            "Range": "120 feet",
            "Duration": "Concentration, up to 1 minute",
            "Components": "V, S, M"
        },
        "Speak with Dead": {
            "Classes": [
                "Bard",
                "Cleric",
                "Wizard"
            ],
            "School": "Necromancy",
            "Casting Time": "1 Action",
            "Range": "10 feet",
            "Duration": "10 minutes",
            "Components": "V, S, M"
        },
        "Speak with Plants": {
            "Classes": [
                "Bard",
                "Druid",
                "Ranger"
            ],
            "School": "Transmutation",
            "Casting Time": "1 Action",
            "Range": "Self (30-foot radius)",
            "Duration": "10 minutes",
            "Components": "V, S"
        },
        "Stinking Cloud": {
            "Classes": [
                "Bard",
                "Sorcerer",
                "Wizard"
            ],
            "School": "Conjuration",
            "Casting Time": "1 Action",
            "Range": "90 feet",
            "Duration": "Concentration, up to 1 minute",
            "Components": "V, S, M"
        },
        "Tongues": {
            "Classes": [
                "Bard",
                "Cleric",
                "Sorcerer",
                "Warlock",
                "Wizard"
            ],
            "School": "Divination",
            "Casting Time": "1 Action",
            "Range": "Touch",
            "Duration": "1 hour",
            "Components": "V, M"
        },
        "Animate Dead": {
            "Classes": [
                "Cleric",
                "Wizard"
            ],
            "School": "Necromancy",
            "Casting Time": "1 Minute",
            "Range": "10 feet",
            "Duration": "Instantaneous",
            "Components": "V, S, M"
        },
        "Aura of Vitality": {
            "Classes": [
                "Cleric",
                "Druid",
                "Paladin"
            ],
            "School": "Evocation",
            "Casting Time": "1 Action",
            "Range": "Self (30-foot radius)",
            "Duration": "Concentration, up to 1 minute",
            "Components": "V"
        },
        "Beacon of Hope": {
            "Classes": [
                "Cleric"
            ],
            "School": "Abjuration",
            "Casting Time": "1 Action",
            "Range": "30 feet",
            "Duration": "Concentration, up to 1 minute",
            "Components": "V, S"
        },
        "Daylight": {
            "Classes": [
                "Cleric",
                "Druid",
                "Paladin",
                "Ranger",
                "Sorcerer"
            ],
            "School": "Evocation",
            "Casting Time": "1 Action",
            "Range": "60 feet",
            "Duration": "1 hour",
            "Components": "V, S"
        },
        "Incite Greed": {
            "Classes": [
                "Cleric",
                "Sorcerer",
                "Warlock",
                "Wizard"
            ],
            "School": "Enchantment",
            "Casting Time": "1 action",
            "Range": "30 feet",
            "Duration": "Concentration, up to 1 minute",
            "Components": "V, S, M"
        },
        "Life Transference": {
            "Classes": [
                "Cleric",
                "Wizard"
            ],
            "School": "Evocation",
            "Casting Time": "1 Action",
            "Range": "30 feet",
            "Duration": "Instantaneous",
            "Components": "V, S"
        },
        "Magic Circle": {
            "Classes": [
                "Cleric",
                "Paladin",
                "Warlock",
                "Wizard"
            ],
            "School": "Abjuration",
            "Casting Time": "1 Minute",
            "Range": "10 feet",
            "Duration": "1 hour",
            "Components": "V, S, M"
        },
        "Meld into Stone": {
            "Classes": [
                "Cleric",
                "Druid",
                "Ranger"
            ],
            "School": "Transmutation",
            "Casting Time": "1 Action (R)",
            "Range": "Touch",
            "Duration": "8 hours",
            "Components": "V, S"
        },
        "Remove Curse": {
            "Classes": [
                "Cleric",
                "Paladin",
                "Warlock",
                "Wizard"
            ],
            "School": "Abjuration",
            "Casting Time": "1 Action",
            "Range": "Touch",
            "Duration": "Instantaneous",
            "Components": "V, S"
        },
        "Spirit Guardians": {
            "Classes": [
                "Cleric"
            ],
            "School": "Conjuration",
            "Casting Time": "1 Action",
            "Range": "Self (15-foot radius)",
            "Duration": "Concentration, up to 10 minutes",
            "Components": "V, S, M"
        },
        "Spirit Shroud": {
            "Classes": [
                "Cleric",
                "Paladin",
                "Warlock",
                "Wizard"
            ],
            "School": "Necromancy",
            "Casting Time": "1 Bonus Action",
            "Range": "Self",
            "Duration": "Concentration, up to 1 minute",
            "Components": "V, S"
        },
        "Call Lightning": {
            "Classes": [
                "Druid"
            ],
            "School": "Conjuration",
            "Casting Time": "1 Action",
            "Range": "120 feet",
            "Duration": "Concentration, up to 10 minutes",
            "Components": "V, S"
        },
        "Conjure Animals": {
            "Classes": [
                "Druid",
                "Ranger"
            ],
            "School": "Conjuration",
            "Casting Time": "1 Action",
            "Range": "60 feet",
            "Duration": "Concentration, up to 1 hour",
            "Components": "V, S"
        },
        "Erupting Earth": {
            "Classes": [
                "Druid",
                "Sorcerer",
                "Wizard"
            ],
            "School": "Transmutation",
            "Casting Time": "1 Action",
            "Range": "120 feet",
            "Duration": "Instantaneous",
            "Components": "V, S, M"
        },
        "Sleet Storm": {
            "Classes": [
                "Druid",
                "Sorcerer",
                "Wizard"
            ],
            "School": "Conjuration",
            "Casting Time": "1 Action",
            "Range": "120 feet",
            "Duration": "Concentration, up to 1 minute",
            "Components": "V, S, M"
        },
        "Summon Fey": {
            "Classes": [
                "Druid",
                "Ranger",
                "Warlock",
                "Wizard"
            ],
            "School": "Conjuration",
            "Casting Time": "1 Action",
            "Range": "90 feet",
            "Duration": "Concentration, up to 1 hour",
            "Components": "V, S, M"
        },
        "Tidal Wave": {
            "Classes": [
                "Druid",
                "Wizard"
            ],
            "School": "Conjuration",
            "Casting Time": "1 Action",
            "Range": "120 feet",
            "Duration": "Instantaneous",
            "Components": "V, S, M"
        },
        "Wall of Water": {
            "Classes": [
                "Druid",
                "Sorcerer",
                "Wizard"
            ],
            "School": "Evocation",
            "Casting Time": "1 Action",
            "Range": "60 feet",
            "Duration": "Concentration, up to 10 minutes",
            "Components": "V, S, M"
        },
        "Wind Wall": {
            "Classes": [
                "Druid",
                "Ranger"
            ],
            "School": "Evocation",
            "Casting Time": "1 Action",
            "Range": "120 feet",
            "Duration": "Concentration, up to 1 minute",
            "Components": "V, S, M"
        },
        "Blinding Smite": {
            "Classes": [
                "Paladin"
            ],
            "School": "Evocation",
            "Casting Time": "1 Bonus Action",
            "Range": "Self",
            "Duration": "Concentration, up to 1 minute",
            "Components": "V"
        },
        "Crusader's Mantle": {
            "Classes": [
                "Paladin"
            ],
            "School": "Evocation",
            "Casting Time": "1 Action",
            "Range": "Self",
            "Duration": "Concentration, up to 1 minute",
            "Components": "V"
        },
        "Conjure Barrage": {
            "Classes": [
                "Ranger"
            ],
            "School": "Conjuration",
            "Casting Time": "1 Action",
            "Range": "Self (60-foot cone)",
            "Duration": "Instantaneous",
            "Components": "V, S, M"
        },
        "Lightning Arrow": {
            "Classes": [
                "Ranger"
            ],
            "School": "Transmutation",
            "Casting Time": "1 Bonus Action",
            "Range": "Self",
            "Duration": "Concentration, up to 1 minute",
            "Components": "V, S"
        },
        "Conjure Lesser Demon": {
            "Classes": [
                "Sorcerer",
                "Wizard"
            ],
            "School": "Conjuration",
            "Casting Time": "1 Action",
            "Range": "60 feet",
            "Duration": "Concentration, up to 1 hour",
            "Components": "V, S, M"
        },
        "Counterspell": {
            "Classes": [
                "Sorcerer",
                "Warlock",
                "Wizard"
            ],
            "School": "Abjuration",
            "Casting Time": "1 Reaction",
            "Range": "60 feet",
            "Duration": "Instantaneous",
            "Components": "S"
        },
        "Fireball": {
            "Classes": [
                "Sorcerer",
                "Wizard"
            ],
            "School": "Evocation",
            "Casting Time": "1 Action",
            "Range": "150 feet",
            "Duration": "Instantaneous",
            "Components": "V, S, M"
        },
        "Gaseous Form": {
            "Classes": [
                "Sorcerer",
                "Warlock",
                "Wizard"
            ],
            "School": "Transmutation",
            "Casting Time": "1 Action",
            "Range": "Touch",
            "Duration": "Concentration, up to 1 hour",
            "Components": "V, S, M"
        },
        "Haywire (UA)": {
            "Classes": [
                "Sorcerer",
                "Warlock",
                "Wizard"
            ],
            "School": "Enchantment - T",
            "Casting Time": "1 Action",
            "Range": "90 feet",
            "Duration": "Concentration, up to 1 minute",
            "Components": "V, S"
        },
        "Invisibility To Cameras (UA)": {
            "Classes": [
                "Sorcerer",
                "Warlock",
                "Wizard"
            ],
            "School": "Illusion - T",
            "Casting Time": "1 Action",
            "Range": "10 feet",
            "Duration": "Concentration, up to 1 minute",
            "Components": "V, S, M"
        },
        "Lightning Bolt": {
            "Classes": [
                "Sorcerer",
                "Wizard"
            ],
            "School": "Evocation",
            "Casting Time": "1 Action",
            "Range": "Self (100-foot line)",
            "Duration": "Instantaneous",
            "Components": "V, S, M"
        },
        "Melf's Minute Meteors": {
            "Classes": [
                "Sorcerer",
                "Wizard"
            ],
            "School": "Evocation",
            "Casting Time": "Self",
            "Range": "120 feet",
            "Duration": "Concentration, up to 10 minutes",
            "Components": "V, S, M"
        },
        "Protection from Ballistics (UA)": {
            "Classes": [
                "Sorcerer",
                "Warlock",
                "Wizard"
            ],
            "School": "Abjuration - T",
            "Casting Time": "1 Action",
            "Range": "Touch",
            "Duration": "Concentration, up to 10 minutes",
            "Components": "V, S, M"
        },
        "Psionic Blast (UA)": {
            "Classes": [
                "Sorcerer",
                "Warlock",
                "Wizard"
            ],
            "School": "Evocation",
            "Casting Time": "1 Action",
            "Range": "Self (30-foot cone)",
            "Duration": "Instantaneous",
            "Components": "V"
        },
        "Thunder Step": {
            "Classes": [
                "Sorcerer",
                "Warlock",
                "Wizard"
            ],
            "School": "Conjuration",
            "Casting Time": "1 Action",
            "Range": "90 feet",
            "Duration": "Instantaneous",
            "Components": "V"
        },
        "Vampiric Touch": {
            "Classes": [
                "Sorcerer",
                "Warlock",
                "Wizard"
            ],
            "School": "Necromancy",
            "Casting Time": "1 Action",
            "Range": "Self",
            "Duration": "Concentration, up to 1 minute",
            "Components": "V, S"
        },
        "Hunger Of Hadar": {
            "Classes": [
                "Warlock"
            ],
            "School": "Conjuration",
            "Casting Time": "1 Action",
            "Range": "150 feet",
            "Duration": "Concentration, up to 1 minute",
            "Components": "V, S, M"
        },
        "Summon Lesser Demons": {
            "Classes": [
                "Warlock",
                "Wizard"
            ],
            "School": "Conjuration",
            "Casting Time": "1 Action",
            "Range": "60 Feet",
            "Duration": "Concentration, up to 1 hour",
            "Components": "V, S, M"
        },
        "Summon Shadowspawn": {
            "Classes": [
                "Warlock",
                "Wizard"
            ],
            "School": "Conjuration",
            "Casting Time": "1 Action",
            "Range": "90 feet",
            "Duration": "Concentration, up to 1 hour",
            "Components": "V, S, M"
        },
        "Summon Undead": {
            "Classes": [
                "Warlock",
                "Wizard"
            ],
            "School": "Necromancy",
            "Casting Time": "1 Action",
            "Range": "90 feet",
            "Duration": "Concentration, up to 1 hour",
            "Components": "V, S, M"
        },
        "Galder's Tower": {
            "Classes": [
                "Wizard"
            ],
            "School": "Conjuration",
            "Casting Time": "10 Minutes",
            "Range": "30 feet",
            "Duration": "24 hours",
            "Components": "V, S, M"
        },
        "Phantom Steed": {
            "Classes": [
                "Wizard"
            ],
            "School": "Illusion",
            "Casting Time": "1 Action (R)",
            "Range": "30 feet",
            "Duration": "1 hour",
            "Components": "V, S"
        },
        "Pulse Wave": {
            "Classes": [
                "Wizard"
            ],
            "School": "Evocation - D",
            "Casting Time": "1 Action",
            "Range": "Self (30-foot cone)",
            "Duration": "Instantaneous",
            "Components": "V, S"
        },
        "Wall of Sand": {
            "Classes": [
                "Wizard"
            ],
            "School": "Evocation",
            "Casting Time": "1 Action",
            "Range": "90 feet",
            "Duration": "Concentration, up to 10 minutes",
            "Components": "V, S, M"
        }
    },
    "4th Level": {
        "Arcane Eye": {
            "Classes": [
                "Artificer",
                "Wizard"
            ],
            "School": "Divination",
            "Casting Time": "1 Action",
            "Range": "30 feet",
            "Duration": "Concentration, up to 1 hour",
            "Components": "V, S, M"
        },
        "Elemental Bane": {
            "Classes": [
                "Artificer",
                "Druid",
                "Warlock",
                "Wizard"
            ],
            "School": "Transmutation",
            "Casting Time": "1 Action",
            "Range": "90 feet",
            "Duration": "Concentration, up to 1 minute",
            "Components": "V, S"
        },
        "Fabricate": {
            "Classes": [
                "Artificer",
                "Wizard"
            ],
            "School": "Transmutation",
            "Casting Time": "10 Minutes",
            "Range": "120 feet",
            "Duration": "Instantaneous",
            "Components": "V, S"
        },
        "Freedom of Movement": {
            "Classes": [
                "Artificer",
                "Bard",
                "Cleric",
                "Druid",
                "Ranger"
            ],
            "School": "Abjuration",
            "Casting Time": "1 Action",
            "Range": "Touch",
            "Duration": "1 hour",
            "Components": "V, S, M"
        },
        "Leomund's Secret Chest": {
            "Classes": [
                "Artificer",
                "Wizard"
            ],
            "School": "Conjuration",
            "Casting Time": "1 Action",
            "Range": "Touch",
            "Duration": "Instantaneous",
            "Components": "V, S, M"
        },
        "Mordenkainen's Faithful Hound": {
            "Classes": [
                "Artificer",
                "Wizard"
            ],
            "School": "Conjuration",
            "Casting Time": "1 Action",
            "Range": "30 feet",
            "Duration": "8 hours",
            "Components": "V, S, M"
        },
        "Mordenkainen's Private Sanctum": {
            "Classes": [
                "Artificer",
                "Wizard"
            ],
            "School": "Abjuration",
            "Casting Time": "1 Action",
            "Range": "120 feet",
            "Duration": "24 hours",
            "Components": "V, S, M"
        },
        "Otiluke's Resilient Sphere": {
            "Classes": [
                "Artificer",
                "Wizard"
            ],
            "School": "Evocation",
            "Casting Time": "1 Action",
            "Range": "30 feet",
            "Duration": "Concentration, up to 1 minute",
            "Components": "V, S, M"
        },
        "Stone Shape": {
            "Classes": [
                "Artificer",
                "Cleric",
                "Druid",
                "Wizard"
            ],
            "School": "Transmutation",
            "Casting Time": "1 Action",
            "Range": "Touch",
            "Duration": "Instantaneous",
            "Components": "V, S, M"
        },
        "Stoneskin": {
            "Classes": [
                "Artificer",
                "Druid",
                "Ranger",
                "Sorcerer",
                "Wizard"
            ],
            "School": "Abjuration",
            "Casting Time": "1 Action",
            "Range": "Touch",
            "Duration": "Concentration, up to 1 hour",
            "Components": "V, S, M"
        },
        "Summon Construct": {
            "Classes": [
                "Artificer",
                "Wizard"
            ],
            "School": "Conjuration",
            "Casting Time": "1 Action",
            "Range": "90 feet",
            "Duration": "Concentration, up to 1 hour",
            "Components": "V, S, M"
        },
        "Charm Monster": {
            "Classes": [
                "Bard",
                "Druid",
                "Sorcerer",
                "Warlock",
                "Wizard"
            ],
            "School": "Enchantment",
            "Casting Time": "1 Action",
            "Range": "30 feet",
            "Duration": "1 hour",
            "Components": "V, S"
        },
        "Compulsion": {
            "Classes": [
                "Bard"
            ],
            "School": "Enchantment",
            "Casting Time": "1 Action",
            "Range": "30 feet",
            "Duration": "Concentration, up to 1 minute",
            "Components": "V, S"
        },
        "Confusion": {
            "Classes": [
                "Bard",
                "Druid",
                "Sorcerer",
                "Wizard"
            ],
            "School": "Enchantment",
            "Casting Time": "1 Action",
            "Range": "90 feet",
            "Duration": "Concentration, up to 1 minute",
            "Components": "V, S, M"
        },
        "Dimension Door": {
            "Classes": [
                "Bard",
                "Sorcerer",
                "Warlock",
                "Wizard"
            ],
            "School": "Conjuration",
            "Casting Time": "1 Action",
            "Range": "500 feet",
            "Duration": "Instantaneous",
            "Components": "V"
        },
        "Greater Invisibility": {
            "Classes": [
                "Bard",
                "Sorcerer",
                "Wizard"
            ],
            "School": "Illusion",
            "Casting Time": "1 Action",
            "Range": "Touch",
            "Duration": "Concentration, up to 1 minute",
            "Components": "V, S"
        },
        "Hallucinatory Terrain": {
            "Classes": [
                "Bard",
                "Druid",
                "Warlock",
                "Wizard"
            ],
            "School": "Illusion",
            "Casting Time": "10 Minutes",
            "Range": "300 feet",
            "Duration": "24 hours",
            "Components": "V, S, M"
        },
        "Locate Creature": {
            "Classes": [
                "Bard",
                "Cleric",
                "Druid",
                "Paladin",
                "Ranger",
                "Wizard"
            ],
            "School": "Divination",
            "Casting Time": "1 Action",
            "Range": "Self",
            "Duration": "Concentration, up to 1 hour",
            "Components": "V, S, M"
        },
        "Phantasmal Killer": {
            "Classes": [
                "Bard",
                "Wizard"
            ],
            "School": "Illusion",
            "Casting Time": "1 Action",
            "Range": "120 feet",
            "Duration": "Concentration, up to 1 minute",
            "Components": "V, S"
        },
        "Polymorph": {
            "Classes": [
                "Bard",
                "Druid",
                "Sorcerer",
                "Wizard"
            ],
            "School": "Transmutation",
            "Casting Time": "1 Action",
            "Range": "60 feet",
            "Duration": "Concentration, up to 1 hour",
            "Components": "V, S, M"
        },
        "Raulothim's Psychic Lance (UA)": {
            "Classes": [
                "Bard",
                "Sorcerer",
                "Warlock",
                "Wizard"
            ],
            "School": "Enchantment",
            "Casting Time": "1 Action",
            "Range": "120 feet",
            "Duration": "Instantaneous",
            "Components": "V"
        },
        "Aura of Life": {
            "Classes": [
                "Cleric",
                "Paladin"
            ],
            "School": "Abjuration",
            "Casting Time": "1 Action",
            "Range": "Self (30-foot radius)",
            "Duration": "Concentration, up to 10 minutes",
            "Components": "V"
        },
        "Aura of Purity": {
            "Classes": [
                "Cleric",
                "Paladin"
            ],
            "School": "Abjuration",
            "Casting Time": "1 Action",
            "Range": "Self (30-foot radius)",
            "Duration": "Concentration, up to 10 minutes",
            "Components": "V"
        },
        "Banishment": {
            "Classes": [
                "Cleric",
                "Paladin",
                "Sorcerer",
                "Warlock",
                "Wizard"
            ],
            "School": "Abjuration",
            "Casting Time": "1 Action",
            "Range": "60 feet",
            "Duration": "Concentration, up to 1 minutes",
            "Components": "V, S, M"
        },
        "Control Water": {
            "Classes": [
                "Cleric",
                "Druid",
                "Wizard"
            ],
            "School": "Transmutation",
            "Casting Time": "1 Action",
            "Range": "300 feet",
            "Duration": "Concentration, up to 10 minutes",
            "Components": "V, S, M"
        },
        "Death Ward": {
            "Classes": [
                "Cleric",
                "Paladin"
            ],
            "School": "Abjuration",
            "Casting Time": "1 Action",
            "Range": "Touch",
            "Duration": "8 hours",
            "Components": "V, S"
        },
        "Divination": {
            "Classes": [
                "Cleric",
                "Druid",
                "Wizard"
            ],
            "School": "Divination",
            "Casting Time": "1 Action (R)",
            "Range": "Self",
            "Duration": "Instantaneous",
            "Components": "V, S, M"
        },
        "Guardian of Faith": {
            "Classes": [
                "Cleric"
            ],
            "School": "Conjuration",
            "Casting Time": "1 Action",
            "Range": "30 feet",
            "Duration": "8 hours",
            "Components": "V"
        },
        "Blight": {
            "Classes": [
                "Druid",
                "Sorcerer",
                "Warlock",
                "Wizard"
            ],
            "School": "Necromancy",
            "Casting Time": "1 Action",
            "Range": "30 feet",
            "Duration": "Instantaneous",
            "Components": "V, S"
        },
        "Conjure Minor Elementals": {
            "Classes": [
                "Druid",
                "Wizard"
            ],
            "School": "Conjuration",
            "Casting Time": "1 Minute",
            "Range": "90 feet",
            "Duration": "Concentration, up to 1 hour",
            "Components": "V, S"
        },
        "Conjure Woodland Beings": {
            "Classes": [
                "Druid",
                "Ranger"
            ],
            "School": "Conjuration",
            "Casting Time": "1 Action",
            "Range": "60 feet",
            "Duration": "Concentration, up to 1 hour",
            "Components": "V, S, M"
        },
        "Dominate Beast": {
            "Classes": [
                "Druid",
                "Ranger",
                "Sorcerer"
            ],
            "School": "Enchantment",
            "Casting Time": "1 Action",
            "Range": "60 feet",
            "Duration": "Concentration, up to 1 minute",
            "Components": "V, S"
        },
        "Fire Shield": {
            "Classes": [
                "Druid",
                "Sorcerer",
                "Wizard"
            ],
            "School": "Evocation",
            "Casting Time": "1 Action",
            "Range": "Self",
            "Duration": "10 minutes",
            "Components": "V, S, M"
        },
        "Giant Insect": {
            "Classes": [
                "Druid"
            ],
            "School": "Transmutation",
            "Casting Time": "1 Action",
            "Range": "30 feet",
            "Duration": "Concentration, up to 10 minutes",
            "Components": "V, S"
        },
        "Grasping Vine": {
            "Classes": [
                "Druid",
                "Ranger"
            ],
            "School": "Conjuration",
            "Casting Time": "1 Bonus Action",
            "Range": "30 feet",
            "Duration": "Concentration, up to 1 minute",
            "Components": "V, S"
        },
        "Guardian of Nature": {
            "Classes": [
                "Druid",
                "Ranger"
            ],
            "School": "Transmutation",
            "Casting Time": "1 Bonus Action",
            "Range": "Self",
            "Duration": "Concentration, up to 1 minute",
            "Components": "V"
        },
        "Ice Storm": {
            "Classes": [
                "Druid",
                "Sorcerer",
                "Wizard"
            ],
            "School": "Evocation",
            "Casting Time": "1 Action",
            "Range": "300 feet",
            "Duration": "Instantaneous",
            "Components": "V, S, M"
        },
        "Summon Elemental": {
            "Classes": [
                "Druid",
                "Ranger",
                "Wizard"
            ],
            "School": "Conjuration",
            "Casting Time": "1 Action",
            "Range": "90 feet",
            "Duration": "Concentration, up to 1 hour",
            "Components": "V, S, M"
        },
        "Wall of Fire": {
            "Classes": [
                "Druid",
                "Sorcerer",
                "Wizard"
            ],
            "School": "Evocation",
            "Casting Time": "1 Action",
            "Range": "120 feet",
            "Duration": "Concentration, up to 1 minute",
            "Components": "V, S, M"
        },
        "Watery Sphere": {
            "Classes": [
                "Druid",
                "Sorcerer",
                "Wizard"
            ],
            "School": "Conjuration",
            "Casting Time": "1 Action",
            "Range": "90 feet",
            "Duration": "Concentration, up to 1 minute",
            "Components": "V, S, M"
        },
        "Find Greater Steed": {
            "Classes": [
                "Paladin"
            ],
            "School": "Conjuration",
            "Casting Time": "10 Minutes",
            "Range": "30 feet",
            "Duration": "Instantaneous",
            "Components": "V, S"
        },
        "Staggering Smite": {
            "Classes": [
                "Paladin"
            ],
            "School": "Evocation",
            "Casting Time": "1 Bonus Action",
            "Range": "Self",
            "Duration": "Concentration, up to 1 minute",
            "Components": "V"
        },
        "Conjure Barlgura (UA)": {
            "Classes": [
                "Sorcerer",
                "Wizard"
            ],
            "School": "Conjuration",
            "Casting Time": "1 Action",
            "Range": "60 feet",
            "Duration": "Up to 10 minutes",
            "Components": "V, S"
        },
        "Conjure Knowbot (UA)": {
            "Classes": [
                "Sorcerer",
                "Warlock",
                "Wizard"
            ],
            "School": "Conjuration - T",
            "Casting Time": "1 Action",
            "Range": "Touch",
            "Duration": "10 minutes",
            "Components": "V, S"
        },
        "Conjure Shadow Demon (UA)": {
            "Classes": [
                "Sorcerer",
                "Wizard"
            ],
            "School": "Conjuration",
            "Casting Time": "1 Action",
            "Range": "60 feet",
            "Duration": "Concentration, up to 1 hour",
            "Components": "V, S, M"
        },
        "Ego Whip (UA)": {
            "Classes": [
                "Sorcerer",
                "Warlock",
                "Wizard"
            ],
            "School": "Enchantment",
            "Casting Time": "1 Action",
            "Range": "30 feet",
            "Duration": "Concentration, up to 1 minute",
            "Components": "V"
        },
        "Sickening Radiance": {
            "Classes": [
                "Sorcerer",
                "Warlock",
                "Wizard"
            ],
            "School": "Evocation",
            "Casting Time": "1 Action",
            "Range": "120 Feet",
            "Duration": "Concentration, up to 10 minutes",
            "Components": "V, S"
        },
        "Storm Sphere": {
            "Classes": [
                "Sorcerer",
                "Wizard"
            ],
            "School": "Evocation",
            "Casting Time": "1 Action",
            "Range": "150 feet",
            "Duration": "Concentration, up to 1 minute",
            "Components": "V, S"
        },
        "Synchronicity (UA)": {
            "Classes": [
                "Sorcerer",
                "Warlock",
                "Wizard"
            ],
            "School": "Enchantment - T",
            "Casting Time": "1 Action",
            "Range": "Touch",
            "Duration": "Concentration, up to 1 hour",
            "Components": "V, S"
        },
        "System Backdoor (UA)": {
            "Classes": [
                "Sorcerer",
                "Warlock",
                "Wizard"
            ],
            "School": "Transmutation - T",
            "Casting Time": "1 Minute",
            "Range": "Self",
            "Duration": "Concentration, up to 1 hour",
            "Components": "V, S, M"
        },
        "Vitriolic Sphere": {
            "Classes": [
                "Sorcerer",
                "Wizard"
            ],
            "School": "Evocation",
            "Casting Time": "1 Action",
            "Range": "150 feet",
            "Duration": "Instantaneous",
            "Components": "V, S, M"
        },
        "Galder's Speedy Courier": {
            "Classes": [
                "Warlock",
                "Wizard"
            ],
            "School": "Conjuration",
            "Casting Time": "1 Action",
            "Range": "10 feet",
            "Duration": "10 minutes",
            "Components": "V, S, M"
        },
        "Shadow Of Moil": {
            "Classes": [
                "Warlock"
            ],
            "School": "Necromancy",
            "Casting Time": "1 Action",
            "Range": "Self",
            "Duration": "Concentration, up to 1 minute",
            "Components": "V, S, M"
        },
        "Summon Aberration": {
            "Classes": [
                "Warlock",
                "Wizard"
            ],
            "School": "Conjuration",
            "Casting Time": "1 Action",
            "Range": "90 feet",
            "Duration": "Concentration, up to 1 hour",
            "Components": "V, S, M"
        },
        "Summon Greater Demon": {
            "Classes": [
                "Warlock",
                "Wizard"
            ],
            "School": "Conjuration",
            "Casting Time": "1 Action",
            "Range": "60 Feet",
            "Duration": "Concentration, up to 1 hour",
            "Components": "V, S, M"
        },
        "Evard's Black Tentacles": {
            "Classes": [
                "Wizard"
            ],
            "School": "Conjuration",
            "Casting Time": "1 Action",
            "Range": "90 feet",
            "Duration": "Concentration, up to 1 minute",
            "Components": "V, S, M"
        },
        "Gravity Sinkhole": {
            "Classes": [
                "Wizard"
            ],
            "School": "Evocation - DG",
            "Casting Time": "1 Action",
            "Range": "120 feet",
            "Duration": "Instantaneous",
            "Components": "V, S, M"
        }
    },
    "5th Level": {
        "Animate Objects": {
            "Classes": [
                "Artificer",
                "Bard",
                "Sorcerer",
                "Wizard"
            ],
            "School": "Transmutation",
            "Casting Time": "1 Action",
            "Range": "120 feet",
            "Duration": "Concentration, up to 1 minute",
            "Components": "V, S"
        },
        "Bigby's Hand": {
            "Classes": [
                "Artificer",
                "Sorcerer",
                "Wizard"
            ],
            "School": "Evocation",
            "Casting Time": "1 Action",
            "Range": "120 feet",
            "Duration": "Concentration, up to 1 minute",
            "Components": "V, S, M"
        },
        "Creation": {
            "Classes": [
                "Artificer",
                "Sorcerer",
                "Wizard"
            ],
            "School": "Illusion",
            "Casting Time": "1 Action",
            "Range": "30 feet",
            "Duration": "Special",
            "Components": "V, S, M"
        },
        "Greater Restoration": {
            "Classes": [
                "Artificer",
                "Bard",
                "Cleric",
                "Druid",
                "Ranger"
            ],
            "School": "Abjuration",
            "Casting Time": "1 Action",
            "Range": "Touch",
            "Duration": "Instantaneous",
            "Components": "V, S, M"
        },
        "Skill Empowerment": {
            "Classes": [
                "Artificer",
                "Bard",
                "Sorcerer",
                "Wizard"
            ],
            "School": "Transmutation",
            "Casting Time": "1 Action",
            "Range": "Touch",
            "Duration": "Concentration, up to 1 hour",
            "Components": "V, S"
        },
        "Transmute Rock": {
            "Classes": [
                "Artificer",
                "Druid",
                "Wizard"
            ],
            "School": "Transmutation",
            "Casting Time": "1 Action",
            "Range": "120 feet",
            "Duration": "Instantaneous",
            "Components": "V, S, M"
        },
        "Wall of Stone": {
            "Classes": [
                "Artificer",
                "Druid",
                "Sorcerer",
                "Wizard"
            ],
            "School": "Evocation",
            "Casting Time": "1 Action",
            "Range": "120 feet",
            "Duration": "Concentration, up to 10 minutes",
            "Components": "V, S, M"
        },
        "Awaken": {
            "Classes": [
                "Bard",
                "Druid"
            ],
            "School": "Transmutation",
            "Casting Time": "8 Hours",
            "Range": "Touch",
            "Duration": "Instantaneous",
            "Components": "V, S, M"
        },
        "Dominate Person": {
            "Classes": [
                "Bard",
                "Sorcerer",
                "Wizard"
            ],
            "School": "Enchantment",
            "Casting Time": "1 Action",
            "Range": "60 feet",
            "Duration": "Concentration, up to 1 minute",
            "Components": "V, S"
        },
        "Dream": {
            "Classes": [
                "Bard",
                "Warlock",
                "Wizard"
            ],
            "School": "Illusion",
            "Casting Time": "1 Minute",
            "Range": "Special",
            "Duration": "8 hours",
            "Components": "V, S, M"
        },
        "Geas": {
            "Classes": [
                "Bard",
                "Cleric",
                "Druid",
                "Paladin",
                "Wizard"
            ],
            "School": "Enchantment",
            "Casting Time": "1 Minute",
            "Range": "60 feet",
            "Duration": "30 days",
            "Components": "V"
        },
        "Hold Monster": {
            "Classes": [
                "Bard",
                "Sorcerer",
                "Warlock",
                "Wizard"
            ],
            "School": "Enchantment",
            "Casting Time": "1 Action",
            "Range": "90 feet",
            "Duration": "Concentration, up to 1 minute",
            "Components": "V, S, M"
        },
        "Legend Lore": {
            "Classes": [
                "Bard",
                "Cleric",
                "Wizard"
            ],
            "School": "Divination",
            "Casting Time": "10 Minutes",
            "Range": "Self",
            "Duration": "Instantaneous",
            "Components": "V, S, M"
        },
        "Mass Cure Wounds": {
            "Classes": [
                "Bard",
                "Cleric",
                "Druid"
            ],
            "School": "Evocation",
            "Casting Time": "1 Action",
            "Range": "60 feet",
            "Duration": "Instantaneous",
            "Components": "V, S"
        },
        "Mislead": {
            "Classes": [
                "Bard",
                "Warlock",
                "Wizard"
            ],
            "School": "Illusion",
            "Casting Time": "1 Action",
            "Range": "Self",
            "Duration": "Concentration, up to 1 hour",
            "Components": "S"
        },
        "Modify Memory": {
            "Classes": [
                "Bard",
                "Warlock",
                "Wizard"
            ],
            "School": "Enchantment",
            "Casting Time": "1 Action",
            "Range": "30 feet",
            "Duration": "Concentration, up to 1 minute",
            "Components": "V, S"
        },
        "Planar Binding": {
            "Classes": [
                "Bard",
                "Cleric",
                "Druid",
                "Warlock",
                "Wizard"
            ],
            "School": "Abjuration",
            "Casting Time": "1 Action",
            "Range": "60 feet",
            "Duration": "24 hours",
            "Components": "V, S, M"
        },
        "Raise Dead": {
            "Classes": [
                "Bard",
                "Cleric",
                "Paladin"
            ],
            "School": "Necromancy",
            "Casting Time": "1 Action",
            "Range": "Touch",
            "Duration": "Instantaneous",
            "Components": "V, S, M"
        },
        "Rary's Telepathic Bond": {
            "Classes": [
                "Bard",
                "Wizard"
            ],
            "School": "Divination",
            "Casting Time": "1 Action (R)",
            "Range": "30 feet",
            "Duration": "1 hour",
            "Components": "V, S, M"
        },
        "Scrying": {
            "Classes": [
                "Bard",
                "Cleric",
                "Druid",
                "Warlock",
                "Wizard"
            ],
            "School": "Divination",
            "Casting Time": "10 Minutes",
            "Range": "Self",
            "Duration": "Concentration, up to 10 minutes",
            "Components": "V, S, M"
        },
        "Seeming": {
            "Classes": [
                "Bard",
                "Sorcerer",
                "Wizard"
            ],
            "School": "Illusion",
            "Casting Time": "1 Action",
            "Range": "30 feet",
            "Duration": "8 hours",
            "Components": "V, S"
        },
        "Synaptic Static": {
            "Classes": [
                "Bard",
                "Sorcerer",
                "Warlock",
                "Wizard"
            ],
            "School": "Enchantment",
            "Casting Time": "1 Action",
            "Range": "120 feet",
            "Duration": "Instantaneous",
            "Components": "V, S"
        },
        "Teleportation Circle": {
            "Classes": [
                "Bard",
                "Sorcerer",
                "Warlock",
                "Wizard"
            ],
            "School": "Conjuration",
            "Casting Time": "1 Action",
            "Range": "10 feet",
            "Duration": "1 round",
            "Components": "V, M"
        },
        "Commune": {
            "Classes": [
                "Cleric"
            ],
            "School": "Divination",
            "Casting Time": "1 Minute (R)",
            "Range": "Self",
            "Duration": "1 minute",
            "Components": "V, S, M"
        },
        "Contagion": {
            "Classes": [
                "Cleric",
                "Druid"
            ],
            "School": "Necromancy",
            "Casting Time": "1 Action",
            "Range": "Touch",
            "Duration": "7 days",
            "Components": "V, S"
        },
        "Dawn": {
            "Classes": [
                "Cleric",
                "Wizard"
            ],
            "School": "Evocation",
            "Casting Time": "1 Action",
            "Range": "60 Feet",
            "Duration": "Concentration, up to 1 minute",
            "Components": "V, S, M"
        },
        "Dispel Evil and Good": {
            "Classes": [
                "Cleric",
                "Paladin"
            ],
            "School": "Abjuration",
            "Casting Time": "1 Action",
            "Range": "Self",
            "Duration": "Concentration, up to 1 minute",
            "Components": "V, S, M"
        },
        "Flame Strike": {
            "Classes": [
                "Cleric"
            ],
            "School": "Evocation",
            "Casting Time": "1 Action",
            "Range": "60 feet",
            "Duration": "Instantaneous",
            "Components": "V, S, M"
        },
        "Hallow": {
            "Classes": [
                "Cleric"
            ],
            "School": "Evocation",
            "Casting Time": "24 Hours",
            "Range": "Touch",
            "Duration": "Until dispelled",
            "Components": "V, S, M"
        },
        "Holy Weapon": {
            "Classes": [
                "Cleric",
                "Paladin"
            ],
            "School": "Evocation",
            "Casting Time": "1 Bonus Action",
            "Range": "Touch",
            "Duration": "Concentration, up to 1 hour",
            "Components": "V, S"
        },
        "Insect Plague": {
            "Classes": [
                "Cleric",
                "Druid",
                "Sorcerer"
            ],
            "School": "Conjuration",
            "Casting Time": "1 Action",
            "Range": "300 feet",
            "Duration": "Concentration, up to 10 minutes",
            "Components": "V, S, M"
        },
        "Summon Celestial": {
            "Classes": [
                "Cleric",
                "Paladin"
            ],
            "School": "Conjuration",
            "Casting Time": "1 Action",
            "Range": "90 feet",
            "Duration": "Concentration, up to 1 hour",
            "Components": "V, S, M"
        },
        "Antilife Shell": {
            "Classes": [
                "Druid"
            ],
            "School": "Abjuration",
            "Casting Time": "1 Action",
            "Range": "Self (10-foot radius)",
            "Duration": "Concentration, up to 1 hour",
            "Components": "V, S"
        },
        "Commune with Nature": {
            "Classes": [
                "Druid",
                "Ranger"
            ],
            "School": "Divination",
            "Casting Time": "1 Minute (R)",
            "Range": "Self",
            "Duration": "Instantaneous",
            "Components": "V, S"
        },
        "Cone of Cold": {
            "Classes": [
                "Druid",
                "Sorcerer",
                "Wizard"
            ],
            "School": "Evocation",
            "Casting Time": "1 Action",
            "Range": "Self (60-foot cone)",
            "Duration": "Instantaneous",
            "Components": "V, S, M"
        },
        "Conjure Elemental": {
            "Classes": [
                "Druid",
                "Wizard"
            ],
            "School": "Conjuration",
            "Casting Time": "1 Action",
            "Range": "90 feet",
            "Duration": "Concentration, up to 1 hour",
            "Components": "V, S, M"
        },
        "Control Winds": {
            "Classes": [
                "Druid",
                "Sorcerer",
                "Wizard"
            ],
            "School": "Transmutation",
            "Casting Time": "1 Action",
            "Range": "300 feet",
            "Duration": "Concentration, up to 1 hour",
            "Components": "V, S"
        },
        "Maelstrom": {
            "Classes": [
                "Druid"
            ],
            "School": "Evocation",
            "Casting Time": "1 Action",
            "Range": "120 feet",
            "Duration": "Concentration, up to 1 minute",
            "Components": "V, S, M"
        },
        "Reincarnate": {
            "Classes": [
                "Druid"
            ],
            "School": "Transmutation",
            "Casting Time": "1 Action",
            "Range": "Touch",
            "Duration": "Instantaneous",
            "Components": "V, S, M"
        },
        "Summon Draconic Spirit (UA)": {
            "Classes": [
                "Druid",
                "Sorcerer",
                "Wizard"
            ],
            "School": "Conjuration",
            "Casting Time": "1 Action",
            "Range": "60 feet",
            "Duration": "Concentration, up to 1 hour",
            "Components": "V, S, M"
        },
        "Tree Stride": {
            "Classes": [
                "Druid",
                "Ranger"
            ],
            "School": "Conjuration",
            "Casting Time": "1 Action",
            "Range": "Self",
            "Duration": "Concentration, up to 1 minute",
            "Components": "V, S"
        },
        "Wrath Of Nature": {
            "Classes": [
                "Druid",
                "Ranger"
            ],
            "School": "Evocation",
            "Casting Time": "1 Action",
            "Range": "120 feet",
            "Duration": "Concentration, up to 1 minute",
            "Components": "V, S"
        },
        "Banishing Smite": {
            "Classes": [
                "Paladin"
            ],
            "School": "Abjuration",
            "Casting Time": "1 Bonus Action",
            "Range": "Self",
            "Duration": "Concentration, up to 1 minute",
            "Components": "V"
        },
        "Circle of Power": {
            "Classes": [
                "Paladin"
            ],
            "School": "Abjuration",
            "Casting Time": "1 Action",
            "Range": "Self (30-foot radius)",
            "Duration": "Concentration, up to 10 minutes",
            "Components": "V"
        },
        "Destructive Wave": {
            "Classes": [
                "Paladin"
            ],
            "School": "Evocation",
            "Casting Time": "1 Action",
            "Range": "Self (30-foot radius)",
            "Duration": "Instantaneous",
            "Components": "V"
        },
        "Conjure Volley": {
            "Classes": [
                "Ranger"
            ],
            "School": "Conjuration",
            "Casting Time": "1 Action",
            "Range": "150 feet",
            "Duration": "Instantaneous",
            "Components": "V, S, M"
        },
        "Steel Wind Strike": {
            "Classes": [
                "Ranger",
                "Wizard"
            ],
            "School": "Conjuration",
            "Casting Time": "1 Action",
            "Range": "30 feet",
            "Duration": "Instantaneous",
            "Components": "S, M"
        },
        "Swift Quiver": {
            "Classes": [
                "Ranger"
            ],
            "School": "Transmutation",
            "Casting Time": "1 Bonus Action",
            "Range": "Touch",
            "Duration": "Concentration, up to 1 minute",
            "Components": "V, S, M"
        },
        "Cloudkill": {
            "Classes": [
                "Sorcerer",
                "Wizard"
            ],
            "School": "Conjuration",
            "Casting Time": "1 Action",
            "Range": "120 feet",
            "Duration": "Concentration, up to 10 minutes",
            "Components": "V, S"
        },
        "Commune with City (UA)": {
            "Classes": [
                "Sorcerer",
                "Warlock",
                "Wizard"
            ],
            "School": "Divination - T",
            "Casting Time": "1 Minute (R)",
            "Range": "Self",
            "Duration": "Instantaneous",
            "Components": "V, S"
        },
        "Conjure Vrock (UA)": {
            "Classes": [
                "Sorcerer",
                "Wizard"
            ],
            "School": "Conjuration",
            "Casting Time": "1 Action",
            "Range": "60 feet",
            "Duration": "Concentration, up to 1 hour",
            "Components": "V, S, M"
        },
        "Enervation": {
            "Classes": [
                "Sorcerer",
                "Warlock",
                "Wizard"
            ],
            "School": "Necromancy",
            "Casting Time": "1 Action",
            "Range": "60 Feet",
            "Duration": "Concentration, up to 1 minute",
            "Components": "V, S"
        },
        "Far Step": {
            "Classes": [
                "Sorcerer",
                "Warlock",
                "Wizard"
            ],
            "School": "Conjuration",
            "Casting Time": "1 Bonus Action",
            "Range": "Self",
            "Duration": "Concentration, up to 1 minute",
            "Components": "V"
        },
        "Immolation": {
            "Classes": [
                "Sorcerer",
                "Wizard"
            ],
            "School": "Evocation",
            "Casting Time": "1 Action",
            "Range": "90 feet",
            "Duration": "Concentration, up to 1 minute",
            "Components": "V"
        },
        "Shutdown (UA)": {
            "Classes": [
                "Sorcerer",
                "Warlock",
                "Wizard"
            ],
            "School": "Transmutation - T",
            "Casting Time": "1 Action",
            "Range": "120 feet",
            "Duration": "Concentration, up to 1 minute",
            "Components": "V, S"
        },
        "Telekinesis": {
            "Classes": [
                "Sorcerer",
                "Wizard"
            ],
            "School": "Transmutation",
            "Casting Time": "1 Action",
            "Range": "60 feet",
            "Duration": "Concentration, up to 10 minutes",
            "Components": "V, S"
        },
        "Wall Of Light": {
            "Classes": [
                "Sorcerer",
                "Warlock",
                "Wizard"
            ],
            "School": "Evocation",
            "Casting Time": "1 Action",
            "Range": "120 feet",
            "Duration": "Concentration, up to 10 minutes",
            "Components": "V, S, M"
        },
        "Contact Other Plane": {
            "Classes": [
                "Warlock",
                "Wizard"
            ],
            "School": "Divination",
            "Casting Time": "1 Minute (R)",
            "Range": "Self",
            "Duration": "1 minute",
            "Components": "V"
        },
        "Danse Macabre": {
            "Classes": [
                "Warlock",
                "Wizard"
            ],
            "School": "Necromancy",
            "Casting Time": "1 Action",
            "Range": "60 Feet",
            "Duration": "Concentration, up to 1 hour",
            "Components": "V, S"
        },
        "Infernal Calling": {
            "Classes": [
                "Warlock",
                "Wizard"
            ],
            "School": "Conjuration",
            "Casting Time": "1 Minute",
            "Range": "90 feet",
            "Duration": "Concentration, up to 1 hour",
            "Components": "V, S, M"
        },
        "Negative Energy Flood": {
            "Classes": [
                "Warlock",
                "Wizard"
            ],
            "School": "Necromancy",
            "Casting Time": "1 Action",
            "Range": "60 feet",
            "Duration": "Instantaneous",
            "Components": "V, M"
        },
        "Passwall": {
            "Classes": [
                "Wizard"
            ],
            "School": "Transmutation",
            "Casting Time": "1 Action",
            "Range": "30 feet",
            "Duration": "1 hour",
            "Components": "V, S, M"
        },
        "Temporal Shunt": {
            "Classes": [
                "Wizard"
            ],
            "School": "Transmutation - DC",
            "Casting Time": "1 Reaction",
            "Range": "120 feet",
            "Duration": "1 round",
            "Components": "V, S"
        },
        "Wall of Force": {
            "Classes": [
                "Wizard"
            ],
            "School": "Evocation",
            "Casting Time": "1 Action",
            "Range": "120 feet",
            "Duration": "Concentration, up to 10 minutes",
            "Components": "V, S, M"
        }
    },
    "6th Level": {
        "Eyebite": {
            "Classes": [
                "Bard",
                "Sorcerer",
                "Warlock",
                "Wizard"
            ],
            "School": "Necromancy",
            "Casting Time": "1 Action",
            "Range": "Self",
            "Duration": "Concentration, up to 1 minute",
            "Components": "V, S"
        },
        "Find the Path": {
            "Classes": [
                "Bard",
                "Cleric",
                "Druid"
            ],
            "School": "Divination",
            "Casting Time": "1 Minute",
            "Range": "Self",
            "Duration": "Concentration, up to 1 day",
            "Components": "V, S, M"
        },
        "Guards and Wards": {
            "Classes": [
                "Bard",
                "Wizard"
            ],
            "School": "Abjuration",
            "Casting Time": "10 Minutes",
            "Range": "Touch",
            "Duration": "24 hours",
            "Components": "V, S, M"
        },
        "Heroes' Feast": {
            "Classes": [
                "Bard",
                "Cleric",
                "Druid"
            ],
            "School": "Conjuration",
            "Casting Time": "10 Minutes",
            "Range": "30 feet",
            "Duration": "Instantaneous",
            "Components": "V, S, M"
        },
        "Mass Suggestion": {
            "Classes": [
                "Bard",
                "Sorcerer",
                "Warlock",
                "Wizard"
            ],
            "School": "Enchantment",
            "Casting Time": "1 Action",
            "Range": "60 feet",
            "Duration": "24 hours",
            "Components": "V, M"
        },
        "Otto's Irresistible Dance": {
            "Classes": [
                "Bard",
                "Wizard"
            ],
            "School": "Enchantment",
            "Casting Time": "1 Action",
            "Range": "30 feet",
            "Duration": "Concentration, up to 1 minute",
            "Components": "V"
        },
        "Programmed Illusion": {
            "Classes": [
                "Bard",
                "Wizard"
            ],
            "School": "Illusion",
            "Casting Time": "1 Action",
            "Range": "120 feet",
            "Duration": "Until dispelled",
            "Components": "V, S, M"
        },
        "True Seeing": {
            "Classes": [
                "Bard",
                "Cleric",
                "Sorcerer",
                "Warlock",
                "Wizard"
            ],
            "School": "Divination",
            "Casting Time": "1 Action",
            "Range": "Touch",
            "Duration": "1 hour",
            "Components": "V, S, M"
        },
        "Blade Barrier": {
            "Classes": [
                "Cleric"
            ],
            "School": "Evocation",
            "Casting Time": "1 Action",
            "Range": "90 feet",
            "Duration": "Concentration, up to 10 minutes",
            "Components": "V, S"
        },
        "Create Undead": {
            "Classes": [
                "Cleric",
                "Warlock",
                "Wizard"
            ],
            "School": "Necromancy",
            "Casting Time": "1 Minute",
            "Range": "10 feet",
            "Duration": "Instantaneous",
            "Components": "V, S, M"
        },
        "Forbiddance": {
            "Classes": [
                "Cleric"
            ],
            "School": "Abjuration",
            "Casting Time": "10 Minutes (R)",
            "Range": "Touch",
            "Duration": "1 day",
            "Components": "V, S, M"
        },
        "Harm": {
            "Classes": [
                "Cleric"
            ],
            "School": "Necromancy",
            "Casting Time": "1 Action",
            "Range": "60 feet",
            "Duration": "Instantaneous",
            "Components": "V, S"
        },
        "Heal": {
            "Classes": [
                "Cleric",
                "Druid"
            ],
            "School": "Evocation",
            "Casting Time": "1 Action",
            "Range": "60 feet",
            "Duration": "Instantaneous",
            "Components": "V, S"
        },
        "Otherworldly Form (UA)": {
            "Classes": [
                "Cleric",
                "Sorcerer",
                "Warlock",
                "Wizard"
            ],
            "School": "Transmutation",
            "Casting Time": "1 Action",
            "Range": "Self",
            "Duration": "Concentration, up to 1 minute",
            "Components": "V, S, M"
        },
        "Planar Ally": {
            "Classes": [
                "Cleric"
            ],
            "School": "Conjuration",
            "Casting Time": "1 Action",
            "Range": "60 feet",
            "Duration": "Instantaneous",
            "Components": "V, S"
        },
        "Sunbeam": {
            "Classes": [
                "Cleric",
                "Druid",
                "Sorcerer",
                "Wizard"
            ],
            "School": "Evocation",
            "Casting Time": "1 Action",
            "Range": "Self (60-foot line)",
            "Duration": "Concentration, up to 1 minute",
            "Components": "V, S, M"
        },
        "Word of Recall": {
            "Classes": [
                "Cleric"
            ],
            "School": "Conjuration",
            "Casting Time": "1 Action",
            "Range": "5 feet",
            "Duration": "Instantaneous",
            "Components": "V"
        },
        "Bones of the Earth": {
            "Classes": [
                "Druid"
            ],
            "School": "Transmutation",
            "Casting Time": "1 Action",
            "Range": "120 feet",
            "Duration": "Instantaneous",
            "Components": "V, S"
        },
        "Conjure Fey": {
            "Classes": [
                "Druid",
                "Warlock"
            ],
            "School": "Conjuration",
            "Casting Time": "1 Action",
            "Range": "90 feet",
            "Duration": "Concentration, up to 1 hour",
            "Components": "V, S"
        },
        "Druid Grove": {
            "Classes": [
                "Druid"
            ],
            "School": "Abjuration",
            "Casting Time": "10 Minutes",
            "Range": "Touch",
            "Duration": "24 hours",
            "Components": "V, S, M"
        },
        "Flesh to Stone": {
            "Classes": [
                "Druid",
                "Sorcerer",
                "Warlock",
                "Wizard"
            ],
            "School": "Transmutation",
            "Casting Time": "1 Action",
            "Range": "60 feet",
            "Duration": "Concentration, up to 1 minute",
            "Components": "V, S, M"
        },
        "Investiture of Flame": {
            "Classes": [
                "Druid",
                "Sorcerer",
                "Warlock",
                "Wizard"
            ],
            "School": "Transmutation",
            "Casting Time": "1 Action",
            "Range": "Self",
            "Duration": "Concentration, up to 10 minutes",
            "Components": "V, S"
        },
        "Investiture of Ice": {
            "Classes": [
                "Druid",
                "Sorcerer",
                "Warlock",
                "Wizard"
            ],
            "School": "Transmutation",
            "Casting Time": "1 Action",
            "Range": "Self",
            "Duration": "Concentration, up to 10 minutes",
            "Components": "V, S"
        },
        "Investiture of Stone": {
            "Classes": [
                "Druid",
                "Sorcerer",
                "Warlock",
                "Wizard"
            ],
            "School": "Transmutation",
            "Casting Time": "1 Action",
            "Range": "Self",
            "Duration": "Concentration, up to 10 minutes",
            "Components": "V, S"
        },
        "Investiture of Wind": {
            "Classes": [
                "Druid",
                "Sorcerer",
                "Warlock",
                "Wizard"
            ],
            "School": "Transmutation",
            "Casting Time": "1 Action",
            "Range": "Self",
            "Duration": "Concentration, up to 10 minutes",
            "Components": "V, S"
        },
        "Move Earth": {
            "Classes": [
                "Druid",
                "Sorcerer",
                "Wizard"
            ],
            "School": "Transmutation",
            "Casting Time": "1 Action",
            "Range": "120 feet",
            "Duration": "Concentration, up to 2 hours",
            "Components": "V, S, M"
        },
        "Primordial Ward": {
            "Classes": [
                "Druid"
            ],
            "School": "Abjuration",
            "Casting Time": "1 Action",
            "Range": "Self",
            "Duration": "Concentration, up to 1 minute",
            "Components": "V, S"
        },
        "Transport via Plants": {
            "Classes": [
                "Druid"
            ],
            "School": "Conjuration",
            "Casting Time": "1 Action",
            "Range": "10 feet",
            "Duration": "1 round",
            "Components": "V, S"
        },
        "Wall of Thorns": {
            "Classes": [
                "Druid"
            ],
            "School": "Conjuration",
            "Casting Time": "1 Action",
            "Range": "120 feet",
            "Duration": "Concentration, up to 10 minutes",
            "Components": "V, S, M"
        },
        "Wind Walk": {
            "Classes": [
                "Druid"
            ],
            "School": "Transmutation",
            "Casting Time": "1 Minute",
            "Range": "30 feet",
            "Duration": "8 hours",
            "Components": "V, S, M"
        },
        "Arcane Gate": {
            "Classes": [
                "Sorcerer",
                "Warlock",
                "Wizard"
            ],
            "School": "Conjuration",
            "Casting Time": "1 Action",
            "Range": "500 feet",
            "Duration": "Concentration, up to 10 minutes",
            "Components": "V, S"
        },
        "Chain Lightning": {
            "Classes": [
                "Sorcerer",
                "Wizard"
            ],
            "School": "Evocation",
            "Casting Time": "1 Action",
            "Range": "150 feet",
            "Duration": "Instantaneous",
            "Components": "V, S, M"
        },
        "Circle of Death": {
            "Classes": [
                "Sorcerer",
                "Warlock",
                "Wizard"
            ],
            "School": "Necromancy",
            "Casting Time": "1 Action",
            "Range": "150 feet",
            "Duration": "Instantaneous",
            "Components": "V, S, M"
        },
        "Disintegrate": {
            "Classes": [
                "Sorcerer",
                "Wizard"
            ],
            "School": "Transmutation",
            "Casting Time": "1 Action",
            "Range": "60 feet",
            "Duration": "Instantaneous",
            "Components": "V, S, M"
        },
        "Fizban's Platinum Shield (UA)": {
            "Classes": [
                "Sorcerer",
                "Wizard"
            ],
            "School": "Abjuration",
            "Casting Time": "1 Action",
            "Range": "60 Feet",
            "Duration": "Concentration, up to 1 minute",
            "Components": "V, S, M"
        },
        "Globe of Invulnerability": {
            "Classes": [
                "Sorcerer",
                "Wizard"
            ],
            "School": "Abjuration",
            "Casting Time": "1 Action",
            "Range": "Self (10-foot radius)",
            "Duration": "Concentration, up to 1 minute",
            "Components": "V, S, M"
        },
        "Mental Prison": {
            "Classes": [
                "Sorcerer",
                "Warlock",
                "Wizard"
            ],
            "School": "Illusion",
            "Casting Time": "1 Action",
            "Range": "60 feet",
            "Duration": "Concentration, up to 1 minute",
            "Components": "S"
        },
        "Otiluke's Freezing Sphere": {
            "Classes": [
                "Sorcerer",
                "Wizard"
            ],
            "School": "Evocation",
            "Casting Time": "1 Action",
            "Range": "300 feet",
            "Duration": "Instantaneous",
            "Components": "V, S, M"
        },
        "Psychic Crush (UA)": {
            "Classes": [
                "Sorcerer",
                "Warlock",
                "Wizard"
            ],
            "School": "Enchantment",
            "Casting Time": "1 Action",
            "Range": "60 feet",
            "Duration": "1 minute",
            "Components": "V, S"
        },
        "Scatter": {
            "Classes": [
                "Sorcerer",
                "Warlock",
                "Wizard"
            ],
            "School": "Conjuration",
            "Casting Time": "1 Action",
            "Range": "30 feet",
            "Duration": "Instantaneous",
            "Components": "V"
        },
        "Tasha's Otherworldly Guise": {
            "Classes": [
                "Sorcerer",
                "Warlock",
                "Wizard"
            ],
            "School": "Transmutation",
            "Casting Time": "1 Bonus Action",
            "Range": "Self",
            "Duration": "Concentration, up to 1 minute",
            "Components": "V, S, M"
        },
        "Soul Cage": {
            "Classes": [
                "Warlock",
                "Wizard"
            ],
            "School": "Necromancy",
            "Casting Time": "Special",
            "Range": "60 feet",
            "Duration": "8 hours",
            "Components": "V, S, M"
        },
        "Summon Fiend": {
            "Classes": [
                "Warlock",
                "Wizard"
            ],
            "School": "Conjuration",
            "Casting Time": "1 Action",
            "Range": "90 feet",
            "Duration": "Concentration, up to 1 hour",
            "Components": "V, S, M"
        },
        "Contingency": {
            "Classes": [
                "Wizard"
            ],
            "School": "Evocation",
            "Casting Time": "10 Minutes",
            "Range": "Self",
            "Duration": "10 days",
            "Components": "V, S, M"
        },
        "Create Homunculus": {
            "Classes": [
                "Wizard"
            ],
            "School": "Transmutation",
            "Casting Time": "1 Hour",
            "Range": "120 feet",
            "Duration": "Instantaneous",
            "Components": "V, S, M"
        },
        "Drawmij's Instant Summons": {
            "Classes": [
                "Wizard"
            ],
            "School": "Conjuration",
            "Casting Time": "1 Minute (R)",
            "Range": "Touch",
            "Duration": "Until dispelled",
            "Components": "V, S, M"
        },
        "Gravity Fissure": {
            "Classes": [
                "Wizard"
            ],
            "School": "Evocation - DG",
            "Casting Time": "1 Action",
            "Range": "Self (100-foot line)",
            "Duration": "Instantaneous",
            "Components": "V, S, M"
        },
        "Magic Jar": {
            "Classes": [
                "Wizard"
            ],
            "School": "Necromancy",
            "Casting Time": "1 Minute",
            "Range": "Self",
            "Duration": "Until dispelled",
            "Components": "V, S, M"
        },
        "Tenser's Transformation": {
            "Classes": [
                "Wizard"
            ],
            "School": "Transmutation",
            "Casting Time": "Special",
            "Range": "Self",
            "Duration": "Concentration, up to 10 minutes",
            "Components": "V, S, M"
        },
        "Wall of Ice": {
            "Classes": [
                "Wizard"
            ],
            "School": "Evocation",
            "Casting Time": "1 Action",
            "Range": "120 feet",
            "Duration": "Concentration, up to 10 minutes",
            "Components": "V, S, M"
        }
    },
    "7th Level": {
        "Dream of the Blue Veil": {
            "Classes": [
                "Bard",
                "Sorcerer",
                "Warlock",
                "Wizard"
            ],
            "School": "Conjuration",
            "Casting Time": "10 minutes",
            "Range": "20 feet",
            "Duration": "6 hours",
            "Components": "V, S, M"
        },
        "Etherealness": {
            "Classes": [
                "Bard",
                "Cleric",
                "Sorcerer",
                "Warlock",
                "Wizard"
            ],
            "School": "Transmutation",
            "Casting Time": "1 Action",
            "Range": "Self",
            "Duration": "Up to 8 hours",
            "Components": "V, S"
        },
        "Forcecage": {
            "Classes": [
                "Bard",
                "Warlock",
                "Wizard"
            ],
            "School": "Evocation",
            "Casting Time": "1 Action",
            "Range": "100 feet",
            "Duration": "1 hour",
            "Components": "V, S, M"
        },
        "Mirage Arcane": {
            "Classes": [
                "Bard",
                "Druid",
                "Wizard"
            ],
            "School": "Illusion",
            "Casting Time": "10 Minutes",
            "Range": "Sight",
            "Duration": "10 days",
            "Components": "V, S"
        },
        "Mordenkainen's Magnificent Mansion": {
            "Classes": [
                "Bard",
                "Wizard"
            ],
            "School": "Conjuration",
            "Casting Time": "1 Minute",
            "Range": "300 feet",
            "Duration": "24 hours",
            "Components": "V, S, M"
        },
        "Mordenkainen's Sword": {
            "Classes": [
                "Bard",
                "Wizard"
            ],
            "School": "Evocation",
            "Casting Time": "1 Action",
            "Range": "60 feet",
            "Duration": "Concentration, up to 1 minute",
            "Components": "V, S, M"
        },
        "Prismatic Spray": {
            "Classes": [
                "Bard",
                "Sorcerer",
                "Wizard"
            ],
            "School": "Evocation",
            "Casting Time": "1 Action",
            "Range": "Self (60-foot cone)",
            "Duration": "Instantaneous",
            "Components": "V, S"
        },
        "Project Image": {
            "Classes": [
                "Bard",
                "Warlock",
                "Wizard"
            ],
            "School": "Illusion",
            "Casting Time": "1 Action",
            "Range": "500 Miles",
            "Duration": "Concentration, up to 1 day",
            "Components": "V, S, M"
        },
        "Regenerate": {
            "Classes": [
                "Bard",
                "Cleric",
                "Druid"
            ],
            "School": "Transmutation",
            "Casting Time": "1 Minute",
            "Range": "Touch",
            "Duration": "1 hour",
            "Components": "V, S, M"
        },
        "Resurrection": {
            "Classes": [
                "Bard",
                "Cleric"
            ],
            "School": "Necromancy",
            "Casting Time": "1 Hour",
            "Range": "Touch",
            "Duration": "Instantaneous",
            "Components": "V, S, M"
        },
        "Symbol": {
            "Classes": [
                "Bard",
                "Cleric",
                "Druid",
                "Wizard"
            ],
            "School": "Abjuration",
            "Casting Time": "1 Minute",
            "Range": "Touch",
            "Duration": "Until dispelled or triggered",
            "Components": "V, S, M"
        },
        "Teleport": {
            "Classes": [
                "Bard",
                "Sorcerer",
                "Wizard"
            ],
            "School": "Conjuration",
            "Casting Time": "1 Action",
            "Range": "10 feet",
            "Duration": "Instantaneous",
            "Components": "V"
        },
        "Conjure Celestial": {
            "Classes": [
                "Cleric"
            ],
            "School": "Conjuration",
            "Casting Time": "1 Minute",
            "Range": "90 feet",
            "Duration": "Concentration, up to 1 hour",
            "Components": "V, S"
        },
        "Divine Word": {
            "Classes": [
                "Cleric"
            ],
            "School": "Evocation",
            "Casting Time": "1 Bonus Action",
            "Range": "30 feet",
            "Duration": "Instantaneous",
            "Components": "V"
        },
        "Fire Storm": {
            "Classes": [
                "Cleric",
                "Druid",
                "Sorcerer"
            ],
            "School": "Evocation",
            "Casting Time": "1 Action",
            "Range": "150 feet",
            "Duration": "Instantaneous",
            "Components": "V, S"
        },
        "Plane Shift": {
            "Classes": [
                "Cleric",
                "Druid",
                "Sorcerer",
                "Warlock",
                "Wizard"
            ],
            "School": "Conjuration",
            "Casting Time": "1 Action",
            "Range": "Touch",
            "Duration": "Instantaneous",
            "Components": "V, S, M"
        },
        "Temple of the Gods": {
            "Classes": [
                "Cleric"
            ],
            "School": "Conjuration",
            "Casting Time": "1 hour",
            "Range": "120 feet",
            "Duration": "24 hours",
            "Components": "V, S, M"
        },
        "Draconic Transformation (UA)": {
            "Classes": [
                "Druid",
                "Sorcerer",
                "Wizard"
            ],
            "School": "Transmutation",
            "Casting Time": "1 Bonus Action",
            "Range": "Self",
            "Duration": "Concentration, up to 1 minute",
            "Components": "V, S, M"
        },
        "Reverse Gravity": {
            "Classes": [
                "Druid",
                "Sorcerer",
                "Wizard"
            ],
            "School": "Transmutation",
            "Casting Time": "1 Action",
            "Range": "100 feet",
            "Duration": "Concentration, up to 1 minute",
            "Components": "V, S, M"
        },
        "Whirlwind": {
            "Classes": [
                "Druid",
                "Wizard"
            ],
            "School": "Evocation",
            "Casting Time": "1 Action",
            "Range": "300 feet",
            "Duration": "Concentration, up to 1 minute",
            "Components": "V, M"
        },
        "Conjure Hezrou (UA)": {
            "Classes": [
                "Sorcerer",
                "Wizard"
            ],
            "School": "Conjuration",
            "Casting Time": "1 Action",
            "Range": "60 feet",
            "Duration": "Concentration, up to 1 hour",
            "Components": "V, S, M"
        },
        "Crown Of Stars": {
            "Classes": [
                "Sorcerer",
                "Warlock",
                "Wizard"
            ],
            "School": "Conjuration",
            "Casting Time": "1 Action",
            "Range": "Self",
            "Duration": "1 hour",
            "Components": "V, S"
        },
        "Delayed Blast Fireball": {
            "Classes": [
                "Sorcerer",
                "Wizard"
            ],
            "School": "Evocation",
            "Casting Time": "1 Action",
            "Range": "150 feet",
            "Duration": "Concentration, up to 1 minute",
            "Components": "V, S, M"
        },
        "Finger of Death": {
            "Classes": [
                "Sorcerer",
                "Warlock",
                "Wizard"
            ],
            "School": "Necromancy",
            "Casting Time": "1 Action",
            "Range": "60 feet",
            "Duration": "Instantaneous",
            "Components": "V, S"
        },
        "Power Word: Pain": {
            "Classes": [
                "Sorcerer",
                "Warlock",
                "Wizard"
            ],
            "School": "Enchantment",
            "Casting Time": "1 Action",
            "Range": "60 feet",
            "Duration": "Instantaneous",
            "Components": "V"
        },
        "Create Magen": {
            "Classes": [
                "Wizard"
            ],
            "School": "Transmutation",
            "Casting Time": "1 Hour",
            "Range": "Touch",
            "Duration": "Instantaneous",
            "Components": "V, S, M"
        },
        "Sequester": {
            "Classes": [
                "Wizard"
            ],
            "School": "Transmutation",
            "Casting Time": "1 Action",
            "Range": "Touch",
            "Duration": "Until dispelled",
            "Components": "V, S, M"
        },
        "Simulacrum": {
            "Classes": [
                "Wizard"
            ],
            "School": "Illusion",
            "Casting Time": "12 hours",
            "Range": "Touch",
            "Duration": "Until dispelled",
            "Components": "V, S, M"
        },
        "Tether Essence": {
            "Classes": [
                "Wizard"
            ],
            "School": "Necromancy - D",
            "Casting Time": "1 Action",
            "Range": "60 feet",
            "Duration": "Concentration, up to 1 hour",
            "Components": "V, S, M"
        }
    },
    "8th Level": {
        "Antipathy/Sympathy": {
            "Classes": [
                "Bard",
                "Druid",
                "Wizard"
            ],
            "School": "Enchantment",
            "Casting Time": "1 Hour",
            "Range": "60 feet",
            "Duration": "10 Days",
            "Components": "V, S, M"
        },
        "Dominate Monster": {
            "Classes": [
                "Bard",
                "Sorcerer",
                "Warlock",
                "Wizard"
            ],
            "School": "Enchantment",
            "Casting Time": "1 Action",
            "Range": "60 feet",
            "Duration": "Concentration, up to 1 hour",
            "Components": "V, S"
        },
        "Feeblemind": {
            "Classes": [
                "Bard",
                "Druid",
                "Warlock",
                "Wizard"
            ],
            "School": "Enchantment",
            "Casting Time": "1 Action",
            "Range": "150 feet",
            "Duration": "Instantaneous",
            "Components": "V, S, M"
        },
        "Glibness": {
            "Classes": [
                "Bard",
                "Warlock"
            ],
            "School": "Transmutation",
            "Casting Time": "1 Action",
            "Range": "Self",
            "Duration": "1 hour",
            "Components": "V"
        },
        "Mind Blank": {
            "Classes": [
                "Bard",
                "Wizard"
            ],
            "School": "Abjuration",
            "Casting Time": "1 Action",
            "Range": "Touch",
            "Duration": "24 hours",
            "Components": "V, S"
        },
        "Power Word: Stun": {
            "Classes": [
                "Bard",
                "Sorcerer",
                "Warlock",
                "Wizard"
            ],
            "School": "Enchantment",
            "Casting Time": "1 Action",
            "Range": "60 feet",
            "Duration": "Instantaneous",
            "Components": "V, S"
        },
        "Antimagic Field": {
            "Classes": [
                "Cleric",
                "Wizard"
            ],
            "School": "Abjuration",
            "Casting Time": "1 Action",
            "Range": "Self (10-foot radius sphere)",
            "Duration": "Concentration, up to 1 hour",
            "Components": "V, S, M"
        },
        "Control Weather": {
            "Classes": [
                "Cleric",
                "Druid",
                "Wizard"
            ],
            "School": "Transmutation",
            "Casting Time": "10 Minutes",
            "Range": "Self (5 mile radius)",
            "Duration": "Concentration, Up to 8 hours",
            "Components": "V, S, M"
        },
        "Earthquake": {
            "Classes": [
                "Cleric",
                "Druid",
                "Sorcerer"
            ],
            "School": "Evocation",
            "Casting Time": "1 Action",
            "Range": "500 feet",
            "Duration": "Concentration, up to 1 minute",
            "Components": "V, S, M"
        },
        "Holy Aura": {
            "Classes": [
                "Cleric"
            ],
            "School": "Abjuration",
            "Casting Time": "1 Action",
            "Range": "Self",
            "Duration": "Concentration, up to 1 minute",
            "Components": "V, S, M"
        },
        "Sunburst": {
            "Classes": [
                "Cleric",
                "Druid",
                "Sorcerer",
                "Wizard"
            ],
            "School": "Evocation",
            "Casting Time": "1 Action",
            "Range": "150 feet",
            "Duration": "Instantaneous",
            "Components": "V, S, M"
        },
        "Animal Shapes": {
            "Classes": [
                "Druid"
            ],
            "School": "Transmutation",
            "Casting Time": "1 Action",
            "Range": "30 feet",
            "Duration": "Concentration, up to 24 hours",
            "Components": "V, S"
        },
        "Incendiary Cloud": {
            "Classes": [
                "Druid",
                "Sorcerer",
                "Wizard"
            ],
            "School": "Conjuration",
            "Casting Time": "1 Action",
            "Range": "150 feet",
            "Duration": "Concentration, up to 1 minute",
            "Components": "V, S"
        },
        "Tsunami": {
            "Classes": [
                "Druid"
            ],
            "School": "Conjuration",
            "Casting Time": "1 Action",
            "Range": "Sight",
            "Duration": "Concentration, up to 6 rounds",
            "Components": "V, S"
        },
        "Abi-Dalzim's Horrid Wilting": {
            "Classes": [
                "Sorcerer",
                "Warlock",
                "Wizard"
            ],
            "School": "Necromancy",
            "Casting Time": "1 Action",
            "Range": "150 feet",
            "Duration": "Instantaneous",
            "Components": "V, S, M"
        },
        "Demiplane": {
            "Classes": [
                "Warlock",
                "Wizard"
            ],
            "School": "Conjuration",
            "Casting Time": "1 Action",
            "Range": "60 feet",
            "Duration": "1 Hour",
            "Components": "S"
        },
        "Maddening Darkness": {
            "Classes": [
                "Warlock",
                "Wizard"
            ],
            "School": "Evocation",
            "Casting Time": "1 Action",
            "Range": "150 feet",
            "Duration": "Concentration, up to 10 minutes",
            "Components": "V, M"
        },
        "Clone": {
            "Classes": [
                "Wizard"
            ],
            "School": "Necromancy",
            "Casting Time": "1 Hour",
            "Range": "Touch",
            "Duration": "Instantaneous",
            "Components": "V, S, M"
        },
        "Dark Star": {
            "Classes": [
                "Wizard"
            ],
            "School": "Evocation - DG",
            "Casting Time": "1 Action",
            "Range": "150 Feet",
            "Duration": "Concentration, up to 1 minute",
            "Components": "V, S, M"
        },
        "Illusory Dragon": {
            "Classes": [
                "Wizard"
            ],
            "School": "Illusion",
            "Casting Time": "1 Action",
            "Range": "120 feet",
            "Duration": "Concentration, up to 1 minute",
            "Components": "S"
        },
        "Maze": {
            "Classes": [
                "Wizard"
            ],
            "School": "Conjuration",
            "Casting Time": "1 Action",
            "Range": "60 feet",
            "Duration": "Concentration, up to 10 minutes",
            "Components": "V, S"
        },
        "Mighty Fortress": {
            "Classes": [
                "Wizard"
            ],
            "School": "Conjuration",
            "Casting Time": "1 Minute",
            "Range": "1 mile",
            "Duration": "Instantaneous",
            "Components": "V, S, M"
        },
        "Reality Break": {
            "Classes": [
                "Wizard"
            ],
            "School": "Conjuration - DC",
            "Casting Time": "1 Action",
            "Range": "60 feet",
            "Duration": "Concentration, up to 1 minute",
            "Components": "V, S, M"
        },
        "Telepathy": {
            "Classes": [
                "Wizard"
            ],
            "School": "Evocation",
            "Casting Time": "1 Action",
            "Range": "Unlimited",
            "Duration": "24 hours",
            "Components": "V, S, M"
        }
    },
    "9th Level": {
        "Foresight": {
            "Classes": [
                "Bard",
                "Druid",
                "Warlock",
                "Wizard"
            ],
            "School": "Divination",
            "Casting Time": "1 Minute",
            "Range": "Touch",
            "Duration": "8 hours",
            "Components": "V, S, M"
        },
        "Mass Polymorph": {
            "Classes": [
                "Bard",
                "Sorcerer",
                "Wizard"
            ],
            "School": "Transmutation",
            "Casting Time": "1 Action",
            "Range": "120 feet",
            "Duration": "Concentration up to 1 hour",
            "Components": "V, S, M"
        },
        "Power Word: Heal": {
            "Classes": [
                "Bard",
                "Cleric"
            ],
            "School": "Evocation",
            "Casting Time": "1 Action",
            "Range": "Touch",
            "Duration": "Instantaneous",
            "Components": "V, S"
        },
        "Power Word: Kill": {
            "Classes": [
                "Bard",
                "Sorcerer",
                "Warlock",
                "Wizard"
            ],
            "School": "Enchantment",
            "Casting Time": "1 Action",
            "Range": "60 feet",
            "Duration": "Instantaneous",
            "Components": "V"
        },
        "Prismatic Wall": {
            "Classes": [
                "Bard",
                "Wizard"
            ],
            "School": "Abjuration",
            "Casting Time": "1 Action",
            "Range": "60 feet",
            "Duration": "10 minutes",
            "Components": "V, S"
        },
        "Psychic Scream": {
            "Classes": [
                "Bard",
                "Sorcerer",
                "Warlock",
                "Wizard"
            ],
            "School": "Enchantment",
            "Casting Time": "1 Action",
            "Range": "90 feet",
            "Duration": "Instantaneous",
            "Components": "S"
        },
        "True Polymorph": {
            "Classes": [
                "Bard",
                "Warlock",
                "Wizard"
            ],
            "School": "Transmutation",
            "Casting Time": "1 Action",
            "Range": "30 feet",
            "Duration": "Concentration up to 1 hour",
            "Components": "V, S, M"
        },
        "Astral Projection": {
            "Classes": [
                "Cleric",
                "Warlock",
                "Wizard"
            ],
            "School": "Evocation",
            "Casting Time": "1 Hour",
            "Range": "10 feet",
            "Duration": "Special",
            "Components": "V, S, M"
        },
        "Gate": {
            "Classes": [
                "Cleric",
                "Sorcerer",
                "Wizard"
            ],
            "School": "Conjuration",
            "Casting Time": "1 Action",
            "Range": "60 feet",
            "Duration": "Concentration up to 1 minute",
            "Components": "V, S, M"
        },
        "Mass Heal": {
            "Classes": [
                "Cleric"
            ],
            "School": "Evocation",
            "Casting Time": "1 Action",
            "Range": "60 feet",
            "Duration": "Instantaneous",
            "Components": "V, S"
        },
        "True Resurrection": {
            "Classes": [
                "Cleric",
                "Druid"
            ],
            "School": "Necromancy",
            "Casting Time": "1 Hour",
            "Range": "Touch",
            "Duration": "Instantaneous",
            "Components": "V, S, M"
        },
        "Shapechange": {
            "Classes": [
                "Druid",
                "Warlock",
                "Wizard"
            ],
            "School": "Transmutation",
            "Casting Time": "1 Action",
            "Range": "Self",
            "Duration": "Concentration up to 1 hour",
            "Components": "V, S, M"
        },
        "Storm of Vengeance": {
            "Classes": [
                "Druid"
            ],
            "School": "Conjuration",
            "Casting Time": "1 Action",
            "Range": "Sight",
            "Duration": "Concentration up to 1 minute",
            "Components": "V, S"
        },
        "Blade of Disaster": {
            "Classes": [
                "Sorcerer",
                "Warlock",
                "Wizard"
            ],
            "School": "Conjuration",
            "Casting Time": "1 Bonus Action",
            "Range": "60 feet",
            "Duration": "Concentration up to 1 minute",
            "Components": "V, S"
        },
        "Meteor Swarm": {
            "Classes": [
                "Sorcerer",
                "Wizard"
            ],
            "School": "Evocation",
            "Casting Time": "1 Action",
            "Range": "1 mile",
            "Duration": "Instantaneous",
            "Components": "V, S"
        },
        "Time Stop": {
            "Classes": [
                "Sorcerer",
                "Wizard"
            ],
            "School": "Transmutation",
            "Casting Time": "1 Action",
            "Range": "Self",
            "Duration": "Instantaneous",
            "Components": "V"
        },
        "Wish": {
            "Classes": [
                "Sorcerer",
                "Wizard"
            ],
            "School": "Conjuration",
            "Casting Time": "1 Action",
            "Range": "Self",
            "Duration": "Instantaneous",
            "Components": "V"
        },
        "Imprisonment": {
            "Classes": [
                "Warlock",
                "Wizard"
            ],
            "School": "Abjuration",
            "Casting Time": "1 Minute",
            "Range": "30 feet",
            "Duration": "Until dispelled",
            "Components": "V, S, M"
        },
        "Weird": {
            "Classes": [
                "Warlock",
                "Wizard"
            ],
            "School": "Illusion",
            "Casting Time": "1 Action",
            "Range": "120 feet",
            "Duration": "Concentration up to 1 minute",
            "Components": "V, S"
        },
        "Invulnerability": {
            "Classes": [
                "Wizard"
            ],
            "School": "Abjuration",
            "Casting Time": "1 Action",
            "Range": "Self",
            "Duration": "Concentration up to 10 minutes",
            "Components": "V, S, M"
        },
        "Ravenous Void": {
            "Classes": [
                "Wizard"
            ],
            "School": "Evocation - DG",
            "Casting Time": "1 Action",
            "Range": "1,000 feet",
            "Duration": "Concentration, up to 1 minute",
            "Components": "V, S, M"
        },
        "Time Ravage": {
            "Classes": [
                "Wizard"
            ],
            "School": "Necromancy - DC",
            "Casting Time": "1 Action",
            "Range": "90 feet",
            "Duration": "Instantaneous",
            "Components": "V, S, M"
        }
    }
};

module.exports = spells;