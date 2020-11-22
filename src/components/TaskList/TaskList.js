import React, { useContext } from 'react'

import Task from '../Task/Task'
import TaskPanel from '../TaskPanel/TaskPanel'
import Wrapper from './style'

import { TaskContext } from '../../context/TaskContext'

const TaskList = ({ statusFilter, onStatusFilterChange }) => {
    const { tasks } = useContext(TaskContext)

    const taskList = tasks.filter(task => {
        if (statusFilter === 'p' && task.done) return false
        if (statusFilter === 'c' && !task.done) return false
        return true
    }).map(task => {
        return (
            <Task
                key={task.id}
                id={task.id}
                description={task.description}
                done={task.done} />
        )
    })

    let taskPanel = null
    if (tasks.length > 0) {
        taskPanel = (
            <TaskPanel onStatusFilterChange={onStatusFilterChange} />
        )
    }

    return (
        <Wrapper>
            { taskList}
            { taskPanel}
        </Wrapper>
    )
}

export default TaskList