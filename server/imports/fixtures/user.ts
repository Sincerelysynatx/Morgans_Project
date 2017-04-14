import { Users } from '../../../both/collections/user.collection';
import { User } from '../../../both/models/user.model';

export function loadUsers() {
    if (Users.find().cursor.count() === 0) {
        const users = [];
    }
}
