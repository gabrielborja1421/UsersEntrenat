"use strict";
exports.__esModule = true;
exports.userRouter = void 0;
var express_1 = require("express");
var dependencies_1 = require("./controllers/dependencies");
var dependencies_2 = require("./controllers/dependencies");
var dependencies_3 = require("./controllers/dependencies");
var dependencies_4 = require("./controllers/dependencies");
var dependencies_5 = require("./controllers/dependencies");
var verifyToken_1 = require("./helpers/verifyToken");
exports.userRouter = express_1["default"].Router();
// Ruta para registrar un usuario
exports.userRouter.post("/register", dependencies_1.registerController.run.bind(dependencies_1.registerController));
exports.userRouter.post('/login', dependencies_5.loginController.run.bind(dependencies_5.loginController));
exports.userRouter.put('/setinactive', verifyToken_1.validateToken, dependencies_1.setAsInactiveController.run.bind(dependencies_1.setAsInactiveController));
// Ruta para obtener todos los usuarios
exports.userRouter.get("/list", dependencies_2.listAllUserController.run.bind(dependencies_2.listAllUserController));
// Ruta para obtener un usuario por su ID
exports.userRouter.get("/:id", verifyToken_1.validateToken, dependencies_3.getUserByIdController.run.bind(dependencies_3.getUserByIdController));
// Ruta para eliminar un usuario por su ID
exports.userRouter["delete"]("/:id", verifyToken_1.validateToken, dependencies_4.deleteUserByIdController.run.bind(dependencies_4.deleteUserByIdController));
exports.userRouter.put('/config', verifyToken_1.validateToken, dependencies_1.updateUserConfigController.run.bind(dependencies_1.updateUserConfigController));
exports.userRouter.post('/config/create', verifyToken_1.validateToken, dependencies_1.registerUserConfigController.run.bind(dependencies_1.registerUserConfigController));
exports.userRouter.get('/config/:id', verifyToken_1.validateToken, dependencies_1.getUserConfigByIdController.run.bind(dependencies_1.getUserConfigByIdController));
exports.userRouter.put('/update', verifyToken_1.validateToken, dependencies_1.updateUserController.run.bind(dependencies_1.updateUserController));
