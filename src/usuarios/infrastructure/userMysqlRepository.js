"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
exports.UserMysqlRepository = void 0;
var conecction_1 = require("../../database/conecction");
var user_1 = require("../domain/user");
var hash_1 = require("./helpers/hash");
var token_1 = require("./helpers/token");
var UserMysqlRepository = /** @class */ (function () {
    function UserMysqlRepository() {
    }
    UserMysqlRepository.prototype.registerUser = function (name, email, password, height, weight, sex, nickname) {
        return __awaiter(this, void 0, void 0, function () {
            var checkEmailSql, emailResults, hashPassword, sql, params, result, user, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 5]);
                        checkEmailSql = "\n                SELECT COUNT(*) as emailCount\n                FROM usuario\n                WHERE correo = ?;\n                ";
                        return [4 /*yield*/, (0, conecction_1.query)(checkEmailSql, [email])];
                    case 1:
                        emailResults = (_a.sent())[0];
                        if (emailResults[0].emailCount > 0) {
                            throw new Error("El correo electrónico ya está registrado en la base de datos.");
                        }
                        return [4 /*yield*/, (0, hash_1.encrypt)(password)];
                    case 2:
                        hashPassword = _a.sent();
                        sql = "INSERT INTO usuario (nombre, correo, contraseña, altura, peso, gender, nickname) VALUES (?, ?, ?, ?, ?, ?, ?)";
                        params = [name, email, hashPassword, height, weight, sex, nickname];
                        return [4 /*yield*/, (0, conecction_1.query)(sql, params)];
                    case 3:
                        result = (_a.sent())[0];
                        console.log("result: ", result); // Log adicional
                        if (result.insertId) {
                            user = new user_1.User(result.insertId, name, email, hashPassword, height, weight, sex, nickname, '', '', '');
                            return [2 /*return*/, user];
                        }
                        else {
                            console.error("No se pudo insertar el usuario en la base de datos.");
                            return [2 /*return*/, null];
                        }
                        return [3 /*break*/, 5];
                    case 4:
                        error_1 = _a.sent();
                        console.error("Error al registrar el usuario:", error_1);
                        return [2 /*return*/, null];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    UserMysqlRepository.prototype.loginUser = function (email, password) {
        return __awaiter(this, void 0, void 0, function () {
            var userSql, userRows, userRow, isPasswordMatch, token, user, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        userSql = "SELECT UserID AS userid, nombre AS username, correo AS email, contraseña AS password FROM usuario WHERE correo = ? LIMIT 1";
                        return [4 /*yield*/, (0, conecction_1.query)(userSql, [email])];
                    case 1:
                        userRows = (_a.sent())[0];
                        if (!Array.isArray(userRows) || userRows.length === 0) {
                            return [2 /*return*/, null]; // El usuario no existe
                        }
                        userRow = userRows[0];
                        return [4 /*yield*/, (0, hash_1.compare)(password, userRow.password)];
                    case 2:
                        isPasswordMatch = _a.sent();
                        if (!isPasswordMatch) {
                            return [2 /*return*/, null]; // Contraseña incorrecta
                        }
                        token = (0, token_1.tokenSigIn)(userRow.username, userRow.email);
                        user = new user_1.VerifyLogin(userRow.userid, userRow.username, userRow.email, token);
                        return [2 /*return*/, user];
                    case 3:
                        error_2 = _a.sent();
                        console.error("Error en loginUser:", error_2);
                        return [2 /*return*/, null];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    UserMysqlRepository.prototype.listAllUsers = function () {
        return __awaiter(this, void 0, void 0, function () {
            var sql, rows, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        sql = "SELECT * FROM usuario";
                        return [4 /*yield*/, (0, conecction_1.query)(sql)];
                    case 1:
                        rows = (_a.sent())[0];
                        if (!Array.isArray(rows)) {
                            throw new Error('Rows is not an array');
                        }
                        console.log("rows: ", rows); // Log adicional
                        return [2 /*return*/, rows];
                    case 2:
                        error_3 = _a.sent();
                        console.error("Error al listar usuarios:", error_3);
                        return [2 /*return*/, null];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    UserMysqlRepository.prototype.deleteUserById = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var sql, result, error_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        sql = 'DELETE FROM usuario WHERE userid = ?';
                        return [4 /*yield*/, (0, conecction_1.query)(sql, [id])];
                    case 1:
                        result = _a.sent();
                        if (!result || result.affectedRows === 0) {
                            return [2 /*return*/, 'No se encontró ningún usuario con el ID proporcionado.'];
                        }
                        return [2 /*return*/, 'Usuario eliminado exitosamente.'];
                    case 2:
                        error_4 = _a.sent();
                        console.error('Error al eliminar el usuario:', error_4);
                        throw error_4; // Puedes manejar el error de la manera que prefieras o simplemente lanzarlo para que se maneje en un nivel superior.
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    UserMysqlRepository.prototype.getUserById = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var sql, rows, row, userData, error_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        sql = "SELECT userid, nombre, correo, altura, peso, gender FROM usuario WHERE userid = ? LIMIT 1";
                        return [4 /*yield*/, (0, conecction_1.query)(sql, [id])];
                    case 1:
                        rows = (_a.sent())[0];
                        // Verificar si no se encontraron resultados o si la respuesta es vacía
                        if (!Array.isArray(rows) || rows.length === 0) {
                            return [2 /*return*/, null];
                        }
                        row = rows[0];
                        userData = new user_1.User(row.userid, row.nickname, row.nombre, row.correo, row.contraseña, row.altura, row.peso, row.gender, row.nickname, row.descripcion, row.img);
                        return [2 /*return*/, userData];
                    case 2:
                        error_5 = _a.sent();
                        console.error("Error en getUserById:", error_5);
                        return [2 /*return*/, null];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    UserMysqlRepository.prototype.listAllInactiveUser = function () {
        return __awaiter(this, void 0, void 0, function () {
            var sql, rows, error_6;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        sql = "SELECT * FROM usuario WHERE cuentaactiva = false";
                        return [4 /*yield*/, (0, conecction_1.query)(sql)];
                    case 1:
                        rows = (_a.sent())[0];
                        if (!Array.isArray(rows)) {
                            throw new Error('Error'); // Puedes manejar este caso según tus necesidades
                        }
                        //const users: User[] = rows.map(row => new User(row.id, row.name, row.phone, row.email, row.nickname ,row.password, row.active, row.canlent));
                        return [2 /*return*/, null];
                    case 2:
                        error_6 = _a.sent();
                        console.error("Error en listAllInactiveUser:", error_6);
                        return [2 /*return*/, null]; // Retorna null en caso de error o podrías optar por retornar un array vacío dependiendo de tu lógica de negocio
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    UserMysqlRepository.prototype.setAsInactive = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var sql, resultSet, error_7;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        sql = 'UPDATE usuario SET cuentaactiva = false WHERE userid = ?';
                        return [4 /*yield*/, (0, conecction_1.query)(sql, [id || null])];
                    case 1:
                        resultSet = (_a.sent())[0];
                        if (!resultSet || resultSet.affectedRows === 0) {
                            return [2 /*return*/, null];
                        }
                        return [2 /*return*/, id];
                    case 2:
                        error_7 = _a.sent();
                        console.error('Error al activar el usuario:', error_7);
                        throw new Error('No se pudo activar el usuario.'); // O maneja el error de la manera que prefieras.
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    UserMysqlRepository.prototype.updateUser = function (id, configParams) {
        return __awaiter(this, void 0, void 0, function () {
            var filteredConfigParams, fields, values, sql, resultSet, updatedUser, error_8;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        filteredConfigParams = Object.fromEntries(Object.entries(configParams).filter(function (_a) {
                            var _ = _a[0], value = _a[1];
                            return value !== undefined;
                        }));
                        fields = Object.keys(filteredConfigParams)
                            .map(function (key) { return "".concat(key, " = ?"); })
                            .join(', ');
                        if (fields.length === 0) {
                            throw new Error("No fields to update");
                        }
                        values = Object.values(filteredConfigParams);
                        sql = "UPDATE usuario SET ".concat(fields, " WHERE UserID = ?");
                        return [4 /*yield*/, (0, conecction_1.query)(sql, __spreadArray(__spreadArray([], values, true), [id], false))];
                    case 1:
                        resultSet = (_a.sent())[0];
                        if (!resultSet || resultSet.affectedRows === 0) {
                            return [2 /*return*/, null];
                        }
                        updatedUser = new user_1.User(id, configParams.name || '', configParams.email || '', configParams.password || '', configParams.height || 0, configParams.weight || 0, configParams.sex || '', configParams.nickname || '', configParams.description || '', configParams.gym || '', configParams.img || '');
                        console.log("updatedUser:", updatedUser);
                        return [2 /*return*/, updatedUser];
                    case 2:
                        error_8 = _a.sent();
                        console.error('Error updating user config:', error_8);
                        throw new Error('Failed to update user config.');
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    // implementa el metodo updateUserConfig para podder actualizar la configuracion de un usuario
    UserMysqlRepository.prototype.updateUserConfig = function (id, configParams) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        return __awaiter(this, void 0, void 0, function () {
            var fields, values, sql, resultSet, updatedUserConfig, error_9;
            return __generator(this, function (_l) {
                switch (_l.label) {
                    case 0:
                        _l.trys.push([0, 2, , 3]);
                        fields = Object.keys(configParams).map(function (key) { return "".concat(key, " = ?"); }).join(', ');
                        values = Object.values(configParams);
                        sql = "UPDATE UserConfig SET ".concat(fields, " WHERE userID = ?");
                        return [4 /*yield*/, (0, conecction_1.query)(sql, __spreadArray(__spreadArray([], values, true), [id], false))];
                    case 1:
                        resultSet = (_l.sent())[0];
                        if (!resultSet || resultSet.affectedRows === 0) {
                            return [2 /*return*/, null];
                        }
                        updatedUserConfig = new user_1.UserConfig(id, (_a = configParams.canName) !== null && _a !== void 0 ? _a : false, (_b = configParams.canDescription) !== null && _b !== void 0 ? _b : false, (_c = configParams.canAge) !== null && _c !== void 0 ? _c : false, (_d = configParams.canWeight) !== null && _d !== void 0 ? _d : false, (_e = configParams.canHeight) !== null && _e !== void 0 ? _e : false, (_f = configParams.canSex) !== null && _f !== void 0 ? _f : false, (_g = configParams.canEmail) !== null && _g !== void 0 ? _g : false, (_h = configParams.canProfile) !== null && _h !== void 0 ? _h : false, (_j = configParams.canGym) !== null && _j !== void 0 ? _j : false, (_k = configParams.isPremium) !== null && _k !== void 0 ? _k : false);
                        return [2 /*return*/, updatedUserConfig];
                    case 2:
                        error_9 = _l.sent();
                        console.error('Error updating user config:', error_9);
                        throw new Error('Failed to update user config.');
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    UserMysqlRepository.prototype.CreateUserConfig = function (userID, canName, canDescription, canAge, canWeight, canHeight, canSex, canEmail, canProfile, canGym, isPremium) {
        return __awaiter(this, void 0, void 0, function () {
            var sql, params, _i, params_1, param, resultSet, error_10;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        sql = 'INSERT INTO UserConfig (userID, canName, canDescription, canAge, canWeight, canHeight, canSex, canEmail, canProfile, canGym, isPremium) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
                        params = [
                            userID,
                            canName,
                            canDescription,
                            canAge,
                            canWeight,
                            canHeight,
                            canSex,
                            canEmail,
                            canProfile,
                            canGym,
                            isPremium
                        ];
                        // Verificación de parámetros no definidos
                        for (_i = 0, params_1 = params; _i < params_1.length; _i++) {
                            param = params_1[_i];
                            if (param === undefined) {
                                throw new Error('Uno o más parámetros no están definidos.');
                            }
                        }
                        return [4 /*yield*/, (0, conecction_1.query)(sql, params)];
                    case 1:
                        resultSet = (_a.sent())[0];
                        if (!resultSet || resultSet.affectedRows === 0) {
                            return [2 /*return*/, null];
                        }
                        return [2 /*return*/, new user_1.UserConfig(userID, canName, canDescription, canAge, canWeight, canHeight, canSex, canEmail, canProfile, canGym, isPremium)];
                    case 2:
                        error_10 = _a.sent();
                        console.error('Error al crear la configuración del usuario:', error_10);
                        throw new Error('No se pudo crear la configuración del usuario.'); // O maneja el error de la manera que prefieras.
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    UserMysqlRepository.prototype.getUserConfigById = function (userID) {
        return __awaiter(this, void 0, void 0, function () {
            var sql, rows, row, error_11;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        sql = 'SELECT * FROM UserConfig WHERE userID = ?';
                        return [4 /*yield*/, (0, conecction_1.query)(sql, [userID])];
                    case 1:
                        rows = (_a.sent())[0];
                        if (!Array.isArray(rows) || rows.length === 0) {
                            return [2 /*return*/, null];
                        }
                        row = rows[0];
                        console.log("row: ", row); // Log adicional
                        return [2 /*return*/, new user_1.UserConfig(row.userID, row.canName, row.canDescription, row.canAge, row.canWeight, row.canHeight, row.canSex, row.canEmail, row.canProfile, row.canGym, row.isPremium)];
                    case 2:
                        error_11 = _a.sent();
                        console.error('Error al obtener la configuración del usuario:', error_11);
                        throw new Error('No se pudo obtener la configuración del usuario.'); // O maneja el error de la manera que prefieras.
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    return UserMysqlRepository;
}());
exports.UserMysqlRepository = UserMysqlRepository;
