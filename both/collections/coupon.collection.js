"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var meteor_rxjs_1 = require("meteor-rxjs");
var meteor_1 = require("meteor/meteor");
exports.Coupons = new meteor_rxjs_1.MongoObservable.Collection('coupons');
function loggedIn() {
    return !!meteor_1.Meteor.user();
}
exports.Coupons.allow({
    insert: loggedIn,
    update: loggedIn,
    remove: loggedIn
});
