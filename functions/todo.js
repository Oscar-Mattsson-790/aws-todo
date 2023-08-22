const { sendResponse } = require("../responses/response");
const {
  getTodos,
  saveTodo,
  updateTodo,
  deleteTodo,
} = require("../services/todoService");

exports.handler = async (event, context) => {
  console.log(event);
  const { method, path } = event.requestContext.http;

  if (method === "GET" && path === "/todo") {
    // Get all todos
    const todos = getTodos(); // Use directly without the todoService prefix
    return sendResponse(200, todos);
  } else if (method === "POST" && path === "/todo") {
    // Create a new todo
    const newTodo = JSON.parse(event.body);
    const savedTodo = saveTodo(newTodo); // Use directly without the todoService prefix
    return sendResponse(201, savedTodo);
  } else if (method === "PUT" && path === "/todo") {
    // Update a todo
    const updatedTodo = JSON.parse(event.body);
    const result = updateTodo(updatedTodo); // Use directly without the todoService prefix
    if (result) {
      return sendResponse(200, "Todo updated");
    } else {
      return sendResponse(404, "Todo not found");
    }
  } else if (method === "DELETE" && path === "/todo") {
    // Delete a todo
    const todoId = event.queryStringParameters.id;
    const result = deleteTodo(todoId); // Use directly without the todoService prefix
    if (result) {
      return sendResponse(200, "Todo deleted");
    } else {
      return sendResponse(404, "Todo not found");
    }
  } else {
    // Handle not found
    return sendResponse(404, { message: "URL not found" });
  }
};
