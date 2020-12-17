import React from 'react';
import {Display} from "./Display";
import {Buttons} from "./Buttons";

export type CounterPropsType = {
    value: number
    maxValue: number
    incValue: () => void
    resetValue: () => void
}

export function Counter(props: CounterPropsType) {
    return (
        <div className="counter">
            <Display value={props.value}
                     maxValue={props.maxValue}
            />
            <Buttons value = {props.value}
                     maxValue={props.maxValue}
                     incValue={props.incValue}
                     resetValue={props.resetValue}
            />
        </div>
    )
};