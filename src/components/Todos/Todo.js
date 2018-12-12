import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { toggleTodo } from "../../redux/actions/todos";

const Todo = ({ id, title, completed, toggleTodo }) => (
  <li
    onClick={() => toggleTodo(id)}
    style={{
      textDecoration: completed ? "line-through" : "none"
    }}
  >
    {title}
  </li>
);

Todo.propTypes = {
  completed: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired
};

const mapDispatch = (dispatch) => {
    return {
        toggleTodo: (id) => {
            dispatch(toggleTodo(id))
        }
    }
}
export default connect(null, mapDispatch)(Todo);