

type CounterProps = {
    count: number;
    color: string;
}

export const Counter = ({count, color}: CounterProps) => {
    return (
        <div className="counter">
            <h1 className='styled-number' style={{color}}>{count}</h1>
        </div>
    )
};


