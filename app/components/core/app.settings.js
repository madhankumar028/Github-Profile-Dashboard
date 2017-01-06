"use strict";
var AppConstant = (function () {
    function AppConstant() {
    }
    Object.defineProperty(AppConstant, "API_ENDPOINT", {
        // to get the end point
        get: function () { return '//api.github.com/users/'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppConstant, "ALL_USER", {
        // to get all users
        get: function () { return '//api.github.com/users'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppConstant, "DEFAULT_USER", {
        // to get the default user
        get: function () { return 'madhankumar028'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppConstant, "CLIENT_ID", {
        // to get the client_id
        get: function () { return 'b7641fc061fbc7eba0ae'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppConstant, "CLIENT_SECRET", {
        // to get the client_secret
        get: function () { return '582f452b977885775b36fd81d8bfe51a5d48e59d'; },
        enumerable: true,
        configurable: true
    });
    return AppConstant;
}());
exports.AppConstant = AppConstant;
//# sourceMappingURL=app.settings.js.map