import React, { useState } from "react";
import AttributePointBuy from "../components/AttributePointBuy";
import { attributesDummyData, classesDummyData, racesDummyData, proficienciesDummyData, armorDummyData, weaponsMeleeDummyData, weaponsRangedDummyData, spellsDummyData } from "../DummyData";
import './CreateChar.css';
import { Link } from "react-router-dom";

const axios = require('axios').default;

const CreateChar = () => {
    const [creationProgress, setCreationProgress] = useState(0);
    const [charName, setCharName] = useState('');
    const [charLevel, setCharLevel] = useState('');
    const [charClass, setCharClass] = useState('');
    const [charRace, setCharRace] = useState('');

    const [charEquipment, setCharEquipment] = useState(['', '', '']);
    const [charAttributeValues, setCharAttributeValues] = useState([8, 8, 8, 8, 8, 8]);

    const [charProficiencies, setCharProficiencies] = useState(['', '', '', '']);
    const [charSpells, setCharSpells] = useState<string[]>([]);
    const [charSpellsSlotsTaken, setCharSpellsSlotsTaken] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);

    const [pointBuyLeft, setPointBuyLeft] = useState(27);

    const classSpecs = classesDummyData.find(item => item.id === charClass); //stored specific class from classesDummyData
    const raceSpecs = racesDummyData.find(item => item.id === charRace);    //stored specific race from classesDummyData
    const raceAttIncrease = attributesDummyData.map(item => raceSpecs?.attributesIncreased.find(el => el.name === item)?.value).map(item => item === undefined ? 0 : item); //racial bonuses
    const charSpellSlots = classSpecs?.caster.spellSlots.find(item => item.atLevel === parseInt(charLevel));//stored specific spellSlots by charLevel from classDummyData.caster.spellSlots

    const lastStep = 8;

    /* resets all the states to default values*/
    const clearAllStates = () => {
        setCreationProgress(0);
        setCharName('');
        setCharLevel('');
        setCharClass('');
        setCharRace('');
        clearDetailStates();
    }

    const clearDetailStates = () => {
        setCharEquipment(['', '', '']);
        setPointBuyLeft(27);
        setCharAttributeValues([8, 8, 8, 8, 8, 8]);
        setCharProficiencies(['', '', '', '']);
        clearSpells();

    }

    const clearSpells = () => {
        setCharSpellsSlotsTaken([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
        setCharSpells([]);
    }

    /* fetches weapon/armor objects from DummyData to replace only ids that are stored in the states*/
    const convertEquipment = () => {
        let armorPiece = armorDummyData.find(item => item.id === charEquipment[0]);
        let firstWeaponPiece = weaponsMeleeDummyData.concat(weaponsRangedDummyData).find(item => item.id === charEquipment[1]);
        let secondWeaponPiece = weaponsMeleeDummyData.concat(weaponsRangedDummyData).find(item => item.id === charEquipment[2]);

        return [armorPiece, firstWeaponPiece, secondWeaponPiece];
    }

    /* converts id values to corresponding objects and uploads the complete character to firebase */
    async function uploadChar() {
        const res = await axios.post('https://dnd-vol-2-default-rtdb.europe-west1.firebasedatabase.app/characters.json', {
            name: charName,
            id: charName.toLocaleLowerCase() + '-the-' + charClass.toLocaleLowerCase(),
            level: parseInt(charLevel),
            class: classesDummyData.find(item => item.id === charClass),
            race: racesDummyData.find(item => item.id === charRace),
            equipment: convertEquipment(),
            attributes: attributesDummyData.map((item, index) => { return { name: item, value: (charAttributeValues[index] + raceAttIncrease[index]) } }),
            proficiencies: charProficiencies.map(item => { return { name: item } }),
            currentHp: parseInt(charLevel) * (classSpecs?.hitDieValue ? classSpecs?.hitDieValue : 1),
            maxHp: parseInt(charLevel) * (classSpecs?.hitDieValue ? classSpecs?.hitDieValue : 1),
            temporalHp: 0,
            deathSavesSaves: 0,
            deathSavesFails: 0,
            spells: spellsDummyData.map(item => charSpells.includes(item.id) ? item : null)

        }).then(function (res: any) {
            console.log(res);
        }).catch(function (error: any) {
            console.log(error);
        })
    }

    const handleSubmit = () => {
        uploadChar();
        clearAllStates();
    }

    /* reacts to changing values from HTML inputs */
    const handleInputChange = (type: string, e: React.ChangeEvent<HTMLSelectElement> | React.FormEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
        switch (type) {
            case 'name':
                setCharName(e.currentTarget.value);
                break;
            case 'level':
                setCharLevel(e.currentTarget.value);
                clearSpells();
                break;
            default:
                console.log('Not a valid type.')
        }
    }

    /* handles changing values in the point buy system */
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

    /* */
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

    const handleSpellSelect = (spell: string, spellLevel: number) => {
        let slotsTempArr = [...charSpellsSlotsTaken];

        const assignSpells = () => {
            //checks if character already has the spell in charSpells
            if (charSpells.indexOf(spell) !== -1) {
                let spellIndex = charSpells.indexOf(spell);
                let spellsTempArray = [...charSpells];
                spellsTempArray.splice(spellIndex, 1);
                slotsTempArr[spellLevel] -= 1;

                setCharSpells(spellsTempArray);
                setCharSpellsSlotsTaken(slotsTempArr);
            } else {
                let newArray = [...charSpells, spell];
                slotsTempArr[spellLevel] += 1;
                setCharSpells(newArray);
                setCharSpellsSlotsTaken(slotsTempArr);
            }
        }

        const removeSpell = () => {
            if (charSpells.indexOf(spell) !== -1) {
                let spellIndex = charSpells.indexOf(spell);
                let spellsTempArray = [...charSpells];
                spellsTempArray.splice(spellIndex, 1);
                slotsTempArr[spellLevel] -= 1;

                setCharSpells(spellsTempArray);
                setCharSpellsSlotsTaken(slotsTempArr);
            }
        }

        //check if there are free slots for the given spell level, then checks if the spell is already selected and then is removed
        switch (true) {
            case spellLevel === 0 && charSpellsSlotsTaken[spellLevel] < (charSpellSlots?.cantrips ? charSpellSlots?.cantrips : 0):
                assignSpells()
                break;
            case spellLevel === 1 && charSpellsSlotsTaken[spellLevel] < (charSpellSlots?.firstLevelSpells ? charSpellSlots?.firstLevelSpells : 0):
                assignSpells()
                break;
            case spellLevel === 2 && charSpellsSlotsTaken[spellLevel] < (charSpellSlots?.secondLevlSpells ? charSpellSlots?.secondLevlSpells : 0):
                assignSpells()
                break;
            case spellLevel === 3 && charSpellsSlotsTaken[spellLevel] < (charSpellSlots?.thirdLevlSpells ? charSpellSlots?.thirdLevlSpells : 0):
                assignSpells()
                break;
            case spellLevel === 4 && charSpellsSlotsTaken[spellLevel] < (charSpellSlots?.fourthLevlSpells ? charSpellSlots?.fourthLevlSpells : 0):
                assignSpells()
                break;
            case spellLevel === 5 && charSpellsSlotsTaken[spellLevel] < (charSpellSlots?.fifthLevlSpells ? charSpellSlots?.fifthLevlSpells : 0):
                assignSpells()
                break;
            case spellLevel === 6 && charSpellsSlotsTaken[spellLevel] < (charSpellSlots?.sixthLevlSpells ? charSpellSlots?.sixthLevlSpells : 0):
                assignSpells()
                break;
            case spellLevel === 7 && charSpellsSlotsTaken[spellLevel] < (charSpellSlots?.seventhLevlSpells ? charSpellSlots?.seventhLevlSpells : 0):
                assignSpells()
                break;
            case spellLevel === 8 && charSpellsSlotsTaken[spellLevel] < (charSpellSlots?.eightLevlSpells ? charSpellSlots?.eightLevlSpells : 0):
                assignSpells()
                break;
            case spellLevel === 9 && charSpellsSlotsTaken[spellLevel] < (charSpellSlots?.ninthLevlSpells ? charSpellSlots?.ninthLevlSpells : 0):
                assignSpells()
                break;
            default:
                removeSpell()
        }


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
            imgSrc = require(`../images/${type}/${id}.png`);
            return imgSrc;
        }

        return <div className="selector" id={`${type}-selector`}>
            {dummyData.map(item =>
                <div key={item.name} className={
                    (charProficiencies.includes(item.id)) ? `${type}-op option selected` :
                        charClass === (item.id) ? `${type}-op option selected` :
                            charRace === (item.id) ? `${type}-op option selected` : `${type}-op option`}
                    onClick={
                        type === 'proficiencies' ? () => handleSelect('proficiencies', item.id) :
                            type === 'classes' ? () => { handleSelect('classes', item.id); clearDetailStates(); } :
                                type === 'races' ? () => { handleSelect('races', item.id) } : () => { }
                    }>
                    <div className="option-icon">
                        <img alt={'option for ' + item.name} src={requestImage(type, item.id) ? requestImage(type, item.id) : '../images/races/orc.png'} className='option-img' />
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
                    <div key={item.name} className={charEquipment[index] === (item.id) ? `${type}-op option selected` : `${type}-op option`} onClick={() => handleEquipmentSelect(item.id, index)}>
                        <div className="option-icon">
                            <img alt={'Option for ' + item.name} src={require(`../images/wip.png`)} className='option-img' />
                        </div>
                        <div className="option-desc">
                            {item.name.toLocaleUpperCase()}<br />
                            <span className="properties">
                                {type === 'armor' ? item.dexMod ? 'AC: ' + item.armorClass + ' +[DEX]' : 'AC: ' + item.armorClass :
                                    item.die ? item.numOfDice + 'd' + item.die + ' ' + item.typeOfDamage : null}
                            </span>
                        </div>
                    </div>)}
        </div>
    }


    const renderSpellsSelection = (spellLevel: number) => {
        let dummyData = spellsDummyData;

        let header = <></>;
        //header for different levels of spells
        switch (spellLevel) {
            case 0:
                header = <h2>Cantrips {charSpellsSlotsTaken[0]}/{charSpellSlots?.cantrips}: </h2>
                break;
            case 1:
                header = <h2>1st Level spells {charSpellsSlotsTaken[1]}/{charSpellSlots?.firstLevelSpells}:</h2>
                break;
            case 2:
                header = <h2>2nd Level spells {charSpellsSlotsTaken[2]}/{charSpellSlots?.secondLevlSpells}:</h2>
                break;
            case 3:
                header = <h2>3rd Level spells {charSpellsSlotsTaken[3]}/{charSpellSlots?.thirdLevlSpells}:</h2>
                break;
            case 4:
                header = <h2>4th Level spells {charSpellsSlotsTaken[4]}/{charSpellSlots?.fourthLevlSpells} :</h2>
                break;
            case 5:
                header = <h2>5th Level spells {charSpellsSlotsTaken[5]}/{charSpellSlots?.fifthLevlSpells} :</h2>
                break;
            case 6:
                header = <h2>6th Level spells {charSpellsSlotsTaken[6]}/{charSpellSlots?.sixthLevlSpells} :</h2>
                break;
            case 7:
                header = <h2>7th Level spells {charSpellsSlotsTaken[7]}/{charSpellSlots?.seventhLevlSpells} :</h2>
                break;
            case 8:
                header = <h2>8th Level spells {charSpellsSlotsTaken[8]}/{charSpellSlots?.eightLevlSpells} :</h2>
                break;
            case 9:
                header = <h2>9th Level spells {charSpellsSlotsTaken[9]}/{charSpellSlots?.ninthLevlSpells} :</h2>
                break;

        }

        return <>
            {header}
            <div className="selector" id={'spells-selector'} >
                {dummyData.map(item =>
                    item.level === spellLevel ?
                        <div key={item.name} className={charSpells.find(element => element === item.id) ? "spell-option selected" : "spell-option"} onClick={() => handleSpellSelect(item.id, item.level)}>

                            <div className="spell-header">
                                {item.name.toLocaleUpperCase()}<br />
                                [{item.level === 0 ? 'Cantrip' : item.level + 'th level'}, {item.time}]
                            </div>

                            <div className="spell-desc">
                                {item.description}
                            </div>
                        </div> : <></>
                )}

            </div>
        </>
    }

    //point buy table
    const renderPointBuy = () => {
        return <table id="point-buy-table">
            <thead>
                <tr id="pb-header" >
                    <th className='pb-cell'>
                        Attribute
                    </th>
                    <th className='pb-cell'>
                        Value
                    </th>
                    <th className='pb-cell'>
                        Change Val
                    </th>
                    <th className='pb-cell'>
                        Racial mod
                    </th>

                    <th className='pb-cell'>
                        Total Value
                    </th>
                    <th className='pb-cell'>
                        Attribute mod
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

    //checks if all needed inputs/selections are filled/selected
    const checkForInputs = (processStage: number) => {
        switch (processStage) {
            case 0:
                return charName !== '' && charLevel !== '' && charClass !== '';
            case 1:
                return charRace !== '';
            case 3:
                return charProficiencies[0] !== '' && charProficiencies[1] !== '' && charProficiencies[2] !== '' && charProficiencies[3] !== '';
            case 5:
                return charEquipment[0] !== '';
            case 6:
                return charEquipment[1] !== '';
            case 7:
                return charEquipment[2] !== '';
            case 2:
            default:
                return true;
        }
    }

    const renderProgressBar = () => {
        let tempArr = [];
        for (let i = 0; i < lastStep; i++) {
            tempArr[i] = i < creationProgress ? <div className="bar full" onClick={() => setCreationProgress(i)}></div> : <div className="bar" onClick={() => setCreationProgress(i)}></div>;
        }
        return tempArr;
    }


    return <>
        <div id="progress-bar">
            {renderProgressBar()}
        </div>
        <h1>Create a character:</h1>

        <div id="creation-window">
            {creationProgress === 0 ? <>
                <h2>Enter name and level of the character:</h2>
                <div id="input-fields">
                    <label className="input-field">
                        Name: <input
                            type='text'
                            placeholder="Enter character name"
                            defaultValue={charName !== '' ? charName : ''}
                            onChange={e => handleInputChange('name', e)}></input>
                    </label>
                    <label className="input-field">
                        Level: <input
                            type='number'
                            min='1'
                            max='20'
                            placeholder="1-20"
                            defaultValue={charLevel !== '' ? charLevel : 1}
                            onChange={e => handleInputChange('level', e)}></input>
                    </label>
                </div>

                <h2>Select a class:</h2>
                {renderSelection('classes')}

            </> : creationProgress === 1 ? <>

                <h2>Select a race:</h2>
                {renderSelection('races')}

            </> : creationProgress === 2 ? <>

                <div id="attributes-point-buy">
                    <h2>Points left: {pointBuyLeft}/27<br /></h2>
                    {renderPointBuy()}
                </div>

            </> : creationProgress === 3 ? <>

                <h2>Select 4 proficiencies:</h2>
                {renderSelection('proficiencies')}

            </> : creationProgress === 4 && classSpecs?.caster.canUseSpells === true ? <>
                <h2>Choose your Spells:</h2>
                {charSpellSlots?.cantrips ? charSpellSlots?.cantrips >= 1 ? renderSpellsSelection(0) : <></> : <></>}
                {charSpellSlots?.firstLevelSpells ? charSpellSlots?.firstLevelSpells >= 1 ? renderSpellsSelection(1) : <></> : <></>}
                {charSpellSlots?.secondLevlSpells ? charSpellSlots?.secondLevlSpells >= 1 ? renderSpellsSelection(2) : <></> : <></>}
                {charSpellSlots?.thirdLevlSpells ? charSpellSlots?.thirdLevlSpells >= 1 ? renderSpellsSelection(3) : <></> : <></>}
                {charSpellSlots?.fourthLevlSpells ? charSpellSlots?.fourthLevlSpells >= 1 ? renderSpellsSelection(4) : <></> : <></>}
                {charSpellSlots?.fifthLevlSpells ? charSpellSlots?.fifthLevlSpells >= 1 ? renderSpellsSelection(5) : <></> : <></>}
                {charSpellSlots?.sixthLevlSpells ? charSpellSlots?.sixthLevlSpells >= 1 ? renderSpellsSelection(6) : <></> : <></>}
                {charSpellSlots?.seventhLevlSpells ? charSpellSlots?.seventhLevlSpells >= 1 ? renderSpellsSelection(7) : <></> : <></>}
                {charSpellSlots?.eightLevlSpells ? charSpellSlots?.eightLevlSpells >= 1 ? renderSpellsSelection(8) : <></> : <></>}
                {charSpellSlots?.ninthLevlSpells ? charSpellSlots?.ninthLevlSpells >= 1 ? renderSpellsSelection(9) : <></> : <></>}

            </> : creationProgress === 5 ? <>

                <h2>Select Armor:</h2>
                {renderEquipmentSelection('armor', 0)}

            </> : creationProgress === 6 ? <>

                <h2>Select Primary Weapon:</h2>
                {renderEquipmentSelection('weapons', 1)}

            </> : creationProgress === 7 ? <>

                <h2>Select Secondary Weapon:</h2>
                {renderEquipmentSelection('weapons', 2)}

            </> : creationProgress === 8 ?
                <>
                    <h1>This is your character:</h1>
                    <span className='sum-up-info'>Name:</span> {charName}<br />
                    <span className='sum-up-info'>Level:</span> {charLevel}<br />
                    <span className='sum-up-info'>Class: </span>{charClass}<br />
                    <span className='sum-up-info'>Race:</span> {charRace}<br />
                    <span className='sum-up-info'>Attributes:</span><br />
                    CHA-{charAttributeValues[0] + raceAttIncrease[0]}<br />
                    CON-{charAttributeValues[1] + raceAttIncrease[1]}<br />
                    DEX-{charAttributeValues[2] + raceAttIncrease[2]}<br />
                    INT-{charAttributeValues[3] + raceAttIncrease[3]}<br />
                    STR-{charAttributeValues[4] + raceAttIncrease[4]}<br />
                    WIS-{charAttributeValues[5] + raceAttIncrease[5]}<br />
                    <span className='sum-up-info'>Equipment:</span> {charEquipment[0]},{charEquipment[1]},{charEquipment[2]}<br />
                    <span className='sum-up-info'>Proficiencies:</span> {charProficiencies[0]},{charProficiencies[1]},{charProficiencies[2]},{charProficiencies[3]}<br />
                    <span className='sum-up-info'>Spells:</span> {spellsDummyData.map(item => charSpells.includes(item.id) ? ' ' + item.name + ',' : null)}
                </>
                : <></>}

            <div id="buttons">
                {
                    creationProgress === 0 ?
                        <Link to={'/'}>
                            <button
                                className="progress-button"
                                id="back-button"
                            >
                                BACK
                            </button>
                        </Link> : null
                }
                {
                    creationProgress > 0 ?
                        <button
                            className="progress-button"
                            id="prev-button"
                            onClick={() => { creationProgress === 5 && classSpecs?.caster.canUseSpells === false ? setCreationProgress(creationProgress - 2) : setCreationProgress(creationProgress - 1) }}>
                            PREV
                        </button> : null
                }
                {
                    creationProgress < lastStep && checkForInputs(creationProgress) ?
                        <button className="progress-button"
                            id="next-button"
                            onClick={() => { creationProgress === 3 && classSpecs?.caster.canUseSpells === false ? setCreationProgress(creationProgress + 2) : setCreationProgress(creationProgress + 1) }}>
                            NEXT
                        </button> : null
                }
                {
                    creationProgress === lastStep ?
                        <button className="progress-button"
                            id="submit-button"
                            onClick={() => { handleSubmit() }}>
                            SUBMIT
                        </button> : null
                }
            </div>
        </div>

    </>
}

export default CreateChar;


