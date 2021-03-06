import React, { useState, createContext, useEffect, useContext } from 'react';
import { v4 as uuidv4 } from 'uuid'
import * as RepositoryTask from '../services/RepositoryTask'

const TaskContext = createContext()

export const TaskProvider = ({ children }) => {
    const [tasks, setTasks] = useState([])
    const [editItem, setEditItem] = useState(null)

    useEffect(() => {
        const storedTasks = RepositoryTask.getAll()
        if (storedTasks) setTasks(storedTasks)
    }, [])

    useEffect(() => {
        RepositoryTask.save(tasks)
    }, [tasks])

    const saveTask = (task) => {
        if (!task.description) throw new Error('Não foi possível adicionar tarefa pois não foi informado descrição')

        const newTask = {
            id: uuidv4(),
            description: task.description,
            done: false
        }
        setTasks([...tasks, newTask])
    }

    const deleteTask = (id) => {
        setTasks(
            tasks.filter(task => task.id !== id)
        )
    }

    const findTask = id => {
        setEditItem(
            tasks.find(task => task.id === id)
        )
    }

    const editTask = (id, newDescription) => {
        if (!newDescription) throw new Error('Não foi possível adicionar tarefa pois não foi informado descrição')
        setTasks(
            tasks.map(task =>
                task.id === id ? { ...task, description: newDescription } : task
            )
        )
        setEditItem(null)
    }

    const toggleTaskDone = (id) => {
        setTasks(
            tasks.map(task =>
                task.id === id ? { ...task, done: !task.done } : task
            )
        )
    }

    const clearDoneTasks = () => {
        setTasks(
            tasks.filter(task => !task.done)
        )
    }

    const value = {
        tasks,
        saveTask,
        deleteTask,
        findTask,
        editTask,
        editItem,
        toggleTaskDone,
        clearDoneTasks
    }

    return (
        <TaskContext.Provider value={value} >
            {children}
        </TaskContext.Provider >
    )
}

export const useTask = () => useContext(TaskContext)