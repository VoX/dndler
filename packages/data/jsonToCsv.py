import pandas as pd
import json

## BACKGROUNDS JSON TO CSV
def backgrounds_to_csv():
    # read in json file as dict
    with open('backgrounds.json') as json_file:
        backgrounds = json.load(json_file)
    # turn dict into df
    backgrounds_df = pd.DataFrame.from_dict(backgrounds, 'index')
    # write df to csv
    backgrounds_df.to_csv('backgrounds.csv')

## BACKGROUNDTRAITS JSON TO CSV
def backgroundTraits_to_csv():
    # read in json file as dict
    with open('backgroundTraits.json') as json_file:
        backgroundTraits = json.load(json_file)
    # turn dict into df
    backgroundTraits_df = pd.DataFrame.from_dict(backgroundTraits, 'index')
    # write df to csv
    backgroundTraits_df.to_csv('backgroundTraits.csv')

## CLASSES JSON TO CSV
def classes_to_csv():
    # read in json file as dict
    with open('classes.json') as json_file:
        classes = json.load(json_file)
    # turn dict into df
    classes_df = pd.DataFrame.from_dict(classes, 'index')
    # write df to csv
    classes_df.to_csv('classes.csv')

## CLASSFEATURES JSON TO CSV
def classFeatures_to_csv():
    # read in json file as dict
    with open('classFeatures.json') as json_file:
        classFeatures = json.load(json_file)
    # turn dict into df
    classFeatures_df = pd.DataFrame.from_dict(classFeatures, 'index')
    # write df to csv
    classFeatures_df.to_csv('classFeatures.csv')

## EQUIPMENT JSON TO CSV
## THIS ONE DOESN'T WORK
def equipment_to_csv():
    # read in json file as dict
    with open('equipment.json') as json_file:
        equipment = json.load(json_file)
    # turn dict into df
    equipment_df = pd.DataFrame.from_dict(equipment, 'index')
    # write df to csv
    equipment_df.to_csv('equipment.csv')

## NAMES JSON TO CSV
def names_to_csv():
    # read in json file as dict
    with open('names.json') as json_file:
        names = json.load(json_file)
    # turn dict into df
    names_df = pd.DataFrame.from_dict(names, 'index')
    # write df to csv
    names_df.to_csv('names.csv')

## RACES JSON TO CSV
def races_to_csv():
    # read in json file as dict
    with open('races.json') as json_file:
        races = json.load(json_file)
    # turn dict into df
    races_df = pd.DataFrame.from_dict(races, 'index')
    # write df to csv
    races_df.to_csv('races.csv')

## SOURCEBOOKS JSON TO CSV
def sourcebooks_to_csv():
    # read in json file as dict
    with open('sourcebooks.json') as json_file:
        sourcebooks = json.load(json_file)
    # turn dict into df
    sourcebooks_df = pd.DataFrame.from_dict(sourcebooks, 'index')
    # write df to csv
    sourcebooks_df.to_csv('sourcebooks.csv')

## SPELLS JSON TO CSV
def spells_to_csv():
    # read in json file as dict
    with open('spells.json') as json_file:
        spells = json.load(json_file)
    # turn dict into df
    spells_df = pd.DataFrame.from_dict(spells)
    # write df to csv
    spells_df.to_csv('spells.csv')

def all_to_csv():
    backgrounds_to_csv()
    backgroundTraits_to_csv()
    classes_to_csv()
    classFeatures_to_csv()
    # equipment_to_csv()
    names_to_csv()
    races_to_csv()
    sourcebooks_to_csv()
    spells_to_csv()

# ONLY UNCOMMENT IF INTENDING TO OVERWRITE/CREATE NEW CSV DATA FILES
# all_to_csv()