export default function manageTodo(state = {
  todos: [],
}, action) {
  let newTodos;
  switch (action.type) {
    case 'ADD_TODO':
      return { todos: state.todos.concat(action.payload) };
      
      case 'DELETE_TODO':
      newTodos = state.todos.filter(todo => todo.id !== action.payload)
      return{todos: newTodos}

    default:
      return state;
  }
}
