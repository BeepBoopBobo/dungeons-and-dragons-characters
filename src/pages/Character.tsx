import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { proficienciesDummyData } from "../DummyData";
import './Character.css';
interface characterParam {
    attributes: {
        name: string,
        value: number
    }[],
    class: {
        name: string,
        id: string,
        hitDieValue: number,
        savingThrows: {
            name: string,
            value: boolean
        }[],
        classGeneralFeatures?: {
            id: string,
            name: string,
            availableAtLevel: number,
            description: string
        }[],
        caster?: {
            canUseSpells: boolean,
            atLevel: number,
            cantrips: number,
            firstLevelSpells: number,
            secondLevlSpells: number,
            thirdLevlSpells: number,
            fourthLevlSpells: number,
            fifthLevlSpells: number,
            sixthLevlSpells: number,
            seventhLevlSpells: number,
            eightLevlSpells: number,
            ninthLevlSpells: number,
            knownSpells: number
        }[]
    },
    currentHp: number,
    deathSavesFails: number,
    deathSavesSaves: number,
    equipment: any,
    id: string,
    level: number,
    maxHp: number,
    name: string,
    proficiencies: { name: string }[]
    race: {
        name: string,
        id: string,
        speed: number,
        attributesIncreased: {
            name: string,
            value: number
        }[]
    },

    spells: {
        id: string,
        name: string,
        level: number,
        type: string,
        time: string,
        concentration: boolean,
        duration: string,
        numOfDice: number,
        die: number,
        description: string
    }[],
    temporalHp: number
}


const Character = () => {
    const [characterState, setCharacterState] = useState<characterParam>();
    let { id } = useParams();

    /*fetching selecter character*/
    useEffect(() => {
        let data = JSON.parse(sessionStorage.chars);
        let character = data.find((item: any) => { return item.id == id ? item : null });
        setCharacterState(character);
    }, []);

    const getAttributeModifier = (val: number) => {

        return Math.floor((val - 10) / 2);
    }

    const getProficiencyModifier = () => {
        return Math.floor(characterState ? characterState.level / 4 + 1 : 0)
    }

    const renderAttributes = () => {
        let attributesTemp = Object.values(characterState?.attributes ? characterState.attributes : '');
        let savingThrowsTemp = Object.values(characterState?.class.savingThrows ? characterState.class.savingThrows : '');
        let proficienciesSel = Object.values(characterState?.proficiencies ? characterState?.proficiencies : {});


        return attributesTemp.map(att =>
            <div className="attributes container standart   rel">
                <div className="attribute-mod square">
                    <div className="big-modifier">
                        {getAttributeModifier(att.value)}
                    </div>
                    <div className="title">
                        {att.name.toLocaleUpperCase()}
                    </div>
                </div>
                <div className="attribute-content text-description ">
                    {savingThrowsTemp.map(st => st.name === att.name ?// 'selects' only a given saving throw for the container
                        st.value === true ? //does the character have proficiency in this saving throw?
                            `● ${(getAttributeModifier(att.value) + getProficiencyModifier() > 0) ?//has proficiency -> YES;is the sum of attribute mod and prof mod bigger than 0?
                                + (getAttributeModifier(att.value) + getProficiencyModifier()) : //has proficiency -> YES; bigger -> YES
                                getAttributeModifier(att.value) + getProficiencyModifier()} SAVING THROW` ://has proficiency -> YES; bigger -> NO
                            `○ ${getAttributeModifier(att.value)} SAVING THROW` : //has proficiency -> NO
                        null// skip different saving throws
                    )}

                    {proficienciesDummyData.map(prof => prof.attribute === att.name ? // 'selects' only a given attribute for the container 
                        <div>
                            {proficienciesSel.find(item => item.name === prof.id) ? // is a character proficient in this skill?
                                (getAttributeModifier(att.value) + getProficiencyModifier()) > 0 ?//proficient -> YES; is the sum bigger than a 0?
                                    '● +' + (getAttributeModifier(att.value) + getProficiencyModifier()) + ' ' + prof.id ://proficient -> YES; bigger -> YES
                                    '● ' + (getAttributeModifier(att.value) + getProficiencyModifier()) + ' ' + prof.id ://proficient -> YES; bigger -> NO
                                getAttributeModifier(att.value) > 0 ?//proficient -> NO; is attribute mod alone bigger than 0?
                                    '○ +' + getAttributeModifier(att.value) + ' ' + prof.id : //proficient -> NO;bigger -> YES
                                    '○ ' + getAttributeModifier(att.value) + ' ' + prof.id}</div> //proficient -> NO;bigger -> NO
                        : null// skip different attributes
                    )}
                </div>
            </div>)
    }

    const renderDeathSaves = () => {
        let tempArr = [];
        for (let i = 0; i < 3; i++) {
            tempArr[i] = i < (characterState?.deathSavesSaves ? characterState?.deathSavesSaves : 0) ? '●' : '○';
        }
        return tempArr;
    }

    const renderDeathFails = () => {
        let tempArr = [];
        for (let i = 0; i < 3; i++) {
            tempArr[i] = i < (characterState?.deathSavesFails ? characterState?.deathSavesFails : 0) ? '●' : '○';
        }
        return tempArr;
    }

    const renderWeapons = () => {
        return <table id="weapons-table">
            <thead>
                <tr id="table-header">
                    <td>
                        WEAPON
                    </td>
                    <td>
                        RANGE
                    </td>
                    <td>
                        TO HIT
                    </td>
                    <td>
                        DAMAGE
                    </td>
                </tr>
            </thead>
            <tbody>
                <tr className="text-description">
                    <td>
                        {characterState?.equipment[1].name}
                    </td>
                    <td>
                        {characterState?.equipment[1].normalRange ? characterState?.equipment[1].normalRange + '/' + characterState?.equipment[1].maxRange + 'ft' : 'melee'}

                    </td>
                    <td>
                        + {characterState?.equipment[1].normalRange ?
                            getProficiencyModifier() + getAttributeModifier(characterState?.attributes[2].value ?
                                characterState?.attributes[2].value : 0) :
                            getProficiencyModifier() + getAttributeModifier(characterState?.attributes[4].value ?
                                characterState?.attributes[4].value : 0)}
                    </td>
                    <td>
                        {characterState?.equipment[1].numOfDice + 'd' + characterState?.equipment[1].die + ' ' + characterState?.equipment[1].typeOfDamage}

                    </td>
                </tr>

                <tr className="text-description">
                    <td>
                        {characterState?.equipment[2].name}
                    </td>
                    <td>
                        {characterState?.equipment[2].normalRange ? characterState?.equipment[2].normalRange + '/' + characterState?.equipment[2].maxRange + 'ft' : 'melee'}
                    </td>
                    <td>
                        + {characterState?.equipment[2].normalRange ?
                            getProficiencyModifier() + getAttributeModifier(characterState?.attributes[2].value ?
                                characterState?.attributes[2].value : 0) :
                            getProficiencyModifier() + getAttributeModifier(characterState?.attributes[4].value ?
                                characterState?.attributes[4].value : 0)}
                    </td>
                    <td>
                        {characterState?.equipment[2].numOfDice + 'd' + characterState?.equipment[2].die + ' ' + characterState?.equipment[2].typeOfDamage}
                    </td>
                </tr>
            </tbody>
        </table>
    }

    const renderFeatures = () => {
        let x = Object.values(characterState?.class.classGeneralFeatures ? characterState?.class.classGeneralFeatures : '').map(feature =>
            feature.name !== '' ?
                <div className="class-feature">
                    <div className='class-feature-name' onClick={e =>
                        e.currentTarget.nextElementSibling ?
                            e.currentTarget.nextElementSibling.className === 'class-feature-description text-description hidden' ?
                                e.currentTarget.nextElementSibling.className = 'class-feature-description text-description' :
                                e.currentTarget.nextElementSibling.className = 'class-feature-description text-description hidden' :
                            null}>{feature.name}</div>
                    <div className='class-feature-description text-description hidden'>{feature.description}</div>
                </div> : <></>)
        x.push(<div className="title">CLASS FEATURES:</div>);
        return x;
    }

    const requestImage = () => {
        return require(`../images/races/${characterState?.race.id ? characterState?.race.id : 'human'}.png`);
    }

    return <div id="charsheet">
        <Link to={'/'}>
            <button className="progress-button" id="home-btn">
                BACK
            </button>
        </Link>
        <div id="charseet-header" className="container standart  ">
            <div id='image-container'>
                <img id="character-image" src={requestImage()} alt='Character avatar' />
            </div>
            <div id="header-props">
                <h1> {characterState?.name.toLocaleUpperCase()}</h1>
                <h2>{characterState?.race.id}, {characterState?.class.id} {characterState?.level}th level</h2>
            </div>
        </div>
        <div id="charsheet-columns">
            <div className="column" id="first-col">
                {renderAttributes()}
            </div>
            <div className="column" id="second-col">
                <div className="row">
                    <div className='container standart   small' id='ac'>
                        <div className="title">ARMOR CLASS</div>
                        <div className="content text-description">{characterState?.equipment[0].dexMod ? characterState?.equipment[0].armorClass + getAttributeModifier(characterState?.attributes[2].value ? characterState?.attributes[2].value : 0) : characterState?.equipment[0].armorClass}</div>
                    </div>
                    <div className='container standart   small' id='speed'>
                        <div className="title">SPEED</div>
                        <div className="content text-description">
                            {characterState?.race.speed}ft
                        </div>
                    </div>
                    <div className='container standart   small' id='initiative'>
                        <div className="title">INITIATIVE</div>
                        <div className="content text-description">
                            {getAttributeModifier(characterState?.attributes[2].value ? characterState?.attributes[2].value : 0)}
                        </div>

                    </div>
                </div>
                <div className="row">
                    <div className="container standart   mid">
                        <div className="title">DEATH SAVES</div>
                        <div className="content" id="death-saves">
                            <div className="death-saves-row">
                                SAVES:
                            </div>
                            <div className="death-saves-points">{renderDeathSaves()}</div>
                            <div className="death-saves-row">
                                FAILS:
                            </div>
                            <div className="death-saves-points">{renderDeathFails()}</div>
                        </div>

                    </div>
                    <div className="container standart   mid">
                        <div className="title">HIT POINTS</div>
                        <div className="content text-description">
                            {characterState?.currentHp}/{characterState?.maxHp}
                        </div>

                    </div>
                </div>
                <div className="row">
                    <div className="container standart   auto">
                        <div className="title">WEAPONS</div>

                        <div className="weapons ">
                            {renderWeapons()}
                        </div>
                    </div>
                </div>
            </div>

            <div className="column container" id="third-col">
                {renderFeatures()}
            </div>
        </div>
    </div>
}

export default Character;