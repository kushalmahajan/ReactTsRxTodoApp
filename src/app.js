import React from 'react';
import { componentFromStream , createEventHandler} from "recompose";
import { combineLatest } from "rxjs";
import { map, startWith, tap } from "rxjs/operators";
import User from './User/User';

const App = componentFromStream(prop$ => {
    const { handler, stream } = createEventHandler();
    const value$ = stream.pipe(
        map(e => e.target.value),
        startWith('')
    )
    return combineLatest(prop$, value$).pipe( tap(console.warn), map(
        ([props, value]) => (
          <div>
            <input placeholder="GitHub username" onChange={handler} />
            <User user={value} />
          </div>
        )
      ));
});


export default App;
