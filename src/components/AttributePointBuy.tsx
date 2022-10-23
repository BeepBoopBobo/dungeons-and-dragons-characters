import React, { FC } from 'react';
import './AttributePointBuy.css';

const AttributePointBuy: FC<{ att: string, value: number, raceModifier: any, increment: any, decrement: any }> = (props) => {
    const raceMod = props.raceModifier ? props.raceModifier : 0;
    const modifier = Math.floor((props.value + raceMod - 10) / 2);

    return <tr className='pb-row'>
        <td className='pb-cell'>
            {props.att}
        </td>

        <td className='pb-cell'>
            {props.value}
        </td>

        <td className='pb-cell'>
            <div className='pb-cell-buttons'>
                <button onClick={props.decrement} className='pb-button'>-</button>

                <button onClick={props.increment} className='pb-button'>+</button>
            </div>
        </td>

        <td className='pb-cell'>
            {'+' + raceMod}
        </td>

        <td className='pb-cell'>
            {raceMod + props.value}
        </td>

        <td className='pb-cell'>
            <span className='att-modifier'>{modifier <= 0 ? modifier : '+' + modifier}</span>
        </td>
    </tr >
}

export default AttributePointBuy;