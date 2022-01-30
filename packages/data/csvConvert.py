import pandas as pd
import json

### TURN features_and_spellcasting.csv INTO JSON OBJECT
def classfeatures_to_json():
    # read csv
    classfeatures = pd.read_csv('features_and_spellcasting.csv')
    # create empty dict to be filled
    classFeatures = {
        'Artificer': {},
        'Barbarian': {},
        'Bard': {},
        'Cleric': {},
        'Druid': {},
        'Fighter': {},
        'Monk': {},
        'Paladin': {},
        'Ranger': {},
        'Rogue': {},
        'Sorcerer': {},
        'Warlock': {},
        'Wizard': {}
    }
    # ARTIFICER
    # make class df
    classdf = classfeatures[classfeatures['Class']=='Artificer'].dropna(axis=1, how='all').fillna('').replace('-', '')
    # iterate rows, building dictionary for class key
    for index, row in classdf.iterrows():
        classFeatures[row['Class']][row['Level']] = {
            "Features": row['Features'].split(','),
            "Infusions Known": row['Infusions Known'],
            "Infused Items": row['Infused Items'],
            "Cantrips Known": str(int(row['Cantrips Known'])),
            "1st Level Slots": row['1st Level'],
            "2nd Level Slots": row['2nd Level'],
            "3rd Level Slots": row['3rd Level'],
            "4th Level Slots": row['4th Level'],
            "5th Level Slots": row['5th Level']
        }
    # BARBARIAN
    # make class df
    classdf = classfeatures[classfeatures['Class']=='Barbarian'].dropna(axis=1, how='all').fillna('').replace('-', '')
    # iterate rows, building dictionary for class key
    for index, row in classdf.iterrows():
        classFeatures[row['Class']][row['Level']] = {
            "Features": row['Features'].split(','),
            "Rages": row['Rages'],
            "Rage Damage": str(int(row['Rage Damage'])),
        }
    # BARD
    # make class df
    classdf = classfeatures[classfeatures['Class']=='Bard'].dropna(axis=1, how='all').fillna('').replace('-', '')
    # iterate rows, building dictionary for class key
    for index, row in classdf.iterrows():
        classFeatures[row['Class']][row['Level']] = {
            "Features": row['Features'].split(','),
            "Cantrips Known": str(int(row['Cantrips Known'])),
            "Spells Known": row['Spells Known'],
            "1st Level Slots": row['1st Level'],
            "2nd Level Slots": row['2nd Level'],
            "3rd Level Slots": row['3rd Level'],
            "4th Level Slots": row['4th Level'],
            "5th Level Slots": row['5th Level'],
            "6th Level Slots": row['6th Level'],
            "7th Level Slots": row['7th Level'],
            "8th Level Slots": row['8th Level'],
            "9th Level Slots": row['9th Level']
        }
    # CLERIC
    # make class df
    classdf = classfeatures[classfeatures['Class']=='Cleric'].dropna(axis=1, how='all').fillna('').replace('-', '')
    # iterate rows, building dictionary for class key
    for index, row in classdf.iterrows():
        classFeatures[row['Class']][row['Level']] = {
            "Features": row['Features'].split(','),
            "Cantrips Known": str(int(row['Cantrips Known'])),
            "1st Level Slots": row['1st Level'],
            "2nd Level Slots": row['2nd Level'],
            "3rd Level Slots": row['3rd Level'],
            "4th Level Slots": row['4th Level'],
            "5th Level Slots": row['5th Level'],
            "6th Level Slots": row['6th Level'],
            "7th Level Slots": row['7th Level'],
            "8th Level Slots": row['8th Level'],
            "9th Level Slots": row['9th Level']
        }
    # DRUID
    # make class df
    classdf = classfeatures[classfeatures['Class']=='Druid'].dropna(axis=1, how='all').fillna('').replace('-', '')
    # iterate rows, building dictionary for class key
    for index, row in classdf.iterrows():
        classFeatures[row['Class']][row['Level']] = {
            "Features": row['Features'].split(','),
            "Cantrips Known": str(int(row['Cantrips Known'])),
            "1st Level Slots": row['1st Level'],
            "2nd Level Slots": row['2nd Level'],
            "3rd Level Slots": row['3rd Level'],
            "4th Level Slots": row['4th Level'],
            "5th Level Slots": row['5th Level'],
            "6th Level Slots": row['6th Level'],
            "7th Level Slots": row['7th Level'],
            "8th Level Slots": row['8th Level'],
            "9th Level Slots": row['9th Level']
        }
    # FIGHTER
    # make class df
    classdf = classfeatures[classfeatures['Class']=='Fighter'].dropna(axis=1, how='all').fillna('').replace('-', '')
    # iterate rows, building dictionary for class key
    for index, row in classdf.iterrows():
        classFeatures[row['Class']][row['Level']] = {
            "Features": row['Features'].split(','),
        }
    # MONK
    # make class df
    classdf = classfeatures[classfeatures['Class']=='Monk'].dropna(axis=1, how='all').fillna('').replace('-', '')
    # iterate rows, building dictionary for class key
    for index, row in classdf.iterrows():
        classFeatures[row['Class']][row['Level']] = {
            "Features": row['Features'].split(','),
            "Martial Arts": row['Martial Arts'],
            "Ki Points": row['Ki Points'],
            "Unarmored Movement": row['Unarmored Movement'],
        }
    # PALADIN
    # make class df
    classdf = classfeatures[classfeatures['Class']=='Paladin'].dropna(axis=1, how='all').fillna('').replace('-', '')
    # iterate rows, building dictionary for class key
    for index, row in classdf.iterrows():
        classFeatures[row['Class']][row['Level']] = {
            "Features": row['Features'].split(','),
            "1st Level Slots": row['1st Level'],
            "2nd Level Slots": row['2nd Level'],
            "3rd Level Slots": row['3rd Level'],
            "4th Level Slots": row['4th Level'],
            "5th Level Slots": row['5th Level']
        }
    # RANGER
    # make class df
    classdf = classfeatures[classfeatures['Class']=='Ranger'].dropna(axis=1, how='all').fillna('').replace('-', '')
    # iterate rows, building dictionary for class key
    for index, row in classdf.iterrows():
        classFeatures[row['Class']][row['Level']] = {
            "Features": row['Features'].split(','),
            "1st Level Slots": row['1st Level'],
            "2nd Level Slots": row['2nd Level'],
            "3rd Level Slots": row['3rd Level'],
            "4th Level Slots": row['4th Level'],
            "5th Level Slots": row['5th Level']
        }
    # ROGUE
    # make class df
    classdf = classfeatures[classfeatures['Class']=='Rogue'].dropna(axis=1, how='all').fillna('').replace('-', '')
    # iterate rows, building dictionary for class key
    for index, row in classdf.iterrows():
        classFeatures[row['Class']][row['Level']] = {
            "Features": row['Features'].split(','),
            "Sneak Attack": row['Sneak Attack'],
        }
    # SORCERER
    # make class df
    classdf = classfeatures[classfeatures['Class']=='Sorcerer'].dropna(axis=1, how='all').fillna('').replace('-', '')
    # iterate rows, building dictionary for class key
    for index, row in classdf.iterrows():
        classFeatures[row['Class']][row['Level']] = {
            "Features": row['Features'].split(','),
            "Sorcery Points": row['Sorcery Points'],
            "Cantrips Known": str(int(row['Cantrips Known'])),
            "1st Level Slots": row['1st Level'],
            "2nd Level Slots": row['2nd Level'],
            "3rd Level Slots": row['3rd Level'],
            "4th Level Slots": row['4th Level'],
            "5th Level Slots": row['5th Level'],
            "6th Level Slots": row['6th Level'],
            "7th Level Slots": row['7th Level'],
            "8th Level Slots": row['8th Level'],
            "9th Level Slots": row['9th Level']
        }
    # WARLOCK
    # make class df
    classdf = classfeatures[classfeatures['Class']=='Warlock'].dropna(axis=1, how='all').fillna('').replace('-', '')
    # iterate rows, building dictionary for class key
    for index, row in classdf.iterrows():
        classFeatures[row['Class']][row['Level']] = {
            "Features": row['Features'].split(','),
            "Invocations Known": row['Invocations Known'],
            "Cantrips Known": str(int(row['Cantrips Known'])),
            "Spells Known": row['Spells Known'],
            "Spell Slots": str(int(row['Spell Slots'])),
            "Slot Level": row['Slot Level'],
        }
    # WIZARD
    # make class df
    classdf = classfeatures[classfeatures['Class']=='Wizard'].dropna(axis=1, how='all').fillna('').replace('-', '')
    # iterate rows, building dictionary for class key
    for index, row in classdf.iterrows():
        classFeatures[row['Class']][row['Level']] = {
            "Features": row['Features'].split(','),
            "Cantrips Known": str(int(row['Cantrips Known'])),
            "1st Level Slots": row['1st Level'],
            "2nd Level Slots": row['2nd Level'],
            "3rd Level Slots": row['3rd Level'],
            "4th Level Slots": row['4th Level'],
            "5th Level Slots": row['5th Level'],
            "6th Level Slots": row['6th Level'],
            "7th Level Slots": row['7th Level'],
            "8th Level Slots": row['8th Level'],
            "9th Level Slots": row['9th Level']
        }
    classfeaturesjson = json.dumps(classFeatures)
    with open("classFeatures.json", "w") as outfile:
        outfile.write(classfeaturesjson)

### ONLY UNCOMMENT BELOW WHEN ACTUALLY INTENDING TO EXPORT JSON FILES
# classfeatures_to_json()