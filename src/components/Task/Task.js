import React from 'react';

import { Button } from 'react-bootstrap';

import './Task.css';

class Task extends React.Component {
  state = {
    isCheckboxChecked: this.props.isCompleted
  }

  handleDelete = () => {
    const { id, deleteTask } = this.props

    deleteTask(id)
  }

  handleChangeStatus = () => {
    const { id, completeTask } = this.props

    this.setState((prevState) =>
     ({ isCheckboxChecked: !prevState.isCheckboxChecked }), () => completeTask(id, this.state.isCheckboxChecked))
  }

  render() {
    const { isCheckboxChecked } = this.state
    const { id, content } = this.props
    
    return (
      <div className='task'>
        <input type='checkbox' checked={isCheckboxChecked} onChange={this.handleChangeStatus} />
        <div>
          {content}
        </div>
        <Button variant='danger' onClick={this.handleDelete}>X</Button>
      </div>
    )
  }
}

export { Task };