const { successResponse, errorResponse } = require("../responses/apiResponses");
const {
  getAllTodos,
  addTodo,
  updateTodo,
  deleteTodo,
} = require("../services/todoService");

exports.handler = async (event) => {
  try {
    switch (event.httpMethod) {
      case "GET":
        return successResponse(await getAllTodos());
      case "POST":
        return successResponse(await addTodo(JSON.parse(event.body)));
      case "PUT":
        return successResponse(await updateTodo(JSON.parse(event.body)));
      case "DELETE":
        return successResponse(await deleteTodo(JSON.parse(event.body)));
      default:
        return errorResponse(400, "Invalid method");
    }
  } catch (error) {
    return errorResponse(500, error.message);
  }
};
