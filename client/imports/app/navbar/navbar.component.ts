import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Groups } from '../../../../both/collections/group.collection';
import { Group } from '../../../../both/models/group.model';


//noinspection TypeScriptCheckImport
import template from './navbar.component.html';

@Component({
    selector: 'navbar',
    template
})

export class NavBarComponent{
    groups: Observable<Group[]>;

    constructor() {
        this.groups = Groups.find({}).zone();
    }
}