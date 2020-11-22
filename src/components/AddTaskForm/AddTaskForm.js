import React, { useState, useEffect, useRef, useContext } from 'react'
import { Form, InputText, AddButton } from './style'
import { SiAddthis } from 'react-icons/si'
import { toast } from 'react-toastify'
import { v4 as uuidv4 } from 'uuid'

import { TaskContext } from '../../context/TaskContext'

import 'react-toastify/dist/ReactToastify.css';

const AddTaskForm = (props) => {
    const [input, setInput] = useState('');
    const { tasks, setTasks } = useContext(TaskContext)
    const inputRef = useRef(null)

    useEffect(() => (
        inputRef.current.focus()
    ))

    const setDescription = (event) => {
        setInput(event.target.value)
    }

    const addTaskDescriptionHandler = (event) => {
        event.preventDefault()
        if (!input) {
            return toast.warn('Não foi possível adicionar tarefa. Informe uma descrição');
        }

        const newTask = {
            id: uuidv4(),
            description: input,
            done: false
        }
        const newTasks = [...tasks, newTask]
        setTasks(newTasks)
        setInput('')
        toast.success('Tarefa adicionada');
    }

    return (
        <Form onSubmit={addTaskDescriptionHandler}>
            <InputText
                placeholder={'Insira aqui sua próxima tarefa'}
                value={input}
                onChange={setDescription}
                ref={inputRef}
            />
            <AddButton onClick={addTaskDescriptionHandler}>
                <SiAddthis />
            </AddButton>
        </Form>
    )
}

export default AddTaskForm