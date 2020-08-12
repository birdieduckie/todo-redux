import React from 'react';
import { connect } from 'react-redux';

import { Button } from 'react-bootstrap';

import { taskAdd, setFilter } from '../../store/main/main.actions'

import './Control.css';

class Control extends React.Component {
  state = {
    inputValue: ''
  }

  handleChange = e => {
    this.setState({ inputValue: e.target.value })
  }

  handleClick = () => {
    const { dispatch } = this.props

    dispatch(taskAdd(this.state.inputValue))

    this.setState({ inputValue: '' })
  }

  handleKeyDown = e => {
    if (e.key === 'Enter') {
      this.handleClick()
    }
  }

  handleFilterChange = e => {
    const { dispatch } = this.props

    dispatch(setFilter(e.target.value))
  }

  render() {
    const { inputValue, selectedValue } = this.state
    
    return (
      <div className='control'>
        <input value={inputValue} onChange={this.handleChange} onKeyDown={this.handleKeyDown} />
        <Button variant='success' onClick={this.handleClick}>+</Button>
        <select onChange={this.handleFilterChange} value={selectedValue} className="filter">
          <option value="all">Все задачи</option>
          <option value="unsuccess">Только невыполненные</option>
          <option value="success">Только выполненные</option>
        </select>
      </div>
    )
  }
}


export const ConnectedControl = connect(null, dispatch => ({ dispatch }))(Control)