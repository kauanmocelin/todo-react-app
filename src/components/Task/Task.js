import React from 'react'
import PropTypes from 'prop-types'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { Wrapper, Label, StyledTiDeleteOutline } from './style'

import { useManageTask } from '../../context/ManageTaskContext'

const Task = ({ id, done, description, showDeleteIcon }) => {
    const manageTask = useManageTask()

    const handleDelete = () => {
        manageTask.deleteTaskHandler(id)
        toast.success('Tarefa excluída');
    }

    return (
        <Wrapper done={done}
            onMouseEnter={() => manageTask.showDeleteIconHandler(id)}
            onMouseLeave={() => manageTask.hideDeleteIconHandler(id)}>
            <Label>
                <input
                    type="checkbox"
                    checked={done}
                    onChange={() => manageTask.toggleTaskDoneHandler(id)} />
                {description}
            </Label>
            {
                showDeleteIcon && <StyledTiDeleteOutline
                    title='Excluir tarefa'
                    onClick={handleDelete}
                />
            }
        </Wrapper>
    )
}

Task.propTypes = {
    id: PropTypes.string.isRequired,
    done: PropTypes.bool.isRequired,
    description: PropTypes.string.isRequired,
    showDeleteIcon: PropTypes.bool.isRequired,
}

export default Task