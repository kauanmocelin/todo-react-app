import React, { Component } from 'react'

import Title from '../../components/Title/Title'
import TaskList from '../../components/TaskList/TaskList'
import AddTask from '../../components/AddTask/AddTask'
import { v4 as uuidv4 } from 'uuid'

import classes from './TodoBuilder.module.css'

const LOCAL_STORAGE_TASKS = 'todoapp.tasks'

class TodoBuilder extends Component {
    state = {
        tasks: [],
        statusFilter: ''
    }

    componentDidMount() {
        const storedTasks = JSON.parse(localStorage.getItem(LOCAL_STORAGE_TASKS))
        if (storedTasks) this.setState({ tasks: storedTasks })
    }

    componentDidUpdate() {
        localStorage.setItem(LOCAL_STORAGE_TASKS, JSON.stringify(this.state.tasks))
    }

    addTaskHandler = taskDescription => {
        const newTaskData = [...this.state.tasks]
        newTaskData.push({
            id: uuidv4(),
            description: taskDescription,
            done: false,
            showDeleteIcon: false
        })
        this.setState({ tasks: newTaskData })
    }

    deleteTaskHandler = (id) => {
        const newTaskData = [...this.state.tasks]
        const updatedTaskData = newTaskData.filter(task => task.id !== id)
        this.setState({ tasks: updatedTaskData })
    }

    toggleTaskDoneHandler = (id) => {
        const newTaskData = [...this.state.tasks]
        const taskToogle = newTaskData.find(task => task.id === id)
        taskToogle.done = !taskToogle.done
        this.setState({ tasks: newTaskData })
    }

    showDeleteIconHandler = (id) => {
        const newTaskData = [...this.state.tasks]
        const taskToogle = newTaskData.find(task => task.id === id)
        taskToogle.showDeleteIcon = true
        this.setState({ tasks: newTaskData })
    }

    hideDeleteIconHandler = (id) => {
        const newTaskData = [...this.state.tasks]
        const taskToogle = newTaskData.find(task => task.id === id)
        taskToogle.showDeleteIcon = false
        this.setState({ tasks: newTaskData })
    }

    clearDoneTasksHandler = () => {
        const tasks = [...this.state.tasks]
        const pendentTasks = tasks.filter(task => !task.done)
        this.setState({ tasks: pendentTasks })
    }

    statusFilterChangeHandler = (typeFilter) => {
        this.setState({ statusFilter: typeFilter })
    }

    render() {
        return (
            <div className={classes.TodoBuilder}>
                <Title />
                <AddTask onAddTask={this.addTaskHandler} />
                <TaskList
                    tasks={this.state.tasks}
                    onToggleTaskDone={this.toggleTaskDoneHandler}
                    onDelete={this.deleteTaskHandler}
                    show={this.showDeleteIconHandler}
                    hide={this.hideDeleteIconHandler}
                    clearTasks={this.clearDoneTasksHandler}
                    onStatusFilterChange={this.statusFilterChangeHandler}
                    statusFilter={this.state.statusFilter} />
            </div>
        )
    }
}

export default TodoBuilder