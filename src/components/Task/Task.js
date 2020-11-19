import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { Wrapper, Label, StyledTiDeleteOutline } from './style'

import ManageTaskContext from '../../context/ManageTaskContext'

const Task = ({ id, done, description, showDeleteIcon }) => {
    const manageTaskContext = useContext(ManageTaskContext)

    const handleDelete = () => {
        manageTaskContext.deleteTaskHandler(id)
        toast.success('Tarefa excluída');
    }

    return (
        <Wrapper done={done}
            onMouseEnter={() => manageTaskContext.showDeleteIconHandler(id)}
            onMouseLeave={() => manageTaskContext.hideDeleteIconHandler(id)}>
            <Label>
                <input
                    type="checkbox"
                    checked={done}
                    onChange={() => manageTaskContext.toggleTaskDoneHandler(id)} />
                {description}
            </Label>
            {
                showDeleteIcon ? <StyledTiDeleteOutline
                    title='Excluir tarefa'
                    onClick={handleDelete}
                /> : null
            }
        </Wrapper>
    )
}

Task.propTypes = {
    id: PropTypes.string.isRequired,
    done: PropTypes.bool.isRequired,
    description: PropTypes.string.isRequired,
    showDeleteIcon: PropTypes.bool.isRequired,
    show: PropTypes.func.isRequired,
    hide: PropTypes.func.isRequired,
    onToggleTaskDone: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired
}

export default Task