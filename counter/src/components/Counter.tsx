import {useState} from "react";
import {Button} from "./Button.tsx";


type CounterType = {
    maxValue: number;
    startValue: number;
}

export const Counter = ({maxValue, startValue }: CounterType) => {
    const [count, setCount] = useState(startValue);

    const handleIncrement = () => {
        if (count < maxValue) {
            setCount(count + 1);
        }
    };
    const handleReset = () => {
        setCount(startValue);
    };
    const getValidationMessage = () => {
        if (startValue >= maxValue) return 'Start value must be smaller than max';
        if (startValue < 0 || maxValue < 0) return 'Only positive numbers allowed';
        return '';
    };
    const warningMessage = getValidationMessage();

    return (
        <div className={'counter'}>

            <div className={'result-wrapper'}>
                {warningMessage ? (
                    <span className={'result error'}>{warningMessage}</span>
                ) : (
                    <span className={count >= maxValue ? 'result max' : 'result'}>{count}</span>
                )}
            </div>

            <div className={'btn-wrapper'}>
                <Button
                    className={count >= maxValue || startValue > maxValue || startValue < 0 || maxValue < 0 ? 'button disabled' : 'button'}
                    title={'inc'}
                    disabled={count >= maxValue || startValue > maxValue || startValue < 0 || maxValue < 0}
                    onClick={handleIncrement}
                />
                <Button
                    className={'button'}
                    title={'reset'}
                    onClick={handleReset}
                />
            </div>

        </div>
    )
};


