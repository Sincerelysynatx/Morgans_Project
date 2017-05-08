import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { MeteorObservable } from "meteor-rxjs";

import { Pairs } from '../../../../../../both/collections/pair.collection';
import { Pair } from '../../../../../../both/models/pair.model';

//noinspection TypeScriptCheckImport
import template from './pair_menu.component.html';

@Component({
    selector: 'pair_menu',
    template
})

export class PairMenuComponent implements OnInit, OnDestroy{
    pairs: Observable<Pair[]>;
    pairsSub: Subscription;

    constructor(){}

    ngOnInit(){
        this.pairs = Pairs.find().zone();
        this.pairsSub = MeteorObservable.subscribe('pairs').subscribe();
    }

    ngOnDestroy(){
        this.pairsSub.unsubscribe();
    }

}