export const charDummyData = [
    { id: 1, name: 'Daisy', class: 'Cleric', level: 1 },
    { id: 2, name: 'Hope', class: 'Barbarian', level: 3 },
    { id: 3, name: 'Denathrius', class: 'Ranger', level: 2 },
    { id: 4, name: 'Page', class: 'Paladin', level: 1 },
    { id: 4, name: 'Page the Brave', class: 'Paladin', level: 4 },
]

export const attributesDummyData = [
    'charisma',
    'constitution',
    'dexterity',
    'intelligence',
    'strength',
    'wisdom'
]
export const proficienciesDummyData = [
    { name: 'acrobatics', attribute: 'dexterity', value: false },
    { name: 'animalhandling', attribute: 'wisdom', value: false },
    { name: 'arcana', attribute: 'intelligence', value: false },
    { name: 'athletics', attribute: 'strength', value: false },
    { name: 'deception', attribute: 'charisma', value: false },
    { name: 'history', attribute: 'intelligence', value: false },
    { name: 'insight', attribute: 'wisdom', value: false },
    { name: 'intimidation', attribute: 'charisma', value: false },
    { name: 'investigation', attribute: 'intelligence', value: false },
    { name: 'medicine', attribute: 'wisdom', value: false },
    { name: 'nature', attribute: 'intelligence', value: false },
    { name: 'perception', attribute: 'wisdom', value: false },
    { name: 'performance', attribute: 'charisma', value: false },
    { name: 'persuation', attribute: 'charisma', value: false },
    { name: 'religion', attribute: 'intelligence', value: false },
    { name: 'sleightofhand', attribute: 'dexterity', value: false },
    { name: 'stealth', attribute: 'dexterity', value: false },
    { name: 'survival', attribute: 'wisdom', value: false }
]

// export const classesDummyData = [
//     { name: 'Barbarian', id: 'barbarian', hitDieValue: 12, savingThrows: { charisma: false, constitution: true, dexterity: false, intelligence: false, strength: true, wisdom: false } },
//     { name: 'Bard', id: 'bard', hitDieValue: 8, savingThrows: { charisma: true, constitution: false, dexterity: true, intelligence: false, strength: false, wisdom: false } },
//     { name: 'Cleric', id: 'cleric', hitDieValue: 8, savingThrows: { charisma: true, constitution: false, dexterity: false, intelligence: false, strength: false, wisdom: true } },
//     { name: 'Druid', id: 'druid', hitDieValue: 8, savingThrows: { charisma: false, constitution: false, dexterity: false, intelligence: true, strength: false, wisdom: true } },
//     { name: 'Fighter', id: 'fighter', hitDieValue: 10, savingThrows: { charisma: false, constitution: true, dexterity: false, intelligence: false, strength: true, wisdom: false } },
//     { name: 'Monk', id: 'monk', hitDieValue: 8, savingThrows: { charisma: false, constitution: false, dexterity: true, intelligence: false, strength: true, wisdom: false } },
//     { name: 'Paladin', id: 'paladin', hitDieValue: 10, savingThrows: { charisma: true, constitution: false, dexterity: false, intelligence: false, strength: false, wisdom: true } },
//     { name: 'Ranger', id: 'ranger', hitDieValue: 10, savingThrows: { charisma: false, constitution: false, dexterity: true, intelligence: false, strength: true, wisdom: false } },
//     { name: 'Rogue', id: 'rogue', hitDieValue: 8, savingThrows: { charisma: false, constitution: false, dexterity: true, intelligence: true, strength: false, wisdom: false } },
//     { name: 'Sorcerer', id: 'sorcerer', hitDieValue: 6, savingThrows: { charisma: true, constitution: true, dexterity: false, intelligence: false, strength: false, wisdom: false } },
//     { name: 'Warlock', id: 'warlock', hitDieValue: 8, savingThrows: { charisma: true, constitution: false, dexterity: false, intelligence: false, strength: false, wisdom: true } },
//     { name: 'Wizard', id: 'wizard', hitDieValue: 6, savingThrows: { charisma: false, constitution: false, dexterity: false, intelligence: true, strength: false, wisdom: true } }
// ]

export const racesDummyData = [
    { name: 'Dragonborn', id: 'dragonborn', speed: 30, attributesIncreased: [{ name: 'strength', value: 2 }, { name: 'strength', value: 1 }] },
    { name: 'Dwarf', id: 'dwarf', speed: 25, attributesIncreased: [{ name: 'constitution', value: 2 }] },
    { name: 'Elf', id: 'elf', speed: 30, attributesIncreased: [{ name: 'dexterity', value: 2 }] },
    { name: 'Gnome', id: 'gnome', speed: 25, attributesIncreased: [{ name: 'intelligence', value: 2 }] },
    { name: 'Half elf', id: 'halfelf', speed: 30, attributesIncreased: [{ name: 'charisma', value: 2 }, { name: 'wisdom', value: 1 }, { name: 'dexterity', value: 1 }] },
    { name: 'Halfling', id: 'halfling', speed: 25, attributesIncreased: [{ name: 'dexterity', value: 2 }] },
    { name: 'Half orc', id: 'halforc', speed: 30, attributesIncreased: [{ name: 'strength', value: 2 }, { name: 'constitution', value: 1 }] },
    { name: 'Human', id: 'human', speed: 30, attributesIncreased: [{ name: 'charisma', value: 1 }, { name: 'constitution', value: 1 }, { name: 'dexterity', value: 1 }, { name: 'intelligence', value: 1 }, { name: 'strength', value: 1 }, { name: 'wisdom', value: 1 }] },
    { name: 'Orc', id: 'orc', speed: 30, attributesIncreased: [{ name: 'strength', value: 2 }, { name: 'constitution', value: 1 }] },
    { name: 'Tiefling', id: 'tiefling', speed: 30, attributesIncreased: [{ name: 'intelligence', value: 1 }, { name: 'charisma', value: 2 }] }
]


export const classesDummyData = [
    {
        name: 'Barbarian', id: 'barbarian', hitDieValue: 12, savingThrows: [
            { name: 'charisma', value: false },
            { name: 'constitution', value: true },
            { name: 'dexterity', value: false },
            { name: 'intelligence', value: false },
            { name: 'strength', value: true },
            { name: 'wisdom', value: false }
        ],
    },
    {
        name: 'Bard', id: 'bard', hitDieValue: 8, savingThrows: [
            { name: 'charisma', value: true },
            { name: 'constitution', value: false },
            { name: 'dexterity', value: true },
            { name: 'intelligence', value: false },
            { name: 'strength', value: false },
            { name: 'wisdom', value: false }
        ],
    },
    {
        name: 'Cleric', id: 'cleric', hitDieValue: 8, savingThrows: [
            { name: 'charisma', value: true },
            { name: 'constitution', value: false },
            { name: 'dexterity', value: false },
            { name: 'intelligence', value: false },
            { name: 'strength', value: false },
            { name: 'wisdom', value: true }
        ],
    },
    {
        name: 'Druid', id: 'druid', hitDieValue: 8, savingThrows: [
            { name: 'charisma', value: false },
            { name: 'constitution', value: false },
            { name: 'dexterity', value: false },
            { name: 'intelligence', value: true },
            { name: 'strength', value: false },
            { name: 'wisdom', value: true }
        ],
    },
    {
        name: 'Fighter', id: 'fighter', hitDieValue: 10, savingThrows: [
            { name: 'charisma', value: false },
            { name: 'constitution', value: true },
            { name: 'dexterity', value: false },
            { name: 'intelligence', value: false },
            { name: 'strength', value: true },
            { name: 'wisdom', value: false }
        ],
    },
    {
        name: 'Monk', id: 'monk', hitDieValue: 8, savingThrows: [
            { name: 'charisma', value: false },
            { name: 'constitution', value: false },
            { name: 'dexterity', value: true },
            { name: 'intelligence', value: false },
            { name: 'strength', value: true },
            { name: 'wisdom', value: false }
        ],
    },
    {
        name: 'Paladin', id: 'paladin', hitDieValue: 10, savingThrows: [
            { name: 'charisma', value: true },
            { name: 'constitution', value: false },
            { name: 'dexterity', value: false },
            { name: 'intelligence', value: false },
            { name: 'strength', value: false },
            { name: 'wisdom', value: true }
        ],
    },
    {
        name: 'Ranger', id: 'ranger', hitDieValue: 10, savingThrows: [
            { name: 'charisma', value: false },
            { name: 'constitution', value: false },
            { name: 'dexterity', value: true },
            { name: 'intelligence', value: false },
            { name: 'strength', value: true },
            { name: 'wisdom', value: false }
        ],
    },
    {
        name: 'Rogue', id: 'rogue', hitDieValue: 8, savingThrows: [
            { name: 'charisma', value: false },
            { name: 'constitution', value: false },
            { name: 'dexterity', value: true },
            { name: 'intelligence', value: true },
            { name: 'strength', value: false },
            { name: 'wisdom', value: false }
        ],
    },
    {
        name: 'Sorcerer', id: 'sorcerer', hitDieValue: 6, savingThrows: [
            { name: 'charisma', value: true },
            { name: 'constitution', value: true },
            { name: 'dexterity', value: false },
            { name: 'intelligence', value: false },
            { name: 'strength', value: false },
            { name: 'wisdom', value: false }
        ],
    },
    {
        name: 'Warlock', id: 'warlock', hitDieValue: 8, savingThrows: [
            { name: 'charisma', value: true },
            { name: 'constitution', value: false },
            { name: 'dexterity', value: false },
            { name: 'intelligence', value: false },
            { name: 'strength', value: false },
            { name: 'wisdom', value: true }
        ],
    },
    {
        name: 'Wizard', id: 'wizard', hitDieValue: 6, savingThrows: [
            { name: 'charisma', value: false },
            { name: 'constitution', value: false },
            { name: 'dexterity', value: false },
            { name: 'intelligence', value: true },
            { name: 'strength', value: false },
            { name: 'wisdom', value: true }
        ],
    }
]