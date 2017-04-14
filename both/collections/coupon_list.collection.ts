import { MongoObservable } from 'meteor-rxjs';
import { Meteor } from 'meteor/meteor';

import { Coupon_List } from '../models/coupon_list.model';

export const Coupon_List_Collection = new MongoObservable.Collection<Coupon_List>('coupon_list');

function loggedIn(){
    return !!Meteor.user();
}

Coupon_List_Collection.allow({
    insert: loggedIn,
    update: loggedIn,
    remove: loggedIn
});