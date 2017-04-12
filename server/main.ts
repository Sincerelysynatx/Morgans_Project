import { Meteor } from 'meteor/meteor';
import { loadGroups } from './imports/fixtures/group';

Meteor.startup(() => {
    loadGroups();
});