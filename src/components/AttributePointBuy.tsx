import React, { FC } from 'react';

const AttributePointBuy: FC<{ att: string, value: number, raceModifier: any, increment: any, decrement: any }> = (props) => {
    const raceMod = props.raceModifier ? props.raceModifier.value : 0;
    const modifier = Math.floor((props.value + raceMod - 10) / 2);

    return <div className='att-pb'>
        {props.att}
        <button onClick={props.decrement}>-</button> {props.value} <button onClick={props.increment}>+</button>
        {'+' + raceMod} TOTAL: {raceMod + props.value}
        <span className='att-modifier'> MOD: {modifier <= 0 ? modifier : '+' + modifier}</span>
    </div>
}

export default AttributePointBuy;