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
            <form onSubmit={this.addTaskDescriptionHandler} className={classes.AddTask}>
                <div className={classes.AddTask__input}>
                    <input
                        type="text"
                        placeholder={'Insira aqui sua próxima tarefa'}
                        value={this.state.description}
                        onChange={this.setDescription} />
                </div>
                <div className={classes.AddTask__addButton}>
                    <input type="submit" value="Adicionar" />
                </div>
            </form>
        )
    }
}

export default AddTask