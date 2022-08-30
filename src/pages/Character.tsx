import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

interface characterParam {
    id: number,
    name: string,
    class: string,
    level: number,
    race: string
}

const Character = () => {

    const [characterState, setCharacterState] = useState<characterParam>()
    let { id } = useParams();

    useEffect(() => {
        let data = JSON.parse(sessionStorage.chars);
        let character = data.find((item: any) => { return item.id == id ? item : null });
        setCharacterState(character);
    }, [])

    return <>
        <h1>Character page</h1>
        <h3>Name: {characterState?.name}</h3>
        <h3>Class: {characterState?.class}</h3>
        <h3>Level: {characterState?.level}</h3>
    </>
}

export default Character;