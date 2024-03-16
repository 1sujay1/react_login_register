import React, { useState } from "react";
import { connect } from "react-redux";
import { AddTodo } from "./actions";
function ChildComponent1({ todoData, addTodo }) {
  const [todoTitle, setTodoTitle] = useState("");
  return (
    <div>
      {todoData.todos.map((todo) => (
        <h1 key={todo.id}>
          Hello, ID: {todo.id} NAME: {todo.name}
        </h1>
      ))}
      <input
        placeholder="Enter todo title"
        value={todoTitle}
        type="text"
        onChange={(e) => setTodoTitle(e.target.value)}
      />
      <button
        onClick={() => {
          if (todoTitle.trim().length) {
            addTodo({ name: todoTitle });
            setTodoTitle("");
          } else {
            alert("please enter title");
          }
        }}
      >
        ADD TODO
      </button>
    </div>
  );
}
const mapStateToProps = (state) => ({
  todoData: state.todoReducers,
});
const mapDispatchToProps = (dispatch) => ({
  addTodo: (payload) => dispatch(AddTodo(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ChildComponent1);
