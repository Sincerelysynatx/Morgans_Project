import { CollectionObject } from './collection-object.model';
import { Coupon } from './coupon.model';

export interface Coupon_List extends CollectionObject {
    coupon_list1: Array<Coupon>;
}