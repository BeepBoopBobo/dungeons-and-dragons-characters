export const charactersDummyData = [
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
    { id: 'acrobatics', name: 'acrobatics', attribute: 'dexterity', value: false },
    { id: 'animal-handling', name: 'animal-handling', attribute: 'wisdom', value: false },
    { id: 'arcana', name: 'arcana', attribute: 'intelligence', value: false },
    { id: 'athletics', name: 'athletics', attribute: 'strength', value: false },
    { id: 'deception', name: 'deception', attribute: 'charisma', value: false },
    { id: 'history', name: 'history', attribute: 'intelligence', value: false },
    { id: 'insight', name: 'insight', attribute: 'wisdom', value: false },
    { id: 'intimidation', name: 'intimidation', attribute: 'charisma', value: false },
    { id: 'investigation', name: 'investigation', attribute: 'intelligence', value: false },
    { id: 'medicine', name: 'medicine', attribute: 'wisdom', value: false },
    { id: 'nature', name: 'nature', attribute: 'intelligence', value: false },
    { id: 'perception', name: 'perception', attribute: 'wisdom', value: false },
    { id: 'performance', name: 'performance', attribute: 'charisma', value: false },
    { id: 'persuation', name: 'persuation', attribute: 'charisma', value: false },
    { id: 'religion', name: 'religion', attribute: 'intelligence', value: false },
    { id: 'sleight-of-hand', name: 'sleight-of-hand', attribute: 'dexterity', value: false },
    { id: 'stealth', name: 'stealth', attribute: 'dexterity', value: false },
    { id: 'survival', name: 'survival', attribute: 'wisdom', value: false }
]


export const racesDummyData = [
    { name: 'Dragonborn', id: 'dragonborn', speed: 30, attributesIncreased: [{ name: 'strength', value: 2 }, { name: 'strength', value: 1 }] },
    { name: 'Dwarf', id: 'dwarf', speed: 25, attributesIncreased: [{ name: 'constitution', value: 2 }] },
    { name: 'Elf', id: 'elf', speed: 30, attributesIncreased: [{ name: 'dexterity', value: 2 }] },
    { name: 'Gnome', id: 'gnome', speed: 25, attributesIncreased: [{ name: 'intelligence', value: 2 }] },
    { name: 'Half elf', id: 'half-elf', speed: 30, attributesIncreased: [{ name: 'charisma', value: 2 }, { name: 'wisdom', value: 1 }, { name: 'dexterity', value: 1 }] },
    { name: 'Halfling', id: 'halfling', speed: 25, attributesIncreased: [{ name: 'dexterity', value: 2 }] },
    { name: 'Half orc', id: 'half-orc', speed: 30, attributesIncreased: [{ name: 'strength', value: 2 }, { name: 'constitution', value: 1 }] },
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

export const armorDummyData = [
    { name: 'Padded Armor', id: 'paddedArmor', armorClass: 11, dexMod: true, typeOfArmor: 'Light Armor', properties: '' },
    { name: 'Leather Armor', id: 'leatherArmor', armorClass: 11, dexMod: true, typeOfArmor: 'Light Armor', properties: '' },
    { name: 'Studded-leather Armor', id: 'studdedLeatherArmor', armorClass: 12, dexMod: true, typeOfArmor: 'Light Armor', properties: '' },
    { name: 'Hide Armor', id: 'hideArmor', armorClass: 12, dexMod: true, typeOfArmor: 'Medium Armor', properties: '' },
    { name: 'Chain-shirt Armor', id: 'chainShirtArmor', armorClass: 13, dexMod: true, typeOfArmor: 'Medium Armor', properties: '' },
    { name: 'Scalemail Armor', id: 'scalemailArmor', armorClass: 14, dexMod: true, typeOfArmor: 'Medium Armor', properties: '' },
    { name: 'Breastplate Armor', id: 'breastplateArmor', armorClass: 14, dexMod: true, typeOfArmor: 'Medium Armor', properties: '' },
    { name: 'Half-plate Armor', id: 'half-plate-armor', armorClass: 15, dexMod: true, typeOfArmor: 'Medium Armor', properties: '' },
    { name: 'Ringmail Armor', id: 'ringmail-armor', armorClass: 14, dexMod: false, typeOfArmor: 'Heavy Armor', properties: '' },
    { name: 'Chainmail Armor', id: 'chainmail-armor', armorClass: 16, dexMod: false, typeOfArmor: 'Heavy Armor', properties: '' },
    { name: 'Splint Armor', id: 'splint-armor', armorClass: 17, dexMod: false, typeOfArmor: 'Heavy Armor', properties: '' },
    { name: 'Plate Armor', id: 'plate-armor', armorClass: 18, dexMod: false, typeOfArmor: 'Heavy Armor', properties: '' },
    { name: 'Shield', id: 'shield', armorClass: 2, dexMod: false, typeOfArmor: 'Shield', properties: '' }

];
export const weaponsMeleeDummyData = [
    { name: 'Club', id: 'club', die: 4, numOfDice: 1, typeOfDamage: 'bludgeoning', properties: [] },
    { name: 'Dagger', id: 'dagger', die: 4, numOfDice: 1, typeOfDamage: '', properties: [] },
    { name: 'Greatclub', id: 'greatclub', die: 8, numOfDice: 1, typeOfDamage: 'bludgeoning', properties: [] },
    { name: 'Handaxe', id: 'handaxe', die: 6, numOfDice: 1, typeOfDamage: 'slashing', properties: [] },
    { name: 'Light Hammer', id: 'light-hammer', die: 4, numOfDice: 1, typeOfDamage: 'bludgeoning', properties: [] },
    { name: 'Mace', id: 'mace', die: 6, numOfDice: 1, typeOfDamage: 'bludgeoning', properties: [] },
    { name: 'Quaterstaff', id: 'quaterstaff', die: 6, numOfDice: 1, typeOfDamage: 'bludgeoning', properties: [] },
    { name: 'Sickle', id: 'sickle', die: 4, numOfDice: 1, typeOfDamage: 'slashing', properties: [] },
    { name: 'Spear', id: 'spear', die: 6, numOfDice: 1, typeOfDamage: 'piercing', properties: [] },
    { name: 'Battleaxe', id: 'battleaxe', die: 8, numOfDice: 1, typeOfDamage: 'slashing', properties: [] },
    { name: 'Flail', id: 'flail', die: 8, numOfDice: 1, typeOfDamage: 'bludgeoning', properties: [] },
    { name: 'Glaive', id: 'glaive', die: 10, numOfDice: 1, typeOfDamage: 'slashing', properties: [] },
    { name: 'Greataxe', id: 'greataxe', die: 12, numOfDice: 1, typeOfDamage: 'slashing', properties: [] },
    { name: 'Greatsword', id: 'greatsword', die: 6, numOfDice: 2, typeOfDamage: 'slashing', properties: [] },
    { name: 'Halberd', id: 'halberd', die: 10, numOfDice: 1, typeOfDamage: 'slashing', properties: [] },
    { name: 'Lance', id: 'lance', die: 12, numOfDice: 1, typeOfDamage: 'piercing', properties: [] },
    { name: 'Longsword', id: 'longsword', die: 8, numOfDice: 1, typeOfDamage: 'slashing', properties: [] },
    { name: 'Maul', id: 'maul', die: 6, numOfDice: 2, typeOfDamage: 'bludgeoning', properties: [] },
    { name: 'Morningstar', id: 'morningstar', die: 8, numOfDice: 1, typeOfDamage: 'piercing', properties: [] },
    { name: 'Pike', id: 'pike', die: 10, numOfDice: 1, typeOfDamage: 'piercing', properties: [] },
    { name: 'Rapier', id: 'rapier', die: 8, numOfDice: 1, typeOfDamage: 'piercing', properties: [] },
    { name: 'Scimitar', id: 'scimitar', die: 6, numOfDice: 1, typeOfDamage: 'slashing', properties: [] },
    { name: 'Trident', id: 'trident', die: 6, numOfDice: 1, typeOfDamage: 'piercing', properties: [] },
    { name: 'War pick', id: 'war-pick', die: 8, numOfDice: 1, typeOfDamage: 'piercing', properties: [] },
    { name: 'Warhammer', id: 'warhammer', die: 8, numOfDice: 1, typeOfDamage: 'bludgeoning', properties: [] },
    { name: 'Whip', id: 'whip', die: 4, numOfDice: 1, typeOfDamage: 'slashing', properties: [] }
];

export const weaponsRangedDummyData = [
    { name: 'Light Crossbow', id: 'light-crossbow', die: 8, numOfDice: 1, typeOfDamage: 'piercing', normalRange: 80, maxRange: 320, properties: [] },
    { name: 'Dart', id: 'dart', die: 4, numOfDice: 1, typeOfDamage: 'piercing', normalRange: 20, maxRange: 60, properties: [] },
    { name: 'Shortbow', id: 'shortbow', die: 6, numOfDice: 1, typeOfDamage: 'piercing', normalRange: 80, maxRange: 320, properties: [] },
    { name: 'Sling', id: 'sling', die: 4, numOfDice: 1, typeOfDamage: 'bludgeoning', normalRange: 30, maxRange: 120, properties: [] },
    { name: 'Blowgun', id: 'blowgun', die: 1, numOfDice: 1, typeOfDamage: 'piercing', normalRange: 25, maxRange: 100, properties: [] },
    { name: 'Hand Crossbow', id: 'hand-crossbow', die: 6, numOfDice: 1, typeOfDamage: 'piercing', normalRange: 30, maxRange: 120, properties: [] },
    { name: 'Heavy Crossbow', id: 'heavy-crossbow', die: 10, numOfDice: 1, typeOfDamage: 'piercing', normalRange: 100, maxRange: 400, properties: [] },
    { name: 'Longbow', id: 'longbow', die: 8, numOfDice: 1, typeOfDamage: 'piercing', normalRange: 150, maxRange: 600, properties: [] },
    { name: 'Net', id: 'net', die: 0, numOfDice: 0, typeOfDamage: '', normalRange: 5, maxRange: 15, properties: [] }
];