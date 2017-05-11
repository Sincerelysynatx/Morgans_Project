import { CollectionObject } from './collection-object.model';

export interface Coupon extends CollectionObject {
    title: string;
    desc: string;
    price: number;
    bestower: string;
    receiver: string;
    pair_belongs: string;
}