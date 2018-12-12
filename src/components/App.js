import React from 'react';
import { connect } from 'react-redux';
import TodoList from './Todos/TodoList';
import AddTodo from './Todos/AddTodo';

const App = ({ todos }) => {
  return (
    <div>
      <AddTodo />
      {todos && todos.length ? (
        <TodoList todos={todos} />
      ) : null}
    </div>
  );
};

const mapState = ({todosReducer}) => {
    return { todos: todosReducer.todos };
}

export default connect(mapState)(App);
