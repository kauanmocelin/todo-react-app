import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { Wrapper, Label, StyledTiDeleteOutline } from './style'

import { useManageTask } from '../../context/ManageTaskContext'

const Task = ({ id, done, description }) => {
    const [showDeleteIcon, setShowDeleteIcon] = useState(false)
    const manageTask = useManageTask()

    const deleteHandler = () => {
        manageTask.deleteTaskHandler(id)
        toast.success('Tarefa excluída');
    }

    const showDeleteIconHandler = () => {
        setShowDeleteIcon(true)
    }

    const hideDeleteIconHandler = () => {
        setShowDeleteIcon(false)
    }

    return (
        <Wrapper done={done}
            onMouseEnter={() => showDeleteIconHandler()}
            onMouseLeave={() => hideDeleteIconHandler()}>
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
                    onClick={deleteHandler}
                />
            }
        </Wrapper>
    )
}

Task.propTypes = {
    id: PropTypes.string.isRequired,
    done: PropTypes.bool.isRequired,
    description: PropTypes.string.isRequired,
}

export default Task