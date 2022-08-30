import { type } from "os";
import React, { useEffect, useState } from "react";
import CharacterList from '../components/CharacterList';
import { classesDummyData } from '../DummyData';
const axios = require('axios');

interface characterParam {
    id: number,
    name: string,
    class: string,
    level: number,
    race: string
}

const Home = () => {
    const [selectedClassFilter, setSelectedClassFilter] = useState<string>('');   //stores character class as a filter
    const [selectedLevelFilter, setSelectedLevelFilter] = useState([1, 20]);

    const [filteredCharacters, setFilteredCharacters] = useState<characterParam[]>();   //stores results of filtering
    const [allCharacters, setAllCharacters] = useState<characterParam[]>();       //stores default state of ALL characters from the firebase

    useEffect(() => {
        fetchCharacters();
    }, [])

    //gets characters info from db and stores it into sessionstorage, 
    async function fetchCharacters() {
        try {
            const response = await axios.get('https://dnd-vol-2-default-rtdb.europe-west1.firebasedatabase.app/characters.json');
            const characters: { id: number, class: string, race: string, level: number, name: string }[] = response.data.map((item: {}) => { return item });
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
            setFilteredCharacters(allCharacters ? allCharacters.filter(item => (item.level >= selectedLevelFilter[0] && item.level <= selectedLevelFilter[1])) : []);
        } else {
            setSelectedClassFilter(className);
            setFilteredCharacters(allCharacters ? allCharacters.filter(item => (item.class === className) && (item.level >= selectedLevelFilter[0] && item.level <= selectedLevelFilter[1])) : []);
        }
    }

    const handleLevelChange = (event: any) => {
        const id = event.target.id;
        const val = event.target.value;
        id === 'character-level-filter-min' ? setSelectedLevelFilter([parseInt(val), selectedLevelFilter[1]]) : setSelectedLevelFilter([selectedLevelFilter[0], parseInt(val)]);
        if (selectedLevelFilter[0] > selectedLevelFilter[1]) {
            setSelectedLevelFilter([selectedLevelFilter[1], selectedLevelFilter[1]]);
        }
        console.log(selectedLevelFilter);
    }

    const handleLevelSubmit = () => {
        selectedClassFilter ?
            setFilteredCharacters(allCharacters ? allCharacters.filter(item => (item.level >= selectedLevelFilter[0] && item.level <= selectedLevelFilter[1]) && (item.class === selectedClassFilter)) : []) :
            setFilteredCharacters(allCharacters ? allCharacters.filter(item => item.level >= selectedLevelFilter[0] && item.level <= selectedLevelFilter[1]) : []);

    }

    return <>
        {/* list filters */}
        <div id="character-class-filter">
            {/* renders out a class filter */}
            {classesDummyData.map(item =>
                selectedClassFilter.includes(item.name) ?
                    <div className="class-select" id="class-select-active" onClick={() => handleClassPick(item.name)} key={`sel-${item.name}`}>{item.name}</div>
                    : <div className='class-select' onClick={() => handleClassPick(item.name)} key={`sel-${item.name}`}>{item.name}</div>)}
        </div>
        {/* renders out a level filter */}
        <div id="character-level-filter">
            <label>
                Min Level:
                <input id="character-level-filter-min" placeholder="1" value={selectedLevelFilter[0]} type='number' min='1' max='20' onChange={handleLevelChange}></input>

            </label>
            <label>
                Max Level:
                <input id="character-level-filter-max" placeholder="20" value={selectedLevelFilter[1]} type='number' min='1' max='20' onChange={handleLevelChange}></input>
            </label>
            <button id="character-level-button" onClick={handleLevelSubmit}>Filter</button>
        </div>

        <h1>SELECT A CHARACTER:</h1>

        {/* renders list of (filtered) characters */}
        <CharacterList data={filteredCharacters} />
    </>
}

export default Home;