import React, {FC, useState} from 'react';
import {Input} from "./UI/Input";

type EditableProps = {
    title: string;
    updateTaskTitle: (title: string) => void
}

const EditableTitle:FC<EditableProps> = ({title, updateTaskTitle}) => {
    const[editMode, setEditMode] = useState(false)
    const[newTitle, setNewTitle] = useState('')

    const activateEditMode = () => {
        setEditMode(true)
        setNewTitle(title)
    }

    const activateViewMode = () => {
        setEditMode(false)
        updateTaskTitle(newTitle)
    }

    return (editMode
        ? <Input
            title={newTitle}
            setTitle={setNewTitle}
            onBlur={activateViewMode}
            onEnterPress={activateViewMode}
autoFocus={true}
            />
        : <div onDoubleClick={activateEditMode}>{title}</div>
);
};

export default EditableTitle;