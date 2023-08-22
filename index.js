const todoFunction = require("./functions/todo");
const encryptFunction = require("./functions/encrypt");
const decryptFunction = require("./functions/decrypt");

exports.todo = todoFunction.handler;
exports.encrypt = encryptFunction.handler;
exports.decrypt = decryptFunction.handler;
