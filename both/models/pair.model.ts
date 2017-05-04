import { CollectionObject } from './collection-object.model';

export interface Pair extends CollectionObject {
    user1_id: string;
    user2_id: string;
    user1_coupon_list_id: string;
    user2_coupon_list_id: string;
    id1_points: number;
    id2_points: number;
}