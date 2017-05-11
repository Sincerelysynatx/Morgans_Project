import { CollectionObject } from './collection-object.model';

export interface User extends CollectionObject {
    username: string;
    users_added: Array<string>;
}