import React, { useMemo } from 'react'
import { toast } from 'react-toastify'
import { Wrapper, Button, ActionButton } from './style'

import { useTask } from '../../context/TaskContext'

const TaskPanel = ({ onStatusFilterChange }) => {
    const { tasks, clearDoneTasks } = useTask()

    const pendentTasks = useMemo(() => {
        return tasks.filter(task => {
            return !task.done
        })
    }, [tasks])

    const existAtLeastOneDoneTask = useMemo(() => {
        return tasks.some(task => {
            return task.done === true
        })
    }, [tasks])

    const statusFilterChangeHandler = (typeFilter) => {
        onStatusFilterChange(typeFilter)
    }

    const clearTasksHandler = () => {
        clearDoneTasks()
        toast.success('Todas as tarefas completas foram removidas');
    }

    return (
        <Wrapper>
            <div>
                {pendentTasks.length === 1 && `${pendentTasks.length} tarefa pendente`}
                {pendentTasks.length > 1 && `${pendentTasks.length} tarefas pendentes`}
            </div>
            <div>
                <Button onClick={() => { statusFilterChangeHandler('') }}>Todas</Button>
                {existAtLeastOneDoneTask && <Button onClick={() => { statusFilterChangeHandler('c') }}>Completas</Button>}
                {pendentTasks.length > 0 && <Button onClick={() => { statusFilterChangeHandler('p') }}>Pendentes</Button>}
                {existAtLeastOneDoneTask && <ActionButton onClick={clearTasksHandler}>Limpar Completas</ActionButton>}
            </div>
        </Wrapper>)
}

export default TaskPanel