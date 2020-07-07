import React from 'react';

import { connect } from 'react-redux';

import { taskDelete } from '../../store/main/main.actions'

import { Button } from 'react-bootstrap';

import './Task.css';

class Task extends React.Component {
  state = {
    isCheckboxChecked: this.props.isCompleted
  }

  handleDelete = () => {
    const { dispatch } = this.props

    dispatch(taskDelete(1))
  }

  handleChangeStatus = () => {
    const { id, completeTask } = this.props

    this.setState((prevState) =>
     ({ isCheckboxChecked: !prevState.isCheckboxChecked }), () => completeTask(id, this.state.isCheckboxChecked))
  }

  render() {
    const { isCheckboxChecked } = this.state
    const { content } = this.props
    
    return (
      <Task>
        <div className='task'>
          <input type='checkbox' checked={isCheckboxChecked} onChange={this.handleChangeStatus} />
          <div>
            {content}
          </div>
          <Button variant='danger' onClick={this.handleDelete}>X</Button>
        </div>
      </Task>
    )
  }
}

export const ConnectedTask = connect(null, dispatch => ({ dispatch }))(Task);