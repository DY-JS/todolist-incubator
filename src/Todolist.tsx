import React, {ChangeEvent, FC, MouseEventHandler, useState} from "react";
import {TaskType, FilterType} from "./App";
import {Button} from "./UI/Button";
import {Checkbox} from "./UI/Checkbox";
import styles from './Todolist.module.css'
import {Input} from "./UI/Input";

type PropsType = {
    listId: string
    listTitle: string
    filter: FilterType
    tasks: TaskType[]
    addTask: (title: string, todoListId: string) => void
    removeTask: (title: string, todoListId: string) => void
    changeFilter: Function
    changeIsDone: (id: string, isDone: boolean, todoListId: string) => void
    removeTodoList: (listId: string) => void
}

export const Todolist: FC<PropsType> = ({listId, listTitle, filter,tasks, addTask, removeTask, changeFilter, changeIsDone, removeTodoList}) => {
    const [title, setTitle] = useState('')
    const [error, setError] = useState<string | null>(null)

    const handleAddTask = (listId: string) => {
        if (title.trim() !== '') {
            addTask(title, listId );
            setTitle("");
            setError(null)
        } else {
            setError('Title is required')
        }
    };

    const onBlurError = () => {
        if (title.trim() === '') {
            setError('Title is required')
        }
    }

    const  handlechangeFilter = (filter: FilterType, id:string) => changeFilter(filter, id);
    // const  handlechangeActiveFilter = () =>  props.changeFilter('active');
    // const  handlechangeCompletedFilter = () =>  props.changeFilter('completed');
    // const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    //    props.changeIsDone(e.currentTarget.id, e.currentTarget.checked )
    // }

    return (

            <div>
                <div>
                    <h2 className={styles.title}>{listTitle}</h2>
                    <Button callback={() => removeTodoList(listId)} name={"❌"}/>
                </div>
                <Input
                    title={title}
                    setTitle={setTitle}
                    inputStyle={error !== null ? 'error' : ''}
                    // error={error}
                    onBlurError={onBlurError}
                    onEnterPress={() => handleAddTask(listId)}
                />
                <Button callback={() => handleAddTask(listId)} name={"➕"}/>
                {error && <p className={styles.errorMessage}>{error}</p>}

                <ul>
                    {tasks.map(task => {
                        return(
                            <li className={task.isDone ? 'isDone' : ''} key={task.title}>
                                <Checkbox checked={task.isDone} callback={(isDone: boolean) => changeIsDone(task.id, isDone, listId)}/>
                            <span>{task.title}</span>
                                <Button callback={() => removeTask(task.id, listId)} name={"❌"}/>
                            </li>
                        )}
                    )}
                </ul>
                <div>
                    <Button buttonStyle={filter==='all' ? styles.activeFilter: ''} callback={() => handlechangeFilter('all', listId)} name="All"/>
                    <Button buttonStyle={filter==='active' ? styles.activeFilter: ''} callback={() => handlechangeFilter('active', listId)} name="Active"/>
                    <Button buttonStyle={filter==='completed' ? styles.activeFilter: ''} callback={() => handlechangeFilter('completed', listId)} name="Completed"/>
                </div>
            </div>
    );
}