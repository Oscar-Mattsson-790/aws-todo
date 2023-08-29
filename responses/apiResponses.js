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
