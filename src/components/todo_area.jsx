import React from "react";

export const TodoArea = (props) => {
  return (
    <div className="todo-area">
      <p className="title">TODO</p>
      <ul>
        {props.todos.map((todo, index) => {
          return (
            <div key={todo} id="list-row">
              <li>{todo}</li>
              <button onClick={() => props.onClickDone(index)}>done</button>
              <button
                onClick={() =>
                  props.onClickDelete(props.TODOs, props.setTODOs, index)
                }
              >
                delete
              </button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
