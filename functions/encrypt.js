const encryptionService = require("../services/encryptionService");
const { sendResponse } = require("../responses/response");

exports.handler = async (event) => {
  try {
    const text = event.queryStringParameters.text;
    const encryptedText = encryptionService.encrypt(text);
    return sendResponse(200, { encryptedText });
  } catch (error) {
    return sendResponse(500, { error: error.message });
  }
};
