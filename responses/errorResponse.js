const createErrorResponse = (statusCode, errorMessage) => {
  return {
    statusCode: statusCode,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ error: errorMessage }),
  };
};

const errorResponses = {
  BadRequest: createErrorResponse(400, "Bad request"),
  Unauthorized: createErrorResponse(401, "Unauthorized"),
  NotFound: createErrorResponse(404, "Not found"),
  InternalServerError: createErrorResponse(500, "Internal server error"),
};

module.exports = errorResponses;
