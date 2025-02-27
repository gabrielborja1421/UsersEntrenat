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
exports.__esModule = true;
exports.RegisterController = void 0;
var RegisterController = /** @class */ (function () {
    function RegisterController(registerUseCase) {
        this.registerUseCase = registerUseCase;
    }
    RegisterController.prototype.run = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, name_1, email, nickname, password, height, weight, sex, registerUser, err_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        // Verifica que req.body no esté vacío y contenga las propiedades necesarias
                        if (!req.body || !req.body.name || !req.body.email || !req.body.password) {
                            return [2 /*return*/, res.status(400).send({
                                    status: "error",
                                    message: "Datos incompletos"
                                })];
                        }
                        _a = req.body, name_1 = _a.name, email = _a.email, nickname = _a.nickname, password = _a.password, height = _a.height, weight = _a.weight, sex = _a.sex;
                        return [4 /*yield*/, this.registerUseCase.run(name_1, email, nickname, password, height, weight, sex)];
                    case 1:
                        registerUser = _b.sent();
                        if (registerUser) {
                            return [2 /*return*/, res.status(201).send({
                                    status: "success",
                                    data: {
                                        id: registerUser.id,
                                        name: registerUser.name,
                                        email: registerUser.email
                                    }
                                })];
                        }
                        else {
                            return [2 /*return*/, res.status(400).send({
                                    status: "error",
                                    message: "Ya está registrado este correo."
                                })];
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        err_1 = _b.sent();
                        console.error("Error al registrar usuario: --- ", err_1);
                        return [2 /*return*/, res.status(500).send({
                                status: "error",
                                message: "Error interno del servidor"
                            })];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    return RegisterController;
}());
exports.RegisterController = RegisterController;
