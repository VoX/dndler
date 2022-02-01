import pandas as pd
import json

## BACKGROUNDS CSV TO JSON
# read in csv as df
backgrounds_df = pd.read_csv('backgrounds.csv', index_c)

## NAMES CSV TO JSON
# read in names csv
names = pd.read_csv('./src/data/names.csv')
# ignore the unnamed index column
names = names.iloc[:,0:2]
# create names dict by first, last name
names_dict = {
    'First': list(names[names['First/Last']=='First']['Name'].unique()),
    'Last': list(names[names['First/Last']=='Last']['Name'].unique())
    }
# write to json
names_json = json.dumps(names_dict)
# write to file
with open('./src/data/names.json', 'w') as outfile:
    outfile.write(names_json)

## BACKGROUNDS CSV TO JSON
# read in backgrounds csv, prevent encoding error
backgrounds = pd.read_csv('./src/data/backgrounds.csv', encoding='unicode_escape')
# create empty dict
bg_dict = {}
# create keys for backgrounds, items within backgrounds
for bg in backgrounds['Background']:
    if bg not in bg_dict.keys():
        bg_dict[bg] = {}
    for item in backgrounds[backgrounds['Background']==bg]['Item']:
        if item not in bg_dict[bg].keys():
            bg_dict[bg][item] = []
# iterate every row, adding descriptions to appropriate bg/item pair
for index, row in backgrounds.iterrows():
    bg_dict[row['Background']][row['Item']].append(row['Description'])
# now import csv for background gear
bg_gear = pd.read_csv('./src/data/backgrounds_gear.csv')
# iterate every row, adding gear to appropriate bg, create new sub-key
for index, row in bg_gear.iterrows():
    bg_dict[row['Name']]['Gear'] = row['Gear'].split(',')
# write to json
bg_json = json.dumps(bg_dict)
# write to file
with open('./src/data/backgrounds.json', 'w') as outfile:
    outfile.write(bg_json)

## WEAPONS CSV TO JSON
# read in weapons csv
weapons = pd.read_csv('./src/data/weapons.csv')
weapons.fillna('', inplace=True)
# create empty weapons dict
weapons_dict = {}
# create keys for weapon class and name
for weaponclass in weapons['Weapon Class']:
    if weaponclass not in weapons_dict.keys():
        weapons_dict[weaponclass] = {}
    for weapon in weapons[weapons['Weapon Class']==weaponclass]['Name']:
        if weapon not in weapons_dict[weaponclass].keys():
            weapons_dict[weaponclass][weapon] = {}
# iterate every row, adding weapon details
for index, row in weapons.iterrows():
    weapons_dict[row['Weapon Class']][row['Name'] = {
        'Cost': row['Cost'],
        'Damage Formula': row['Damage Formula'],
        'Damage Type': row['Damage Type'],
        'Weight': row['Weight'],
        'Properties': row['Properties'].split(',')
    }
# write to json
weapons_json = json.dumps(weapons_dict)
# write to file
with open('./src/data/weapons.json', 'w') as outfile:
    outfile.write(weapons_json)

## SPELLS CSV TO JSON
# import data
spells = pd.read_csv('./src/data/spells.csv')
## SPELLCASTER CLASS AS HIGHEST TIER
# create empty dict
spells_dict = {}
# create keys for spellcaster class and level
for classchoice in spells['Class']:
    if classchoice not in spells_dict.keys():
        spells_dict[classchoice] = {}
    for level in spells[spells['Class']==classchoice]['Level']:
        if level not in spells_dict[classchoice].keys():
            spells_dict[classchoice][level] = {}
# iterate every row, adding spell details for class/level pair
for index, row in spells.iterrows():
    spells_dict[row['Class']][row['Level']][row['Name']] = {
        'School': row['School'],
        'Casting Time': row['Casting Time'],
        'Range': row['Range'],
        'Duration': row['Duration'],
        'Components': row['Components']
    }
# write to json
spells_json = json.dumps(spells_dict)
# write to file
with open('./src/data/spells.json', 'w') as outfile:
    outfile.write(spells_json)

## SPELLS CSV TO JSON
# import data
spells = pd.read_csv('./src/data/spells.csv')
## SPELL LEVEL AS HIGHEST TIER
# create empty dict
spells_dict = {}
# create keys for spell level, spell name
for level in spells['Level']:
    if level not in spells_dict.keys():
        spells_dict[level] = {}
    for spell in spells[spells['Level']==level]['Name']:
        if spell not in spells_dict[level].keys():
            spells_dict[level][spell] = {}
# iterate every row, adding spell details
for index, row in spells.iterrows():
    spells_dict[row['Level']][row['Name']] = {
        'Classes': list(spells[spells['Name']==row['Name']]['Class'].unique()),
        'School': row['School'],
        'Casting Time': row['Casting Time'],
        'Range': row['Range'],
        'Duration': row['Duration'],
        'Components': row['Components']
    }
# write to json
spells_json = json.dumps(spells_dict)
# write to file
with open('./src/data/spells.json', 'w') as outfile:
    outfile.write(spells_json)

## SOURCEBOOKS TO JSON
# read necessary csv
backgrounds = pd.read_csv('./src/data/backgrounds.csv', encoding='unicode_escape')
races = pd.read_csv('./src/data/races.csv')
# create empty dict
sourcebooks = {}
# create keys for each sourcebook based on backgrounds
for source in backgrounds['Source']:
    if source not in sourcebooks.keys():
        sourcebooks[source] = {
            'Backgrounds': list(backgrounds[backgrounds['Source']==source]['Background'].unique()),
            'Classes': [],
            'Races': [],
            'Spells': []
            }
# create keys for each sourcebook based on races
for source in races['Source']:
    if source not in sourcebooks.keys():
        sourcebooks[source] = {
            'Backgrounds': [],
            'Classes': [],
            'Races': list(races[races['Source']==source]['Race'].unique()),
            'Spells': []
            }
    else :
        sourcebooks[source]['Races'] = list(races[races['Source']==source]['Race'].unique())
# manually add PHB classes
sourcebooks['Player\'s Handbook']['Classes'] = ['Barbarian', 'Bard', 'Cleric', 'Druid', 'Fighter', 'Monk', 'Paladin', 'Ranger', 'Rogue', 'Sorcerer', 'Warlock', 'Wizard']
# manually add Tasha sourcebook
sourcebooks['Tasha\'s Cauldron of Everything'] = {
    'Backgrounds': [],
    'Classes': ['Artificer'],
    'Races': [],
    'Spells': []
    }
# write to json
sourcebooks_json = json.dumps(sourcebooks)
# write to file
with open('./src/data/sourcebooks.json', 'w') as outfile:
    outfile.write(sourcebooks_json)

## CLASS FEATURES TO JSON
# import csv of class features
classfeatures = pd.read_csv('./src/data/features_and_spellcasting.csv')
# create empty dict
classfeatures_dict = {}
# for each class, create sub_df and fill dict with per-level info
for classchoice in classfeatures['Class'].unique():
    if classchoice not in classfeatures_dict.keys():
        classfeatures_dict[classchoice] = {}
        sub_df = classfeatures[classfeatures['Class']==classchoice].dropna(axis=1, how='all')
        sub_df.fillna('', inplace=True)
        for index, row in sub_df.iterrows():
            classfeatures_dict[classchoice][row['Level']] = {
                'Proficiency Bonus': row['Proficiency Bonus'],
                'Features': row['Features'].split(',')
            }
# write to json
classfeatures_json = json.dumps(classfeatures_dict)
# write to file
with open('./src/data/classFeatures.json', 'w') as outfile:
    outfile.write(classfeatures_json)