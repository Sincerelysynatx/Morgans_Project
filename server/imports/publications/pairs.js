"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var meteor_1 = require("meteor/meteor");
var pair_collection_1 = require("../../../both/collections/pair.collection");
meteor_1.Meteor.publish('pair', function () { return pair_collection_1.Pairs.find(); });
