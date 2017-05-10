import { Meteor } from 'meteor/meteor';
import { Users } from '../../../both/collections/user.collection';

Meteor.publish('user', () => Users.find());