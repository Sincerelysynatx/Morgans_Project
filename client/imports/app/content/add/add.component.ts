import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable'
import { Accounts } from 'meteor/accounts-base';
import { Random } from 'meteor/random';

import { Users } from '../../../../../both/collections/user.collection';
import { User } from '../../../../../both/models/user.model';

import { Pairs } from '../../../../../both/collections/pair.collection';
import { Coupon_List_Collection } from '../../../../../both/collections/coupon_list.collection';

//noinspection TypeScriptCheckImport
import template from './add.component.html';

@Component({
    selector: 'add',
    template
})

export class AddComponent implements OnInit{
    users: Observable<User[]>;
    constructor(){
    }

    ngOnInit(){
        this.users = Users.find({_id: {$ne: Accounts.user().username}}).zone();
    }

    createPair(user: User):void {
        var coupon_list_id1 = Random.id();
        var coupon_list_id2 = Random.id();
        console.log(coupon_list_id1);
        console.log(coupon_list_id2);
        //noinspection TypeScriptValidateTypes
        Coupon_List_Collection.insert({_id: coupon_list_id1});
        //noinspection TypeScriptValidateTypes
        Coupon_List_Collection.insert({_id: coupon_list_id2});

        Pairs.insert({user1_id: Accounts.user().username,
                      user2_id: user.username,
                      user1_coupon_list_id: coupon_list_id1,
                      user2_coupon_list_id: coupon_list_id2,
                      id1_points: 0,
                      id2_points: 0
        });
    }
}