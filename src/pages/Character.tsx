import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './Character.css';

interface characterParam {
    id: number,
    name: string,
    class: string,
    level: number,
    race: string,
    attributes?: {
        charisma: number,
        constitution: number,
        dexterity: number,
        intelligence: number,
        strength: number,
        wisdom: number
    }
}

const Character = () => {
    const icon = require('../images/races/tiefling.png');
    const [characterState, setCharacterState] = useState<characterParam>();
    let { id } = useParams();

    useEffect(() => {
        let data = JSON.parse(sessionStorage.chars);
        let character = data.find((item: any) => { return item.id == id ? item : null });
        setCharacterState(character);
    }, []);

    return <>
        <h1> {characterState?.name}</h1>
        <h1> {characterState?.level}. level</h1>
        <h1> {characterState?.class}</h1>
        <h1> {characterState?.race}</h1>
        <ul>
            {characterState?.attributes?.charisma}
        </ul>
    </>
}

export default Character;