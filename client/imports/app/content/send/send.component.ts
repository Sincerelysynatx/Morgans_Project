import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Accounts } from 'meteor/accounts-base';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Pairs } from '../../../../../both/collections/pair.collection';
import { Pair } from '../../../../../both/models/pair.model';

//noinspection TypeScriptCheckImport
import template from './send.component.html';

@Component({
    selector: 'send',
    template
})

export class SendComponent implements OnInit{
    pairs: Observable<Pair[]>;
    moneyForm: FormGroup;

    constructor(private formBuilder: FormBuilder){
    }

    ngOnInit(){
        this.pairs = Pairs.find({ $or: [{user1_id: Accounts.user().username}, {user2_id: Accounts.user().username}]});
        this.moneyForm = this.formBuilder.group({
           amount: ['', Validators.required]
        });
    }


    sendMoney(pair: Pair): void {

        if (pair.user1_id != Accounts.user().username)
            Pairs.update({_id: pair._id}, {$inc: {id1_points: parseInt(this.moneyForm.value.amount)}});
        else 
            Pairs.update({_id: pair._id}, {$inc: {id2_points: parseInt(this.moneyForm.value.amount)}});

        this.moneyForm.reset();
    }
}