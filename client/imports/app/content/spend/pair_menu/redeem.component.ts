import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { MeteorObservable } from "meteor-rxjs";



import { Pairs } from '../../../../../../both/collections/pair.collection';
import { Pair } from '../../../../../../both/models/pair.model';

import {Coupon} from "../../../../../../both/models/coupon.model";

//noinspection TypeScriptCheckImport
import template from './redeem.component.html';

@Component({
    selector: 'pair_menu',
    template
})

export class RedeemMenuComponent implements OnInit, OnDestroy{
    pairs: Observable<Pair[]>;
    coupons: Observable<Coupon[]>;
    pairsSub: Subscription;
    couponsSub: Subscription;


    constructor(){}

    ngOnInit(){
        this.pairsSub = MeteorObservable.subscribe('pair').subscribe(() => {
            this.pairs = Pairs.find().zone();
        });
        this.couponsSub = MeteorObservable.subscribe('coupon').subscribe(() => {

        });
    }

    ngOnDestroy(){
        this.pairsSub.unsubscribe();
    }

}