"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var meteor_1 = require("meteor/meteor");
require("./imports/publications/pairs");
require("./imports/publications/users");
require("./imports/publications/coupon_list");
require("./imports/publications/coupon");
meteor_1.Meteor.startup(function () {
});
