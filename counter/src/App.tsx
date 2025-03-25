import {useState} from 'react'
import './App.css'
import {Counter} from "./components/Counter.tsx";
import {SettingsBox} from "./components/SettingsBox.tsx";



function App() {

    const initialValues = {
        startValue: 0,
        maxValue: 5,
    }
    const [value, setValue] = useState(initialValues);

    const setValuesHandler = (newStartValue: number, newMaxValue: number) => {
        setValue( {startValue: newStartValue, maxValue: newMaxValue } );
    }

    return (
        <div className="App">
            <div className="settings-container">
                <SettingsBox
                    startValue={value.startValue}
                    maxValue={value.maxValue}
                    onSetValues={setValuesHandler}/>
            </div>
            <div className="counter-container">
                <Counter startValue={value.startValue} maxValue={value.maxValue}/>
            </div>
        </div>
    );
}

export default App
