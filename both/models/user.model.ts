import { CollectionObject } from './collection-object.model';

export interface User extends CollectionObject {
    _id: string;
    f_name: string;
    l_name: string;
}