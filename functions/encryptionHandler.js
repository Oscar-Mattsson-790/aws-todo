const { successResponse, errorResponse } = require("../responses/apiResponses");
const { encrypt, decrypt } = require("../services/encryptionService");

exports.handler = async (event) => {
  try {
    switch (event.path) {
      case "/encrypt":
        return successResponse({
          encryptedText: encrypt(JSON.parse(event.body).text),
        });
      case "/decrypt":
        return successResponse({
          decryptedText: decrypt(JSON.parse(event.body).text),
        });
      default:
        return errorResponse(400, "Invalid endpoint");
    }
  } catch (error) {
    return errorResponse(500, error.message);
  }
};
