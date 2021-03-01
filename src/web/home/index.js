import React from 'react';
import {Button} from '@material-ui/core';
import './home.css';
import {getTasks} from '../../actions/TaskActions';
import {connect} from 'react-redux';
import ListTasks from '../../components/ListTasks';


class HomeScreen extends React.Component{
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
      </div>
    )
  }
}

const mapStateToProps = state => ({
  tasks: state.TaskReducer.tasks
})

export default connect(mapStateToProps, {getTasks})(HomeScreen);