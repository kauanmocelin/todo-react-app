import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { toast } from 'react-toastify'
import { Wrapper, StyledTiDelete, StyledTiEdit } from './style'

import { useTask } from '../../context/TaskContext'

const Task = ({ id, done, description }) => {
    const [showDeleteIcon, setShowDeleteIcon] = useState(false)
    const [showEditIcon, setShowEditIcon] = useState(false)
    const { deleteTask, toggleTaskDone } = useTask()

    const onClickDelete = () => {
        deleteTask(id)
        toast.success('Tarefa excluída');
    }

    const onClickEdit = () => {
        // deleteTask(id)
        toast.success('Tarefa editada');
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
                {description}
            </label>
            <div>
                {showDeleteIcon && (
                    <StyledTiDelete
                        title='Excluir tarefa'
                        onClick={onClickDelete}
                    />
                )}
                {showEditIcon && (
                    <StyledTiEdit
                        title='Editar tarefa'
                        onClick={onClickEdit}
                    />
                )}
            </div>
        </Wrapper>
    )
}

Task.propTypes = {
    id: PropTypes.string.isRequired,
    done: PropTypes.bool.isRequired,
    description: PropTypes.string.isRequired,
}

export default Task