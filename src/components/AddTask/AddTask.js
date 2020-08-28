import React, { Component } from 'react'

import classes from './AddTask.module.css'

class AddTask extends Component {
    state = {
        description: ''
    }

    setDescription = (event) => {
        this.setState({ description: event.target.value })
    }

    addTaskDescriptionHandler = () => {
        if (!this.state.description) return
        this.props.onAddTask(this.state.description)
        this.setState({ description: '' })
    }

    render() {
        return (
            <div className={classes.AddTask}>
                <input
                    type="text"
                    placeholder={'Insira aqui sua próxima tarefa'}
                    value={this.state.description}
                    onChange={this.setDescription} />
                <button onClick={this.addTaskDescriptionHandler}>Adicionar</button>
            </div>
        )
    }
}

export default AddTask