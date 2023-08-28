let todos = [];

const getAllTodos = () => todos;

const addTodo = (newTodo) => {
  todos.push(newTodo);
  return newTodo;
};

const updateTodo = (updatedTodo) => {
  todos = todos.map((todo) => (todo.id === updatedTodo.id ? updateTodo : todo));
  return updateTodo;
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
