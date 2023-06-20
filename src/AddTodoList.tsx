import React, {FC, useState} from 'react';
import {Input} from './UI/Input'
import {Button} from "./UI/Button";
import styles from "./Todolist.module.css";

interface IProps {
    addTodoList: (title: string) => void
}

const AddTodoList: FC<IProps> = ({addTodoList}) => {
    const [title, setTitle] = useState('')
    const [error, setError] = useState<string | null>(null)

    const onBlurError = () => {
        if (title.trim() === '') {
            setError('Title is required')
        }
    }
    const handleAddTodoList = () => {
        if (title.trim() !== '') {
            addTodoList(title)
            setTitle('')
            setError(null)
        } else {
            setError('Title is required')
        }
    }

    return (
        <>
            <div>
                <Input
                    title={title}
                    inputStyle={error !== null && title.length === 0 ? styles.error : ''}
                    setTitle={setTitle}
                    onBlurError={onBlurError}/>
                <Button callback={handleAddTodoList} name={'Add TodoList'}/>
            </div>
            {error && !title.length && <p className={styles.errorMessage}>{error}</p>}
        </>
    );
};

export default AddTodoList;