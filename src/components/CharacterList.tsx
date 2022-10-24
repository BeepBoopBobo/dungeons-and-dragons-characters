import React, { FC } from "react";
import './CharacterList.css';
import { FaCaretRight, FaCaretLeft } from "react-icons/fa";
import { Link } from "react-router-dom";


const CharacterList: FC<{
    data?: {
        id: number | string,
        name: string,
        level: number | string,
        class: {
            name: string,
            id: string, hitDieValue: number,
            savingThrows: {
                name: string,
                value: boolean
            }[]
        },
        race: {
            name: string,
            id: string,
            speed: number,
            attributesIncreased: {
                name: string,
                value: number
            }[]
        },
        attributes: {
            name: string,
            value: number
        }[],
        equipment: any,
        proficiencies: { name: string }[]
    }[]
}> = (props) => {

    return <div id='pc-list'>
        {
            props.data !== undefined && props.data.length !== 0 ? props.data.map(item =>
                <Link key={`link-char-${item.name}`} to={`character/${item.id}`}>
                    <div className="list-item">
                        <span className="pointer"><FaCaretRight /></span>
                        <div className="item">
                            <span className="pc-name">{item.name}</span>
                            <span className="pc-props">{item.class.id}, lvl {typeof item.level === 'string' ? parseInt(item.level) : item.level} </span>
                        </div>
                        <span className="pointer"><FaCaretLeft /></span>
                    </div>
                </Link>
            ) : <div id="no-match" >NO MATCHES</div>}
        <Link to={'create-character'}>
            <div id='create-character-button-container'>
                <span className="pointer"><FaCaretRight /></span>
                <button id='create-character-button'>Create a new character</button>
                <span className="pointer"><FaCaretLeft /></span>
            </div>
        </Link>
    </div>
}

export default CharacterList;