import React, {ChangeEvent, MouseEvent, useState} from 'react';
import './App.css';
import {Todolist} from "./Todolist";
import {Exchange} from "./currency/Exchange";
import {FullInput} from "./UI/Fullinput";
import {Input} from "./UI/Input";
import {Button} from "./UI/Button";
import { v4 as uuidv4 } from 'uuid';

export type FilterType = 'all' | 'active' | 'completed';
export type TaskType = {
    id: string,
    title: string,
    isDone: boolean
}

function App() {
    let initTasks = [
        {id: uuidv4(), title: "React",isDone: true },
        {id: uuidv4(), title: "JS", isDone: true},
        {id: uuidv4(), title: "Java", isDone: false},
        {id: uuidv4(), title: "Redux", isDone: false}
    ]
    const [filter, setFilter] = useState<FilterType>('all')
    const [tasks, setTasks] = useState(initTasks)
    const [title, setTitle] = useState('')
    const tableTitle = 'What to learn';

    console.log(tasks)

    const removeTask = (id: string) => {
        let filteredTasks = tasks.filter(t => t.id !== id)
        setTasks(filteredTasks);
    }

    const addTask = (title: string) => {
        // const ids = tasks.reduce((acc: number[], t:TaskType) => {
        //     acc.push(t.id)
        //     return acc
        // },[] )

        const newTask: TaskType = {
            //id: Math.max(...ids) + 1,
            id: uuidv4(),
            title: title,
            isDone: false
        }
        setTasks([newTask, ...tasks ])
    }

    const handleAddTask = () => {
        if (title.trim() !== '') {
            addTask(title);
            setTitle("");
        }
    };

    const changeFilter = (value: FilterType) => {
        setFilter(value)
    }

    let filteredTasks = tasks;
    if (filter === 'active') {
        filteredTasks = tasks.filter(t => t.isDone !== true)
    }

    if (filter === 'completed') {
        filteredTasks = tasks.filter(t => t.isDone === true)
    }

return (
    <>
        <Input title={title} setTitle={setTitle}  onEnterAction={handleAddTask} />
        <Button callback={handleAddTask} name={"➕"} />
        <Todolist
            title={tableTitle}
            tasks={filteredTasks}
            removeTask={removeTask}
            changeFilter={changeFilter}
        />
        <Exchange/>
    </>

);
}

export default App;
