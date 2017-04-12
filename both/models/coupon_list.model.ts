import { CollectionObject } from './collection-object.model';
import { Coupon } from './coupon.model';

export interface Pair extends CollectionObject {
    _id: string;
    coupon_list1: Array<Coupon>;
}