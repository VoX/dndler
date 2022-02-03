import {
    generateAll,
    generateName,
    generateRace,
    generateBackground,
    generateClass,
    generateStats,
    generateWeightedStats,
    generateUnweightedStats,
    calcModFromScore,
    calcArmorClass,
    calcHitpoints
} from '../generators.js'

test('function \'generateName()\' generates a name as a string', () => {
    let name = generateName()
    expect(name).toBeDefined()
    expect(typeof name === 'string').toEqual(true);
    expect(name.length).toBeGreaterThan(1)
});

test('function \'generateRace()\' generates a race as a string', () => {
    let race = generateRace()
    expect(race).toBeDefined()
    expect(typeof race === 'string').toEqual(true);
    expect(race.length).toBeGreaterThan(1)
});

test('function \'generateBackground()\' generates a background object', () => {
    let background = generateBackground()
    expect(background).toBeDefined()
    expect(typeof background === 'object').toEqual(true);

    expect(background.Name).toBeDefined()
    expect(background.Name.length).toBeGreaterThan(1)
    expect(typeof background.Name === 'string').toEqual(true);

    expect(background.Trait).toBeDefined()
    expect(background.Trait.length).toBeGreaterThan(1)
    expect(typeof background.Trait === 'string').toEqual(true);

    expect(background.Ideal).toBeDefined()
    expect(background.Ideal.length).toBeGreaterThan(1)
    expect(typeof background.Ideal === 'string').toEqual(true);

    expect(background.Bond).toBeDefined()
    expect(background.Bond.length).toBeGreaterThan(1)
    expect(typeof background.Bond === 'string').toEqual(true);

    expect(background.Flaw).toBeDefined()
    expect(background.Flaw.length).toBeGreaterThan(1)
    expect(typeof background.Flaw === 'string').toEqual(true);

    expect(background.Gear).toBeDefined()
    expect(background.Gear.length).toBeGreaterThan(1)
    expect(typeof background.Gear === 'object').toEqual(true);
    expect(background.Gear[0].length).toBeGreaterThan(1)
    expect(typeof background.Gear[0] === 'string').toEqual(true);
});

test('function \'generateClass()\' generates a class as a string', () => {
    let classChoice = generateClass()
    expect(classChoice).toBeDefined()
    expect(typeof classChoice === 'string').toEqual(true);
    expect(classChoice.length).toBeGreaterThan(1)
});

test('function \'calcHitPoints()\' generates correct hp', () => {
    expect(calcHitpoints()).toBeDefined()
    expect(typeof calcHitpoints() === 'number').toEqual(true);
    expect(calcHitpoints(2, 'Druid', 1)).toEqual(10)
})

/*
test('function \'generateUnweightedStats()\' generates appropriate stats', () => {
    let stats = generateUnweightedStats(generateRace())

    expect(stats).toBeDefined()
    expect(typeof stats === 'object').toEqual(true);

    Object.keys(stats).forEach(key => {

        expect(stats[key]).toBeDefined()
        expect(typeof stats[key] === 'object').toEqual(true);

        Object.keys(stats[key]).forEach(stat => {
            expect(stats[key][stat]).toBeDefined()
            expect(typeof stats[key][stat] === 'number').toEqual(true)
            expect(stats[key][stat] >= 3 && stats[key][stat] <= 18)
        })
    })
}) */

test('function \'generateStats()\' generates appropriate stats', () => {
    let stats = generateStats(generateRace())

    expect(stats).toBeDefined()
    expect(typeof stats === 'object').toEqual(true);

    Object.keys(stats).forEach(key => {

        expect(stats[key]).toBeDefined()
        expect(typeof stats[key] === 'object').toEqual(true);

        Object.keys(stats[key]).forEach(stat => {
            expect(stats[key][stat]).toBeDefined()
            expect(typeof stats[key][stat] === 'number').toEqual(true)
            expect(stats[key][stat] >= 3 && stats[key][stat] <= 18)
        })
    })
})