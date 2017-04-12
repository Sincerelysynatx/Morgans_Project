import { MongoObservable } from 'meteor-rxjs';
import { Meteor } from 'meteor/meteor';

import { Link } from '../models/link.model';

export const Links = new MongoObservable.Collection<Link>('links');

function loggedIn(){
    return !!Meteor.user();
}

Links.allow({
    insert: loggedIn,
    update: loggedIn,
    remove: loggedIn
});