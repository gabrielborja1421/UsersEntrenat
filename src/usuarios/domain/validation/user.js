"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ValidatorId = exports.ValidatorupdatePassword = exports.ValidateLogin = exports.ValidatorRegisterUser = void 0;
var class_validator_1 = require("class-validator");
var ValidatorRegisterUser = /** @class */ (function () {
    function ValidatorRegisterUser(name, email, height, weight, gender, password) {
        this.name = name;
        this.email = email;
        this.height = height;
        this.weight = weight;
        this.gender = gender;
        this.password = password;
    }
    __decorate([
        (0, class_validator_1.IsNotEmpty)(),
        (0, class_validator_1.IsString)()
    ], ValidatorRegisterUser.prototype, "name");
    __decorate([
        (0, class_validator_1.IsNotEmpty)(),
        (0, class_validator_1.IsEmail)()
    ], ValidatorRegisterUser.prototype, "email");
    __decorate([
        (0, class_validator_1.IsNotEmpty)()
    ], ValidatorRegisterUser.prototype, "height");
    __decorate([
        (0, class_validator_1.IsNotEmpty)()
    ], ValidatorRegisterUser.prototype, "weight");
    __decorate([
        (0, class_validator_1.IsNotEmpty)()
    ], ValidatorRegisterUser.prototype, "gender");
    __decorate([
        (0, class_validator_1.IsNotEmpty)(),
        (0, class_validator_1.IsString)()
    ], ValidatorRegisterUser.prototype, "password");
    return ValidatorRegisterUser;
}());
exports.ValidatorRegisterUser = ValidatorRegisterUser;
var ValidateLogin = /** @class */ (function () {
    function ValidateLogin(email, password) {
        this.email = email,
            this.password = password;
    }
    __decorate([
        (0, class_validator_1.IsNotEmpty)(),
        (0, class_validator_1.IsEmail)()
    ], ValidateLogin.prototype, "email");
    __decorate([
        (0, class_validator_1.IsNotEmpty)(),
        (0, class_validator_1.IsString)()
    ], ValidateLogin.prototype, "password");
    return ValidateLogin;
}());
exports.ValidateLogin = ValidateLogin;
var ValidatorupdatePassword = /** @class */ (function () {
    function ValidatorupdatePassword(id, password) {
        this.id = id;
        this.password = password;
    }
    __decorate([
        (0, class_validator_1.IsNotEmpty)()
    ], ValidatorupdatePassword.prototype, "id");
    __decorate([
        (0, class_validator_1.IsNotEmpty)(),
        (0, class_validator_1.IsString)()
    ], ValidatorupdatePassword.prototype, "password");
    return ValidatorupdatePassword;
}());
exports.ValidatorupdatePassword = ValidatorupdatePassword;
var ValidatorId = /** @class */ (function () {
    function ValidatorId(id) {
        this.id = id;
    }
    __decorate([
        (0, class_validator_1.IsNotEmpty)()
    ], ValidatorId.prototype, "id");
    return ValidatorId;
}());
exports.ValidatorId = ValidatorId;
