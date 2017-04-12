import { MongoObservable } from 'meteor-rxjs';

import { Coupon } from '../models/coupon.model';

export const Coupons = new MongoObservable.Collection<CouponCollection>('coupon');