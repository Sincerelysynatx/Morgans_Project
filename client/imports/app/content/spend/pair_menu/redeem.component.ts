import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { MeteorObservable } from "meteor-rxjs";
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Pairs } from '../../../../../../both/collections/pair.collection';
import { Pair } from '../../../../../../both/models/pair.model';

import {Coupons} from "../../../../../../both/collections/coupon.collection";
import {Coupon} from "../../../../../../both/models/coupon.model";

import {Users} from "../../../../../../both/collections/user.collection";

//noinspection TypeScriptCheckImport
import template from './redeem.component.html';


@Component({
    selector: 'pair_menu',
    template
})

export class RedeemMenuComponent implements OnInit, OnDestroy{
    pair: Pair;
    coupons: Observable<Coupon[]>;
    pairId: string;
    couponsSub: Subscription;
    usersSub: Subscription;
    pairSub: Subscription;
    paramSub: Subscription;
    my_user: string;
    balance: number;
    submitCoupon: FormGroup;

    constructor(private route: ActivatedRoute, private formBuilder: FormBuilder){}

    ngOnInit(){
        this.my_user = Meteor.userId();
        this.submitCoupon = this.formBuilder.group({
        });
        this.paramSub = this.route.params
            .map(params => params['pairId'])
            .subscribe(pairId => {
                this.pairId = pairId;
            });
        this.usersSub = MeteorObservable.subscribe('user').subscribe(() => {
            this.my_user = Users.findOne({_id: this.my_user}).username;
        });
        this.couponsSub = MeteorObservable.subscribe('coupon').subscribe(() => {
            this.coupons = Coupons.find({receiver: this.my_user, pair_belongs: this.pairId}).zone();
        });
        this.pairSub = MeteorObservable.subscribe('pair').subscribe(() => {
            this.pair = Pairs.findOne({_id: this.pairId});
            if (this.my_user == this.pair.user1_id)
                this.balance = this.pair.id1_points;
            else
                this.balance = this.pair.id2_points;
        });
    }

    redeemCoupon(coupon: Coupon):void{
        if (this.balance >= coupon.price)
        {
            Coupons.remove(coupon._id);
            if (this.my_user == this.pair.user1_id){
                Pairs.update(this.pairId, {$inc: {id1_points: -coupon.price}});
                this.pair = Pairs.findOne({_id: this.pairId});
                this.balance = this.pair.id1_points;
            }
            else
            {
                Pairs.update(this.pairId, {$inc: {id2_points: -coupon.price}});
                this.pair = Pairs.findOne({_id: this.pairId});
                this.balance = this.pair.id1_points;
            }
        }
    }

    ngOnDestroy(){
        this.couponsSub.unsubscribe();
        this.pairSub.unsubscribe();
        this.usersSub.unsubscribe();
        this.paramSub.unsubscribe();
    }

}