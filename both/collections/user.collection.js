"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var meteor_rxjs_1 = require("meteor-rxjs");
exports.Users = new meteor_rxjs_1.MongoObservable.Collection('user');
exports.Users.allow({
    insert: function () {
        return true;
    },
    update: function () {
        return false;
    },
    remove: function () {
        return false;
    },
});
