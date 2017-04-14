import { Meteor } from 'meteor/meteor';
import { loadGroups } from './imports/fixtures/group';
import { loadUsers } from './imports/fixtures/user';

Meteor.startup(() => {
    loadGroups();
    loadUsers();
});