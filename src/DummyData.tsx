export const charDummyData = [
    { id: 1, name: 'Daisy', class: 'Cleric', level: 1 },
    { id: 2, name: 'Hope', class: 'Barbarian', level: 3 },
    { id: 3, name: 'Denathrius', class: 'Ranger', level: 2 },
    { id: 4, name: 'Page', class: 'Paladin', level: 1 },
    { id: 4, name: 'Page the Brave', class: 'Paladin', level: 4 },
]


export const classesDummyData = [
    { name: 'Barbarian', id: 'barbarian', hitDieValue: 12, savingThrows: { charisma: false, constitution: true, dexterity: false, intelligence: false, strength: true, wisdom: false } },
    { name: 'Bard', id: 'bard', hitDieValue: 8, savingThrows: { charisma: true, constitution: false, dexterity: true, intelligence: false, strength: false, wisdom: false } },
    { name: 'Cleric', id: 'cleric', hitDieValue: 8, savingThrows: { charisma: true, constitution: false, dexterity: false, intelligence: false, strength: false, wisdom: true } },
    { name: 'Druid', id: 'druid', hitDieValue: 8, savingThrows: { charisma: false, constitution: false, dexterity: false, intelligence: true, strength: false, wisdom: true } },
    { name: 'Fighter', id: 'fighter', hitDieValue: 10, savingThrows: { charisma: false, constitution: true, dexterity: false, intelligence: false, strength: true, wisdom: false } },
    { name: 'Monk', id: 'monk', hitDieValue: 8, savingThrows: { charisma: false, constitution: false, dexterity: true, intelligence: false, strength: true, wisdom: false } },
    { name: 'Paladin', id: 'paladin', hitDieValue: 10, savingThrows: { charisma: true, constitution: false, dexterity: false, intelligence: false, strength: false, wisdom: true } },
    { name: 'Ranger', id: 'ranger', hitDieValue: 10, savingThrows: { charisma: false, constitution: false, dexterity: true, intelligence: false, strength: true, wisdom: false } },
    { name: 'Rogue', id: 'rogue', hitDieValue: 8, savingThrows: { charisma: false, constitution: false, dexterity: true, intelligence: true, strength: false, wisdom: false } },
    { name: 'Sorcerer', id: 'sorcerer', hitDieValue: 6, savingThrows: { charisma: true, constitution: true, dexterity: false, intelligence: false, strength: false, wisdom: false } },
    { name: 'Warlock', id: 'warlock', hitDieValue: 8, savingThrows: { charisma: true, constitution: false, dexterity: false, intelligence: false, strength: false, wisdom: true } },
    { name: 'Wizard', id: 'wizard', hitDieValue: 6, savingThrows: { charisma: false, constitution: false, dexterity: false, intelligence: true, strength: false, wisdom: true } }
]
export const racesDummyData = [
    { name: 'Dragonborn', id: 'dragonborn', speed: 30, attributesIncreased: { strength: 2, charisma: 1 } },
    { name: 'Dwarf', id: 'dwarf', speed: 25, attributesIncreased: { constitution: 2 } },
    { name: 'Elf', id: 'elf', speed: 30, attributesIncreased: { dexterity: 2 } },
    { name: 'Gnome', id: 'gnome', speed: 25, attributesIncreased: { intelligence: 2 } },
    { name: 'Half elf', id: 'halfelf', speed: 30, attributesIncreased: { charisma: 2, wisdom: 1, dexterity: 1 } },
    { name: 'Halfling', id: 'halfling', speed: 25, attributesIncreased: { dexterity: 2 } },
    { name: 'Half orc', id: 'halforc', speed: 30, attributesIncreased: { strength: 2, constitution: 1 } },
    { name: 'Human', id: 'human', speed: 30, attributesIncreased: { charisma: 1, constitution: 1, dexterity: 1, intelligence: 1, strength: 1, wisdom: 1 } },
    { name: 'Orc', id: 'orc', speed: 30, attributesIncreased: { strength: 2, constitution: 1 } },
    { name: 'Tiefling', id: 'tiefling', speed: 30, attributesIncreased: { intelligence: 1, charisma: 2 } }
]