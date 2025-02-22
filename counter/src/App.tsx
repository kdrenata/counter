import {useState} from 'react'
import './App.css'
import {Counter} from "./Counter.tsx";
import {Button} from "./Button.tsx";

function App() {

    const minValue = 0
    const maxValue = 5
    const [count, setCount] = useState(minValue)

    const incCount = () => {
        if (count < maxValue) {
            setCount(count + 1)
        }
    }
    const resetCount = () => {
        setCount(0)
    }

    const countStyle = count >= maxValue ? "red" : "black"


    return (
        <div className="container">
            <Counter count={count} color={countStyle}/>
            <div className='wrapper-button'>
                <Button title={'inc'} onClick={incCount} disabled={count === maxValue}/>
                <Button title={'reset'} onClick={resetCount} disabled={count === minValue}/>
            </div>
        </div>
    );
}

export default App
