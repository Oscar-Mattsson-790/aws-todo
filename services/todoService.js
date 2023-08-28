let todos = [];

const getAllTodos = () => todos;

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
