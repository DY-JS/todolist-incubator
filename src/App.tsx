import React, {ChangeEvent, MouseEvent, useState} from 'react';
import {Todolist} from "./Todolist";
import {Exchange} from "./currency/Exchange";
import {v4 as uuidv4} from 'uuid';
import RatingContainer from "./Rating/RatingContainer";
import AddTodoList from "./AddTodoList";

export type FilterType = 'all' | 'active' | 'completed';
export type TaskType = {
    id: string,
    title: string,
    isDone: boolean
}

export type TaskStateType = {
    [key: string] : TaskType[]
}

export type TodoListType = {
    id: string
    title: string
    filter: FilterType
}

function App() {
    let todoListId1 = uuidv4()
    let todoListId2 = uuidv4()

    const [todoLists, setTodoLists]=useState<Array<TodoListType>>(
        [{id: todoListId1, title: "Study", filter: "all"},
        {id: todoListId2, title: "Common todos", filter: "active"},
    ])

    let initTasks: TaskStateType = {
        [todoListId1]: [
            {id: uuidv4(), title: "React", isDone: true},
            {id: uuidv4(), title: "JS", isDone: true},
            {id: uuidv4(), title: "Java", isDone: false},
            {id: uuidv4(), title: "Redux", isDone: false}
        ],

        [todoListId2]: [
            {id: uuidv4(), title: "Buy milk", isDone: true},
            {id: uuidv4(), title: "Buy cheese", isDone: true},
            {id: uuidv4(), title: "Make order", isDone: false},
        ]
    }

    const [allTasks, setAllTasks] = useState<TaskStateType>(initTasks)

    const addTodoList = (title: string) => {
        const newTodoList: TodoListType = {
            id: uuidv4(),
            title,
            filter: "all"
        }

        setTodoLists([newTodoList, ...todoLists ])
        setAllTasks({...allTasks, [newTodoList.id]: []})

    }

    const removeTodoList = (listId: string) => {
        setTodoLists(todoLists.filter(tl => tl.id !== listId ))
        delete allTasks[listId]
    }

    const removeTask = (id: string, todoListId: string) => {
        const tasks = allTasks[todoListId]
        let filteredTasks = tasks.filter(t => t.id !== id)
        allTasks[todoListId] = filteredTasks
        setAllTasks({...allTasks});
    }

    const addTask = (title: string, todoListId: string) => {
        const newTask: TaskType = {
            id: uuidv4(),
            title: title,
            isDone: false
        }
        const tasks = allTasks[todoListId]
        const updatedTasks = [newTask, ...tasks]
        allTasks[todoListId] = updatedTasks
        setAllTasks({ ...allTasks})
    }

    const changeIsDone = (id: string, isDone: boolean, todoListId: string) => {
        let tasks = allTasks[todoListId]
        const updatedTasks = tasks.map(t => t.id === id ? {...t, isDone: isDone} : t)
        allTasks[todoListId] = updatedTasks
        setAllTasks({...allTasks})
    }

    const updateTaskTitle = (id: string, title: string, todoListId: string) => {
        let tasks = allTasks[todoListId]
        const updatedTasks = tasks.map(t => t.id === id ? {...t, title} : t)
        allTasks[todoListId] = updatedTasks
        setAllTasks({...allTasks})
    }

    const changeFilter = (value: FilterType, todoListId: string) => {
        const todoList = todoLists.find(tl => tl.id === todoListId)
        if(todoList) {
            todoList.filter = value;
            setTodoLists([...todoLists])
        }

    }

    return (
        <>
            <AddTodoList addTodoList={addTodoList}/>
            {
                todoLists.map(tl => {
                    let filteredTasks = allTasks[tl.id];
                    if (tl.filter === 'active') {
                        filteredTasks = allTasks[tl.id].filter(t => t.isDone !== true)
                    }

                    if (tl.filter === 'completed') {
                        filteredTasks = allTasks[tl.id].filter(t => t.isDone === true)
                    }
                    return(
                    <Todolist
                        key={tl.id}
                        listId={tl.id}
                        listTitle={tl.title}
                        filter={tl.filter}
                        tasks={filteredTasks}
                        addTask={addTask}
                        removeTask={removeTask}
                        changeFilter={changeFilter}
                        changeIsDone={changeIsDone}
                        updateTaskTitle={updateTaskTitle}
                        removeTodoList={removeTodoList}
                    />
                    )
                })
            }
            <Exchange/>
            <RatingContainer/>
        </>

    );
}

export default App;
