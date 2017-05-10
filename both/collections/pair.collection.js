"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var meteor_rxjs_1 = require("meteor-rxjs");
var meteor_1 = require("meteor/meteor");
exports.Pairs = new meteor_rxjs_1.MongoObservable.Collection('pair');
function loggedIn() {
    return !!meteor_1.Meteor.user();
}
exports.Pairs.allow({
    insert: loggedIn,
    update: loggedIn,
    remove: loggedIn
});
