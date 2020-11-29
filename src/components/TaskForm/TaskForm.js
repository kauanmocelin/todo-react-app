import React, { useState, useEffect, useRef } from 'react'
import { Form, InputText, AddButton } from './style'
import { FaPlusSquare, FaCheckSquare } from 'react-icons/fa'
import { toast } from 'react-toastify'

import { useTask } from '../../context/TaskContext'

const TaskForm = () => {
    const { saveTask, editTask, editItem } = useTask()
    const [task, setTask] = useState({ description: '' })
    const inputRef = useRef(null)

    useEffect(() => (
        inputRef.current.focus()
    ), [task])

    useEffect(() => {
        if (editItem !== null) {
            setTask({ description: editItem.description })
        } else {
            setTask({ description: '' })
        }
    }, [editItem])

    const onChangeInput = (event) => {
        setTask({ description: event.target.value })
    }

    const submitHandler = (event) => {
        event.preventDefault()
        try {
            if (editItem) {
                editTask(editItem.id, task.description)
                return toast.success('Tarefa editada');
            }
            saveTask(task)
            setTask({ description: '' })
            toast.success('Tarefa adicionada');
        } catch (error) {
            return toast.warn(error.message);
        }
    }

    return (
        <Form onSubmit={submitHandler}>
            <InputText
                placeholder={'Insira aqui sua próxima tarefa'}
                value={task.description}
                onChange={onChangeInput}
                ref={inputRef}
            />
            <AddButton onClick={submitHandler}>
                {editItem ? <FaCheckSquare /> : <FaPlusSquare />}
            </AddButton>
        </Form>
    )
}

export default TaskForm