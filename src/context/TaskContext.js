import React, { useState, createContext, useEffect } from 'react';
import * as RepositoryTask from '../services/RepositoryTask'

export const TaskContext = createContext()

export const TaskProvider = (props) => {
    const [tasks, setTasks] = useState([])

    useEffect(() => {
        const storedTasks = RepositoryTask.getAll()
        if (storedTasks) setTasks(storedTasks)
    }, [])

    useEffect(() => {
        RepositoryTask.save(tasks)
    }, [tasks])


    const deleteTask = (id) => {
        setTasks(() => {
            return tasks.filter(task => task.id !== id)
        })
    }

    const toggleTaskDone = (id) => {
        setTasks(() => {
            return tasks.map(task =>
                task.id === id ? { ...task, done: !task.done } : task
            )
        })
    }

    const clearDoneTasks = () => {
        const newTaskData = [...tasks]
        const pendentTasks = newTaskData.filter(task => !task.done)
        setTasks(pendentTasks)
    }

    return (
        <TaskContext.Provider value={{ tasks, setTasks, deleteTask, toggleTaskDone, clearDoneTasks }} >
            { props.children}
        </TaskContext.Provider >
    )
}