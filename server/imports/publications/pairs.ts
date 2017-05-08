import { Meteor } from 'meteor/meteor';
import { Pairs } from '../../../both/collections/pair.collection';

Meteor.publish('pairs', () => Pairs.find());