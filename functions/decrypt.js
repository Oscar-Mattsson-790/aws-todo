const decryptionService = require("../services/decryptionService");
const { sendResponse } = require("../responses/response");
const errorResponses = require("../responses/errorResponse");

exports.handler = async (event) => {
  try {
    const encryptedText = event.queryStringParameters.encryptedText;
    const decryptedText = decryptionService.decrypt(encryptedText);
    return sendResponse(200, { decryptedText });
  } catch (error) {
    return errorResponses.InternalServerError;
  }
};
