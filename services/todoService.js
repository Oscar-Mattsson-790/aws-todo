const todos = [];

function getTodos() {
  return todos;
}

function saveTodo(newTodo) {
  newTodo.id = todos.length + 1;
  todos.push(newTodo);
  return newTodo;
}

function updateTodo(updatedTodo) {
  const index = todos.findIndex((todo) => todo.id === updatedTodo.id);
  if (index !== -1) {
    todos[index] = updatedTodo;
    return true;
  }
  return false;
}

function deleteTodo(todoId) {
  const index = todos.findIndex((todo) => todo.id === parseInt(todoId));
  if (index !== -1) {
    todos.splice(index, 1);
    return true;
  }
  return false;
}

module.exports = {
  getTodos,
  saveTodo,
  updateTodo,
  deleteTodo,
};
