import React from 'react';
import { connect } from 'react-redux';
import { ListGroup, ListGroupItem } from 'react-bootstrap';

import { ConnectedTask as Task } from '../Task/Task'

import './List.css';

class List extends React.Component {
  state = {
    filteredTasks: []
  }

  componentDidUpdate(prevProps) {
    const { tasks } = this.props

    if (this.props.filterType !== prevProps.filterType) {
      if (this.props.filterType === 'success') {
        const updatedTasks = tasks.filter(task => task.isCompleted)

        return this.setState({ filteredTasks: updatedTasks })
      }
      
      if (this.props.filterType === 'unsuccess') {
        const updatedTasks = tasks.filter(task => !task.isCompleted)

        return this.setState({ filteredTasks: updatedTasks })
      }
    }
  }

  render() {
    const { filteredTasks } = this.state
    const { tasks, filterType } = this.props

    const currentTasks = filterType === 'all' ? tasks : filteredTasks

    return (
      <ListGroup>
        {currentTasks.length > 0 &&
          currentTasks.map(task => 
            <ListGroupItem key={task.id}>
              <Task 
                id={task.id} 
                content={task.content}  
                isCompleted={task.isCompleted} 
              />
            </ListGroupItem>
          )
        }
        {currentTasks.length === 0 && 'Тасок пока нет!'}
      </ListGroup>
    )
  }
}

export const ConnectedList = connect(store => ({ tasks: store.main.tasks, filterType: store.main.filterType }), null)(List)
