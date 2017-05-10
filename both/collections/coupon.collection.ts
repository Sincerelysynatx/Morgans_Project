import { MongoObservable } from 'meteor-rxjs';
import { Meteor } from 'meteor/meteor';

import { Coupon } from '../models/coupon.model';

export const Coupons = new MongoObservable.Collection<Coupon>('coupons');

function loggedIn(){
    return !!Meteor.user();
}

Coupons.allow({
    insert: loggedIn,
    update: loggedIn,
    remove: loggedIn
});