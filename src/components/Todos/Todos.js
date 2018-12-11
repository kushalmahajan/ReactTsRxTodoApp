import React from 'react';
import { connect } from 'react-redux';

const Todos = (props) => {
    return <div>
        <h3>Todos list</h3>
        {props.list && props.list.length  &&
            <ul>
                {props.list.map(item => <li key={item.id}>{item.title}</li>)}
            </ul>
        }
      </div>;
}
const mapState = (state) => {
    return {
        list: state.list
    }
}

export default connect(mapState)(Todos);
