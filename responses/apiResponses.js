exports.successResponse = (data) => ({
  statusCode: 200,
  body: JSON.stringify(data),
});

exports.errorResponse = (statusCode, message) => ({
  statusCode: statusCode || 500,
  body: JSON.stringify({ message }),
});
