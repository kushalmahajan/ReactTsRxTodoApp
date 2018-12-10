import React from 'react';
import componentFromStream from 'recompose/componentFromStream';
import { map } from "rxjs/operators";

const App = componentFromStream(prop$ => {
  return prop$.pipe(
    map(() => (
      <div>
        <input placeholder="GitHub username" />
      </div>
    ))
  );
});


export default App;
