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
