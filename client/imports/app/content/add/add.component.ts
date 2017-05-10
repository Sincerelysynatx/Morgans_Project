import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Meteor } from 'meteor/meteor';
import { Subscription } from 'rxjs/Subscription';
import { Random } from 'meteor/random';
import { MeteorObservable } from "meteor-rxjs";

import { Users } from '../../../../../both/collections/user.collection';
import { User } from '../../../../../both/models/user.model';

import { Pairs } from '../../../../../both/collections/pair.collection';
//import { Pair } from '../../../../../both/models/pair.model';

import { Coupon_List_Collection } from '../../../../../both/collections/coupon_list.collection';

//noinspection TypeScriptCheckImport
import template from './add.component.html';

@Component({
    selector: 'add',
    template
})

export class AddComponent implements OnInit, OnDestroy{
    users: Observable<User[]>;
    usersSub: Subscription;
    //pairs: Observable<Pair[]>;
    my_user: string;
    constructor(){
    }

    ngOnInit(){
        //this.pairs = Pairs.find({user1_id: {$ne: Accounts.user().username}, user2_id: {$ne: Accounts.user().username}});
        this.my_user = Meteor.userId();
        this.usersSub = MeteorObservable.subscribe('user').subscribe(() => {
            this.users = Users.find({_id: {$ne: this.my_user}}).zone();
        });
    }

    createPair(user: User):void {
        var coupon_list_id1 = Random.id();
        var coupon_list_id2 = Random.id();
        //noinspection TypeScriptValidateTypes
        Coupon_List_Collection.insert({_id: coupon_list_id1, coupon_list: []});
        //noinspection TypeScriptValidateTypes
        Coupon_List_Collection.insert({_id: coupon_list_id2, coupon_list: []});

        Pairs.insert({user1_id: Users.findOne({_id: this.my_user}).username,
                      user2_id: user.username,
                      user1_coupon_list_id: coupon_list_id1,
                      user2_coupon_list_id: coupon_list_id2,
                      id1_points: 0,
                      id2_points: 0
        });
    }

    ngOnDestroy(){
        this.usersSub.unsubscribe();
    }
}