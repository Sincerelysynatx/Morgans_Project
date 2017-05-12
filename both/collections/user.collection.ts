import { MongoObservable } from 'meteor-rxjs';

import { User } from '../models/user.model';

export const Users = new MongoObservable.Collection<User>('user');

Users.allow({
    insert(){
        return true;
    },
    update(){
        return true;
    },
    remove(){
        return false;
    },
});