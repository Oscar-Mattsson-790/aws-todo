let todos = [
  {
    id: "1",
    task: "Test the API",
  },
  {
    id: "2",
    task: "Create a function",
  },
];

const getAllTodos = () => {
  if (!todos.length) {
    throw new Error("No todos available.");
  }
  return todos;
};

const addTodo = (newTodo) => {
  todos.push(newTodo);
  return newTodo;
};

const updateTodo = (newTodoData) => {
  todos = todos.map((todo) =>
    todo.id === newTodoData.id ? newTodoData : todo
  );
  return newTodoData;
};

const deleteTodo = ({ id }) => {
  todos = todos.filter((todo) => todo.id !== id);
  return { message: "Todo deleted successfully" };
};

module.exports = {
  getAllTodos,
  addTodo,
  updateTodo,
  deleteTodo,
};
