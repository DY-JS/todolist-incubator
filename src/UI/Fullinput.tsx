import { ChangeEvent, MouseEvent, useState } from "react";

type PropsType = {
    addTask: (title: string) => void;
};

export const FullInput = ({ addTask }: PropsType) => {
    const [title, setTitle] = useState("");

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value);
    };

    const handleAddTask = (e: MouseEvent<HTMLButtonElement>) => {
        if (title.trim() !== '') {
            addTask(title);
            setTitle("");
        }
    };

    return (
        <>
            <input onChange={handleChange} value={title} />
            <button onClick={handleAddTask}>➕</button> <p>{title}</p>
        </>
    );
};
