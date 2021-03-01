import React from 'react';
import './ListTasks.css';
import {Button} from '@material-ui/core';

class ListTasks extends React.Component{
  render(){
    const {task} = this.props;

    return(
      <div className={`task task--${task.priority}`}>
        <div className='task__content'>
          <h4>Title</h4>
          <p>{task.title}</p>
        </div>
        <div className='task__content'>
          <h4>Priority</h4>
          <p>{task.priority}</p>
        </div>
        <div className='task__content'>
          <h4>Scheduled Date</h4>
          <p>{task.sch_date_time.substr(0, 10)}</p>
        </div>
        <div className='task__content'>
          <h4>Scheduled Time</h4>
          <p>{task.sch_date_time.substr(11, 8)}</p>
        </div>
        <div className='task__btn'>
          <Button variant='outlined' size='small'>
            Update
          </Button>
          <Button variant='outlined' size='small'>   
            Details
          </Button>
        </div>
      </div>
    )      
  }
}

export default ListTasks;