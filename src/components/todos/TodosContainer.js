import React, { Component } from 'react';
import { connect } from 'react-redux'
import Todo from './Todo'

class TodosContainer extends Component {

  renderTodos = () => this.props.todos.map((todo, id) => <Todo key={id} todo={todo} deleteTodo ={this.props.deleteTodo}/>)

  render() {
    return(
      <div>
        {this.renderTodos()}
      </div>
    );
  }
};

const mapStateToProps = state => {
  return {
    todos: state.todos
  }
}

const mapDispatchToProps = dispatch =>{
  return {
    deleteTodo: (todoId) => dispatch({type: 'DELETE_TODO', payload: todoId})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodosContainer);
