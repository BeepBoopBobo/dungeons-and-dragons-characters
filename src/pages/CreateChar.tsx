import React from "react";

const CreateChar = () => {
    const handleSubmit = () => {

    }

    return <>
        <h1>CreateChar page</h1>
        <form>
            <label>
                Name:
                <input type='text' placeholder="Enter character name"></input>
            </label>

            <label>
                Class:
                <select placeholder="class">
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
                <select placeholder="race">
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
                <input type='number' min='1' max='20'></input>
            </label>

            <button onClick={handleSubmit}></button>
        </form>
    </>
}

export default CreateChar;