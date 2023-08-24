const encryptionService = require("../services/encryptionService");
const { sendResponse } = require("../responses/response");
const errorResponses = require("../responses/errorResponse");

exports.handler = async (event) => {
  try {
    const text = event.queryStringParameters.text;
    const encryptedText = encryptionService.encrypt(text);
    return sendResponse(200, { encryptedText });
  } catch (error) {
    return errorResponses.InternalServerError;
  }
};
