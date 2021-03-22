import React from 'react';
import './ListTasks.css';
import {Button, Dialog} from '@material-ui/core';
import AddTasks from '../AddTasks';
import CloseIcon from '@material-ui/icons/Close';


class ListTasks extends React.Component{
  state = {
    openUpdate: false
  }

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
          <Button variant='contained' size='small'
                  onClick={()=>this.setState({openUpdate: true})}>
            View/Edit
          </Button>
          {/* <Button variant='contained' size='small'>   
            Details
          </Button> */}
        </div>

        {/* Update Dialog */}
        <Dialog
          open = {this.state.openUpdate}
        >
          <AddTasks isUpdate={true} taskData={task}/>
          <div className='modal__close'>
            <Button onClick={()=>this.setState({openUpdate:false})}>
              <CloseIcon style={{fontSize:25, color:"black"}}/>
            </Button>
          </div>
        </Dialog>
      </div>
    )      
  }
}

export default ListTasks;