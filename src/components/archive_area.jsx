import React from "react";

export const ArchiveArea = (props) => {
  return (
    <div className="archive-area">
      <p className="title">Archive</p>
      <ul>
        {props.archived.map((archive, index) => {
          return (
            <div id="list-row">
              <li>{archive}</li>
              <button onClick={() => props.onClickUndone(index)}>undone</button>
              <button
                onClick={() =>
                  props.onClickDelete(props.archived, props.setArchived, index)
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
