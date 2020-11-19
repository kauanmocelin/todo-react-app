import React from 'react'

import Task from '../Task/Task'
import TaskPanel from '../TaskPanel/TaskPanel'
import Wrapper from './style'

const taskList = ({ tasks, clearTasks, statusFilter, onStatusFilterChange }) => {
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
                showDeleteIcon={task.showDeleteIcon}
                done={task.done} />
        )
    })

    let taskPanel = null
    if (tasks.length > 0) {
        taskPanel = (
            <TaskPanel
                tasks={tasks}
                clearTasks={clearTasks}
                onStatusFilterChange={onStatusFilterChange} />
        )
    }

    return (
        <Wrapper>
            {taskList}
            {taskPanel}
        </Wrapper>
    )
}

export default taskList