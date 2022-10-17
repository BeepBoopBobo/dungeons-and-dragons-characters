import React, { useState } from "react";
import AttributePointBuy from "../components/AttributePointBuy";
import { attributesDummyData, classesDummyData, racesDummyData, proficienciesDummyData } from "../DummyData";

const CreateChar = () => {
    const [charName, setCharName] = useState('');
    const [charLevel, setCharLevel] = useState('');
    const [charClass, setCharClass] = useState('barbarian');
    const [charRace, setCharRace] = useState('human');
    const [pointBuyLeft, setPointBuyLeft] = useState(27);
    const [charAttributeValues, setCharAttributeValues] = useState([8, 8, 8, 8, 8, 8]);

    const classSpecs = classesDummyData.find(item => item.name === charClass);
    const raceSpecs = racesDummyData.find(item => item.name === charRace);
    // item='charisma'
    const raceAttIncrease = attributesDummyData.map(item => raceSpecs?.attributesIncreased.find(el => el.name === item)?.value).map(item => item === undefined ? 0 : item);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('submitted')
    }

    const handleNameChange = (e: React.FormEvent<HTMLInputElement>) => {
        setCharName(e.currentTarget.value);
    }

    const handleRaceChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setCharRace(e.target.value);
    }

    const handleClassChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setCharClass(e.target.value);
    }

    const handleLevelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCharLevel(e.target.value);
    }

    const handleAttValChange = (index: number, type: string) => {
        let tempArr = [...charAttributeValues];
        switch (type) {
            case '+':
                if (tempArr[index] < 20) {
                    if (tempArr[index] >= 13 && pointBuyLeft >= 2) {
                        setPointBuyLeft(pointBuyLeft - 2);
                        tempArr[index]++;
                        setCharAttributeValues(tempArr);
                    } else if (tempArr[index] < 13 && pointBuyLeft >= 1) {
                        setPointBuyLeft(pointBuyLeft - 1);
                        tempArr[index]++;
                        setCharAttributeValues(tempArr);
                    };
                }
                break;

            case '-':
                if (tempArr[index] > 8) {
                    tempArr[index]--;
                    setCharAttributeValues(tempArr);
                    tempArr[index] < 13 ? setPointBuyLeft(pointBuyLeft + 1) : setPointBuyLeft(pointBuyLeft + 2);
                }

                break;
            default:
                console.log('Not a valid type.')
        }

    }


    return <>
        {charName}
        <h1>Create a character:</h1>
        <form onSubmit={(e) => handleSubmit(e)}>
            <label>
                Name:
                <input type='text' placeholder="Enter character name" onChange={e => handleNameChange(e)}></input>
            </label>

            <label>
                Class:
                <select placeholder="class" onChange={e => handleClassChange(e)}>
                    <option value='Barbarian'>Barbarian</option>
                    <option value='Bard'>Bard</option>
                    <option value='Cleric'>Cleric</option>
                    <option value='Druid'>Druid</option>
                    <option value='Fighter'>Fighter</option>
                    <option value='Paladin'>Paladin</option>
                    <option value='Ranger'>Ranger</option>
                    <option value='Rogue'>Rogue</option>
                    <option value='Sorcerer'>Sorcerer</option>
                    <option value='Warlock'>Warlock</option>
                    <option value='Wizard'>Wizard</option>
                </select>
            </label>

            <label>
                Race:
                <select placeholder="race" onChange={e => handleRaceChange(e)}>
                    <option value='Dragonborn'>Dragonborn</option>
                    <option value='Dwarf'>Dwarf</option>
                    <option value='Elf'>Elf</option>
                    <option value='Gnome'>Gnome</option>
                    <option value='Half elf'>Half elf</option>
                    <option value='Halfling'>Halfling</option>
                    <option value='Half orc'>Half orc</option>
                    <option value='Human'>Human</option>
                    <option value='Orc'>Orc</option>
                    <option value='Tiefling'>Tiefling</option>
                </select>
            </label>

            <label>
                Level:
                <input type='number' min='1' max='20' onChange={e => handleLevelChange(e)}></input>
            </label>
            <div id="attributes-point-buy">
                Points left: {pointBuyLeft}/27<br />
                {attributesDummyData.map((item, index) => {
                    return <AttributePointBuy
                        key={`${item}-attribute`}
                        att={item}
                        raceModifier={raceSpecs?.attributesIncreased.find(element => element.name === item)}
                        value={charAttributeValues[index]}
                        increment={() => handleAttValChange(index, '+')}
                        decrement={() => handleAttValChange(index, '-')} />
                })}
            </div>
            <button>Submit!</button>
        </form>


    </>
}

export default CreateChar;


