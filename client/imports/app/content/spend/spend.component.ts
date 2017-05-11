import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { MeteorObservable } from "meteor-rxjs";

import { Pairs } from '../../../../../both/collections/pair.collection';
import { Pair } from '../../../../../both/models/pair.model';

//noinspection TypeScriptCheckImport
import template from './spend.component.html';
import {Users} from "../../../../../both/collections/user.collection";

@Component({
    selector: 'spend',
    template
})

export class SpendComponent implements OnInit, OnDestroy{
    pairs: Observable<Pair[]>;
    pairsSub: Subscription;
    userSub: Subscription;
    my_user: string;

    constructor(){}

    ngOnInit(){
        this.my_user = Meteor.userId();
        this.userSub = MeteorObservable.subscribe('user').subscribe(() => {
            this.my_user = Users.findOne({_id: this.my_user}).username;
        });
        this.pairsSub = MeteorObservable.subscribe('pair').subscribe(() => {
            this.pairs = Pairs.find({$or: [{user1_id: this.my_user}, {user2_id: this.my_user}]}).zone();
        });
    }

    ngOnDestroy(){
        this.pairsSub.unsubscribe();
        this.userSub.unsubscribe();
    }

}