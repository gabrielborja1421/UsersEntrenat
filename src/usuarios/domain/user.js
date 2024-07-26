"use strict";
exports.__esModule = true;
exports.VerifyLogin = exports.UserConfig = exports.User = void 0;
var User = /** @class */ (function () {
    function User(id, name, email, password, height, weight, sex, nickname, description, img, gym) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.height = height;
        this.weight = weight;
        this.sex = sex;
        this.nickname = nickname;
        this.description = description;
        this.img = img;
        this.gym = gym;
    }
    return User;
}());
exports.User = User;
var UserConfig = /** @class */ (function () {
    function UserConfig(userID, canName, canDescription, canAge, canWeight, canHeight, canSex, canEmail, canProfile, canGym, isPremium) {
        this.userID = userID;
        this.canName = canName;
        this.canDescription = canDescription;
        this.canAge = canAge;
        this.canWeight = canWeight;
        this.canHeight = canHeight;
        this.canSex = canSex;
        this.canEmail = canEmail;
        this.canProfile = canProfile;
        this.canGym = canGym;
        this.isPremium = isPremium;
    }
    return UserConfig;
}());
exports.UserConfig = UserConfig;
var VerifyLogin = /** @class */ (function () {
    function VerifyLogin(id, name, email, token) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.token = token;
    }
    return VerifyLogin;
}());
exports.VerifyLogin = VerifyLogin;
