import React from 'react';
import { componentFromStream, createEventHandler } from 'recompose';
import { tap, pluck, map } from 'rxjs/operators';

const Todos = componentFromStream(prop$ => {
    return prop$.pipe( 
        pluck("todo"),
        map(todo => {
            return <ul>
            <li>{todo}</li>
            </ul>
        })
    );
});
export default Todos;