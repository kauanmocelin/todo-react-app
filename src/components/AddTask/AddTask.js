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
                <div className={classes.AddTask__input}>
                    <input
                        type="text"
                        placeholder={'Insira aqui sua próxima tarefa'}
                        value={this.state.description}
                        onChange={this.setDescription} />
                </div>
                <div className={classes.AddTask__addButton}>
                    <button onClick={this.addTaskDescriptionHandler}>Adicionar</button>
                </div>
            </div>
        )
    }
}

export default AddTask