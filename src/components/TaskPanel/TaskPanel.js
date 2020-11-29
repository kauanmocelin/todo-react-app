import React, { useMemo } from 'react'
import { toast } from 'react-toastify'
import { Container, Button } from './style'

import { useTask } from '../../context/TaskContext'

const TaskPanel = ({ onStatusFilterChange }) => {
    const { tasks, clearDoneTasks } = useTask()

    const doneTasks = useMemo(() => {
        return tasks.filter(task => {
            return !task.done
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
        <Container>
            <div>
                {doneTasks.length === 1 && `${doneTasks.length} tarefa pendente`}
                {doneTasks.length > 1 && `${doneTasks.length} tarefas pendentes`}
            </div>
            <div>
                <Button onClick={() => { statusFilterChangeHandler('') }}>Todas</Button>
                <Button onClick={() => { statusFilterChangeHandler('c') }}>Completas</Button>
                <Button onClick={() => { statusFilterChangeHandler('p') }}>Pendentes</Button>
                <Button onClick={clearTasksHandler}>Limpar Completas</Button>
            </div>
        </Container>)
}

export default TaskPanel