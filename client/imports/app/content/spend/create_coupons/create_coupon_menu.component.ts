import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { MeteorObservable } from "meteor-rxjs";
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
    paramSub: Subscription;
    addCouponForm: FormGroup;
    pairId: string;
    pair: Pair;
    pairsSub: Subscription;
    usersSub: Subscription;
    couponsSub: Subscription;
    receiver_name: string;
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
            });
        this.pairsSub = MeteorObservable.subscribe('pair').subscribe(() => {
            this.pair = Pairs.findOne({_id: this.pairId});
            this.usersSub = MeteorObservable.subscribe('user').subscribe(() => {
                if (Users.findOne({_id: this.my_user }).username == this.pair.user1_id)
                    this.receiver_name = this.pair.user2_id;
                else
                    this.receiver_name = this.pair.user1_id;
            });
        });
        this.couponsSub = MeteorObservable.subscribe('coupon').subscribe();
    }

    addCoupon():void{
        Coupons.insert({
            title: this.addCouponForm.value.title,
            desc: this.addCouponForm.value.desc,
            price: this.addCouponForm.value.price,
            bestower: Users.findOne({_id: this.my_user}).username,
            receiver: this.receiver_name,
            pair_belongs: this.pairId
        });
        // var newCouponId = Coupons.findOne({
        //     title: this.addCouponForm.value.title,
        //     desc: this.addCouponForm.value.desc,
        //     price: this.addCouponForm.value.price,
        //     coupon_listId: this.coupon_listIdForOther
        // })._id;
        //Coupon_List_Collection.update({_id: this.coupon_listIdForOther}, {$push: {coupon_list: newCouponId}});
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
        this.pairsSub.unsubscribe();
        this.usersSub.unsubscribe();
        this.couponsSub.unsubscribe();
        this.paramSub.unsubscribe();
    }

}