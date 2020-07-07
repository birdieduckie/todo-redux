import React from 'react';
import { connect } from 'react-redux';
import { ListGroup, ListGroupItem } from 'react-bootstrap';

import { ConnectedTask as Task } from '../Task/Task'

import './List.css';

class List extends React.Component {
  render() {
    const { tasks, deleteTask, completeTask, filteredTasks, isFiltered } = this.props

    const currentTasks = isFiltered ? filteredTasks : tasks

    return (
      <ListGroup>
        {currentTasks.length > 0 &&
          currentTasks.map(task => 
            <ListGroupItem key={task.id}>
              <Task 
                id={task.id} 
                content={task.content} 
                isCompleted={task.isCompleted} 
                deleteTask={deleteTask} 
                completeTask={completeTask}
              />
            </ListGroupItem>
          )
        }
        {currentTasks.length === 0 && 'Тасок пока нет!'}
      </ListGroup>
    )
  }
}

export const ConnectedList = connect(store => ({ tasks: store.main.tasks }), null)(List)
