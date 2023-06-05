
export type ButtonProps = {
    callback: () => void;
    name: string
};

export const Button = ({ callback, name, ...props }: ButtonProps) => {
    return  (<button onClick={callback}>{name}</button>)
};
