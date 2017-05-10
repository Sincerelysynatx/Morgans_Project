import { Meteor } from 'meteor/meteor';
import { Coupons } from '../../../both/collections/coupon.collection';

Meteor.publish('coupon', () => Coupons.find());