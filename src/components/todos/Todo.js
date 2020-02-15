import React from 'react'

const Todo = props => {
    const handleOnClickDelete = () => {
        props.deleteTodo(props.todo.id)
    }
    
    return(
    
    <div>
        {props.todo.text}
        <button onClick ={handleOnClickDelete}> delete me</button>
    </div>
    )
}

export default Todo;
