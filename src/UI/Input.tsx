import { ChangeEvent, KeyboardEvent } from "react";
import s from '../Input.module.css'

type PropsType = {
    title: string,
    inputStyle?: string
    setTitle: (title: string) => void;
    onEnterPress?: () => void
};

export const Input = ({ title, setTitle, inputStyle, onEnterPress }: PropsType) => {

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value);
    };

    const handleKeyPress = (e: KeyboardEvent) => {
        if(e.key === 'Enter' && onEnterPress) {
          onEnterPress()
        }
    }

    return (
        <>
            <input
                className={inputStyle}
                onChange={handleChange}
                onKeyPress={handleKeyPress}
                value={title}
            />
        </>
    );
};
