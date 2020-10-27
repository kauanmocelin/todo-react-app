import React from 'react'
import PropTypes from 'prop-types'

import classes from './Task.module.css'
import { TiDeleteOutline } from 'react-icons/ti'

const task = ({ id, done, description, showDeleteIcon, show, hide, onToggleTaskDone, onDelete }) => {
    const checkTaskHandler = () => {
        onToggleTaskDone(id)
    }

    let attachedClasses = [classes.Task]
    if (done) {
        attachedClasses = [classes.Task, classes.Done]
    }

    return (
        <div className={attachedClasses.join(' ')}
            onMouseEnter={() => show(id)}
            onMouseLeave={() => hide(id)}>
            <label>
                <input
                    type="checkbox"
                    checked={done}
                    onChange={checkTaskHandler} />
                {description}
            </label>
            {
                showDeleteIcon ? <TiDeleteOutline
                    className={classes.DeleteIcon}
                    size={'1.2em'}
                    color={'#f8374b'}
                    title='Excluir tarefa'
                    onClick={() => { onDelete(id) }} /> : null
            }
        </div >
    )
}

task.propTypes = {
    id: PropTypes.string.isRequired,
    done: PropTypes.bool.isRequired,
    description: PropTypes.string.isRequired,
    showDeleteIcon: PropTypes.bool.isRequired,
    show: PropTypes.func.isRequired,
    hide: PropTypes.func.isRequired,
    onToggleTaskDone: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired
}

export default task