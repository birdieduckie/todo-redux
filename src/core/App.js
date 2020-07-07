import React from 'react';

import { Control, List } from '../components';

import './App.css';

class App extends React.Component {
  state = {
    tasks: [],
    filteredTasks: [],
    filterType: 'all',
    isFiltered: false
  }

  componentDidMount() {
    const savedTasks = localStorage.getItem('tasks')

    if (savedTasks) {
      this.setState({ tasks: JSON.parse(savedTasks) })
    }
  }

  addTask = (data) => {
    const { tasks } = this.props
    
    if (data) {
      const newTask = { id: +new Date(), content: data, isCompleted: false }

      this.setState({ tasks: [...tasks, newTask] }, () => localStorage.setItem('tasks', JSON.stringify(this.state.tasks)))
    }
  }

  completeTask = (id, isCompleted) => {
    const { tasks } = this.state

    const updatedTasks = tasks.map((task) => task.id === id ? ({ ...task, isCompleted }) : task)

    this.setState({ tasks: updatedTasks }, () => localStorage.setItem('tasks', JSON.stringify(this.state.tasks)))
  }

  setFilter = (filterType) => {
    const { tasks } = this.state

    this.setState({ filterType }, () => {
      if (this.state.filterType === 'success') {
        return this.setState({ filteredTasks: tasks.filter((task) => task.isCompleted), isFiltered: true })
      }

      if (this.state.filterType === 'unsuccess') {
        return this.setState({ filteredTasks: tasks.filter((task) => !task.isCompleted), isFiltered: true })
      }

      return this.setState({ filteredTasks: [], isFiltered: false })
    })
  }

  render() {
    const { filteredTasks, isFiltered } = this.state

    return (
      <div className="App">
        <Control setFilter={this.setFilter} addTask={this.addTask} />
        <List
          isFiltered={isFiltered}
          deleteTask={this.deleteTask}
          completeTask={this.completeTask}
          filteredTasks={filteredTasks}
        />
      </div>
    );
  }
}

export { App }