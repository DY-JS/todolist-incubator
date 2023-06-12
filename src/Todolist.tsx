import React, {ChangeEvent, FC, MouseEventHandler, useState} from "react";
import {TaskType, FilterType} from "./App";
import {Button} from "./UI/Button";
import {Checkbox} from "./UI/Checkbox";
import styles from './Todolist.module.css'
import {Input} from "./UI/Input";

type PropsType = {
    title: string
    filter: FilterType
    tasks: TaskType[]
    removeTask: Function
    changeFilter: Function
    changeIsDone: (id: string, isDone: boolean) => void
}


//export const Todolist = ({ truck,  truck2, truck3, tasks}: PropsType) => {
export const Todolist = (props: PropsType) => {

    const handleRemoveTask =(id: string) => {
        props.removeTask(id)
    }
    const  handlechangeFilter = (filter: FilterType) =>  props.changeFilter(filter);
    // const  handlechangeActiveFilter = () =>  props.changeFilter('active');
    // const  handlechangeCompletedFilter = () =>  props.changeFilter('completed');
    // const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    //    props.changeIsDone(e.currentTarget.id, e.currentTarget.checked )
    // }

    return (
        <div className="App">
            <div>
                <ul>
                    {props.tasks.map(task => {
                        return(
                            <li className={task.isDone ? 'isDone' : ''} key={task.title}>
                                <Checkbox checked={task.isDone} callback={(isDone: boolean) => props.changeIsDone(task.id, isDone)}/>
                            <span>{task.title}</span>
                            {/*<button onClick={() => handleRemoveTask(task.id)}>❌</button>*/}
                                <Button callback={() => handleRemoveTask(task.id)} name={"❌"}/>
                            </li>
                        )}
                    )}
                </ul>
                <div>
                    <Button buttonStyle={props.filter==='all' ? styles.activeFilter: ''} callback={() => handlechangeFilter('all')} name="All"/>
                    <Button buttonStyle={props.filter==='active' ? styles.activeFilter: ''} callback={() => handlechangeFilter('active')} name="Active"/>
                    <Button buttonStyle={props.filter==='completed' ? styles.activeFilter: ''} callback={() => handlechangeFilter('completed')} name="Completed"/>
                </div>
            </div>
        </div>
    );
}