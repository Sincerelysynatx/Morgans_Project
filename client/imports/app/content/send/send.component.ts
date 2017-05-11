import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Meteor } from 'meteor/meteor';
import { Subscription } from 'rxjs/Subscription';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MeteorObservable } from "meteor-rxjs";

import { Pairs } from '../../../../../both/collections/pair.collection';
import { Pair } from '../../../../../both/models/pair.model';

import { Users } from "../../../../../both/collections/user.collection";

//noinspection TypeScriptCheckImport
import template from './send.component.html';

@Component({
    selector: 'send',
    template
})

export class SendComponent implements OnInit, OnDestroy{
    pairs: Observable<Pair[]>;
    pairsSub: Subscription;
    userSub: Subscription;
    moneyForm: FormGroup;
    my_user: string;

    constructor(private formBuilder: FormBuilder){
    }

    ngOnInit(){
        this.my_user = Meteor.userId();
        this.moneyForm = this.formBuilder.group({
           amount: ['', Validators.required]
        });
        this.userSub = MeteorObservable.subscribe('user').subscribe(() => {
            this.my_user = Users.findOne({_id: this.my_user}).username;
        });
        this.pairsSub = MeteorObservable.subscribe('pair').subscribe(() => {
            this.pairs = Pairs.find({ $or: [{user1_id: this.my_user}, {user2_id: this.my_user}]}).zone();
        });
    }


    sendMoney(pair: Pair): void {

        if (pair.user1_id != this.my_user)
            Pairs.update({_id: pair._id}, {$inc: {id1_points: parseInt(this.moneyForm.value.amount)}});
        else 
            Pairs.update({_id: pair._id}, {$inc: {id2_points: parseInt(this.moneyForm.value.amount)}});

        this.moneyForm.reset();
    }

    ngOnDestroy(){
        this.pairsSub.unsubscribe();
        this.userSub.unsubscribe();
    }
}