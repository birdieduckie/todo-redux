import React from 'react';
import { connect } from 'react-redux';

import { taskDelete, taskToggle } from '../../store/main/main.actions'

import { Button } from 'react-bootstrap';

import './Task.css';

class Task extends React.Component {
  state = {
    isCheckboxChecked: this.props.isCompleted
  }

  handleDelete = () => {
    const { id, dispatch } = this.props

    dispatch(taskDelete(id))
  }

  handleChangeStatus = () => {
    const { id, dispatch } = this.props

    this.setState((prevState) =>
     ({ isCheckboxChecked: !prevState.isCheckboxChecked }), () => dispatch(taskToggle(id, this.state.isCheckboxChecked)))
  }

  render() {
    const { isCheckboxChecked } = this.state
    const { content } = this.props
    
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

export const ConnectedTask = connect(null, dispatch => ({ dispatch }))(Task);