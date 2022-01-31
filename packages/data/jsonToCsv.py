import pandas as pd
import json

# read in json file as dict
with open('backgrounds.json') as json_file:
    backgrounds = json.load(json_file)

# turn dict into df
backgrounds_df = pd.DataFrame.from_dict(backgrounds, 'index')

# write df to csv
backgrounds_df.to_csv('test.csv')
