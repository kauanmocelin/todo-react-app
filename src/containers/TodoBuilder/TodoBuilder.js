import React, { useState } from 'react'

import Title from '../../components/Title/Title'
import TaskList from '../../components/TaskList/TaskList'
import AddTaskForm from '../../components/AddTaskForm/AddTaskForm'

import { TaskProvider } from '../../context/TaskContext'

import Container from './style'

const TodoBuilder = () => {
    const [statusFilter, setStatusFilter] = useState('')

    const statusFilterChangeHandler = (typeFilter) => {
        setStatusFilter(typeFilter)
    }

    return (
        <>
            <TaskProvider>
                <Title />

                <Container>
                    <AddTaskForm />
                </Container>

                <Container>
                    <TaskList
                        onStatusFilterChange={statusFilterChangeHandler}
                        statusFilter={statusFilter} />
                </Container>

            </TaskProvider>
        </>
    )
}

export default TodoBuilder