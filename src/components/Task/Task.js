import React from 'react'
import PropTypes from 'prop-types'
import { toast } from 'react-toastify'
import { Wrapper, StyledTiDelete, StyledTiEdit, Span } from './style'

import { useTask } from '../../context/TaskContext'

const Task = ({ id, done, description }) => {
    const { deleteTask, findTask, toggleTaskDone } = useTask()

    const onClickDelete = () => {
        deleteTask(id)
        toast.success('Tarefa excluída');
    }

    return (
        <Wrapper done={done}>
            <label>
                <input
                    type="checkbox"
                    checked={done}
                    onChange={() => toggleTaskDone(id)}
                />
                <Span>{description}</Span>
            </label>
            <div>
                <StyledTiEdit
                    title='Editar tarefa'
                    onClick={() => findTask(id)}
                />
                <StyledTiDelete
                    title='Excluir tarefa'
                    onClick={onClickDelete}
                />
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