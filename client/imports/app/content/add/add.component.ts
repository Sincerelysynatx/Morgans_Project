import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Meteor } from 'meteor/meteor';
import { Subscription } from 'rxjs/Subscription';
import { MeteorObservable } from "meteor-rxjs";

import { Users } from '../../../../../both/collections/user.collection';
import { User } from '../../../../../both/models/user.model';

import { Pairs } from '../../../../../both/collections/pair.collection';

//noinspection TypeScriptCheckImport
import template from './add.component.html';

@Component({
    selector: 'add',
    template
})

export class AddComponent implements OnInit, OnDestroy{
    users: Observable<User[]>;
    usersSub: Subscription;
    pairsSub: Subscription;
    //pairs: Observable<Pair[]>;
    my_user: string;
    added_users: Array<string>;
    constructor(){
    }

    ngOnInit(){
        this.my_user = Meteor.userId();
        this.usersSub = MeteorObservable.subscribe('user').subscribe(() => {
            // this.added_users = Object.assign({}, Users.findOne(this.my_user).users_added);
            // console.log(this.added_users);
            // var array_users = Array();
            // for(var keys in this.added_users)
            // {
            //     console.log(this.added_users[keys]);
            //     array_users.push(this.added_users[keys]);
            // }
            // console.log(array_users);
            this.users = Users.find({_id: {$ne: this.my_user}}).zone();
        });
        this.pairsSub = MeteorObservable.subscribe('pair').subscribe();
    }

    createPair(user: User):void {
        Pairs.insert({user1_id: Users.findOne({_id: this.my_user}).username,
                      user2_id: user.username,
                      id1_points: 0,
                      id2_points: 0
        });
        Users.update({_id: Meteor.userId()}, {$push: {users_added: {_id: user._id}}});
    }

    ngOnDestroy(){
        this.usersSub.unsubscribe();
        this.pairsSub.unsubscribe();
    }
}