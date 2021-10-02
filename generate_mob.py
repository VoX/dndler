import random
import generate_all

# 'Acolyte', 'Charlatan', 'Criminal', 'Entertainer', 'Folk Hero', 'Gladiator',
# 'Guild Artisan', 'Guild Merchant', 'Hermit', 'Knight', 'Noble', 'Outlander',
# 'Pirate', 'Sage', 'Sailor', 'Soldier', 'Spy', 'Urchin'

def randomize_mob_list(num, bg_list):
    x = 0
    mob_list = []
    while x < num:
        mob_list.append(random.choice(bg_list))
        x+=1
    return mob_list

def generate_mob(num, bg_list):
    mob_list = randomize_mob_list(num, bg_list)
    all_chars = []
    x = 0
    while x < num:
        all_chars.append(generate_all(mob_list[x], True))
        x+=1
    return all_chars

def print_char(char_dict):
    print('')
    print('Hello, ' + str(char_dict['name']) + '.')
    print('')
    print('You are a(n) ' + str(char_dict['race']) + ' ' + str(char_dict['class']) + '.')
    print('')
    print('Your stats are: ' + str(char_dict['stats']['Total Stats']))
    print('')
    print('Your Story So Far:')
    print('Your Background is as a(n) ' + char_dict['background']['Title'])
    print('')
    if list(char_dict['background'])[1] != '':
        extra = list(char_dict['background'])[1]
        desc = char_dict['background'][extra]
        print(extra + ': ' + desc)
    print('Trait: ' + '\"' + char_dict['background']['Trait'] + '\"')
    print('Ideal: ' + '\"' + char_dict['background']['Ideal'] + '\"')
    print('Bond: ' + '\"' + char_dict['background']['Bond'] + '\"')
    print('Flaw: ' + '\"' + char_dict['background']['Flaw'] + '\"')
    print('')
    print('Sourcebooks: ')
    print('Race: ' + char_dict['sources']['Race'])
    print('Class: ' + char_dict['sources']['Class'])
    print('Background: ' + char_dict['sources']['Background'])


def print_mob(full_mob):
    os.system('cls')
    print('============================================================================')
    for each in full_mob:
        print_char(each)
        print('---------------------------------------------------------------------------')


# common mobs:
pirate_mob = generate_mob(12, ['Sailor', 'Pirate', 'Criminal'])
military_mob = generate_mob(12, ['Soldier', 'Knight', 'Noble'])
streetrat_mob = generate_mob(12, ['Urchin', 'Charlatan', 'Spy'])
wise_mob = generate_mob(8, ['Acolyte', 'Sage', 'Hermit'])
merchantfolk = generate_mob(10, ['Guild Artisan', 'Guild Merchant', 'Entertainer'])
