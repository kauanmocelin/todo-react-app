import React from 'react'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { Container, WrapperElement, Button } from './style'

const taskPanel = (props) => {
    const doneTasks = props.tasks.filter(task => {
        return !task.done
    })

    const statusFilterChangeHandler = (typeFilter) => {
        props.onStatusFilterChange(typeFilter)
    }

    const clearTasksHandler = () => {
        props.clearTasks()
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
                <Button onClick={clearTasksHandler}>Limpar tarefas completas</Button>
            </WrapperElement>
        </Container>)
}

export default taskPanel