import { Meteor } from 'meteor/meteor';
import { loadUsers } from './imports/fixtures/user';

Meteor.startup(() => {
    loadUsers();
});