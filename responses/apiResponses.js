exports.successResponse = (data) => ({
  statusCode: 200,
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(data),
});

exports.errorResponse = (statusCode, message) => ({
  statusCode: statusCode || 500,
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ message }),
});

exports.sendResponse = (statusCode, data) => {
  if (statusCode >= 400) {
    return {
      statusCode,
      body: JSON.stringify({ message: data.message || "An error occurred" }),
    };
  }
  return {
    statusCode,
    body: JSON.stringify(data),
  };
};
