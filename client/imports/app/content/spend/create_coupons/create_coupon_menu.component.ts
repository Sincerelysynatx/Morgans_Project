import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { MeteorObservable } from "meteor-rxjs";
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Coupon_List_Collection } from '../../../../../../both/collections/coupon_list.collection';
import { Coupon_List } from '../../../../../../both/models/coupon_list.model';

import { Coupons } from "../../../../../../both/collections/coupon.collection";

import { Pairs } from '../../../../../../both/collections/pair.collection';
import { Pair } from "../../../../../../both/models/pair.model";

import { Users } from "../../../../../../both/collections/user.collection";


import template from './create_coupon_menu.component.html';

@Component({
    selector: 'coupon_menu',
    template
})

export class CreateCouponComponent implements OnInit, OnDestroy{
    coupon_list: Observable<Coupon_List[]>;
    paramSub: Subscription;
    addCouponForm: FormGroup;
    coupon_listIdForOther: string;
    pairId: string;
    pair: Pair;
    pairsSub: Subscription;
    usersSub: Subscription;
    couponsSub: Subscription;
    coupon_listSub: Subscription;
    my_user: string;

    constructor(private route: ActivatedRoute, private formBuilder: FormBuilder){}

    ngOnInit(){
        this.my_user = Meteor.userId();
        this.addCouponForm = this.formBuilder.group({
            title: ['', Validators.required],
            desc: ['', Validators.required],
            price: ['', Validators.required]
        });
        this.paramSub = this.route.params
            .map(params => params['pairId'])
            .subscribe(pairId => {
                this.pairId = pairId;
                // this.coupon_list = Coupon_List_Collection.find(coupon_listId).zone();
            });
        this.pairsSub = MeteorObservable.subscribe('pair').subscribe(() => {
            this.pair = Pairs.findOne({_id: this.pairId});
            this.usersSub = MeteorObservable.subscribe('user').subscribe(() => {
                if (Users.findOne({_id:this.my_user }).username == this.pair.user1_id)
                    this.coupon_listIdForOther = this.pair.user2_coupon_list_id;
                else
                    this.coupon_listIdForOther = this.pair.user1_coupon_list_id;
            });
        });
        this.coupon_listSub = MeteorObservable.subscribe('coupon_list').subscribe();
        this.couponsSub = MeteorObservable.subscribe('coupon').subscribe();
    }

    addCoupon():void{
        Coupons.insert({
            title: this.addCouponForm.value.title,
            desc: this.addCouponForm.value.desc,
            price: this.addCouponForm.value.price,
            coupon_listId: this.coupon_listIdForOther
        });

        var newCouponId = Coupons.findOne({
            title: this.addCouponForm.value.title,
            desc: this.addCouponForm.value.desc,
            price: this.addCouponForm.value.price,
            coupon_listId: this.coupon_listIdForOther
        })._id;
        Coupon_List_Collection.update({_id: this.coupon_listIdForOther}, {$push: {coupon_list: newCouponId}});
        // Coupon_List_Collection.update({_id: this.coupon_listIdForOther},
        //     {$push:
        //     {coupon_list:
        //     {
        //         title: this.addCouponForm.value.title,
        //         desc: this.addCouponForm.value.desc,
        //         price: this.addCouponForm.value.price,
        //         coupon_listId: this.coupon_listIdForOther
        //     }}});
        this.addCouponForm.reset();
    }

    ngOnDestroy(){
        this.coupon_listSub.unsubscribe();
        this.pairsSub.unsubscribe();
        this.usersSub.unsubscribe();
        this.couponsSub.unsubscribe();
        this.paramSub.unsubscribe();
    }

}