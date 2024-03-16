import React, { useReducer, useState } from "react";

const initialState = [];

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        { id: state.length + 1, ...action.payload, isCompleted: false },
      ];
    case "UPDATE_TODO":
      return state.map((item) => {
        if (item.id == action.payload.id) {
          return action.payload;
        } else {
          return item;
        }
      });
    case "DELETE_TODO":
      return state.filter((item) => item.id != action.payload.id);
    case "IS_COMPLETED":
      return state.map((item) =>
        item.id == action.payload.id
          ? { ...action.payload, isCompleted: !action.payload.isCompleted }
          : item
      );
    default:
      return state;
  }
};

function TodoTest() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [todos, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <input
        type="text"
        placeholder="Enter Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter Description"
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
      />
      <button
        onClick={() => {
          if (title.trim().length) {
            dispatch({ type: "ADD_TODO", payload: { title, desc } });
            setTitle("");
            setDesc("");
          }
        }}
      >
        ADD
      </button>
      <ul>
        {todos.map((item) => (
          <li>
            <h3
              style={{
                textDecoration: item.isCompleted ? "line-through" : "none",
              }}
            >
              {item.title}
            </h3>
            <h6
              style={{
                textDecoration: item.isCompleted ? "line-through" : "none",
              }}
            >
              {item.desc}
              <button
                onClick={() =>
                  dispatch({
                    type: "UPDATE_TODO",
                    payload: {
                      id: item.id,
                      title: prompt("Enter text"),
                      desc: prompt("Enter desc"),
                    },
                  })
                }
              >
                UPDATE
              </button>
              <button
                onClick={() => dispatch({ type: "DELETE_TODO", payload: item })}
              >
                DELETE
              </button>
              <input
                type="checkbox"
                checked={item.isCompleted}
                onChange={() =>
                  dispatch({ type: "IS_COMPLETED", payload: item })
                }
              />
            </h6>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoTest;
