import { CollectionObject } from './collection-object.model';

export interface Coupon extends CollectionObject {
    title: string;
    desc: string;
    price: string;
    coupon_listId: string;
}