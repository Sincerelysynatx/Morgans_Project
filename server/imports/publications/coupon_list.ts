import { Meteor } from 'meteor/meteor';
import { Coupon_List_Collection } from '../../../both/collections/coupon_list.collection';

Meteor.publish('coupon_list', () => Coupon_List_Collection.find());