import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { toast } from 'react-toastify'
import { Wrapper, Label, StyledTiDeleteOutline } from './style'

import { useTask } from '../../context/TaskContext'

const Task = ({ id, done, description }) => {
    const [showDeleteIcon, setShowDeleteIcon] = useState(false)
    const { deleteTask, toggleTaskDone } = useTask()

    const onClickDeleteIcon = () => {
        deleteTask(id)
        toast.success('Tarefa excluída');
    }

    return (
        <Wrapper done={done}
            onMouseEnter={() => setShowDeleteIcon(true)}
            onMouseLeave={() => setShowDeleteIcon(false)}>
            <Label>
                <input
                    type="checkbox"
                    checked={done}
                    onChange={() => toggleTaskDone(id)}
                />
                {description}
            </Label>
            {showDeleteIcon && (
                <StyledTiDeleteOutline
                    title='Excluir tarefa'
                    onClick={onClickDeleteIcon}
                />
            )}
        </Wrapper>
    )
}

Task.propTypes = {
    id: PropTypes.string.isRequired,
    done: PropTypes.bool.isRequired,
    description: PropTypes.string.isRequired,
}

export default Task