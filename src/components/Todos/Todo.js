import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { toggleTodo, deleteTodoDelay, updateTodo } from "../../redux/actions/todos";


class Todo extends React.Component{ 
    state = {
        input: this.props.title,
        updateMode: false
    };
    
    render(){
        const { id, title, completed, toggleTodo, deleteTodoDelay, updateTodo } = this.props;
        return(
            <div>
                {
                    !this.state.updateMode? ( 
                    <li>
                        <span
                            onClick={() => toggleTodo(id)}
                            style={{
                            textDecoration: completed ? "line-through" : "none"
                            }}
                        >
                            {title}
                        </span>
                        <button onClick={() => deleteTodoDelay(id, 400)}>Delete Todo</button>
                        <button onClick={() => {
                            this.setState({ updateMode: true })
                        }}>Update Todo</button>
                    </li>
                    ) : (
                        <div>
                            <input type="text" value={this.state.input} onChange={(e) => this.setState({input: e.target.value})} />
                            <button onClick={() => {
                                this.setState({updateMode: false }, updateTodo(id, this.state.input));
                            }}>Save</button>
                            <button onClick={() => this.setState({updateMode: false})}>Cancel</button>
                        </div>
                    )
                }
            </div>
        );
    }
}

Todo.propTypes = {
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired
};

const mapDispatch = (dispatch) => {
    return {
        toggleTodo: (id) => {
            dispatch(toggleTodo(id))
        },
        deleteTodoDelay: (id, delay) => {
            dispatch(deleteTodoDelay(id, delay));
        },
        updateTodo: (id, title) => {
            dispatch(updateTodo(id, title))
        }
    }
}
export default connect(null, mapDispatch)(Todo);