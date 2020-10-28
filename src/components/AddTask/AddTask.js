import React, { useState, useEffect, useRef } from 'react'

import classes from './AddTask.module.css'

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
        <form onSubmit={addTaskDescriptionHandler} className={classes.AddTask}>
            <div className={classes.AddTask__input}>
                <input
                    type="text"
                    placeholder={'Insira aqui sua próxima tarefa'}
                    value={input}
                    onChange={setDescription}
                    ref={inputRef} />
            </div>
            <div className={classes.AddTask__addButton}>
                <input type="submit" value="Adicionar" />
            </div>
        </form>
    )
}

export default AddTask