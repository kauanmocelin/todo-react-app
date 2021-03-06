import React from 'react'

import TitleApp from '../TitleApp/TitleApp'
import TaskList from '../TaskList/TaskList'
import TaskForm from '../TaskForm/TaskForm'
import { TaskProvider } from '../../context/TaskContext'

import { AppWrapper, Main } from './style'

const TodoBuilder = () => {
    return (
        <TaskProvider>
            <AppWrapper>
                <TitleApp />
                <Main>
                    <TaskForm />
                    <TaskList />
                </Main>
            </AppWrapper>
        </TaskProvider>
    )
}

export default TodoBuilder