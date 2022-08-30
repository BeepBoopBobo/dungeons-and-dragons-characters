import React, { FC } from "react";
import './CharacterList.css';
import { FaCaretRight, FaCaretLeft } from "react-icons/fa";
import { Link } from "react-router-dom";


const CharacterList: FC<{ data?: { id: number, name: string, class: string, level: number, race?: string }[] }> = (props) => {

    return <div id='pc-list'>
        {
            props.data !== undefined && props.data.length !== 0 ? props.data.map(item =>
                <Link to={`character/${item.id}`}>
                    <div className="list-item" key={`char-${item.name}`}>
                        <span className="pointer"><FaCaretRight /></span>
                        <div className="item">
                            <span className="pc-name">{item.name}</span>
                            <span className="pc-props">{item.class}, lvl {item.level} </span>
                        </div>
                        <span className="pointer"><FaCaretLeft /></span>
                    </div>
                </Link>
            ) : <h3>No matches</h3>}
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