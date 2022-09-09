import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './Character.css';

interface characterParam {
    id: number,
    name: string,
    class: string,
    level: number,
    race: string
}

const Character = () => {
    const icon = require('../images/races/tiefling.png')
    const [characterState, setCharacterState] = useState<characterParam>()
    let { id } = useParams();

    useEffect(() => {
        let data = JSON.parse(sessionStorage.chars);
        let character = data.find((item: any) => { return item.id == id ? item : null });
        setCharacterState(character);
    }, [])

    return <div id="page-character">
        <div id='character-header' className='container'>
            <div id="picture-container">
                <img src={icon} alt='character portrait' id='character-picture'></img>
            </div>
            <div id="character-basic">
                <h2>{characterState?.name}</h2>
                <h3>{characterState?.race} {characterState?.class}, {characterState?.level}
                    {characterState ? characterState.level > 3 ? 'th' :
                        characterState.level === 3 ? 'rd' :
                            characterState.level === 2 ? 'nd' :
                                'st' :
                        '-th'} level</h3>
            </div>

        </div>
        <div id="character-props">
            <div className="column first">

                <div className="attributes container">
                    <div className="attribute-modifier container">
                        <div className="value">
                            +5
                        </div>
                        <div className="attribute-name">
                            Strength
                        </div>
                    </div>
                    {/* <div className="attributes-container"> */}
                    <div className="skills">
                        {/* <ul className="attributes-list"> */}
                        <ul className="skills-list">
                            <li className="skill-item"><span className="saving-throw">o__ saving throw</span></li>
                            <li className="skill-item">one</li>
                            <li className="skill-item">two</li>
                            <li className="skill-item">three</li>
                            <li className="skill-item">one</li>
                            <li className="skill-item">two</li>
                            <li className="skill-item">three</li>
                            <li className="skill-item">one</li>
                        </ul>
                    </div>
                </div>
                <div className="attributes container">
                    <div className="attribute-modifier container">
                        <div className="value">
                            +5
                        </div>
                        <div className="attribute-name">
                            Strength
                        </div>
                    </div>
                    {/* <div className="attributes-container"> */}
                    <div className="skills">
                        {/* <ul className="attributes-list"> */}
                        <ul className="skills-list">
                            <li className="skill-item"><span className="saving-throw">o__ saving throw</span></li>
                            <li className="skill-item">one</li>
                            <li className="skill-item">two</li>
                            <li className="skill-item">three</li>
                            <li className="skill-item">one</li>
                            <li className="skill-item">two</li>
                            <li className="skill-item">three</li>
                            <li className="skill-item">one</li>
                        </ul>
                    </div>
                </div>
                <div className="attributes container">
                    <div className="attribute-modifier container">
                        <div className="value">
                            +5
                        </div>
                        <div className="attribute-name">
                            Strength
                        </div>
                    </div>
                    {/* <div className="attributes-container"> */}
                    <div className="skills">
                        {/* <ul className="attributes-list"> */}
                        <ul className="skills-list">
                            <li className="skill-item"><span className="saving-throw">o__ saving throw</span></li>
                            <li className="skill-item">one</li>
                            <li className="skill-item">two</li>
                            <li className="skill-item">three</li>
                            <li className="skill-item">one</li>
                            <li className="skill-item">two</li>
                            <li className="skill-item">three</li>
                            <li className="skill-item">one</li>
                        </ul>
                    </div>
                </div>
                <div className="attributes container">
                    <div className="attribute-modifier container">
                        <div className="value">
                            +5
                        </div>
                        <div className="attribute-name">
                            Strength
                        </div>
                    </div>
                    {/* <div className="attributes-container"> */}
                    <div className="skills">
                        {/* <ul className="attributes-list"> */}
                        <ul className="skills-list">
                            <li className="skill-item"><span className="saving-throw">o__ saving throw</span></li>
                            <li className="skill-item">one</li>
                            <li className="skill-item">two</li>
                            <li className="skill-item">three</li>
                            <li className="skill-item">one</li>
                            <li className="skill-item">two</li>
                            <li className="skill-item">three</li>
                            <li className="skill-item">one</li>
                        </ul>
                    </div>
                </div>
                <div className="attributes container">
                    <div className="attribute-modifier container">
                        <div className="value">
                            +5
                        </div>
                        <div className="attribute-name">
                            Strength
                        </div>
                    </div>
                    {/* <div className="attributes-container"> */}
                    <div className="skills">
                        {/* <ul className="attributes-list"> */}
                        <ul className="skills-list">
                            <li className="skill-item"><span className="saving-throw">o__ saving throw</span></li>
                            <li className="skill-item">one</li>
                            <li className="skill-item">two</li>
                            <li className="skill-item">three</li>
                            <li className="skill-item">one</li>
                            <li className="skill-item">two</li>
                            <li className="skill-item">three</li>
                            <li className="skill-item">one</li>
                        </ul>
                    </div>
                </div>
                <div className="attributes container">
                    <div className="attribute-modifier container">
                        <div className="value">
                            +5
                        </div>
                        <div className="attribute-name">
                            Strength
                        </div>
                    </div>
                    {/* <div className="attributes-container"> */}
                    <div className="skills">
                        {/* <ul className="attributes-list"> */}
                        <ul className="skills-list">
                            <li className="skill-item"><span className="saving-throw">o__ saving throw</span></li>
                            <li className="skill-item">one</li>
                            <li className="skill-item">two</li>
                            <li className="skill-item">three</li>
                            <li className="skill-item">one</li>
                            <li className="skill-item">two</li>
                            <li className="skill-item">three</li>
                            <li className="skill-item">one</li>
                        </ul>
                    </div>
                </div>



            </div>

            <div className="column second">
                <div id="in-combat-stats">
                    <div className='container' id="armor-class">
                        <div className='header' id='armor-class-header'> AC</div>
                        <div className="value">15</div>
                    </div>
                    <div className='container' id="speed">
                        <div className='header container' id='speed-header'> Speed</div>
                        <div className="value">35ft</div>

                    </div>
                    <div className='container' id="initiative">
                        <div className='header container' id='initiative-header'> Initiative</div>
                        <div className="value">+3</div>
                    </div>
                </div>

                <div id="health-stats">
                    <div id='death-saves' className='container'>
                        <div className="header">Death saves</div>
                        ❤️❤️❤️
                        💀💀💀
                    </div>
                    <div id="health-pool" className='container'>
                        <div className="header">Current hp</div>

                        <div id='current-hp'>20/20</div>
                        <div className="header">Temporary hp</div>

                        <div id='temp-hp'>0</div>
                    </div>
                </div>
                <div id="attacks">

                </div>
            </div>
            <div className="column third">
                <div id="inventory">

                </div>
            </div>
        </div>
    </div>
}

export default Character;