import React, { useState, useEffect, useRef } from 'react'
import { Form, InputText, AddButton } from './style'
import { SiAddthis } from 'react-icons/si'
import { toast } from 'react-toastify'

import { useTask } from '../../context/TaskContext'

const TaskForm = () => {
    const { saveTask } = useTask()
    const [task, setTask] = useState({ description: '' })
    const inputRef = useRef(null)

    useEffect(() => (
        inputRef.current.focus()
    ), [])

    const onChangeInput = (event) => {
        setTask({ description: event.target.value })
    }

    const addTask = (event) => {
        event.preventDefault()
        try {
            saveTask(task)
            setTask({ description: '' })
            toast.success('Tarefa adicionada');
        } catch (error) {
            return toast.warn(error.message);
        }
    }

    return (
        <Form onSubmit={addTask}>
            <InputText
                placeholder={'Insira aqui sua próxima tarefa'}
                value={task.description}
                onChange={onChangeInput}
                ref={inputRef}
            />
            <AddButton onClick={addTask}>
                <SiAddthis />
            </AddButton>
        </Form>
    )
}

export default TaskForm