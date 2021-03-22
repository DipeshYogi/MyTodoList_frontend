import React from 'react';
import {Button, Dialog} from '@material-ui/core';
import './home.css';
import {getTasks} from '../../actions/TaskActions';
import {connect} from 'react-redux';
import ListTasks from '../../components/ListTasks';
import CloseIcon from '@material-ui/icons/Close';
import AddTasks from '../../components/AddTasks';


class HomeScreen extends React.Component{
  state = {
    openAddTask: false,
  }

  componentDidMount(){
    this.props.getTasks()
  }

  render(){
    const {tasks}  = this.props;

    return(
      <div className='home'>
        <div>
          <Button
            variant='contained'
            color='secondary'
            onClick={()=> this.setState({openAddTask: true})}
          >
            Add Task
          </Button>
        </div>

        {tasks.isLoading == false && tasks.data.length > 0 ?
          <div>
            {tasks.data.map(task => (
              <ListTasks task={task} />  
            ))}
          </div>         
        : null}

        {/* Add task Dialog */}
        <Dialog
          open={this.state.openAddTask}
        >
          <AddTasks/>
          <div className='modal__close'>
            <Button onClick={()=>this.setState({openAddTask:false})}>
              <CloseIcon style={{fontSize:25, color:"black"}}/>
            </Button>
          </div>
        </Dialog>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  tasks: state.TaskReducer.tasks
})

export default connect(mapStateToProps, {getTasks})(HomeScreen);