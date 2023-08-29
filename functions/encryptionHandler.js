const { successResponse, errorResponse } = require("../responses/apiResponses");
const { encrypt, decrypt } = require("../services/encryptionService");

exports.handler = async (event) => {
  try {
    const body = event.body ? JSON.parse(event.body) : {};

    if (!body.text) {
      return errorResponse(400, "Missing 'text' in request body");
    }

    switch (event.path) {
      case "/encrypt":
        return successResponse({
          encryptedText: encrypt(body.text),
        });
      case "/decrypt":
        return successResponse({
          decryptedText: decrypt(body.text),
        });
      default:
        return errorResponse(400, "Invalid endpoint");
    }
  } catch (error) {
    return errorResponse(500, error.message);
  }
};
