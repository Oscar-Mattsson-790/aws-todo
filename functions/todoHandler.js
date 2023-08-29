const { sendResponse } = require("../responses/apiResponses");
const {
  getAllTodos,
  addTodo,
  updateTodo,
  deleteTodo,
} = require("../services/todoService");

exports.handler = async (event, context) => {
  console.log(event);
  const method = event.httpMethod;
  const path = event.resource;

  try {
    if (method === "GET" && path === "/todos") {
      return sendResponse(200, await getAllTodos());
    } else if (method === "POST" && path === "/todo") {
      const body = JSON.parse(event.body);
      return sendResponse(200, await addTodo(body));
    } else if (method === "PUT" && path === "/todo") {
      const body = JSON.parse(event.body);
      return sendResponse(200, await updateTodo(body));
    } else if (method === "DELETE" && path === "/todo") {
      const body = JSON.parse(event.body);
      return sendResponse(200, await deleteTodo(body));
    } else {
      return sendResponse(404, { message: "URL not found" });
    }
  } catch (error) {
    return sendResponse(500, { message: error.message });
  }
};
