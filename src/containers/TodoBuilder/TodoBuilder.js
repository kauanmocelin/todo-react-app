import React, { useState, useEffect } from 'react'

import Title from '../../components/Title/Title'
import TaskList from '../../components/TaskList/TaskList'
import AddTask from '../../components/AddTask/AddTask'
import { v4 as uuidv4 } from 'uuid'

import Container from './style'

const LOCAL_STORAGE_TASKS = 'todoapp.tasks'

const TodoBuilder = () => {
    const [tasks, setTasks] = useState([])
    const [statusFilter, setStatusFilter] = useState('')

    useEffect(() => {
        const storedTasks = JSON.parse(localStorage.getItem(LOCAL_STORAGE_TASKS))
        if (storedTasks) setTasks(storedTasks)
    }, [])

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_TASKS, JSON.stringify(tasks))
    }, [tasks])

    const addTaskHandler = (taskDescription) => {
        const newTaskData = [...tasks]
        newTaskData.push({
            id: uuidv4(),
            description: taskDescription,
            done: false,
            showDeleteIcon: false
        })
        setTasks(newTaskData)
    }

    const deleteTaskHandler = (id) => {
        const newTaskData = [...tasks]
        const updatedTaskData = newTaskData.filter(task => task.id !== id)
        setTasks(updatedTaskData)
    }

    const toggleTaskDoneHandler = (id) => {
        const newTaskData = [...tasks]
        const taskToogle = newTaskData.find(task => task.id === id)
        taskToogle.done = !taskToogle.done
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
        // setState({ statusFilter: typeFilter })
    }

    return (
        <Container>
            <Title />
            <AddTask onAddTask={addTaskHandler} />
            <TaskList
                tasks={tasks}
                onToggleTaskDone={toggleTaskDoneHandler}
                onDelete={deleteTaskHandler}
                show={showDeleteIconHandler}
                hide={hideDeleteIconHandler}
                clearTasks={clearDoneTasksHandler}
                onStatusFilterChange={statusFilterChangeHandler}
                statusFilter={statusFilter} />
        </Container>
    )
}

export default TodoBuilder