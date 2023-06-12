
export type ButtonProps = {
    buttonStyle?:string
    callback: () => void;
    name: string
};

export const Button = ({ callback, name, buttonStyle, ...props }: ButtonProps) => {
    return  (<button className={buttonStyle} onClick={callback}>{name}</button>)
};
