import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { toast } from 'react-toastify'
import { Wrapper, StyledTiDelete, StyledTiEdit, Span } from './style'

import { useTask } from '../../context/TaskContext'

const Task = ({ id, done, description }) => {
    const [showDeleteIcon, setShowDeleteIcon] = useState(false)
    const { deleteTask, findTask, toggleTaskDone } = useTask()
    const [showEditIcon, setShowEditIcon] = useState(false)

    const onClickDelete = () => {
        deleteTask(id)
        toast.success('Tarefa excluída');
    }

    return (
        <Wrapper done={done}
            onMouseEnter={() => {
                setShowDeleteIcon(true)
                setShowEditIcon(true)
            }}
            onMouseLeave={() => {
                setShowDeleteIcon(false)
                setShowEditIcon(false)
            }}>
            <label>
                <input
                    type="checkbox"
                    checked={done}
                    onChange={() => toggleTaskDone(id)}
                />
                <Span>{description}</Span>
            </label>
            <div>
                {showEditIcon && (
                    <StyledTiEdit
                        title='Editar tarefa'
                        onClick={() => findTask(id)}
                    />
                )}
                {showDeleteIcon && (
                    <StyledTiDelete
                        title='Excluir tarefa'
                        onClick={onClickDelete}
                    />
                )}
            </div>
        </Wrapper >
    )
}

Task.propTypes = {
    id: PropTypes.string.isRequired,
    done: PropTypes.bool.isRequired,
    description: PropTypes.string.isRequired,
}

export default Task