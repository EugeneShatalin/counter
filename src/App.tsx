import React, {useState} from 'react';
import './App.css';
import {Counter} from './components/Counter2';

function App() {

    const maxValue = 5;
    let [value, setValue] = useState<number>(0);

    const incValue = () => {
        if (value < maxValue) {
            return setValue(++value);
        }
    }

    const resetValue = () => {
        setValue(0)
    }

    return (
        <div className="App">
            <Counter
                value = {value}
                maxValue={maxValue}
                incValue={incValue}
                resetValue={resetValue}
            />
        </div>
    );
}

export default App;
