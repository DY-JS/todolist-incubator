import React from 'react';
import './App.css';
import {Todolist} from "./Todolist";
import {Exchange} from "./currency/Exchange";

function App() {
    const truck = 'What to learn1';
    const truckNew = 'What to learn2';

    const tasks = [{ id: 1, title: "React",
        isDone: true },{ id: 2, title: "JS", isDone: true },
        { id: 3, title: "Java", isDone: true }
    ]

    return (
        <>
            <Todolist truck={truck} truck2={123} tasks={tasks}/>
            <Todolist truck={truckNew} truck3={true} tasks={tasks}/>
            <Exchange />
        </>

    );
}

export default App;
