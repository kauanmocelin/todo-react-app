import React, { useState, useEffect, useRef } from 'react'
import { Form, InputText, AddButton } from './style'
import { SiAddthis } from 'react-icons/si'
import { toast } from 'react-toastify'
import { v4 as uuidv4 } from 'uuid'

import { useTask } from '../../context/TaskContext'

const TaskForm = () => {
    const { tasks, setTasks } = useTask()
    const [input, setInput] = useState('');
    const inputRef = useRef(null)

    useEffect(() => (
        inputRef.current.focus()
    ), [])

    const onChangeInput = (event) => {
        setInput(event.target.value)
    }

    const addTaskDescriptionHandler = (event) => {
        event.preventDefault()
        if (!input) return toast.warn('Não foi possível adicionar tarefa. Informe uma descrição');

        setTasks(() => {
            return [...tasks,
            {
                id: uuidv4(),
                description: input,
                done: false
            }
            ]
        })
        setInput('')
        toast.success('Tarefa adicionada');
    }

    return (
        <Form onSubmit={addTaskDescriptionHandler}>
            <InputText
                placeholder={'Insira aqui sua próxima tarefa'}
                value={input}
                onChange={onChangeInput}
                ref={inputRef}
            />
            <AddButton onClick={addTaskDescriptionHandler}>
                <SiAddthis />
            </AddButton>
        </Form>
    )
}

export default TaskForm