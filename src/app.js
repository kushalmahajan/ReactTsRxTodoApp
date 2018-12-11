import React from 'react';
import { componentFromStream , createEventHandler } from "recompose";
import { combineLatest } from "rxjs";
import { map, tap } from "rxjs/operators";
import AddTodo from './AddTodo/AddTodo';

import Todos from './Todos/todos';
// import User from './User/User';

const App = componentFromStream(prop$ => {
    const { handler: onAddHandler, stream: clickStream } = createEventHandler();
    const value$ = clickStream.pipe( tap(input =>
        console.warn(input)
        ));

    return combineLatest(prop$, value$).pipe(map(([props, value]) => <div>
          <AddTodo onAddHandler={onAddHandler}  />
          {/* <input placeholder="Add TODO" onChange={handler} /> */}
          <Todos todo={value} />
        </div>));
});


export default App;
