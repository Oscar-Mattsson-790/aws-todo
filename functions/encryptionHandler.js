const { sendResponse } = require("../responses/apiResponses");
const { encrypt, decrypt } = require("../services/encryptionService");

exports.handler = async (event) => {
  const { method, path } = event.requestContext.http;
  const body = event.body ? JSON.parse(event.body) : {};

  if (method !== "POST") {
    return sendResponse(400, { message: "Only POST method is allowed" });
  }

  if (!body.text) {
    return sendResponse(400, { message: "Missing 'text' in request body" });
  }

  try {
    if (path === "/encrypt") {
      return sendResponse(200, {
        encryptedText: encrypt(body.text),
      });
    }

    if (path === "/decrypt") {
      return sendResponse(200, {
        decryptedText: decrypt(body.text),
      });
    }

    return sendResponse(400, { message: "Invalid endpoint" });
  } catch (error) {
    return sendResponse(500, { message: error.message });
  }
};
