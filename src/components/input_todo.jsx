import React from "react";

const style = {
  backgroundColor: "aqua",
  width: "400px",
  height: "30px",
  padding: "8px",
  margin: "8px",
  borderRadius: "8px"
};

export const InputTodo = (props) => {
  return (
    <div style={style}>
      <input
        placeholder="TODO"
        value={props.todo_text}
        onChange={props.onChange}
      />
      <button onClick={props.onClick}>Add</button>
    </div>
  );
};
