const decryptionService = require("../services/decryptionService");
const { sendResponse } = require("../responses/response");

exports.handler = async (event) => {
  try {
    const encryptedText = event.queryStringParameters.encryptedText;
    const decryptedText = decryptionService.decrypt(encryptedText);
    return sendResponse(200, { decryptedText });
  } catch (error) {
    return sendResponse(500, { error: error.message });
  }
};
