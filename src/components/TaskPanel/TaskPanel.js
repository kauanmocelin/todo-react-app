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
            <div className={classes.TaskPanel__status}>
                {doneTasks.length} tarefas pendentes
            </div>
            <div className={classes.TaskPanel__buttons}>
                <button onClick={() => { statusFilterChangeHandler('') }}>Todas</button>
                <button onClick={() => { statusFilterChangeHandler('c') }}>Completas</button>
                <button onClick={() => { statusFilterChangeHandler('p') }}>Pendentes</button>
                <button onClick={() => props.clearTasks()}>Limpar tarefas completas</button>
            </div>
        </div >
    )
}

export default taskPanel