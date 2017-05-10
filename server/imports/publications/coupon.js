"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var meteor_1 = require("meteor/meteor");
var coupon_collection_1 = require("../../../both/collections/coupon.collection");
meteor_1.Meteor.publish('coupons', function () { return coupon_collection_1.Coupons.find(); });
