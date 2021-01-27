import React, {Component} from 'react';
import axios from 'axios';

class Input extends Component {
    state = {
        action: ""
    }

    addTodo = () => {
        const task = {action: this.state.action};

        if(task.action && task.action.length > 0){
            axios.post('/api/todos', task)
                .then(res => {
                    if(res.data){
                        this.props.getTodos();
                        this.setState({action: ""})
                    }
                })
                .catch(err => console.log(err))
        }
        else{
            console.log("Input Field Required");
        }
    }

    handleChange = (e) => {
        this.setState({
          action: e.target.value
        })
      }
    

    render(){
        let {action} = this.state;
        return(
            <div>
                <input className = "input-text" type = "text" onChange={this.handleChange} value={action} placeholder="Enter task here"/>
                <br/>
                <button onClick={this.addTodo}> Add Task </button>
            </div>
        )
    }
}

export default Input; 