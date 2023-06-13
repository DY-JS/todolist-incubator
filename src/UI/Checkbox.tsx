import { ChangeEvent } from "react";

type PropsType = {
    id?: string
    callback: ( isDone: boolean) => void
    checked: boolean
};

export const Checkbox = ({ id, checked, callback }: PropsType) => {

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        callback(e.currentTarget.checked)
    };

    return (
        <>
            <input
                type="checkbox"
                onChange={handleChange}
                checked={checked}
            />
        </>
    );
};
