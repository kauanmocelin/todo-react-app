import React, { useState, useEffect, useRef } from 'react'
import { Form, InputText, InputSubmit, InputWrapper, ButtonWrapper } from './style'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const AddTask = (props) => {
    const [input, setInput] = useState('');
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
        props.onAddTask(input)
        setInput('')
        toast.success('Tarefa adicionada');
    }

    return (
        <Form onSubmit={addTaskDescriptionHandler}>
            <InputWrapper>
                <InputText
                    placeholder={'Insira aqui sua próxima tarefa'}
                    value={input}
                    onChange={setDescription}
                    ref={inputRef}
                />
            </InputWrapper>

            <ButtonWrapper>
                <InputSubmit value="Adicionar" />
            </ButtonWrapper>
        </Form>
    )
}

export default AddTask