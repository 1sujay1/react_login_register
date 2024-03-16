import React, { useState } from "react";

function Todo() {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const addTodo = () => {
    setTodos([
      ...todos,
      { id: todos.length + 1, title, desc, isCompleted: false },
    ]);
    setTitle("");
    setDesc("");
  };
  const removeTodo = (id) => {
    setTodos(todos.filter((item) => item.id !== id));
  };
  const updateTodo = (id, title, desc) => {
    const filterTodo = todos.map((item) => {
      if (item.id == id) {
        return { ...item, title, desc };
      } else {
        return item;
      }
    });
    setTodos(filterTodo);
  };
  const handleComplete = (id) => {
    const filterTodo = todos.map((item) => {
      if (item.id == id) {
        return { ...item, isCompleted: !item.isCompleted };
      } else {
        return item;
      }
    });
    setTodos(filterTodo);
  };
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
        placeholder="Enter Desc"
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
      />
      <button onClick={addTodo}>ADD TODO</button>
      <br></br>
      <ul>
        {todos.map((item) => (
          <li key={item.id} className="mt-4">
            <h1
              style={{
                textDecoration: item.isCompleted ? "line-through" : "none",
              }}
            >
              {item.title}
            </h1>
            <h5
              style={{
                textDecoration: item.isCompleted ? "line-through" : "none",
              }}
            >
              {item.desc}
            </h5>
            <button
              style={{ marginLeft: "2rem" }}
              onClick={() => removeTodo(item.id)}
            >
              Remove
            </button>
            <button
              style={{ marginLeft: "2rem" }}
              onClick={() =>
                updateTodo(
                  item.id,
                  prompt("Enter new todo title in textbox"),
                  prompt("Enter todo desction in textbox")
                )
              }
            >
              Update
            </button>
            <input
              style={{ marginLeft: "2rem" }}
              type="checkbox"
              checked={item.isCompleted}
              onChange={() => handleComplete(item.id)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
