import React from 'react'

import TitleApp from '../TitleApp/TitleApp'
import TaskList from '../TaskList/TaskList'
import TaskForm from '../TaskForm/TaskForm'

import { TaskProvider } from '../../context/TaskContext'

import Container from './style'

const TodoBuilder = () => {
    return (
        <TaskProvider>
            <Container>
                <TitleApp />
                <TaskForm />
                <TaskList />
            </Container>
        </TaskProvider>
    )
}

export default TodoBuilder