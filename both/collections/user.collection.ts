import { MongoObservable } from 'meteor-rxjs';

import { User } from '../models/coupon.model';

export const Users = new MongoObservable.Collection<User>('user');