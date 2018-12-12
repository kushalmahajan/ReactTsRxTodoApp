import React from 'react';
import { connect } from 'react-redux';
import { addTodoDelay } from "../../redux/actions/todos";

const AddTodo = ({dispatch}) => {
    let input;
    return (
        <form onSubmit={e => {
            e.preventDefault();
            if(!input.value.trim()){
                return
            }
            dispatch(addTodoDelay(input.value));
            input.value = ""
        }} >
            <input ref={node => (input = node)} placeholder="Add Todo" />
            <button type="submit">Add todo</button>
        </form>
    );
}
export default connect()(AddTodo);