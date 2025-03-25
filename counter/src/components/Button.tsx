

type ButtonPropsType = {
    title: string;
    className?: string;
    onClick: () => void;
    disabled?: boolean;
}

export const Button = ({ title, className, onClick, disabled }: ButtonPropsType) =>    {
    return (
            <button
                className={className}
                onClick={onClick}
                disabled={disabled}>
               {title}
            </button>
    )
}