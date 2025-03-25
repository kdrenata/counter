
import {Button} from "./Button.tsx";
import {useState} from "react";

type SettingsBoxPropsType = {
    startValue: number;
    maxValue: number;
    onSetValues: (startValue: number, maxValue: number) => void;
};

export const SettingsBox = ({ startValue, maxValue: initialMax, onSetValues }: SettingsBoxPropsType) => {

    const [minValue, setMinValue] = useState(startValue);
    const [maxLimit, setMaxLimit] = useState(initialMax);

    const applySettings = () => {
        onSetValues(minValue, maxLimit);
    };

    return (
        <div className="settings-box">
            <div className="inputs-wrapper">
                <label className="title">
                    Max value:
                    <input
                        className={`input ${maxLimit < 0 || minValue >= maxLimit ? 'error' : ''}`}
                        type="number"
                        value={maxLimit}
                        onChange={(e) => setMaxLimit(+e.currentTarget.value)}
                    />
                </label>

                <label className="title">
                    Start value:
                    <input
                        className={`input ${minValue < 0 ? 'error' : ''}`}
                        type="number"
                        value={minValue}
                        onChange={(e) => setMinValue(+e.currentTarget.value)}
                    />
                </label>
            </div>

            <div className="btn-wrapper">
                <Button className="button" title="Set" onClick={applySettings} />
            </div>
        </div>
    );

};

