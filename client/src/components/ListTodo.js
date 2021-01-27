import React from 'react';
import '../App.css';

function ListTodo (todos, deleteTodo) {
    console.log("In Component ListTodo", todos.todos.length);
    console.log(todos.todos);
    return(
        <ul>
            {
                todos.todos && todos.todos.length > 0 ?
                (
                    todos.todos.map(todo => {
                        return(
                            <div className = "container" key={todo._id}>
                                <input type = "checkbox" className="input-check" key={todo._id } onClick={()=>todos.deleteTodo(todo._id)}></input>
                                <li key={todo._id} >{todo.action}</li>
                            </div>
                            
                        )
                    })
                ) : (
                    <div className="container"><li>No tasks left</li></div>
                )
            }
        </ul>
    );
}

export default ListTodo;