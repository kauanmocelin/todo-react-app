import React from 'react'

import Title from '../TitleApp/TitleApp'
import TaskList from '../TaskList/TaskList'
import AddTaskForm from '../TaskForm/TaskForm'

import { TaskProvider } from '../../context/TaskContext'

import Container from './style'

const TodoBuilder = () => {
    return (
        <TaskProvider>
            <Title />
            <Container>
                <AddTaskForm />
            </Container>

            <Container>
                <TaskList />
            </Container>
        </TaskProvider>
    )
}

export default TodoBuilder