import React, { useState } from "react";
import "./styles.css";
import { InputTodo } from "./components/input_todo";
import { TodoArea } from "./components/todo_area";
import { ArchiveArea } from "./components/archive_area";

export const App = () => {
  const [todo_text, setTodoText] = useState("");
  const [TODOs, setTODOs] = useState([]);
  const [archived, setArchived] = useState([]);

  const onChangeTodoText = (event) => setTodoText(event.target.value);

  const onClickAdd = () => {
    if (todo_text === "") return;
    const newTODOs = [...TODOs, todo_text];
    setTODOs(newTODOs);
    setTodoText("");
  };

  const onClickDelete = (del_from, del_from_set, ind) => {
    const newTODOs = [...del_from];
    newTODOs.splice(ind, 1);
    del_from_set(newTODOs);
  };

  const onClickDone = (ind) => {
    const newTODOs = [...TODOs];
    const new_archive = newTODOs[ind];
    newTODOs.splice(ind, 1);
    setTODOs(newTODOs);

    const newArchived = [...archived, new_archive];
    setArchived(newArchived);
  };

  const onClickUndone = (ind) => {
    const newArchived = [...archived];
    const new_archive = newArchived[ind];
    newArchived.splice(ind, 1);
    setArchived(newArchived);

    const newTODOs = [...TODOs, new_archive];
    setTODOs(newTODOs);
  };

  return (
    <>
      <InputTodo
        todo_text={todo_text}
        onChange={onChangeTodoText}
        onClick={onClickAdd}
      />
      <TodoArea
        todos={TODOs}
        onClickDone={onClickDone}
        onClickDelete={onClickDelete}
      />
      <ArchiveArea
        archived={archived}
        onClickUndone={onClickUndone}
        onClickDelete={onClickDelete}
      />
    </>
  );
};
