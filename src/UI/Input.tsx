import { ChangeEvent, KeyboardEvent } from "react";
import s from '../Input.module.css'

type PropsType = {
    title: string,
    inputStyle?: string
    setTitle: (title: string) => void;
    onEnterPress?: () => void
    onBlur?: () => void
    autoFocus?: boolean
};

export const Input = ({ title, setTitle, inputStyle, onEnterPress, onBlur, autoFocus, ...props }: PropsType) => {
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
                onBlur={onBlur}
                autoFocus={autoFocus}
            />
        </>
    );
};
