import React from 'react';
import {CounterPropsType} from "./Counter2";

export const Buttons = (props: CounterPropsType) => {
    return (
        <div className="buttons">
            <button className="button"
                    onClick={props.incValue}
                    disabled={props.value === props.maxValue ? true : undefined}
            >inc
            </button>
            <button className="button"
                    disabled={props.value === props.maxValue ? undefined : true}
                    onClick={props.resetValue}
            >reset
            </button>
        </div>
    )
}