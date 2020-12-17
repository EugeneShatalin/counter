import React from 'react';

type DisplayPropsType = {
    value: number
    maxValue: number
}

export const Display = (props: DisplayPropsType) => {
    return (
        <div className="display">
            <div className={props.value === props.maxValue ? "value valueMax" : "value"} >{props.value}</div>
        </div>
    )
}
