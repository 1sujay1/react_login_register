const initialState = {
  todos: [
    {
      name: "SUJAY KUMAR N",
      id: 1,
    },
    {
      name: "Rajesh",
      id: 2,
    },
  ],
};
const todoReducers = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: [
          ...state.todos,
          { id: state.todos.length + 1, ...action.payload },
        ],
      };
    default:
      return state;
  }
};

export default {
  todoReducers: todoReducers,
};
