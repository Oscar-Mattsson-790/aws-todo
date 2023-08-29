const { sendResponse } = require("../responses/apiResponses");
const {
  getAllTodos,
  addTodo,
  updateTodo,
  deleteTodo,
} = require("../services/todoService");

exports.handler = async (event, context) => {
  console.log(event);

  const { method, path } = event.requestContext.http;

  try {
    if (method === "GET" && path === "/todos") {
      return sendResponse(200, await getAllTodos());
    }

    if (method === "POST" && path === "/todo") {
      const body = JSON.parse(event.body);
      return sendResponse(200, await addTodo(body));
    }

    if (method === "PUT" && path === "/todo") {
      const body = JSON.parse(event.body);
      return sendResponse(200, await updateTodo(body));
    }

    if (method === "DELETE" && path === "/todo") {
      const body = JSON.parse(event.body);
      return sendResponse(200, await deleteTodo(body));
    }

    return sendResponse(404, { message: "URL not found" });
  } catch (error) {
    return sendResponse(500, { message: error.message });
  }
};
