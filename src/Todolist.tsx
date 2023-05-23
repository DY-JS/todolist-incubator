import React, {FC} from "react";

type PropsType = {
    truck: string
    truck2?: number
    truckNew?: string
    truck3?: boolean;
    tasks: TaskType[]
}

type TaskType={
    id: number,
    title: string,
    isDone:boolean
}

//export const Todolist = ({ truck,  truck2, truck3, tasks}: PropsType) => {
export const Todolist = (props: PropsType) => {
    const  buttonHandler = (number: number) => {
        console.log(number)
    }

    return (
        <div className="App">
            <div>
                <h3>{props.truck}</h3>
                <h3>{props?.truck2}</h3>
                <h3>{props?.truck3}</h3>
                <div>
                    <input/>
                    <button>+</button>
                </div>
                <ul>
                    {props.tasks.map(task => {
                        return(
                            <li key={task.title}><input type="checkbox" checked={task.isDone}/>
                            <span>{task.title}</span></li>
                        )}
                    )}
                </ul>
                <div>
                    <button>All</button>
                    <button>Active</button>
                    <button>Completed</button>
                </div>
            </div>
        </div>
    );
}