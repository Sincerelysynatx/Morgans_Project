import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { MeteorObservable } from "meteor-rxjs";

import { Pairs } from '../../../../../both/collections/pair.collection';
import { Pair } from '../../../../../both/models/pair.model';

//noinspection TypeScriptCheckImport
import template from './spend.component.html';

@Component({
    selector: 'spend',
    template
})

export class SpendComponent implements OnInit, OnDestroy{
    pairs: Observable<Pair[]>;
    pairsSub: Subscription;

    constructor(){}

    ngOnInit(){
        this.pairsSub = MeteorObservable.subscribe('pair').subscribe(() => {
            this.pairs = Pairs.find().zone();
        });
    }

    ngOnDestroy(){
        this.pairsSub.unsubscribe();
    }

}