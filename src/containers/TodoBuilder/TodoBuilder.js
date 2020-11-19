import React, { useState, useEffect } from 'react'

import Title from '../../components/Title/Title'
import TaskList from '../../components/TaskList/TaskList'
import AddTask from '../../components/AddTask/AddTask'
import { v4 as uuidv4 } from 'uuid'
import * as RepositoryTask from '../../services/RepositoryTask'

import ManageTaskContext from '../../context/ManageTaskContext'

import Container from './style'

const TodoBuilder = () => {
    const [tasks, setTasks] = useState([])
    const [statusFilter, setStatusFilter] = useState('')


    useEffect(() => {
        const storedTasks = RepositoryTask.getAll()
        if (storedTasks) setTasks(storedTasks)
    }, [])

    useEffect(() => {
        RepositoryTask.save(tasks)
    }, [tasks])

    const addTaskHandler = (taskDescription) => {
        const newTask = {
            id: uuidv4(),
            description: taskDescription,
            done: false,
            showDeleteIcon: false
        }
        const newTasks = [...tasks, newTask]
        setTasks(newTasks)
    }

    const deleteTaskHandler = (id) => {
        const updatedTask = tasks.filter(task => task.id !== id)
        setTasks(updatedTask)
    }

    const toggleTaskDoneHandler = (id) => {
        const newTaskData = tasks.map(task =>
            task.id === id ? { ...task, done: !task.done } : task
        )
        setTasks(newTaskData)
    }

    const showDeleteIconHandler = (id) => {
        const newTaskData = [...tasks]
        const taskToogle = newTaskData.find(task => task.id === id)
        taskToogle.showDeleteIcon = true
        setTasks(newTaskData)
    }

    const hideDeleteIconHandler = (id) => {
        const newTaskData = [...tasks]
        const taskToogle = newTaskData.find(task => task.id === id)
        taskToogle.showDeleteIcon = false
        setTasks(newTaskData)
    }

    const clearDoneTasksHandler = () => {
        const newTaskData = [...tasks]
        const pendentTasks = newTaskData.filter(task => !task.done)
        setTasks(pendentTasks)
    }

    const statusFilterChangeHandler = (typeFilter) => {
        setStatusFilter(typeFilter)
    }

    return (
        <Container>
            <Title />
            <AddTask onAddTask={addTaskHandler} />
            <ManageTaskContext.Provider value={{ deleteTaskHandler, toggleTaskDoneHandler, showDeleteIconHandler, hideDeleteIconHandler }}>
                <TaskList
                    tasks={tasks}
                    clearTasks={clearDoneTasksHandler}
                    onStatusFilterChange={statusFilterChangeHandler}
                    statusFilter={statusFilter} />
            </ManageTaskContext.Provider>
        </Container>
    )
}

export default TodoBuilder