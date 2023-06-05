import { ChangeEvent, KeyboardEvent } from "react";

type PropsType = {
    title: string,
    setTitle: (title: string) => void;
    onEnterAction?: () => void
};

export const Input = ({ title, setTitle, onEnterAction }: PropsType) => {

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value);
    };

    const keyHandle = (e: KeyboardEvent) => {
        if(e.key === 'Enter' && onEnterAction) {
          onEnterAction()
        }
    }

    return (
        <>
            <input
                onChange={handleChange}
                onKeyPress={keyHandle}
                value={title} />
        </>
    );
};
