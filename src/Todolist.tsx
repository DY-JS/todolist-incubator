import React, {FC, MouseEventHandler} from "react";
import {TaskType, FilterType} from "./App";

type PropsType = {
    title: string
    tasks: TaskType[]
    removeTask: Function
    changeFilter: Function
}


//export const Todolist = ({ truck,  truck2, truck3, tasks}: PropsType) => {
export const Todolist = (props: PropsType) => {

    const handleRemoveTask =(id: string) => {
        props.removeTask(id)
    }
    const  handlechangeFilter = (filter: FilterType) =>  props.changeFilter(filter);
    // const  handlechangeActiveFilter = () =>  props.changeFilter('active');
    // const  handlechangeCompletedFilter = () =>  props.changeFilter('completed');
    return (
        <div className="App">
            <div>
                <ul>
                    {props.tasks.map(task => {
                        return(
                            <li key={task.title}>
                                <input type="checkbox" checked={task.isDone}/>
                            <span>{task.title}</span>
                            <button onClick={() => handleRemoveTask(task.id)}>❌</button>
                            </li>
                        )}
                    )}
                </ul>
                <div>
                    <button onClick={() => handlechangeFilter('all')}>All</button>
                    <button onClick={() => handlechangeFilter('active')}>Active</button>
                    <button onClick={() => handlechangeFilter('completed')}>Completed</button>
                </div>
            </div>
        </div>
    );
}