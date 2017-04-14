import { MongoObservable } from 'meteor-rxjs';
import { Meteor } from 'meteor/meteor';

import { Pair } from '../models/pair.model';

export const Pairs = new MongoObservable.Collection<Pair>('pair');
