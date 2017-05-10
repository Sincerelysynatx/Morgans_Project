"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var meteor_1 = require("meteor/meteor");
var user_collection_1 = require("../../../both/collections/user.collection");
meteor_1.Meteor.publish('user', function () { return user_collection_1.Users.find(); });
