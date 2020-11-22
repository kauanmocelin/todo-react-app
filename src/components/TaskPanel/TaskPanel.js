import React, { useContext } from 'react'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { Container, WrapperElement, Button } from './style'

import { TaskContext } from '../../context/TaskContext'

const TaskPanel = ({ onStatusFilterChange }) => {
    const { tasks, clearDoneTasks } = useContext(TaskContext)

    const doneTasks = tasks.filter(task => {
        return !task.done
    })

    const statusFilterChangeHandler = (typeFilter) => {
        onStatusFilterChange(typeFilter)
    }

    const clearTasksHandler = () => {
        clearDoneTasks()
        toast.success('Removidas tarefas completas');
    }

    return (
        <Container>
            <WrapperElement>
                {doneTasks.length} tarefas pendentes
            </WrapperElement>
            <WrapperElement>
                <Button onClick={() => { statusFilterChangeHandler('') }}>Todas</Button>
                <Button onClick={() => { statusFilterChangeHandler('c') }}>Completas</Button>
                <Button onClick={() => { statusFilterChangeHandler('p') }}>Pendentes</Button>
                <Button onClick={clearTasksHandler}>Limpar Completas</Button>
            </WrapperElement>
        </Container>)
}

export default TaskPanel