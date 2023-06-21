import React, {ChangeEvent, FC, MouseEventHandler, useEffect, useState} from "react";
import {TaskType, FilterType} from "./App";
import {Button} from "./UI/Button";
import {Checkbox} from "./UI/Checkbox";
import styles from './Todolist.module.css'
import {Input} from "./UI/Input";
import EditableTitle from "./EditableTitle";
import {v4 as uuidv4} from 'uuid';

type PropsType = {
    listId: string
    listTitle: string
    filter: FilterType
    tasks: TaskType[]
    addTask: (title: string, todoListId: string) => void
    removeTask: (title: string, todoListId: string) => void
    changeFilter: Function
    changeIsDone: (id: string, isDone: boolean, todoListId: string) => void
    updateTaskTitle: (id: string, title: string, todoListId: string) => void
    updateListTitle: (listTitle: string, todoListId: string) => void
    removeTodoList: (listId: string) => void
}

export const Todolist: FC<PropsType> = ({listId,
                                            listTitle, filter,tasks,
                                            addTask, removeTask, changeFilter,changeIsDone,
                                            updateTaskTitle, updateListTitle, removeTodoList}) => {
    const [title, setTitle] = useState('')
    const [error, setError] = useState<string | null>(null)

    const handleAddTask = (listId: string,title:string) => {
        if (title.trim() !== '') {
            addTask(title, listId );
            setError(null)
        setTitle('')
        } else {
            setError('Title is required')
        }
    };

    const  handlechangeFilter = (filter: FilterType, id:string) => changeFilter(filter, id);
    // const  handlechangeActiveFilter = () =>  props.changeFilter('active');
    // const  handlechangeCompletedFilter = () =>  props.changeFilter('completed');
    // const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    //    props.changeIsDone(e.currentTarget.id, e.currentTarget.checked )
    // }

    const addTacksWrapper =()=>{
        handleAddTask(listId,title)
    }


    return (
            <div className={styles.todolist}>
                <div className={styles.listTitle}>
                    {/*<h2 className={styles.title}>{listTitle}</h2>*/}
                    <EditableTitle title={listTitle} updateTitle={(title:string) => updateListTitle(title, listId)}/>
                    <Button callback={() => removeTodoList(listId)} name={"❌"}/>
                </div>
                <Input
                    title={title}
                    setTitle={setTitle}
                    inputStyle={error !== null && title.length === 0 ? styles.error : ''}
                    onEnterPress={addTacksWrapper}
                />
                <Button callback={addTacksWrapper} name={"➕"}/>
                {error && !title.length && <p className={styles.errorMessage}>{error}</p>}

                <ul>
                    {tasks.map(task => {
                        return(
                            <li className={task.isDone ? styles.isDone : ''} key={uuidv4()}>
                                <Checkbox checked={task.isDone} callback={(isDone: boolean) => changeIsDone(task.id, isDone, listId)}/>
                                <EditableTitle title={task.title} updateTitle={(title: string) => updateTaskTitle(task.id, title, listId)}/>
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