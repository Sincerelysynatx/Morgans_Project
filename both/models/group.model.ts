import { CollectionObject } from './collection-object.model';
import { Link } from './link.model';

export interface Group extends CollectionObject {
    group_title: string;
    links: Array<Link>;
}