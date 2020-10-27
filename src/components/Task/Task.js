import React from 'react'

import classes from './Task.module.css'
import { TiDeleteOutline } from 'react-icons/ti'

const task = (props) => {
    const checkTaskHandler = () => {
        props.onToggleTaskDone(props.id)
    }

    let attachedClasses = [classes.Task]
    if (props.done) {
        attachedClasses = [classes.Task, classes.Done]
    }

    return (
        <div className={attachedClasses.join(' ')}
            onMouseEnter={() => props.show(props.id)}
            onMouseLeave={() => props.hide(props.id)}>
            <label>
                <input
                    type="checkbox"
                    checked={props.done}
                    onChange={checkTaskHandler} />
                {props.description}
            </label>
            {
                props.showDeleteIcon ? <TiDeleteOutline
                    className={classes.DeleteIcon}
                    size={'1.2em'}
                    color={'#f8374b'}
                    title='Excluir tarefa'
                    onClick={() => { props.onDelete(props.id) }} /> : null
            }
        </div >
    )
}

export default task