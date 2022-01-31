import pandas as pd
import json

with open('backgrounds.json') as json_file:
    backgrounds = json.load(json_file)

backgrounds_dict = json.loads(backgrounds)
