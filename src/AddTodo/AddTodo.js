import React from "react";
import { combineLatest } from "rxjs";
import { componentFromStream, createEventHandler } from "recompose";
import { pluck, map, startWith, tap } from "rxjs/operators";

const AddTodo = componentFromStream(prop$ => {
  const {
    handler: onChangeHandler,
    stream: inputStream
  } = createEventHandler();
  const value$ = inputStream.pipe(
    map(e => e.target.value),
    startWith("")
  );

  return combineLatest(prop$, value$).pipe(
    map(([props, value]) => (
      <div>
        <input
          type="text"
          placeholder="Add Todo..."
          onChange={onChangeHandler}
        />
        <button onClick={() => {}}>Add todo</button>
        {/* <button onClick={() => onAddHandler(value)}>Add todo</button> */}
      </div>
    ))
  );
});

export default AddTodo;
