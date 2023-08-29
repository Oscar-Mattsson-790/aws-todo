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
  const id = event.pathParameters ? event.pathParameters.id : null; // Fetching the ID if it exists

  try {
    if (method === "GET" && path === "/todos") {
      return sendResponse(200, await getAllTodos());
    }

    if (method === "POST" && path === "/todo") {
      const body = JSON.parse(event.body);
      return sendResponse(200, await addTodo(body));
    }

    if (method === "PUT" && id) {
      const body = JSON.parse(event.body);
      body.id = id;
      return sendResponse(200, await updateTodo(body));
    }

    if (method === "DELETE" && id) {
      return sendResponse(200, await deleteTodo({ id }));
    }

    return sendResponse(404, { message: "URL not found" });
  } catch (error) {
    return sendResponse(500, { message: error.message });
  }
};
