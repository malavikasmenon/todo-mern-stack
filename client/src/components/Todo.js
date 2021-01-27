import React, {Component} from 'react';
import axios from 'axios';

import Input from './Input';
import ListTodo from './ListTodo';

class Todo extends Component {
    state = {
        todos: []
    }

    componentDidMount(){
        this.getTodos();
    }

    getTodos = () => {
        console.log('Get Todo Is called')
        axios.get('/api/todos')
            .then(res => {
                if(res.data){
                    this.setState({
                        todos: res.data
                    })
                }
                console.log(this.state.todos);
            })
            .catch(err => console.log(err))
    }

    deleteTodo = (id) => {
        axios.delete(`/api/todos/${id}`)
        .then(res => {
            if(res.data){
                this.getTodos()
            }
        })
        .catch(err => console.log(err))
    }

    render() {
        let {todos} = this.state; 
        console.log("D", todos);

        return(
            <div>
                <h1>My To-Do List</h1>
                <Input getTodos = {this.getTodos} />
                <ListTodo todos = {todos} deleteTodo = {this.deleteTodo} />
            </div>
        )
    }

}

export default Todo; 