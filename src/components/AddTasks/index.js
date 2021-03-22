import React from 'react';
import {TextField, InputLabel, Select, MenuItem, FormControl, Button } from '@material-ui/core';
import './AddTasks.css';
import AdapterDateFns from '@material-ui/lab/AdapterDateFns';
import LocalizationProvider from '@material-ui/lab/LocalizationProvider';
import DesktopDateTimePicker  from '@material-ui/lab/DesktopDateTimePicker';
import {addTasks, updateTasks, deleteTasks} from '../../actions/TaskActions';
import {connect} from 'react-redux';


class AddTasks extends React.Component{
  state = {
    title: '',
    desc: '',
    priority: '',
    schDateTime: ''
  }

  componentDidMount(){
    if(this.props.isUpdate){
      const {title, desc, priority, sch_date_time} = this.props.taskData
      this.setState({title: title, desc: desc, priority: priority, schDateTime: sch_date_time})
    }
  }

  onAddTask = () =>{
    let task_data = this.state;
    if(this.props.isUpdate){
      let task_id = this.props.taskData['id']
      this.props.updateTasks(task_data, task_id)
    }else{
      this.props.addTasks(task_data)
    }
  }

  onDeleteTask = () =>{
    let task_id = this.props.taskData['id']
    this.props.deleteTasks(task_id)
  }

  render(){
    const {isUpdate, taskData} = this.props;

    return(
      <div className='tasks'>
        <TextField
          label='Title'
          value = {this.state.title}
          onChange = {(e)=> this.setState({title: e.target.value}) }
        />
        <TextField
          label='Description'
          value = {this.state.desc}
          multiline
          onChange = {(e)=> this.setState({desc: e.target.value}) }
        />

        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DesktopDateTimePicker 
            renderInput={(props) => <TextField {...props} />}
            label="Scheduled Date Time"
            value={this.state.schDateTime}
            onChange={(newValue) => {
              this.setState({schDateTime: newValue});
            }}
          />
        </LocalizationProvider>
        
        <FormControl fullWidth>
          <InputLabel>Priority</InputLabel>
          <Select
            value = {this.state.priority}
            onChange = {(e)=> this.setState({priority: e.target.value})}
          >
            <MenuItem value={"LOW"}>Low</MenuItem>
            <MenuItem value={"MEDIUM"}>Medium</MenuItem>
            <MenuItem value={"HIGH"}>High</MenuItem>
          </Select>
        </FormControl>
        
        {isUpdate ? 
          <div className='tasks__btn'>
          <Button variant='contained' onClick={()=>this.onAddTask()}>
            Update
          </Button>
          <Button variant='contained' onClick={()=>this.onDeleteTask()}>
            Delete
          </Button>
          </div>
          :
          <div>
            <Button variant='contained' onClick={()=>this.onAddTask()}>
              Add Task
            </Button>
          </div>
        }
      </div>
    )
  }
}

export default connect(null, {addTasks, updateTasks, deleteTasks})(AddTasks);