"use strict";
exports.__esModule = true;
exports.verifyToken = exports.tokenSigIn = void 0;
var jsonwebtoken_1 = require("jsonwebtoken");
var dotenv_1 = require("dotenv");
dotenv_1["default"].config();
var tokenSigIn = function (name, email) {
    return jsonwebtoken_1["default"].sign({
        name: name,
        email: email
    }, process.env.KEY_TOKEN, {
        expiresIn: '74h'
    });
};
exports.tokenSigIn = tokenSigIn;
var verifyToken = function (token) {
    try {
        return jsonwebtoken_1["default"].verify(token, process.env.KEY_TOKEN);
    }
    catch (error) {
        return null;
    }
};
exports.verifyToken = verifyToken;
