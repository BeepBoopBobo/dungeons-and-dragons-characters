import { type } from "os";
import React, { useEffect, useState } from "react";
import CharacterList from '../components/CharacterList';
import { classesDummyData } from '../DummyData';
import './Home.css';

const axios = require('axios');

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

const Home = () => {
    const [selectedClassFilter, setSelectedClassFilter] = useState('');   //stores character class as a filter
    const [selectedLevelFilter, setSelectedLevelFilter] = useState([1, 20]);

    const [filteredCharacters, setFilteredCharacters] = useState<characterParam[]>();   //stores results of filtering
    const [allCharacters, setAllCharacters] = useState<characterParam[]>();       //stores default state of ALL characters from the firebase

    useEffect(() => {
        fetchCharacters();
    }, [])

    //gets characters info from db and stores it into sessionstorage, 
    async function fetchCharacters() {
        try {
            const response = await axios.get('https://dnd-vol-2-default-rtdb.europe-west1.firebasedatabase.app/characters.json')

            const characters: characterParam[] = Object.values(response.data).map((item: any) => { return item });

            sessionStorage.setItem('chars', JSON.stringify(characters));
            setAllCharacters(characters);
            setFilteredCharacters(characters);
        }
        catch (error) {
            console.error(error);
        }
    }

    //toggles filter between selected classes
    const handleClassPick = (className: string) => {
        //if the clicked element is already selected > resets the filter
        //else picks the elements (that have the wished class) from original state of characters
        if (selectedClassFilter === className) {
            setSelectedClassFilter('');
            setFilteredCharacters(allCharacters ?
                allCharacters.filter(item => (item.level >= selectedLevelFilter[0] && item.level <= selectedLevelFilter[1])) : []);
        } else {
            setSelectedClassFilter(className.toLocaleLowerCase());
            setFilteredCharacters(allCharacters ?
                allCharacters.filter(item => (item.class?.id === className) && (item.level >= selectedLevelFilter[0] && item.level <= selectedLevelFilter[1])) : []);
        }
    }

    const handleLevelChange = (event: any) => {
        const id = event.target.id;
        const val = event.target.value;
        id === 'character-level-filter-min' ? setSelectedLevelFilter([parseInt(val), selectedLevelFilter[1]]) : setSelectedLevelFilter([selectedLevelFilter[0], parseInt(val)]);
        if (selectedLevelFilter[0] > selectedLevelFilter[1]) {
            setSelectedLevelFilter([selectedLevelFilter[1], selectedLevelFilter[1]]);
        }
    }

    const handleLevelSubmit = () => {
        selectedClassFilter ?
            setFilteredCharacters(allCharacters ? allCharacters.filter(item => (item.level >= selectedLevelFilter[0] && item.level <= selectedLevelFilter[1]) && (item.class?.id === selectedClassFilter)) : []) :
            setFilteredCharacters(allCharacters ? allCharacters.filter(item => item.level >= selectedLevelFilter[0] && item.level <= selectedLevelFilter[1]) : []);

    }

    return <>
        {/* list filters */}
        <div id="character-class-filter">
            {/* renders out a class filter */}
            {classesDummyData.map(item =>
                selectedClassFilter.includes(item.id) ?
                    <div className="class-select" id="class-select-active" onClick={() => handleClassPick(item.id)} key={`sel-${item.id}`}>
                        <span className="class-select-text">{item.id.toLocaleUpperCase()}S</span>
                    </div>
                    : <div className='class-select' onClick={() => handleClassPick(item.id)} key={`sel-${item.id}`}>
                        <span className="class-select-text">{item.id.toLocaleUpperCase()}S</span>
                    </div>)}
        </div>

        {/* renders out a level filter */}
        <div id="character-level-filters">

            <label>
                Min Level:
                <input id="character-level-filter-min" placeholder="1" value={selectedLevelFilter[0]} type='number' min='1' max='20' onChange={handleLevelChange}></input>
            </label>
            <label>
                Max Level:
                <input id="character-level-filter-max" placeholder="20" value={selectedLevelFilter[1]} type='number' min='1' max='20' onChange={handleLevelChange}></input>
            </label>

            <button id="character-level-button" onClick={handleLevelSubmit}>FILTER</button>
        </div>

        <h1>SELECT A CHARACTER:</h1>
        {/* renders list of (filtered) characters */}
        <CharacterList data={filteredCharacters} />
    </>
}

export default Home;