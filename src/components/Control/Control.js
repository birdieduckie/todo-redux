import React from 'react';
import { connect } from 'react-redux';

import { Button } from 'react-bootstrap';

import { taskAdd } from '../../store/main/main.actions'

import './Control.css';

class Control extends React.Component {
  state = {
    inputValue: '',
    selectedValue: 'all'
  }

  handleChange = e => {
    this.setState({ inputValue: e.target.value })
  }

  handleClick = () => {
    const { addTask, dispatch } = this.props

    addTask(this.state.inputValue)

    this.setState({ inputValue: '' })

    dispatch(taskAdd(this.state.inputValue))
  }

  handleKeyDown = e => {
    if (e.key === 'Enter') {
      this.handleClick()
    }
  }

  handleFilterChange = e => {
    const { setFilter } = this.props

    this.setState({ selectedValue: e.target.value }, () => setFilter(this.state.selectedValue))
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

export const ConnectedControl = connect(null, dispatch => ({ dispatch }))(Control);