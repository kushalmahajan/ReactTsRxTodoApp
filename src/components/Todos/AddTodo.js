import React from 'react';
import { connect } from 'react-redux';
import { addTodoDelay } from "../../redux/actions/todos";

const AddTodo = ({ addTodoDelay }) => {
  let input;
  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        if (!input.value.trim()) {
          return;
        }
        addTodoDelay(input.value);
        input.value = "";
      }}
    >
      <input ref={node => (input = node)} placeholder="Add Todo" />
      <button type="submit">Add todo</button>
    </form>
  );
};
const mapDispatch = (dispatch) => {
    return {
        addTodoDelay: (value) => {
            dispatch(addTodoDelay(value))
        }
    }
}
export default connect(null, mapDispatch)(AddTodo);