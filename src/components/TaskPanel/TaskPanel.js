import React from 'react'

import classes from './TaskPanel.module.css'

const taskPanel = (props) => {
    const doneTasks = props.tasks.filter(task => {
        return !task.done
    })

    const statusFilterChangeHandler = (typeFilter) => {
        props.onStatusFilterChange(typeFilter)
    }

    return (
        <div className={classes.TaskPanel}>
            {doneTasks.length} tarefas pendentes
            <button onClick={() => { statusFilterChangeHandler('') }}>Todas</button>
            <button onClick={() => { statusFilterChangeHandler('c') }}>Completas</button>
            <button onClick={() => { statusFilterChangeHandler('p') }}>Pendentes</button>
            <button onClick={() => props.clearTasks()}>Limpar tarefas completas</button>
        </div >
    )
}

export default taskPanel