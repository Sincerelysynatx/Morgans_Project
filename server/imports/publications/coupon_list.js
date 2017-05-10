"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var meteor_1 = require("meteor/meteor");
var coupon_list_collection_1 = require("../../../both/collections/coupon_list.collection");
meteor_1.Meteor.publish('coupon_list', function () { return coupon_list_collection_1.Coupon_List_Collection.find(); });
