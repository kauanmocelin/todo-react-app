import React, { useState, useEffect, useRef } from 'react'

import { Form, InputText, InputSubmit, InputWrapper, ButtonWrapper } from './style'

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
        if (!input) return
        props.onAddTask(input)
        setInput('')
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