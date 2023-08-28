const todoHandler = require("./functions/todoHandler");
const encryptionHandler = require("./functions/encryptionHandler");

exports.todoHandler = todoHandler.handler;
exports.encryptionHandler = encryptionHandler.handler;
