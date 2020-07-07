import React from 'react';
import { ConnectedTask as Task } from '../Task/Task'

import { ListGroup, ListGroupItem } from 'react-bootstrap';

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

export { List };