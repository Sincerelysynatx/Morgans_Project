import { CollectionObject } from './collection-object.model';

export interface Coupon extends CollectionObject {
    _id: string;
    title: string;
    desc: string;
    price: string;
}