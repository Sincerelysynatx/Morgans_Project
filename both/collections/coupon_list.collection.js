"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var meteor_rxjs_1 = require("meteor-rxjs");
var meteor_1 = require("meteor/meteor");
exports.Coupon_List_Collection = new meteor_rxjs_1.MongoObservable.Collection('coupon_list');
function loggedIn() {
    return !!meteor_1.Meteor.user();
}
exports.Coupon_List_Collection.allow({
    insert: loggedIn,
    update: loggedIn,
    remove: loggedIn
});
