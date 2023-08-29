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

const generateId = () => Date.now().toString();

const getAllTodos = () => {
  return todos;
};

const addTodo = (newTodo) => {
  const todoWithId = { ...newTodo, id: generateId() };
  todos.push(todoWithId);
  return todoWithId;
};

const updateTodo = (newTodoData) => {
  const todoExists = todos.some((todo) => todo.id === newTodoData.id);

  if (!todoExists) {
    throw new Error("Todo not found.");
  }

  todos = todos.map((todo) =>
    todo.id === newTodoData.id ? newTodoData : todo
  );
  return newTodoData;
};

const deleteTodo = ({ id }) => {
  const todoExists = todos.some((todo) => todo.id === id);

  if (!todoExists) {
    throw new Error("Todo not found.");
  }

  todos = todos.filter((todo) => todo.id !== id);
  return { message: "Todo deleted successfully" };
};

module.exports = {
  getAllTodos,
  addTodo,
  updateTodo,
  deleteTodo,
};
