import React, { useState } from "react";
import AttributePointBuy from "../components/AttributePointBuy";
import { attributesDummyData, classesDummyData, racesDummyData, proficienciesDummyData, armorDummyData, weaponsMeleeDummyData, weaponsRangedDummyData } from "../DummyData";
import './CreateChar.css';

// import raceImages from '../images/races';
const axios = require('axios').default;

const CreateChar = () => {
    const [creationProgress, setCreationProgress] = useState(0);
    const [charName, setCharName] = useState('');
    const [charLevel, setCharLevel] = useState('');
    const [charClass, setCharClass] = useState('');
    const [charRace, setCharRace] = useState('');

    const [charEquipment, setCharEquipment] = useState(['', '', ''])
    const [pointBuyLeft, setPointBuyLeft] = useState(27);
    const [charAttributeValues, setCharAttributeValues] = useState([8, 8, 8, 8, 8, 8]);

    const [charProficiencies, setCharProficiencies] = useState(['', '', '', ''])

    const classSpecs = classesDummyData.find(item => item.name === charClass);
    const raceSpecs = racesDummyData.find(item => item.name === charRace);
    const raceAttIncrease = attributesDummyData.map(item => raceSpecs?.attributesIncreased.find(el => el.name === item)?.value).map(item => item === undefined ? 0 : item);

    const clearStates = () => {
        setCreationProgress(0);
        setCharName('');
        setCharLevel('');
        setCharClass('');
        setCharRace('');

        setCharEquipment(['', '', ''])
        setPointBuyLeft(27)
        setCharAttributeValues([8, 8, 8, 8, 8, 8])
        setCharProficiencies(['', '', '', ''])
    }
    async function uploadChar() {
        const res = await axios.post('https://dnd-vol-2-default-rtdb.europe-west1.firebasedatabase.app/characters.json', {
            name: charName,
            id: charName.toLocaleLowerCase() + '-the-' + charClass.toLocaleLowerCase(),
            level: parseInt(charLevel),
            class: charClass,
            race: charRace
        }).then(function (res: any) {
            console.log(res);
        }).catch(function (error: any) {
            console.log(error);
        })
    }

    const handleSubmit = () => {
        console.log('submitted')
        uploadChar();
        // clearStates();
    }

    const handleInputChange = (type: string, e: React.ChangeEvent<HTMLSelectElement> | React.FormEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
        switch (type) {
            case 'name':
                setCharName(e.currentTarget.value);
                break;
            case 'race':
                setCharRace(e.currentTarget.value);
                break;
            case 'class':
                setCharClass(e.currentTarget.value);
                break;
            case 'level':
                setCharLevel(e.currentTarget.value);
                break;
            default:
                console.log('Not a valid type.')

        }
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

    const handleSelect = (type: string, value: string) => {
        switch (type) {
            case 'classes':
                setCharClass(value);
                break;
            case 'races':
                setCharRace(value);
                break;
            case 'proficiencies':
                let copyOfArray: string[] = [...charProficiencies];

                if (charProficiencies.includes(value)) {
                    copyOfArray[copyOfArray.indexOf(value)] = '';
                } else {
                    copyOfArray.shift();
                    copyOfArray.push(value);
                }
                setCharProficiencies(copyOfArray);
                break;
        }
    }

    const handleEquipmentSelect = (value: string, index: number) => {
        let tempArray = [...charEquipment];
        tempArray[index] === value ? tempArray[index] = '' : tempArray[index] = value;
        setCharEquipment(tempArray);
    }

    const renderSelection = (type: string) => {
        let dummyData: Array<any> = [];
        let imgSrc = '';
        switch (type) {
            case 'proficiencies':
                dummyData = proficienciesDummyData;
                break;
            case 'classes':
                dummyData = classesDummyData;
                break;
            case 'races':
                dummyData = racesDummyData;
                break;
            default:
                console.log("Not a valid type.")
        }

        const requestImage = (type: string, id: string) => {
            return imgSrc = require(`../images/${type}/${id}.png`)
        }

        return <div className="selector" id={`${type}-selector`}>
            {dummyData.map(item =>
                <div className={(charProficiencies.includes(item.id)) ? "option selected" :
                    charClass === (item.id) ? "option selected" :
                        charRace === (item.id) ? "option selected" : "option"}
                    onClick={type === 'proficiencies' ? () => handleSelect('proficiencies', item.id) :
                        type === 'classes' ? () => handleSelect('classes', item.id) :
                            type === 'races' ? () => handleSelect('races', item.id) : () => { }
                    }>
                    <div className="option-icon">
                        <img src={requestImage(type, item.id)} className='option-img' />
                    </div>
                    <div className="option-desc">
                        {item.name.toLocaleUpperCase()}
                    </div>
                </div>)
            }
        </div >
    }

    const renderEquipmentSelection = (type: string, index: number) => {
        let dummyData: Array<any> = [];
        switch (type) {
            case 'weapons':
                dummyData = weaponsMeleeDummyData.concat(weaponsRangedDummyData);
                break;
            case 'armor':
                dummyData = armorDummyData;
                break;
        }

        return <div className="selector" id={`${type}-selector`}>
            {dummyData.map(item =>
                item.id === 'shield' && type === 'armor' ? null :
                    <div className={charEquipment[index] === (item.id) ? "option selected" : "option"} onClick={() => handleEquipmentSelect(item.id, index)}>
                        <div className="option-icon">
                            -prof icon-
                        </div>
                        <div className="option-desc">
                            {item.name.toLocaleUpperCase()}<br />
                            <span className="properties">
                                {item.die ? item.numOfDice + 'd' + item.die + ' ' + item.typeOfDamage : null}
                                {item.dexMod ? 'AC: ' + item.armorClass + ' +[DEX]' : 'AC: ' + item.armorClass}
                            </span>
                        </div>
                    </div>)}
        </div>
    }

    const renderPointBuy = () => {
        return <table id="point-buy-table">
            <thead>
                <tr>
                    <th className='pb-cell'>
                        Attribute
                    </th>
                    <th className='pb-cell button-cell'>
                        Decrement
                    </th>
                    <th className='pb-cell'>
                        Attribute points
                    </th>
                    <th className='pb-cell button-cell'>
                        Increment
                    </th>
                    <th className='pb-cell'>
                        Racial modifier
                    </th>
                    <th className='pb-cell'>
                        Total points:
                    </th>
                    <th className='pb-cell'>
                        Attribute modifier:
                    </th>
                </tr>
            </thead>
            <tbody>
                {attributesDummyData.map((item, index) => {
                    return <AttributePointBuy
                        key={`${item}-attribute`}
                        att={item}
                        raceModifier={raceAttIncrease[index]}
                        value={charAttributeValues[index]}
                        increment={() => handleAttValChange(index, '+')}
                        decrement={() => handleAttValChange(index, '-')} />
                })}
            </tbody>
        </table>
    }
    return <>
        <h1>Create a character:</h1>
        {creationProgress === 0 ? <>
            <label>
                Name:
                <input type='text' placeholder="Enter character name" onChange={e => handleInputChange('name', e)}></input>
            </label>
            <label>
                Level:
                <input type='number' min='1' max='20' onChange={e => handleInputChange('level', e)}></input>
            </label>
            <div id="attributes-point-buy">
                Points left: {pointBuyLeft}/27<br />
                {renderPointBuy()}
            </div>
        </> : creationProgress === 1 ? <>
            <h3>Select your class</h3>
            {renderSelection('classes')}
        </> : creationProgress === 2 ? <>
            <h3>RACES</h3>
            {renderSelection('races')}
        </> : creationProgress === 3 ? <>
            <h3>Select 4 proficiencies:</h3>
            {renderSelection('proficiencies')}
            proficiencies: {charProficiencies[0]}, {charProficiencies[1]}, {charProficiencies[2]}, {charProficiencies[3]}
        </> : creationProgress === 4 ? <>
            <h3>Select Armor:</h3>
            {renderEquipmentSelection('armor', 0)}
            selected: {charEquipment[0]}
        </> : creationProgress === 5 ? <>
            <h3>Select Primary Weapon:</h3>
            {renderEquipmentSelection('weapons', 2)}
            selected: {charEquipment[2]}
        </> : creationProgress === 6 ? <>
            <h3>Select Secondary Weapon:</h3>
            {renderEquipmentSelection('weapons', 3)}
            selected: {charEquipment[3]}
        </> : <></>}
        {creationProgress > 0 ? <button onClick={() => { setCreationProgress(creationProgress - 1) }}>Previous Step</button> : null}
        {creationProgress < 6 ? <button onClick={() => { setCreationProgress(creationProgress + 1) }}>Next Step</button> : null}
        {creationProgress === 6 ? <button onClick={() => { handleSubmit() }}>Submit</button> : null}
        <br />
        name: {charName}<br />
        class: {charClass}<br />
        race: {charRace}<br />
        level: {charLevel}<br />
        proficiencies: {charProficiencies[0]}, {charProficiencies[1]}, {charProficiencies[2]}, {charProficiencies[3]}<br />
        armor: {charEquipment[0]}<br />
        first weapon:{charEquipment[1]}<br />
        second weapons:{charEquipment[2]}<br />
    </>
}

export default CreateChar;


