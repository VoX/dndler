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
        }
    # CLERIC
    # make class df
    classdf = classfeatures[classfeatures['Class']=='Cleric'].dropna(axis=1, how='all').fillna('').replace('-', '')
    # iterate rows, building dictionary for class key
    for index, row in classdf.iterrows():
        classFeatures[row['Class']][row['Level']] = {
            "Features": row['Features'].split(','),
        }
    # DRUID
    # make class df
    classdf = classfeatures[classfeatures['Class']=='Druid'].dropna(axis=1, how='all').fillna('').replace('-', '')
    # iterate rows, building dictionary for class key
    for index, row in classdf.iterrows():
        classFeatures[row['Class']][row['Level']] = {
            "Features": row['Features'].split(','),
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
        }
    # RANGER
    # make class df
    classdf = classfeatures[classfeatures['Class']=='Ranger'].dropna(axis=1, how='all').fillna('').replace('-', '')
    # iterate rows, building dictionary for class key
    for index, row in classdf.iterrows():
        classFeatures[row['Class']][row['Level']] = {
            "Features": row['Features'].split(','),
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
        }
    # WARLOCK
    # make class df
    classdf = classfeatures[classfeatures['Class']=='Warlock'].dropna(axis=1, how='all').fillna('').replace('-', '')
    # iterate rows, building dictionary for class key
    for index, row in classdf.iterrows():
        classFeatures[row['Class']][row['Level']] = {
            "Features": row['Features'].split(','),
            "Invocations Known": row['Invocations Known'],
        }
    # WIZARD
    # make class df
    classdf = classfeatures[classfeatures['Class']=='Wizard'].dropna(axis=1, how='all').fillna('').replace('-', '')
    # iterate rows, building dictionary for class key
    for index, row in classdf.iterrows():
        classFeatures[row['Class']][row['Level']] = {
            "Features": row['Features'].split(','),
        }
    classfeaturesjson = json.dumps(classFeatures)
    with open("classFeatures.json", "w") as outfile:
        outfile.write(classfeaturesjson)

### ONLY UNCOMMENT BELOW WHEN ACTUALLY INTENDING TO EXPORT JSON FILES
# classfeatures_to_json()