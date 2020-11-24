import React, { useState, createContext, useEffect, useContext } from 'react';
import * as RepositoryTask from '../services/RepositoryTask'

const TaskContext = createContext()

export const TaskProvider = ({ children }) => {
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
        setTasks(() => {
            return tasks.filter(task => !task.done)
        })
    }

    return (
        <TaskContext.Provider value={{ tasks, setTasks, deleteTask, toggleTaskDone, clearDoneTasks }} >
            {children}
        </TaskContext.Provider >
    )
}

export const useTask = () => {
    const { tasks, setTasks, deleteTask, toggleTaskDone, clearDoneTasks } = useContext(TaskContext)
    return { tasks, setTasks, deleteTask, toggleTaskDone, clearDoneTasks }
}